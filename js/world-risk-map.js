/**
 * World Risk Map - D3.js + topojson choropleth
 * Colors countries by SECURIDE 24 risk tier; hover shows tooltip.
 */

// ISO 3166-1 numeric to alpha-2 mapping (connects world-atlas to COUNTRY_DATA)
const ISO_N = {
  4:'AF',8:'AL',12:'DZ',24:'AO',32:'AR',36:'AU',40:'AT',50:'BD',56:'BE',
  64:'BT',68:'BO',76:'BR',100:'BG',104:'MM',108:'BI',116:'KH',120:'CM',
  124:'CA',140:'CF',144:'LK',152:'CL',156:'CN',170:'CO',178:'CG',180:'CD',
  188:'CR',191:'HR',192:'CU',196:'CY',203:'CZ',204:'BJ',208:'DK',214:'DO',
  218:'EC',222:'SV',231:'ET',246:'FI',250:'FR',266:'GA',276:'DE',
  288:'GH',300:'GR',320:'GT',324:'GN',332:'HT',340:'HN',348:'HU',356:'IN',
  360:'ID',364:'IR',368:'IQ',372:'IE',376:'IL',380:'IT',388:'JM',392:'JP',
  398:'KZ',400:'JO',404:'KE',408:'KP',410:'KR',414:'KW',418:'LA',422:'LB',
  430:'LR',434:'LY',450:'MG',454:'MW',458:'MY',466:'ML',478:'MR',484:'MX',
  496:'MN',504:'MA',508:'MZ',516:'NA',524:'NP',528:'NL',554:'NZ',558:'NI',
  562:'NE',566:'NG',578:'NO',586:'PK',591:'PA',598:'PG',604:'PE',608:'PH',
  616:'PL',620:'PT',634:'QA',642:'RO',643:'RU',646:'RW',682:'SA',686:'SN',
  694:'SL',706:'SO',710:'ZA',716:'ZW',724:'ES',728:'SS',729:'SD',752:'SE',
  756:'CH',760:'SY',762:'TJ',764:'TH',768:'TG',780:'TT',784:'AE',788:'TN',
  792:'TR',800:'UG',804:'UA',818:'EG',826:'GB',834:'TZ',840:'US',858:'UY',
  860:'UZ',862:'VE',887:'YE',894:'ZM',268:'GE',702:'SG',703:'SK',705:'SI',
};

// Display names for all countries in topojson
const ISO_NAMES = {
  4:'Afghanistan',8:'Albania',12:'Algeria',24:'Angola',32:'Argentina',
  36:'Australia',40:'Austria',50:'Bangladesh',56:'Belgium',64:'Bhutan',
  68:'Bolivia',76:'Brazil',100:'Bulgaria',104:'Myanmar',108:'Burundi',
  116:'Cambodia',120:'Cameroon',124:'Canada',140:'Central African Republic',
  144:'Sri Lanka',152:'Chile',156:'China',170:'Colombia',178:'Rep. of Congo',
  180:'DR Congo',188:'Costa Rica',191:'Croatia',192:'Cuba',196:'Cyprus',
  203:'Czech Republic',204:'Benin',208:'Denmark',214:'Dominican Republic',
  218:'Ecuador',222:'El Salvador',231:'Ethiopia',246:'Finland',250:'France',
  266:'Gabon',276:'Germany',288:'Ghana',300:'Greece',320:'Guatemala',
  324:'Guinea',332:'Haiti',340:'Honduras',348:'Hungary',356:'India',
  360:'Indonesia',364:'Iran',368:'Iraq',372:'Ireland',376:'Israel',
  380:'Italy',388:'Jamaica',392:'Japan',398:'Kazakhstan',400:'Jordan',
  404:'Kenya',408:'North Korea',410:'South Korea',414:'Kuwait',418:'Laos',
  422:'Lebanon',430:'Liberia',434:'Libya',450:'Madagascar',454:'Malawi',
  458:'Malaysia',466:'Mali',478:'Mauritania',484:'Mexico',496:'Mongolia',
  504:'Morocco',508:'Mozambique',516:'Namibia',524:'Nepal',528:'Netherlands',
  554:'New Zealand',558:'Nicaragua',562:'Niger',566:'Nigeria',578:'Norway',
  586:'Pakistan',591:'Panama',598:'Papua New Guinea',604:'Peru',
  608:'Philippines',616:'Poland',620:'Portugal',634:'Qatar',642:'Romania',
  643:'Russia',646:'Rwanda',682:'Saudi Arabia',686:'Senegal',
  694:'Sierra Leone',706:'Somalia',710:'South Africa',716:'Zimbabwe',
  724:'Spain',728:'South Sudan',729:'Sudan',752:'Sweden',756:'Switzerland',
  760:'Syria',762:'Tajikistan',764:'Thailand',768:'Togo',780:'Trinidad and Tobago',
  784:'UAE',788:'Tunisia',792:'Turkey',800:'Uganda',804:'Ukraine',
  818:'Egypt',826:'United Kingdom',834:'Tanzania',840:'United States',
  858:'Uruguay',860:'Uzbekistan',862:'Venezuela',887:'Yemen',894:'Zambia',
  268:'Georgia',702:'Singapore',703:'Slovakia',705:'Slovenia',
};

