// search.js - search overlay

const Search = {
  init() {
    this.searchBtn = Utils.qs('#searchBtn');
    this.searchOverlay = Utils.qs('#searchOverlay');
    this.searchClose = Utils.qs('.search-close');
    this.searchInput = Utils.qs('#searchInput');
    this.searchLinks = Utils.qsa('#searchLinks li');

    this.setupControls();
    this.setupSearch();
  },

  setupControls() {
    // Open search
    this.searchBtn.addEventListener('click', () => this.openSearch());

    // Close search
    this.searchClose.addEventListener('click', () => this.closeSearch());

    // Close on ESC
    Utils.onEscapeKey(() => {
      if (this.searchOverlay.classList.contains('active')) {
        this.closeSearch();
      }
    });

    // Close on backdrop click
    this.searchOverlay.addEventListener('click', (e) => {
      if (e.target === this.searchOverlay) {
        this.closeSearch();
      }
    });
  },

  openSearch() {
    this.searchOverlay.classList.add('active');
    Utils.lockScroll();
    setTimeout(() => {
      this.searchInput.focus();
    }, 100);
  },

  closeSearch() {
    this.searchOverlay.classList.remove('active');
    Utils.unlockScroll();
    this.searchInput.value = '';
    this.showAllLinks();
  },

  setupSearch() {
    const filterLinks = Utils.debounce(() => {
      const query = this.searchInput.value.toLowerCase().trim();

      if (query === '') {
        this.showAllLinks();
        return;
      }

      this.searchLinks.forEach(li => {
        const text = li.textContent.toLowerCase();
        if (text.includes(query)) {
          li.classList.remove('hidden');
        } else {
          li.classList.add('hidden');
        }
      });
    }, 200);

    this.searchInput.addEventListener('input', filterLinks);
  },

  showAllLinks() {
    this.searchLinks.forEach(li => li.classList.remove('hidden'));
  }
};

// Export
if (typeof window !== 'undefined') {
  window.Search = Search;
}
