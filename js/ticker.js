// ticker.js - advisory ticker under hero

const Ticker = {
  init() {
    this.tickerSection = Utils.qs('.ticker-section');
    if (!this.tickerSection) return;

    this.tickerLocation = Utils.qs('#tickerLocation');
    this.tickerText = Utils.qs('.ticker-text');
    this.tickerProgress = Utils.qs('.ticker-progress');
    this.prevBtn = Utils.qs('.ticker-prev');
    this.nextBtn = Utils.qs('.ticker-next');

    this.advisories = [
      {
        location: 'Pakistan',
        message: 'Karachi: Heightened security posture recommended for diplomatic quarter and business districts through end of March.'
      },
      {
        location: 'Pakistan',
        message: 'Islamabad: Exercise caution near government buildings. Increased checkpoints active in Blue Area and Diplomatic Enclave.'
      },
      {
        location: 'UK',
        message: 'London: Planned transport strikes 12-14 March will affect Tube and rail services. Plan alternative routes.'
      },
      {
        location: 'UK',
        message: 'Manchester: Enhanced security measures for international conference 18-20 March. Expect delays near city centre.'
      },
      {
        location: 'Pakistan',
        message: 'Lahore: Avoid large gatherings near Mall Road. Political demonstrations possible during evening hours.'
      },
      {
        location: 'UK',
        message: 'Edinburgh: Road closures for state visit 25-27 March. Review secure mobility plans for affected areas.'
      }
    ];

    this.currentIndex = 0;
    this.duration = 3000; // 3 seconds
    this.intervalId = null;
    this.progressIntervalId = null;

    this.setupControls();
    this.showAdvisory(0);
    this.startAutoRotate();
  },

  setupControls() {
    this.prevBtn.addEventListener('click', () => this.showPrevious());
    this.nextBtn.addEventListener('click', () => this.showNext());
  },

  showAdvisory(index) {
    if (index < 0) index = this.advisories.length - 1;
    if (index >= this.advisories.length) index = 0;

    this.currentIndex = index;
    const advisory = this.advisories[index];

    this.tickerLocation.textContent = advisory.location;
    this.tickerText.textContent = advisory.message;

    this.animateProgress();
  },

  showNext() {
    this.stopAutoRotate();
    this.showAdvisory(this.currentIndex + 1);
    this.startAutoRotate();
  },

  showPrevious() {
    this.stopAutoRotate();
    this.showAdvisory(this.currentIndex - 1);
    this.startAutoRotate();
  },

  animateProgress() {
    // Reset progress
    this.tickerProgress.style.transition = 'none';
    this.tickerProgress.style.width = '0%';

    // Force reflow
    this.tickerProgress.offsetHeight;

    // Animate
    setTimeout(() => {
      this.tickerProgress.style.transition = `width ${this.duration}ms linear`;
      this.tickerProgress.style.width = '100%';
    }, 10);
  },

  startAutoRotate() {
    this.intervalId = setInterval(() => {
      this.showAdvisory(this.currentIndex + 1);
    }, this.duration);
  },

  stopAutoRotate() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
};

// Export
if (typeof window !== 'undefined') {
  window.Ticker = Ticker;
}