// Country risk data keyed by ISO alpha-2
const COUNTRY_DATA = {
  AF:{risk:'High',  color:'#e63946',detail:'Active conflict environment. Specialist coordination essential for all operations.'},
  SO:{risk:'High',  color:'#e63946',detail:'Ongoing insurgency and civil disorder. High-risk advisory in effect.'},
  SS:{risk:'High',  color:'#e63946',detail:'Fragile ceasefire conditions. Active monitoring and advisory support available.'},
  SD:{risk:'High',  color:'#e63946',detail:'Active conflict with widespread displacement. Critical-level advisory.'},
  SY:{risk:'High',  color:'#e63946',detail:'Complex conflict landscape. Full operational assessment required.'},
  IQ:{risk:'High',  color:'#e63946',detail:'Residual instability and militia activity. Close advisory support available.'},
  YE:{risk:'High',  color:'#e63946',detail:'Ongoing armed conflict. No-travel advisory in most regions.'},
  LY:{risk:'High',  color:'#e63946',detail:'Divided governance and active armed factions. High-level briefings available.'},
  ML:{risk:'High',  color:'#e63946',detail:'Jihadist activity in northern and central regions. Travel risk assessment essential.'},
  CF:{risk:'High',  color:'#e63946',detail:'Persistent armed group activity. Operational presence requires specialist coordination.'},
  MZ:{risk:'High',  color:'#e63946',detail:'Cabo Delgado insurgency ongoing. Northern operations require security clearance.'},
  PK:{risk:'Elevated',color:'#f4a261',detail:'Core operational region. Political volatility and border tensions require constant monitoring.'},
  NG:{risk:'Elevated',color:'#f4a261',detail:'Boko Haram activity in the north, banditry in the northwest. Regional advisories active.'},
  CD:{risk:'Elevated',color:'#f4a261',detail:'Eastern DRC remains volatile. Armed group presence requires advanced coordination.'},
  BI:{risk:'Elevated',color:'#f4a261',detail:'Political tensions and targeted violence. Monitored closely for executive travel.'},
  ET:{risk:'Elevated',color:'#f4a261',detail:'Tigray and Amhara regions remain unstable. Intelligence briefings available on request.'},
  MX:{risk:'Elevated',color:'#f4a261',detail:'Cartel activity in multiple states. Executive protection coordination recommended.'},
  VE:{risk:'Elevated',color:'#f4a261',detail:'Political instability and organised crime. Specialist security advisory in effect.'},
  HT:{risk:'Elevated',color:'#f4a261',detail:'Gang control in major urban areas. Critical advisory for all personnel.'},
  MM:{risk:'Elevated',color:'#f4a261',detail:'Military junta with ongoing civil conflict. Travel strongly discouraged in conflict zones.'},
  BF:{risk:'Elevated',color:'#f4a261',detail:'Jihadist spillover from Mali. Significant portions of territory under advisory.'},
  NE:{risk:'Elevated',color:'#f4a261',detail:'Post-coup instability. Border regions with armed group activity.'},
  IN:{risk:'Moderate',color:'#e9c46a',detail:'Generally manageable risk. Border regions and some northern areas require targeted assessment.'},
  KE:{risk:'Moderate',color:'#e9c46a',detail:'Terrorism risk in border areas. Urban crime in Nairobi requires executive awareness.'},
  TZ:{risk:'Moderate',color:'#e9c46a',detail:'Generally stable. Zanzibar and Mozambique border areas monitored.'},
  GH:{risk:'Moderate',color:'#e9c46a',detail:'Relatively stable. Northern border areas under advisory watch.'},
  CM:{risk:'Moderate',color:'#e9c46a',detail:'Anglophone crisis in western regions. Intelligence coverage active.'},
  CO:{risk:'Moderate',color:'#e9c46a',detail:'Improved security but FARC dissidents active in rural areas. Operational support available.'},
  BD:{risk:'Moderate',color:'#e9c46a',detail:'Political environment requires monitoring. Business operations manageable with advisory.'},
  LB:{risk:'Moderate',color:'#e9c46a',detail:'Economic crisis with political instability. Heightened situational awareness advised.'},
  UG:{risk:'Moderate',color:'#e9c46a',detail:'Generally stable with border area concerns. Executive travel briefings available.'},
  ZM:{risk:'Moderate',color:'#e9c46a',detail:'Stable environment with crime risk in urban centres. Business risk advisory available.'},
  MR:{risk:'Moderate',color:'#e9c46a',detail:'Sahel corridor monitoring active. Generally manageable environment for operations.'},
  PG:{risk:'Moderate',color:'#e9c46a',detail:'High tribal violence and urban crime. Executive travel risk assessment required.'},
  SA:{risk:'Monitored',color:'#4cc9f0',detail:'Strategic Gulf partner. Operational coordination capacity available for executive travel.'},
  AE:{risk:'Monitored',color:'#4cc9f0',detail:'Stable operational environment. Regional coordination hub for Gulf operations.'},
  QA:{risk:'Monitored',color:'#4cc9f0',detail:'Stable environment. Intelligence briefings available for Gulf corridor operations.'},
  EG:{risk:'Monitored',color:'#4cc9f0',detail:'Controlled security environment. Sinai region under elevated advisory.'},
  MA:{risk:'Monitored',color:'#4cc9f0',detail:'Stable North Africa hub. Sahel border area monitoring active.'},
  TN:{risk:'Monitored',color:'#4cc9f0',detail:'Political transitions ongoing. Generally manageable security environment.'},
  TH:{risk:'Monitored',color:'#4cc9f0',detail:'Southern provinces under advisory. Major cities and business hubs manageable.'},
  ID:{risk:'Monitored',color:'#4cc9f0',detail:'Terrorism risk present. Papua region under elevated advisory.'},
  PH:{risk:'Monitored',color:'#4cc9f0',detail:'Mindanao under elevated risk. Business travel to major cities is manageable.'},
  ZA:{risk:'Monitored',color:'#4cc9f0',detail:'High crime rate in urban areas. Executive protection coordination recommended.'},
  TR:{risk:'Monitored',color:'#4cc9f0',detail:'Regional intelligence hub. Southeast border areas monitored closely.'},
  JO:{risk:'Monitored',color:'#4cc9f0',detail:'Stable despite regional pressures. Intelligence briefings available.'},
  UZ:{risk:'Monitored',color:'#4cc9f0',detail:'Central Asia corridor. Politically controlled environment with stable operations.'},
  KZ:{risk:'Monitored',color:'#4cc9f0',detail:'Strategic Central Asian hub. Business environment manageable with advisories.'},
  PE:{risk:'Monitored',color:'#4cc9f0',detail:'Political instability and Shining Path activity in some regions. Advisory available.'},
  BR:{risk:'Monitored',color:'#4cc9f0',detail:'Urban security concerns and organised crime. Targeted executive advisory available.'},
  IL:{risk:'Monitored',color:'#4cc9f0',detail:'Heightened security environment. Active intelligence monitoring across borders.'},
  GE:{risk:'Monitored',color:'#4cc9f0',detail:'Stable with South Ossetia and Abkhazia tensions. Risk monitoring active.'},
  GB:{risk:'Advisory',color:'#3a7bd5',detail:'SECURIDE 24 headquarters. Premier risk advisory and coordination capability.'},
  DE:{risk:'Advisory',color:'#3a7bd5',detail:'Stable environment. Intelligence advisory available for corporate operations.'},
  FR:{risk:'Advisory',color:'#3a7bd5',detail:'Managed security environment. Protest activity and terrorism risk monitored.'},
  US:{risk:'Advisory',color:'#3a7bd5',detail:'Stable. Executive security protocols and business risk assessments available.'},
  CA:{risk:'Advisory',color:'#3a7bd5',detail:'Low-risk environment. Operational support for executive travel available.'},
  AU:{risk:'Advisory',color:'#3a7bd5',detail:'Stable. Business risk intelligence and executive travel support available.'},
  JP:{risk:'Advisory',color:'#3a7bd5',detail:'Secure environment. Business intelligence monitoring available.'},
  SG:{risk:'Advisory',color:'#3a7bd5',detail:'Hub for Southeast Asia operations. Stable and well-governed environment.'},
  CH:{risk:'Advisory',color:'#3a7bd5',detail:'Neutral, stable environment. Financial and diplomatic operations well-supported.'},
  SE:{risk:'Advisory',color:'#3a7bd5',detail:'Stable environment. Advisory coverage available.'},
  NO:{risk:'Advisory',color:'#3a7bd5',detail:'Stable Nordic environment. Advisory coverage available.'},
  NL:{risk:'Advisory',color:'#3a7bd5',detail:'Stable European hub. Business intelligence monitoring available.'},
  KR:{risk:'Advisory',color:'#3a7bd5',detail:'Stable but North Korea tensions monitored. Business travel well-supported.'},
  NZ:{risk:'Advisory',color:'#3a7bd5',detail:'Low-risk environment. Executive travel support available.'},
};

