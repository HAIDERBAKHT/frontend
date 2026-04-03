// scroll.js - header hide/show on scroll

const ScrollHandler = {
  init() {
    this.header = document.querySelector('.site-header');
    if (!this.header) return;

    this.previousScrollY = 0;
    this.minScrollDistance = 50;

    window.addEventListener('scroll', () => this.handleScroll(), { passive: true });
  },

  handleScroll() {
    const currentScrollY = window.scrollY;
    const diff = currentScrollY - this.previousScrollY;

    // Only hide after scrolling past hero section
    if (currentScrollY > 100) {
      if (diff > this.minScrollDistance) {
        // Scrolling down - hide header
        this.header.classList.add('header-hidden');
      } else if (diff < -this.minScrollDistance) {
        // Scrolling up - show header
        this.header.classList.remove('header-hidden');
      }
    } else {
      // Always show when at top
      this.header.classList.remove('header-hidden');
    }

    this.previousScrollY = currentScrollY;
  }
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => ScrollHandler.init());
} else {
  ScrollHandler.init();
}
