// api.js - static-site friendly helpers (no backend required)

const EMAILJS_CONFIG = {
  publicKey: 'YOUR_EMAILJS_PUBLIC_KEY',
  serviceId: 'YOUR_EMAILJS_SERVICE_ID',
  templateId: 'YOUR_EMAILJS_TEMPLATE_ID'
};

const EmailService = {
  scriptUrl: 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js',
  initialized: false,
  loadingPromise: null,

  getConfig() {
    const runtimeConfig = (typeof window !== 'undefined' && window.SECURIDE_EMAILJS_CONFIG) || {};
    return {
      publicKey: runtimeConfig.publicKey || EMAILJS_CONFIG.publicKey,
      serviceId: runtimeConfig.serviceId || EMAILJS_CONFIG.serviceId,
      templateId: runtimeConfig.templateId || EMAILJS_CONFIG.templateId
    };
  },

  hasValidConfig(config) {
    return (
      config.publicKey &&
      config.serviceId &&
      config.templateId &&
      !config.publicKey.startsWith('YOUR_') &&
      !config.serviceId.startsWith('YOUR_') &&
      !config.templateId.startsWith('YOUR_')
    );
  },

  ensureScriptLoaded() {
    if (typeof window === 'undefined') {
      return Promise.reject(new Error('EmailJS requires a browser environment.'));
    }

    if (window.emailjs) {
      return Promise.resolve(window.emailjs);
    }

    if (this.loadingPromise) {
      return this.loadingPromise;
    }

    this.loadingPromise = new Promise((resolve, reject) => {
      const existingScript = document.querySelector(`script[src="${this.scriptUrl}"]`);
      if (existingScript) {
        existingScript.addEventListener('load', () => resolve(window.emailjs));
        existingScript.addEventListener('error', () => reject(new Error('Failed to load EmailJS script.')));
        return;
      }

      const script = document.createElement('script');
      script.src = this.scriptUrl;
      script.async = true;
      script.onload = () => resolve(window.emailjs);
      script.onerror = () => reject(new Error('Failed to load EmailJS script.'));
      document.head.appendChild(script);
    });

    return this.loadingPromise;
  },

  async init() {
    if (this.initialized) {
      return;
    }

    const config = this.getConfig();
    if (!this.hasValidConfig(config)) {
      throw new Error('EmailJS is not configured. Set publicKey, serviceId, and templateId in js/api.js or window.SECURIDE_EMAILJS_CONFIG.');
    }

    const emailjs = await this.ensureScriptLoaded();
    emailjs.init({ publicKey: config.publicKey });
    this.initialized = true;
  },

  async sendContact(formData) {
    const config = this.getConfig();

    try {
      await this.init();

      await window.emailjs.send(config.serviceId, config.templateId, {
        ...formData,
        submittedAt: new Date().toISOString()
      });

      return {
        success: true,
        message: 'Message sent successfully.'
      };
    } catch (error) {
      console.error('EmailJS submission failed:', error);
      return {
        success: false,
        message: error && error.message ? error.message : 'Unable to submit your request right now. Please try again.'
      };
    }
  }
};

const API = {
  async submitContact(formData) {
    return EmailService.sendContact(formData);
  },

  async getAdvisories() {
    return {
      success: true,
      data: []
    };
  }
};

// Export
if (typeof window !== 'undefined') {
  window.API = API;
  window.EmailService = EmailService;
}