// Risk badge colours
const RISK_BADGE = {
  High:      {bg:'rgba(230,57,70,0.2)',    text:'#ff6b75'},
  Elevated:  {bg:'rgba(244,162,97,0.2)',   text:'#f4a261'},
  Moderate:  {bg:'rgba(233,196,106,0.2)',  text:'#e9c46a'},
  Monitored: {bg:'rgba(76,201,240,0.2)',   text:'#4cc9f0'},
  Advisory:  {bg:'rgba(58,123,213,0.22)', text:'#6da8ff'},
};

const DEFAULT_FILL = '#1e2a45';
let countryNodes = {};

// --- Tooltip -----------------------------------------------------------------
let wrmTip = null;
let wrmMobileModal = null;

function isMobileMapView() {
  return window.matchMedia('(max-width: 768px)').matches;
}

function getBriefingUrl(a2) {
  return a2
    ? 'pages/intelligence/active-alerts.html?country=' + a2
    : 'pages/intelligence/active-alerts.html';
}

function getMobileModal() {
  if (!wrmMobileModal) {
    wrmMobileModal = document.createElement('div');
    wrmMobileModal.className = 'wrm-mobile-overlay';
    wrmMobileModal.innerHTML =
      '<div class="wrm-mobile-card" role="dialog" aria-modal="true" aria-label="Country intelligence details">' +
        '<button type="button" class="wrm-mobile-close" aria-label="Close country details">&times;</button>' +
        '<div class="wrm-mobile-content"></div>' +
      '</div>';

    wrmMobileModal.addEventListener('click', function(e) {
      if (e.target === wrmMobileModal || e.target.classList.contains('wrm-mobile-close')) {
        wrmMobileModal.classList.remove('is-open');
        wrmMobileModal.classList.remove('is-closing');
      }
    });

    document.body.appendChild(wrmMobileModal);
  }
  return wrmMobileModal;
}

