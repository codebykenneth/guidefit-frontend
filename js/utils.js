// GuideFit Pro - Utils Module
const Utils = {
  // Validation
  validate: {
    username(val) {
      if (!val || val.length < VALIDATION.username.min) return `Username must be at least ${VALIDATION.username.min} characters`;
      if (val.length > VALIDATION.username.max) return `Username max ${VALIDATION.username.max} characters`;
      if (!VALIDATION.username.pattern.test(val)) return 'Only letters, numbers, underscores';
      return null;
    },
    password(val) {
      if (!val || val.length < VALIDATION.password.min) return `Password must be at least ${VALIDATION.password.min} characters`;
      return null;
    },
    email(val) {
      if (!val || !VALIDATION.email.pattern.test(val)) return 'Enter a valid email address';
      return null;
    },
    phone(val) {
      if (val && !VALIDATION.phone.pattern.test(val)) return 'Enter a valid phone number';
      return null;
    },
    name(val) {
      if (!val || val.length < VALIDATION.name.min) return `Name must be at least ${VALIDATION.name.min} characters`;
      return null;
    },
    confirmPassword(pass, confirm) {
      if (pass !== confirm) return 'Passwords do not match';
      return null;
    }
  },

  // DOM helpers
  $(selector) { return document.querySelector(selector); },
  $$(selector) { return document.querySelectorAll(selector); },

  show(el) {
    const elem = typeof el === 'string' ? this.$(el) : el;
    if (elem) elem.classList.remove('hidden');
  },

  hide(el) {
    const elem = typeof el === 'string' ? this.$(el) : el;
    if (elem) elem.classList.add('hidden');
  },

  toggle(el, show) {
    if (show) this.show(el); else this.hide(el);
  },

  setError(fieldId, msg) {
    const field = document.getElementById(fieldId);
    const errEl = document.getElementById(fieldId + '-error');
    if (field) field.classList.toggle('error', !!msg);
    if (errEl) { errEl.textContent = msg || ''; errEl.classList.toggle('visible', !!msg); }
  },

  clearErrors(formEl) {
    if (!formEl) return;
    formEl.querySelectorAll('.field-error').forEach(e => { e.textContent = ''; e.classList.remove('visible'); });
    formEl.querySelectorAll('.error').forEach(e => e.classList.remove('error'));
  },

  // Format helpers
  formatDate(iso) {
    if (!iso) return '–';
    return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  },

  formatTime(iso) {
    if (!iso) return '–';
    return new Date(iso).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  },

  capitalize(str) {
    return str ? str.charAt(0).toUpperCase() + str.slice(1) : '';
  },

  // Animations
  animate(el, className, duration = 400) {
    return new Promise(resolve => {
      const elem = typeof el === 'string' ? this.$(el) : el;
      if (!elem) return resolve();
      elem.classList.add(className);
      setTimeout(() => { elem.classList.remove(className); resolve(); }, duration);
    });
  },

  // Delay
  sleep(ms) { return new Promise(r => setTimeout(r, ms)); }
};

// Toast Notification System
const Toast = {
  container: null,

  init() {
    this.container = document.getElementById('toast-container');
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.id = 'toast-container';
      document.body.appendChild(this.container);
    }
  },

  show(message, type = 'info', duration = 3500) {
    if (!this.container) this.init();
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    const icons = { success: '✓', error: '✕', warning: '⚠', info: 'ℹ' };
    toast.innerHTML = `<span class="toast-icon">${icons[type] || icons.info}</span><span class="toast-msg">${message}</span>`;
    this.container.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('toast-show'));
    setTimeout(() => {
      toast.classList.remove('toast-show');
      toast.classList.add('toast-hide');
      setTimeout(() => toast.remove(), 400);
    }, duration);
    return toast;
  },

  success(msg, dur) { return this.show(msg, 'success', dur); },
  error(msg, dur) { return this.show(msg, 'error', dur || 4500); },
  warning(msg, dur) { return this.show(msg, 'warning', dur); },
  info(msg, dur) { return this.show(msg, 'info', dur); }
};
