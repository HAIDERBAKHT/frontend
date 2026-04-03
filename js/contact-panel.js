// contact-panel.js - right slide-in contact panel

const ContactPanel = {
  init() {
    this.panel = Utils.qs('#contactPanel');
    this.openBtns = Utils.qsa('[data-open-contact], #contactBtn, #contactBtnDetail');
    this.closeBtn = Utils.qs('.panel-close');
    this.form = Utils.qs('#contactForm');
    this.formSuccess = Utils.qs('#formSuccess');

    this.setupControls();
    this.setupForm();
  },

  setupControls() {
    // Open panel
    this.openBtns.forEach(btn => {
      btn.addEventListener('click', () => this.openPanel());
    });

    // Close panel
    this.closeBtn.addEventListener('click', () => this.closePanel());

    // Close on ESC
    Utils.onEscapeKey(() => {
      if (this.panel.classList.contains('active')) {
        this.closePanel();
      }
    });
  },

  openPanel() {
    this.panel.classList.add('active');
    Utils.lockScroll();
    this.resetForm();
  },

  closePanel() {
    this.panel.classList.remove('active');
    Utils.unlockScroll();
  },

  setupForm() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleSubmit();
    });

    // Real-time validation
    const inputs = Utils.qsa('input[required], select[required]', this.form);
    inputs.forEach(input => {
      input.addEventListener('blur', () => this.validateField(input));
      input.addEventListener('input', () => {
        if (input.classList.contains('error')) {
          this.validateField(input);
        }
      });
    });
  },

  validateField(field) {
    const errorMsg = field.parentElement.querySelector('.error-msg');
    let isValid = true;
    let message = '';

    if (!field.value.trim()) {
      isValid = false;
      message = 'This field is required.';
    } else if (field.type === 'email') {
      if (!Utils.validateEmail(field.value)) {
        isValid = false;
        message = 'Please enter a valid email address.';
      }
    } else if (field.type === 'tel') {
      if (!Utils.validatePhone(field.value)) {
        isValid = false;
        message = 'Please enter a valid phone number.';
      }
    } else if (field.tagName === 'SELECT' && field.value === '') {
      isValid = false;
      message = 'Please select an option.';
    }

    if (isValid) {
      field.classList.remove('error');
      errorMsg.textContent = '';
    } else {
      field.classList.add('error');
      errorMsg.textContent = message;
    }

    return isValid;
  },

  async handleSubmit() {
    // Validate all required fields
    const requiredFields = Utils.qsa('input[required], select[required]', this.form);
    let allValid = true;

    requiredFields.forEach(field => {
      if (!this.validateField(field)) {
        allValid = false;
      }
    });

    if (!allValid) {
      return;
    }

    const submitBtn = this.form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn ? submitBtn.textContent : '';

    try {
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting...';
      }

      const payload = {
        firstName: this.form.firstName.value.trim(),
        lastName: this.form.lastName.value.trim(),
        email: this.form.email.value.trim(),
        phone: this.form.phone.value.trim(),
        company: this.form.company.value.trim(),
        industry: this.form.industry.value,
        requirement: this.form.requirement.value,
        message: this.form.message.value.trim()
      };

      const response = await API.submitContact(payload);

      if (response && response.success) {
        this.showSuccess();
        return;
      }

      window.alert((response && response.message) || 'Unable to submit your request right now. Please try again.');
    } catch (error) {
      console.error('Contact submission failed:', error);
      window.alert('Unable to submit your request right now. Please try again.');
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
      }
    }
  },

  showSuccess() {
    this.form.classList.add('hidden');
    this.formSuccess.classList.add('show');

    // Reset after 3 seconds
    setTimeout(() => {
      this.closePanel();
      setTimeout(() => {
        this.resetForm();
      }, 300);
    }, 3000);
  },

  resetForm() {
    this.form.reset();
    this.form.classList.remove('hidden');
    this.formSuccess.classList.remove('show');

    // Clear all errors
    const inputs = Utils.qsa('input, select', this.form);
    inputs.forEach(input => {
      input.classList.remove('error');
      const errorMsg = input.parentElement.querySelector('.error-msg');
      if (errorMsg) {
        errorMsg.textContent = '';
      }
    });
  }
};

// Export
if (typeof window !== 'undefined') {
  window.ContactPanel = ContactPanel;
}