function showMobileCountryDetails(numericId) {
  var a2 = ISO_N[numericId];
  var name = ISO_NAMES[numericId] || a2 || 'Unknown';
  var c = a2 ? COUNTRY_DATA[a2] : null;
  var modal = getMobileModal();
  var content = modal.querySelector('.wrm-mobile-content');
  var risk = c ? c.risk : 'No Advisory';
  var detail = c ? c.detail : 'No active advisory data for this country at the moment.';
  var badge = RISK_BADGE[risk] || { bg: 'rgba(116, 134, 164, 0.22)', text: '#d7e4ff' };

  content.innerHTML =
    '<div class="wrm-mobile-header">' +
      '<h3 class="wrm-mobile-name">' + name + '</h3>' +
      '<span class="wrm-mobile-badge" style="background:' + badge.bg + ';color:' + badge.text + ';">' + risk + '</span>' +
    '</div>' +
    '<p class="wrm-mobile-detail">' + detail + '</p>' +
    '<a class="wrm-mobile-briefing" href="' + getBriefingUrl(a2) + '">View Briefing</a>';

  var briefingLink = content.querySelector('.wrm-mobile-briefing');
  if (briefingLink) {
    briefingLink.addEventListener('click', function(e) {
      e.preventDefault();
      modal.classList.add('is-closing');
      window.setTimeout(function() {
        window.location.href = briefingLink.href;
      }, 180);
    });
  }

  modal.classList.remove('is-closing');
  modal.classList.add('is-open');
}
function getTooltip() {
  if (!wrmTip) {
    wrmTip = document.createElement('div');
    wrmTip.id = 'wrmTooltip';
    wrmTip.className = 'wrm-tooltip';
    document.body.appendChild(wrmTip);
  }
  return wrmTip;
}

