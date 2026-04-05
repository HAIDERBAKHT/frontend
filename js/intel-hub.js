(function () {
  const CONTENT = {
    insights: {
      'uk-mobility-advisory-2026': {
        kicker: 'FEATURED INSIGHT',
        title: 'UK Mobility Advisory 2026',
        coverSrc: '../../assets/images/slide-01.webp',
        coverAlt: 'UK mobility advisory map and risk route visuals',
        paragraphOne:
          'Traffic disruptions, protest concentration windows, and temporary venue controls are expected in central London over the next 14 days. Executive movement should use tiered route planning with pre-cleared alternates and staggered departure windows.',
        inlineSrc: '../../assets/images/intelligence-alerts-bg.webp',
        inlineAlt: 'Control-room briefing display',
        paragraphTwo:
          'This advisory merges open-source monitoring with field liaison reports. Priority mitigation includes driver brief refresh, secure rendezvous points, and dedicated comms escalation protocol for route block events.'
      },
      'pakistan-executive-transit-brief': {
        kicker: 'FEATURED INSIGHT',
        title: 'Pakistan Executive Transit Brief',
        coverSrc: '../../assets/images/travel-bg.webp',
        coverAlt: 'Executive transit planning map and convoy route data',
        paragraphOne:
          'Major-city movements in Pakistan require tight timing windows, dynamic reroute options, and route integrity checks due to shifting congestion and protest triggers. Transit teams should operate with layered primary and secondary corridors.',
        inlineSrc: '../../assets/images/slide-02.webp',
        inlineAlt: 'Operational mobility coordination display',
        paragraphTwo:
          'SECURIDE 24 recommends pre-movement route sweeps, controlled staging points, and active liaison with trusted local partners to keep principals moving safely without schedule degradation.'
      },
      'regional-election-security-outlook': {
        kicker: 'FEATURED INSIGHT',
        title: 'Regional Election Security Outlook',
        coverSrc: '../../assets/images/slide-03.webp',
        coverAlt: 'Election period risk heatmap and advisory layer',
        paragraphOne:
          'Election periods create concentrated uncertainty around transport nodes, civic centers, and media zones. Corporate and diplomatic teams should expect volatility spikes around announcement windows and campaign gatherings.',
        inlineSrc: '../../assets/images/global-map.webp',
        inlineAlt: 'Regional risk monitoring and election impact mapping',
        paragraphTwo:
          'Practical controls include short-horizon intelligence refresh cycles, restricted movement during peak crowding intervals, and clear escalation pathways between field teams and leadership.'
      },
      'critical-infrastructure-watch': {
        kicker: 'FEATURED INSIGHT',
        title: 'Critical Infrastructure Watch',
        coverSrc: '../../assets/images/risk-management-bg.webp',
        coverAlt: 'Infrastructure exposure dashboard and continuity planning',
        paragraphOne:
          'Disruptions affecting airports, arterial routes, utilities, or telecom nodes can rapidly cascade into mobility and operational risk. Monitoring priority infrastructure enables earlier continuity decisions.',
        inlineSrc: '../../assets/images/intelligence-monitoring-bg.webp',
        inlineAlt: 'Infrastructure monitoring interface and alert feed',
        paragraphTwo:
          'Teams should align travel windows, venue access, and command communication plans to infrastructure status updates so response actions stay proportional and timely.'
      },
      'cross-border-team-protection': {
        kicker: 'FEATURED INSIGHT',
        title: 'Cross-Border Team Protection Playbook',
        coverSrc: '../../assets/images/slide-04.webp',
        coverAlt: 'Cross-border movement planning for distributed teams',
        paragraphOne:
          'Cross-border assignments demand synchronized documentation readiness, journey controls, and local support coordination. Protection posture should flex by jurisdiction and mission profile.',
        inlineSrc: '../../assets/images/slider-bg.webp',
        inlineAlt: 'Operational coordination room for cross-border deployment',
        paragraphTwo:
          'SECURIDE 24 recommends integrating immigration checkpoints, safe transfer nodes, and communication redundancies into one movement plan to reduce uncertainty during transitions.'
      },
      'executive-event-risk-brief': {
        kicker: 'FEATURED INSIGHT',
        title: 'Executive Event Risk Brief',
        coverSrc: '../../assets/images/intelligence-alerts-bg.webp',
        coverAlt: 'Executive event risk briefing and venue map',
        paragraphOne:
          'High-visibility events can compress risk into short periods where route reliability, access control, and crowd dynamics change quickly. Event-specific intelligence should drive movement and protection decisions.',
        inlineSrc: '../../assets/images/slide-01.webp',
        inlineAlt: 'Executive protection command briefing',
        paragraphTwo:
          'Recommended controls include timed arrivals, layered perimeter checks, and predefined withdrawal triggers to preserve principal safety while maintaining event objectives.'
      }
    },
    'case-studies': {
      'summit-route-hardening': {
        kicker: 'FEATURED CASE STUDY',
        title: 'Case Study: Summit Route Hardening',
        coverSrc: '../../assets/images/slide-03.webp',
        coverAlt: 'Case study route hardening visuals',
        paragraphOne:
          'This engagement secured movement for a high-profile delegation through multi-venue schedules under elevated disruption risk. Planning included route segmentation, on-ground sweep coordination, and layered fallback options.',
        inlineSrc: '../../assets/images/intelligence-alerts-bg.webp',
        inlineAlt: 'Control-room briefing display',
        paragraphTwo:
          'Execution outcomes included zero movement delays, no exposure incidents, and successful venue transitions under dynamic restrictions. The case validated rapid reroute protocol and command-chain escalation discipline.'
      },
      'incident-evacuation-drill': {
        kicker: 'FEATURED CASE STUDY',
        title: 'Case Study: Incident Evacuation Drill',
        coverSrc: '../../assets/images/risk-assurance-bg.webp',
        coverAlt: 'Evacuation drill coordination scenario',
        paragraphOne:
          'SECURIDE 24 supported a full-scale evacuation rehearsal for a distributed corporate site with mixed local and expatriate personnel. The objective was to reduce decision latency during fast escalation.',
        inlineSrc: '../../assets/images/slide-02.webp',
        inlineAlt: 'Command post rehearsal and incident communications',
        paragraphTwo:
          'The drill achieved role clarity across command layers, improved movement timing by 23%, and produced a refined incident action checklist for real-world activation.'
      },
      'executive-convoy-reroute': {
        kicker: 'FEATURED CASE STUDY',
        title: 'Case Study: Executive Convoy Reroute',
        coverSrc: '../../assets/images/travel-bg.webp',
        coverAlt: 'Executive convoy route reroute operation',
        paragraphOne:
          'During a high-exposure transit window, the primary route became non-viable due to spontaneous disruption. The team triggered contingency routing while maintaining principal schedule requirements.',
        inlineSrc: '../../assets/images/global-map.webp',
        inlineAlt: 'Dynamic route reassessment and convoy tracking',
        paragraphTwo:
          'The operation demonstrated effective reroute decision-making under pressure, preserving movement continuity and principal safety without public disruption.'
      },
      'delegation-venue-security': {
        kicker: 'FEATURED CASE STUDY',
        title: 'Case Study: Delegation Venue Security',
        coverSrc: '../../assets/images/slide-04.webp',
        coverAlt: 'Delegation venue security coordination',
        paragraphOne:
          'A diplomatic delegation required secure movement across multiple event venues with constrained timelines. SECURIDE 24 coordinated access control, perimeter posture, and advance team checks.',
        inlineSrc: '../../assets/images/intelligence-monitoring-bg.webp',
        inlineAlt: 'Venue security monitoring and command oversight',
        paragraphTwo:
          'All transitions were completed on schedule, with no control breaches and consistent communication between local authorities and protective teams.'
      },
      'cross-border-team-protection': {
        kicker: 'FEATURED CASE STUDY',
        title: 'Case Study: Cross-Border Team Protection',
        coverSrc: '../../assets/images/risk-management-bg.webp',
        coverAlt: 'Cross-border team protection coordination',
        paragraphOne:
          'For a regional project mission, personnel moved through multiple jurisdictions with uneven threat profiles. SECURIDE 24 built a unified movement and protection framework for the full itinerary.',
        inlineSrc: '../../assets/images/slider-bg.webp',
        inlineAlt: 'Cross-border command and response coordination',
        paragraphTwo:
          'The assignment finished without incidents, improved inter-team coordination, and established a repeatable model for future multi-country deployments.'
      },
      'crisis-command-handover': {
        kicker: 'FEATURED CASE STUDY',
        title: 'Case Study: Crisis Command Handover',
        coverSrc: '../../assets/images/intelligence-alerts-bg.webp',
        coverAlt: 'Crisis command handover between teams',
        paragraphOne:
          'A client required immediate command transition during an unfolding incident while maintaining operational continuity. The objective was to avoid control gaps and preserve response tempo.',
        inlineSrc: '../../assets/images/slide-01.webp',
        inlineAlt: 'Leadership handover briefing and action tracking',
        paragraphTwo:
          'Structured handover protocols enabled seamless authority transfer, stabilized field execution, and reduced duplicate tasking during the critical response window.'
      }
    }
  };

  const AUTHORS = {
    insights: {
      'uk-mobility-advisory-2026': {
        name: 'R. Khan',
        role: 'Senior Intelligence Analyst',
        bio: '12 years in regional threat intelligence and executive mobility planning.'
      },
      'pakistan-executive-transit-brief': {
        name: 'S. Haider',
        role: 'Mobility Risk Consultant',
        bio: 'Specialist in executive transit planning and route assurance across high-variance urban corridors.'
      },
      'regional-election-security-outlook': {
        name: 'A. Rehman',
        role: 'Geopolitical Risk Advisor',
        bio: 'Focuses on election-cycle volatility, civic disruption forecasting, and strategic decision support.'
      },
      'critical-infrastructure-watch': {
        name: 'M. Aziz',
        role: 'Infrastructure Intelligence Lead',
        bio: 'Tracks infrastructure-linked exposure patterns and continuity implications for mission-critical operations.'
      },
      'cross-border-team-protection': {
        name: 'L. Tariq',
        role: 'Regional Security Planner',
        bio: 'Designs cross-border security frameworks for multi-country team deployments and mission movements.'
      },
      'executive-event-risk-brief': {
        name: 'N. Iqbal',
        role: 'Protective Operations Analyst',
        bio: 'Advises on event-centric risk posture, perimeter control planning, and principal movement assurance.'
      }
    },
    'case-studies': {
      'summit-route-hardening': {
        name: 'R. Khan',
        role: 'Senior Intelligence Analyst',
        bio: 'Leads integrated route hardening and command coordination studies for high-profile delegations.'
      },
      'incident-evacuation-drill': {
        name: 'F. Malik',
        role: 'Crisis Response Coordinator',
        bio: 'Runs evacuation preparedness programs and command rehearsal frameworks for complex operating sites.'
      },
      'executive-convoy-reroute': {
        name: 'T. Abbas',
        role: 'Protective Mobility Lead',
        bio: 'Experienced in convoy contingencies, reroute decision chains, and journey continuity under disruption.'
      },
      'delegation-venue-security': {
        name: 'H. Saeed',
        role: 'Venue Security Specialist',
        bio: 'Coordinates multi-site delegation security, access discipline, and liaison workflows with local partners.'
      },
      'cross-border-team-protection': {
        name: 'L. Tariq',
        role: 'Regional Security Planner',
        bio: 'Directs cross-border movement security planning for teams operating across varied threat landscapes.'
      },
      'crisis-command-handover': {
        name: 'K. Ahmed',
        role: 'Incident Command Advisor',
        bio: 'Supports crisis command transitions to maintain operational tempo, role clarity, and response continuity.'
      }
    }
  };

  function setActiveButton(buttons, activeButton) {
    buttons.forEach((button) => {
      const isActive = button === activeButton;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  function updateContent(content, author) {
    const kicker = document.getElementById('intelKicker');
    const title = document.getElementById('intelTitle');
    const cover = document.getElementById('intelCover');
    const paragraphOne = document.getElementById('intelParagraphOne');
    const inlinePhoto = document.getElementById('intelInlinePhoto');
    const paragraphTwo = document.getElementById('intelParagraphTwo');
    const authorName = document.getElementById('intelAuthorName');
    const authorRole = document.getElementById('intelAuthorRole');
    const authorBio = document.getElementById('intelAuthorBio');

    if (!kicker || !title || !cover || !paragraphOne || !inlinePhoto || !paragraphTwo) {
      return;
    }

    kicker.textContent = content.kicker;
    title.textContent = content.title;
    cover.src = content.coverSrc;
    cover.alt = content.coverAlt;
    paragraphOne.textContent = content.paragraphOne;
    inlinePhoto.src = content.inlineSrc;
    inlinePhoto.alt = content.inlineAlt;
    paragraphTwo.textContent = content.paragraphTwo;

    if (author && authorName && authorRole && authorBio) {
      authorName.textContent = author.name;
      authorRole.textContent = author.role;
      authorBio.textContent = author.bio;
    }
  }

  function applyContentByKey(pageType, contentKey, buttons, pageContent, pageAuthors, shouldSyncHash) {
    const content = contentKey ? pageContent[contentKey] : null;
    const author = contentKey && pageAuthors ? pageAuthors[contentKey] : null;
    const activeButton = buttons.find((button) => button.getAttribute('data-intel-key') === contentKey) || null;

    if (!content || !activeButton) {
      return false;
    }

    setActiveButton(buttons, activeButton);
    updateContent(content, author);

    if (shouldSyncHash) {
      const nextHash = `#${contentKey}`;
      if (window.location.hash !== nextHash) {
        window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}${nextHash}`);
      }
    }

    return true;
  }

  document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('[data-intel-page]');
    if (!section) {
      return;
    }

    const pageType = section.getAttribute('data-intel-page');
    const pageContent = CONTENT[pageType];
    const pageAuthors = AUTHORS[pageType];
    if (!pageContent) {
      return;
    }

    const buttons = Array.from(section.querySelectorAll('.intel-sidebar-left .intel-item[data-intel-key]'));
    if (!buttons.length) {
      return;
    }

    const shouldSyncHash = pageType === 'case-studies';
    const defaultKey = buttons[0].getAttribute('data-intel-key');
    const hashKey = window.location.hash ? decodeURIComponent(window.location.hash.slice(1)) : '';
    const initialKey = hashKey && pageContent[hashKey] ? hashKey : defaultKey;

    if (initialKey) {
      applyContentByKey(pageType, initialKey, buttons, pageContent, pageAuthors, false);

      if (hashKey && pageType === 'case-studies') {
        section.scrollIntoView({ block: 'start' });
      }
    }

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const contentKey = button.getAttribute('data-intel-key');
        applyContentByKey(pageType, contentKey, buttons, pageContent, pageAuthors, shouldSyncHash);
      });
    });

    window.addEventListener('hashchange', () => {
      const nextKey = window.location.hash ? decodeURIComponent(window.location.hash.slice(1)) : '';
      if (nextKey && pageContent[nextKey]) {
        applyContentByKey(pageType, nextKey, buttons, pageContent, pageAuthors, false);
      }
    });
  });
})();
