// carousel.js - featured slider

const Carousel = {
  init() {
    this.sliderSection = Utils.qs('.featured-slider-section');
    if (!this.sliderSection) return;

    this.slides = Utils.qsa('.slide');
    this.images = Utils.qsa('.slider-image');
    this.prevBtns = Utils.qsa('.slide-nav-prev');
    this.nextBtns = Utils.qsa('.slide-nav-next');

    this.currentSlide = 0;
    this.totalSlides = this.slides.length;

    this.setupControls();
    this.setupKeyboard();
    this.showSlide(0);
  },

  setupControls() {
    this.prevBtns.forEach((btn) => {
      btn.addEventListener('click', () => this.showPrevious());
    });
    this.nextBtns.forEach((btn) => {
      btn.addEventListener('click', () => this.showNext());
    });
  },

  setupKeyboard() {
    document.addEventListener('keydown', (e) => {
      // Only handle if slider section is visible
      const rect = this.sliderSection.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        if (e.key === 'ArrowLeft') {
          this.showPrevious();
        } else if (e.key === 'ArrowRight') {
          this.showNext();
        }
      }
    });
  },

  showSlide(index) {
    if (index < 0) index = this.totalSlides - 1;
    if (index >= this.totalSlides) index = 0;

    this.currentSlide = index;

    // Update slides
    this.slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    // Update images
    this.images.forEach((img, i) => {
      if (i === index) {
        img.classList.add('active');
      } else {
        img.classList.remove('active');
      }
    });
  },

  showNext() {
    this.showSlide(this.currentSlide + 1);
  },

  showPrevious() {
    this.showSlide(this.currentSlide - 1);
  }
};

// Export
if (typeof window !== 'undefined') {
  window.Carousel = Carousel;
}