function showTooltip(event, numericId) {
  const a2   = ISO_N[numericId];
  const name = ISO_NAMES[numericId] || a2 || 'Unknown';
  const c    = a2 ? COUNTRY_DATA[a2] : null;
  const tip  = getTooltip();

  if (c) {
    const b = RISK_BADGE[c.risk] || RISK_BADGE.Advisory;
    tip.innerHTML =
      '<div class="wrm-tip-inner">' +
        '<div class="wrm-tip-header">' +
          '<span class="wrm-tip-name">' + name + '</span>' +
          '<span class="wrm-tip-badge" style="background:' + b.bg + ';color:' + b.text + ';">' + c.risk + '</span>' +
        '</div>' +
        '<p class="wrm-tip-detail">' + c.detail + '</p>' +
        '<span class="wrm-tip-cta">View Intelligence Briefing &rarr;</span>' +
      '</div>';
  } else {
    tip.innerHTML =
      '<div class="wrm-tip-inner wrm-tip-plain">' +
        '<span class="wrm-tip-name">' + name + '</span>' +
        '<span class="wrm-tip-nodata">No active advisory</span>' +
      '</div>';
  }

  tip.style.display = 'block';
  moveTooltip(event);
}

function moveTooltip(event) {
  const tip = getTooltip();
  const vw  = window.innerWidth;
  const vh  = window.innerHeight;
  const tw  = tip.offsetWidth  || 280;
  const th  = tip.offsetHeight || 100;
  var x = event.clientX + 16;
  var y = event.clientY + 16;
  if (x + tw > vw - 8) x = event.clientX - tw - 16;
  if (y + th > vh - 8) y = event.clientY - th - 16;
  tip.style.left = x + 'px';
  tip.style.top  = y + 'px';
}

function hideTooltip() {
  getTooltip().style.display = 'none';
}

function getCountryFill(numericId) {
  var a2 = ISO_N[numericId];
  return (a2 && COUNTRY_DATA[a2]) ? COUNTRY_DATA[a2].color : DEFAULT_FILL;
}

function resetCountryStyles() {
  Object.keys(countryNodes).forEach(function(id) {
    var node = countryNodes[id];
    d3.select(node)
      .attr('fill', getCountryFill(id))
      .attr('stroke', '#0a1224')
      .attr('stroke-width', 0.35);
  });
}

function focusCountryById(numericId) {
  var node = countryNodes[numericId];
  if (!node) return;

  resetCountryStyles();

  var base = getCountryFill(numericId);
  try {
    d3.select(node)
      .attr('fill', d3.color(base).brighter(0.55).formatRgb())
      .attr('stroke', '#ffffff')
      .attr('stroke-width', 0.8);
  } catch (e) {
    d3.select(node)
      .attr('stroke', '#ffffff')
      .attr('stroke-width', 0.8);
  }

  var rect = node.getBoundingClientRect();
  showTooltip({
    clientX: rect.left + (rect.width / 2),
    clientY: rect.top + Math.max(18, rect.height / 2)
  }, numericId);
}

