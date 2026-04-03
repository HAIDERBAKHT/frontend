// utils.js - helper utilities

const Utils = {
  // DOM helpers
  qs: (selector, parent = document) => parent.querySelector(selector),
  qsa: (selector, parent = document) => Array.from(parent.querySelectorAll(selector)),

  // Body scroll lock
  lockScroll() {
    document.body.classList.add('scroll-locked');
  },

  unlockScroll() {
    document.body.classList.remove('scroll-locked');
  },

  // Debounce function
  debounce(func, wait = 250) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // Throttle function
  throttle(func, limit = 250) {
    let inThrottle;
    return function executedFunction(...args) {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  // Close on ESC key
  onEscapeKey(callback) {
    const handler = (e) => {
      if (e.key === 'Escape') {
        callback();
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  },

  // Close on backdrop click
  onBackdropClick(element, callback) {
    const handler = (e) => {
      if (e.target === element) {
        callback();
      }
    };
    element.addEventListener('click', handler);
    return () => element.removeEventListener('click', handler);
  },

  // Simple form validation
  validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  },

  validatePhone(phone) {
    return /^[\d\s\-\+\(\)]+$/.test(phone) && phone.replace(/\D/g, '').length >= 10;
  },

  // Show/hide elements
  show(element) {
    element.style.display = 'block';
  },

  hide(element) {
    element.style.display = 'none';
  },

  toggle(element) {
    element.style.display = element.style.display === 'none' ? 'block' : 'none';
  }
};

// Export for use in other modules
if (typeof window !== 'undefined') {
  window.Utils = Utils;
}