// --- Map ---------------------------------------------------------------------
function initWorldRiskMap() {
  var el = document.getElementById('worldRiskMap');
  if (!el || typeof d3 === 'undefined' || typeof topojson === 'undefined') return;

  var W = 960, H = 500;

  var svg = d3.select('#worldRiskMap')
    .append('svg')
    .attr('viewBox', '0 0 ' + W + ' ' + H)
    .attr('preserveAspectRatio', 'xMidYMid meet')
    .style('width', '100%')
    .style('height', 'auto')
    .style('display', 'block');

  var g = svg.append('g');

  var projection = d3.geoEquirectangular();
  var pathGen = d3.geoPath().projection(projection);

  // Zoom + pan
  var zoom = d3.zoom()
    .scaleExtent([1, 8])
    .on('zoom', function(event) {
      g.attr('transform', event.transform);
    });
  svg.call(zoom);

  fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
    .then(function(r) { return r.json(); })
    .then(function(world) {
      var features = topojson.feature(world, world.objects.countries).features;

      projection.fitExtent([[10, 18], [W - 10, H - 18]], { type: 'FeatureCollection', features: features });

      // Countries
      var countries = g.selectAll('path.country')
        .data(features)
        .join('path')
        .attr('class', 'country')
        .attr('d', pathGen)
        .attr('fill', function(d) {
          return getCountryFill(+d.id);
        })
        .attr('stroke', '#0a1224')
        .attr('stroke-width', 0.35)
        .attr('cursor', 'pointer')
        .each(function(d) {
          countryNodes[+d.id] = this;
        })
        .on('click', function(event, d) {
          var a2 = ISO_N[+d.id];
          if (isMobileMapView()) {
            showMobileCountryDetails(+d.id);
            return;
          }
          if (a2) {
            window.location.href = getBriefingUrl(a2);
          }
        });

      if (!isMobileMapView()) {
        countries
          .on('mouseover', function(event, d) {
            var a2 = ISO_N[+d.id];
            var base = (a2 && COUNTRY_DATA[a2]) ? COUNTRY_DATA[a2].color : DEFAULT_FILL;
            try {
              var col = d3.color(base).brighter(0.55);
              d3.select(this).attr('fill', col.formatRgb());
            } catch(e) { /* ignore */ }
            d3.select(this).attr('stroke', '#ffffff').attr('stroke-width', 0.8);
            showTooltip(event, +d.id);
          })
          .on('mousemove', function(event) { moveTooltip(event); })
          .on('mouseout', function(event, d) {
            var a2 = ISO_N[+d.id];
            d3.select(this)
              .attr('fill', (a2 && COUNTRY_DATA[a2]) ? COUNTRY_DATA[a2].color : DEFAULT_FILL)
              .attr('stroke', '#0a1224')
              .attr('stroke-width', 0.35);
            hideTooltip();
          });
      }
    })
    .catch(function(err) { console.warn('World map failed to load:', err); });
}

// --- Search ------------------------------------------------------------------
function initCountrySearch() {
  var input   = document.getElementById('countrySearch');
  var results = document.getElementById('countrySearchResults');
  if (!input || !results) return;

  input.addEventListener('input', function() {
    var q = this.value.trim().toLowerCase();
    results.innerHTML = '';
    if (q.length < 2) { results.style.display = 'none'; return; }

    var nameMatches = Object.entries(ISO_NAMES)
      .filter(function(e) { return e[1].toLowerCase().includes(q); })
      .slice(0, 7);

    if (!nameMatches.length) { results.style.display = 'none'; return; }

    nameMatches.forEach(function(entry) {
      var numId = entry[0], name = entry[1];
      var a2 = ISO_N[numId];
      var c  = a2 ? COUNTRY_DATA[a2] : null;
      var item = document.createElement('div');
      item.className = 'country-result-item';
      item.setAttribute('role', 'option');
      item.innerHTML =
        '<span class="country-result-dot" style="background:' + (c ? c.color : DEFAULT_FILL) + '"></span>' +
        '<span class="country-result-name">' + name + '</span>' +
        '<span class="country-result-risk">' + (c ? c.risk : '') + '</span>';

      item.addEventListener('click', function() {
        input.value = name;
        results.style.display = 'none';
        focusCountryById(+numId);
      });

      results.appendChild(item);
    });

    results.style.display = 'block';
  });

  document.addEventListener('click', function(e) {
    if (!e.target.closest('.risk-map-search')) results.style.display = 'none';
  });
  input.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      results.style.display = 'none';
      input.blur();
      return;
    }

    if (e.key === 'Enter') {
      var firstResult = results.querySelector('.country-result-item');
      if (firstResult) {
        e.preventDefault();
        firstResult.click();
      }
    }
  });
}

// --- Boot --------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('worldRiskMap')) {
    initWorldRiskMap();
    initCountrySearch();
  }
});
