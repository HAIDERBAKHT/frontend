// navigation.js - mega menu and overlay menu

const Navigation = {
  defaultLanguage: 'en',
  supportedLanguages: ['en', 'zh', 'fr', 'ar'],
  languageStorageKey: 'securide_language',
  languageLabel: {
    en: 'EN',
    zh: '中文',
    fr: 'FR',
    ar: 'AR'
  },
  googleTranslateReady: false,
  googleTranslatePendingLang: null,
  i18nPhrases: {
    solutions: 'Solutions',
    capabilities: 'Capabilities',
    industries: 'Industries',
    intelligence: 'Intelligence',
    about: 'About',
    contact: 'Contact',
    overview: 'Overview',
    solutions_overview: 'Solutions Overview',
    capabilities_overview: 'Capabilities Overview',
    industries_overview: 'Industries Overview',
    intelligence_overview: 'Intelligence Overview',
    insights: 'Insights',
    insights_overview: 'Insights Overview',
    case_studies: 'Case Studies',
    active_alerts: 'Active Alerts',
    featured_insights: 'Featured Insights',
    intelligence_briefings: 'Intelligence Briefings',
    who_we_are: 'Who We Are',
    learn_more: 'Learn more',
    risk_intel_monitoring: 'Risk Intelligence & Monitoring',
    executive_mobility_travel: 'Executive Mobility & Secure Travel',
    executive_protection_coordination: 'Executive Protection Coordination',
    crisis_response_coordination: 'Crisis Response & Incident Coordination',
    strategic_risk_advisory: 'Strategic Risk Advisory',
    intelligence_risk_analysis: 'Intelligence & Risk Analysis',
    security_operations_monitoring: 'Security Operations & Monitoring',
    protective_operations_coordination: 'Protective Operations Coordination',
    incident_crisis_coordination: 'Incident & Crisis Coordination',
    secure_mobility_planning: 'Secure Mobility Planning',
    strategic_security_advisory: 'Strategic Security Advisory',
    corporate_executives: 'Corporate Executives',
    international_visitors: 'International Visitors',
    diplomats_delegations: 'Diplomats & Delegations',
    ngos_project_teams: 'NGOs & Project Teams',
    investors_consultants: 'Investors & Consultants',
    event_organisers: 'Event Organisers',
    family_offices: 'Family Offices',
    live_intelligence_platform: 'Live Intelligence Platform',
    built_high_stakes: 'Built for High-Stakes Decisions',
    featured_platform_desc: 'Track threat shifts, incident alerts, and travel advisories through a single intelligence-led operating picture.',
    about_card_desc: 'We combine strategic intelligence with field-tested coordination to protect people, operations, and reputation.',
    featured_forecast_title: 'Global Risk Forecast',
    featured_forecast_desc: 'Crisis24\'s Global Risk Forecast 2026 equips leaders to anticipate what is next and act fast with precision.',
    search_label: 'Search...',
    popular_searches: 'Popular Searches',
    build_organisational_resilience: 'Build Organisational Resilience',
    contact_panel_intro: 'Our global team is ready to help you determine the security and risk management path that is right for you.',
    request_consultation: 'Request a Consultation',
    thank_you_short: 'Thank you — we will respond shortly.',
    active_intelligence_alerts: 'Active Intelligence Alerts',
    actionable_operational_updates: 'Actionable operational updates for secure travel and mobility planning.',
    live_monitoring_active: 'Live Monitoring Active',
    alerts_description: 'Securide24 Intelligence continuously monitors global travel risks, mobility disruptions, and security developments that may affect executive movement and operational continuity.',
    solutions_support_title: 'Intelligence-Led Risk Support for Complex Environments',
    solutions_support_body: 'Our services support informed decision-making, secure movement, and operational continuity.',
    operational_depth: 'Operational Depth',
    regional_operational_familiarity: 'Regional Operational Familiarity',
    global_reach: 'Global Reach',
    worldwide_engagement: 'Worldwide Engagement',
    global_engagement: 'Global Engagement',
    global_monitoring_network: 'Global Monitoring Network',
    worldwide_observation_analysis: 'Worldwide Observation & Analysis',
    risk_assurance_approach: 'Risk Assurance Approach',
    intelligence_advisory_protection: 'Intelligence. Advisory. Protection.',
    explore_risk_assurance_approach: 'Explore Our Risk Assurance Approach ->',
    global_intelligence_monitoring: 'Global Intelligence Monitoring',
    travel_security_solutions: 'Travel Security Solutions',
    how_we_manage_risk: 'How We Manage Risk',
    case_studies_subtitle: 'Proven outcomes in complex environments.',
    view_all_case_studies: 'View All Case Studies',
    cta_build_resilience: 'Build resilience before risk escalates.',
    access_subscriber_portal: 'Access Subscriber Portal ->',
    contact_us: 'Contact Us',
    company: 'Company',
    follow: 'Follow',
    security_operations: 'Security Operations',
    crisis_coordination: 'Crisis Coordination',
    anticipate: 'Anticipate',
    monitor: 'Monitor',
    assess: 'Assess',
    advise: 'Advise',
    secure: 'Secure',
    respond: 'Respond',
    learn_more_caps: 'Learn More',
    access_report: 'Access Report',
    solutions_structured_support: 'SECURIDE 24 provides structured risk intelligence, executive mobility planning, protective coordination, and crisis support for organisations and senior decision-makers operating across complex and evolving environments.',
    continuous_risk_analysis: 'Continuous risk analysis and global intelligence.',
    safe_secure_travel_planning: 'Safe and secure travel planning and support.',
    vip_security_coordination: 'Coordination of VIP executive security.',
    rapid_crisis_support: 'Rapid crisis management and incident support.',
    expert_risk_guidance: 'Expert risk guidance and strategic advisory.',
    op_depth_intro_1: 'While headquartered in the United Kingdom, SECURIDE 24 maintains operational familiarity',
    op_depth_intro_2: 'with environments where risk exposure and regional dynamics require careful planning.',
    south_asia: 'South Asia',
    middle_east: 'Middle East',
    africa: 'Africa',
    focus_areas: 'Focus Areas:',
    south_asia_desc: 'Strong operational awareness and regional familiarity across environments where evolving political dynamics and infrastructure conditions influence travel and business operations.',
    middle_east_desc: 'SECURIDE 24 supports organisations travelling to or operating within the Middle East through risk advisory and mobility planning where geopolitical developments may influence operational decisions.',
    africa_desc: 'SECURIDE 24 supports clients operating across selected African environments through advisory support and coordination with trusted operational partners.',
    global_engagement_desc: 'From its UK base, SECURIDE 24 supports organisations undertaking international travel, projects, and engagements across complex and evolving environments through structured risk insight and advisory support.',
    risk_assurance_subtitle: 'A coordinated operating model that turns situational insight into practical security decisions before, during, and after movement.',
    intelligence_card_desc: 'Continuous monitoring of geopolitical developments, travel risks, civil unrest, infrastructure disruptions, and emerging security threats',
    advisory_card_desc: 'Operational guidance that converts intelligence insights into actionable recommendations for secure travel planning and movement.',
    protection_card_desc: 'Coordinated operational support through trusted security networks and partners to ensure safe execution of travel and movement plans.',
    process_global_forecast: 'GLOBAL RISK FORECAST',
    process_future_ready: 'FUTURE READY, NOW',
    process_navigating_risk: 'Navigating risk with operational insight.',
    process_forecast_desc: 'Securide24\'s Global Risk Forecast 2026 equips leaders to anticipate what\'s next and act fast — with precision. Our annual report will show you where to focus, when to move, and what to do.',
    featured_reading: 'Featured Reading',
    uk_operational_advisory: 'UK Operational Advisory',
    travel_mobility_considerations: 'Travel and mobility considerations',
    uk_operational_desc: 'Current threat assessment and operational guidance for executive travel, events, and secure mobility planning within the United Kingdom.',
    executive_travel_risk_planning: 'Executive Travel Risk Planning',
    assured_mobility: 'Assured mobility in complex environments',
    executive_travel_risk_desc: 'Strategic planning frameworks and operational protocols for executive protection and secure mobility in elevated-risk jurisdictions.',
    incident_response_readiness: 'Incident Response Readiness',
    structured_response: 'Structured response when it matters most',
    incident_response_desc: 'Crisis management protocols and incident coordination frameworks designed to deliver decisive action during critical events.',
    intelligence_monitoring_subtitle: 'Our Global Security Operations Center monitors geopolitical risks, travel security threats, and mobility disruptions to provide actionable real-time intelligence.',
    travel_security_subtitle: 'Integrated solutions to protect executives and travelers in today\'s complex and unpredictable threat environment.',
    executive_travel_security: 'Executive Travel Security',
    executive_travel_security_desc: 'Tailored security and protective measures for executive personnel',
    corporate_exec_mobility_desc: 'Comprehensive travel risk governance for corporate enterprises',
    secure_mobility_coordination_title: 'Secure Mobility Coordination',
    secure_mobility_coordination_desc: 'Intelligence-driven coordination of safe executive transfers and routes',
    case_summit_title: 'Summit Route Hardening',
    case_summit_desc: 'Route segmentation and layered fallback planning for a high-profile multi-venue delegation under elevated disruption risk.',
    case_incident_title: 'Incident Evacuation Drill',
    case_incident_desc: 'Full-scale evacuation rehearsal reducing decision latency and improving movement timing by 23% across mixed personnel sites.',
    case_convoy_title: 'Executive Convoy Reroute',
    case_convoy_desc: 'Contingency routing preserving principal safety and schedule continuity without public disruption during a high-exposure transit window.',
    united_kingdom_hub: 'United Kingdom Hub',
    pakistan_hub: 'Pakistan Hub',
    north_america: 'North America',
    south_america: 'South America',
    europe: 'Europe',
    africa_region: 'Africa',
    asia_region: 'Asia',
    oceania_region: 'Oceania',
    primary_monitoring_node: 'Primary monitoring node',
    countries_risk_alerts: 'Countries risk alerts',
    travel_risk_intelligence: 'Travel Risk Intelligence',
    real_time_threat_monitoring: 'Real-Time Threat Monitoring',
    mobility_risk_analysis: 'Mobility Risk Analysis',
    explore_intelligence_platform: 'Explore Intelligence Platform ->',
    explore_travel_risk_solutions: 'Explore Travel Risk Solutions ->',
    delegation_security: 'Delegation Security',
    crisis_preparedness: 'Crisis Preparedness',
    executive_transit: 'Executive Transit',
    all_rights_reserved: '© 2026 SECURIDE 24. All rights reserved.'
  },
  translations: {
    en: {},
    zh: {
      solutions: '解决方案',
      capabilities: '能力',
      industries: '行业',
      intelligence: '情报',
      about: '关于我们',
      contact: '联系',
      overview: '概览',
      solutions_overview: '解决方案概览',
      capabilities_overview: '能力概览',
      industries_overview: '行业概览',
      intelligence_overview: '情报概览',
      insights: '洞察',
      insights_overview: '洞察概览',
      case_studies: '案例研究',
      active_alerts: '实时警报',
      featured_insights: '精选洞察',
      intelligence_briefings: '情报简报',
      who_we_are: '我们是谁',
      learn_more: '了解更多',
      risk_intel_monitoring: '风险情报与监测',
      executive_mobility_travel: '高管出行与安全旅行',
      executive_protection_coordination: '高管保护协调',
      crisis_response_coordination: '危机响应与事件协调',
      strategic_risk_advisory: '战略风险咨询',
      intelligence_risk_analysis: '情报与风险分析',
      security_operations_monitoring: '安全运营与监测',
      protective_operations_coordination: '保护行动协调',
      incident_crisis_coordination: '事件与危机协调',
      secure_mobility_planning: '安全出行规划',
      strategic_security_advisory: '战略安全咨询',
      corporate_executives: '企业高管',
      international_visitors: '国际访客',
      diplomats_delegations: '外交官与代表团',
      ngos_project_teams: '非政府组织与项目团队',
      investors_consultants: '投资者与顾问',
      event_organisers: '活动组织者',
      family_offices: '家族办公室',
      live_intelligence_platform: '实时情报平台',
      built_high_stakes: '为高风险决策而建',
      featured_platform_desc: '通过统一的情报驱动全景，追踪威胁变化、事件警报和出行风险通告。',
      about_card_desc: '我们结合战略情报与实战协调能力，保护人员、运营与声誉。',
      featured_forecast_title: '全球风险预测',
      featured_forecast_desc: 'Crisis24 2026 全球风险预测帮助领导者预判下一步，并以精准行动快速应对。',
      search_label: '搜索...',
      popular_searches: '热门搜索',
      build_organisational_resilience: '构建组织韧性',
      contact_panel_intro: '我们的全球团队将帮助您确定最适合您的安保与风险管理路径。',
      request_consultation: '申请咨询',
      thank_you_short: '感谢您——我们将尽快回复。',
      active_intelligence_alerts: '实时情报警报',
      actionable_operational_updates: '为安全出行与移动规划提供可执行的运营更新。',
      live_monitoring_active: '实时监测已激活',
      alerts_description: 'Securide24 Intelligence 持续监测全球出行风险、移动中断和安全动态，这些因素可能影响高管出行与运营连续性。',
      solutions_support_title: '面向复杂环境的情报驱动风险支持',
      solutions_support_body: '我们的服务支持明智决策、安全移动与运营连续性。',
      operational_depth: '运营深度',
      regional_operational_familiarity: '区域运营熟悉度',
      global_reach: '全球覆盖',
      worldwide_engagement: '全球参与',
      global_engagement: '全球协同',
      global_monitoring_network: '全球监测网络',
      worldwide_observation_analysis: '全球观察与分析',
      risk_assurance_approach: '风险保障方法',
      intelligence_advisory_protection: '情报·咨询·防护',
      explore_risk_assurance_approach: '探索我们的风险保障方法 ->',
      global_intelligence_monitoring: '全球情报监测',
      travel_security_solutions: '出行安全解决方案',
      how_we_manage_risk: '我们如何管理风险',
      case_studies_subtitle: '在复杂环境中的可验证成果。',
      view_all_case_studies: '查看全部案例研究',
      cta_build_resilience: '在风险升级前建立韧性。',
      access_subscriber_portal: '访问订阅者门户 ->',
      contact_us: '联系我们',
      company: '公司',
      follow: '关注',
      security_operations: '安全运营',
      crisis_coordination: '危机协调',
      anticipate: '预判',
      monitor: '监测',
      assess: '评估',
      advise: '建议',
      secure: '保障',
      respond: '响应',
      learn_more_caps: '了解更多',
      access_report: '查看报告',
      solutions_structured_support: 'SECURIDE 24 为组织和高级决策者在复杂多变环境中的运营提供结构化风险情报、高管出行规划、防护协调与危机支持。',
      continuous_risk_analysis: '持续风险分析与全球情报支持。',
      safe_secure_travel_planning: '安全且稳健的出行规划与支持。',
      vip_security_coordination: '高层人员安保协调。',
      rapid_crisis_support: '快速危机管理与事件支持。',
      expert_risk_guidance: '专业风险指导与战略咨询。',
      op_depth_intro_1: 'SECURIDE 24 总部位于英国，同时保持对重点区域运营环境的深入熟悉。',
      op_depth_intro_2: '在这些地区，风险暴露与区域动态需要审慎规划。',
      south_asia: '南亚',
      middle_east: '中东',
      africa: '非洲',
      focus_areas: '重点区域：',
      south_asia_desc: '在政治动态与基础设施条件持续变化的环境中，具备强运营认知与区域熟悉度。',
      middle_east_desc: '在地缘变化可能影响决策的背景下，为中东出行或运营组织提供风险咨询与移动规划支持。',
      africa_desc: '在部分非洲环境中，通过咨询支持与可信伙伴协同，为客户提供运营支持。',
      global_engagement_desc: '依托英国基地，SECURIDE 24 为组织在复杂演变环境中的国际出行、项目与活动提供结构化风险洞察和咨询支持。',
      risk_assurance_subtitle: '通过协同运营模型，在行动前中后将态势洞察转化为可执行安全决策。',
      intelligence_card_desc: '持续监测地缘变化、出行风险、社会动荡、基础设施中断与新兴安全威胁',
      advisory_card_desc: '将情报洞察转化为可执行建议，支持安全出行规划与移动。',
      protection_card_desc: '通过可信安保网络与合作方进行协同支持，确保出行与行动安全执行。',
      process_global_forecast: '全球风险预测',
      process_future_ready: '为未来做好当下准备',
      process_navigating_risk: '以运营洞察驾驭风险。',
      process_forecast_desc: 'Securide24 的 2026 全球风险预测帮助领导者预判下一步并精准快速行动。报告将说明应关注何处、何时行动以及如何决策。',
      featured_reading: '精选阅读',
      uk_operational_advisory: '英国运营建议',
      travel_mobility_considerations: '出行与移动注意事项',
      uk_operational_desc: '面向英国境内高管出行、活动与安全移动规划的当前威胁评估与运营建议。',
      executive_travel_risk_planning: '高管出行风险规划',
      assured_mobility: '复杂环境下的可靠移动保障',
      executive_travel_risk_desc: '针对高风险辖区的高管保护与安全移动，提供战略规划框架与操作协议。',
      incident_response_readiness: '事件响应就绪',
      structured_response: '在关键时刻实现结构化响应',
      incident_response_desc: '危机管理协议与事件协调框架，旨在关键事件中实现果断行动。',
      intelligence_monitoring_subtitle: '我们的全球安全运营中心监测地缘风险、出行安全威胁与移动中断，提供可执行的实时情报。',
      travel_security_subtitle: '在当今复杂且不可预测的威胁环境中，提供保护高管与出行人员的一体化解决方案。',
      executive_travel_security: '高管出行安全',
      executive_travel_security_desc: '为高管人员定制安全与防护措施',
      corporate_exec_mobility_desc: '面向企业的综合出行风险治理',
      secure_mobility_coordination_title: '安全移动协调',
      secure_mobility_coordination_desc: '基于情报驱动的高管安全接驳与路线协调',
      case_summit_title: '峰会路线加固',
      case_summit_desc: '为高风险、多场地代表团执行路线分段与分层备选规划。',
      case_incident_title: '事件疏散演练',
      case_incident_desc: '全流程疏散演练，降低决策延迟并将混合人员场景下移动效率提升 23%。',
      case_convoy_title: '高管车队改道',
      case_convoy_desc: '在高暴露转运窗口下，通过应急改道保障主人员安全与行程连续性。',
      united_kingdom_hub: '英国枢纽',
      pakistan_hub: '巴基斯坦枢纽',
      north_america: '北美',
      south_america: '南美',
      europe: '欧洲',
      africa_region: '非洲',
      asia_region: '亚洲',
      oceania_region: '大洋洲',
      primary_monitoring_node: '核心监测节点',
      countries_risk_alerts: '国家风险警报',
      travel_risk_intelligence: '出行风险情报',
      real_time_threat_monitoring: '实时威胁监测',
      mobility_risk_analysis: '移动风险分析',
      explore_intelligence_platform: '探索情报平台 ->',
      explore_travel_risk_solutions: '探索出行风险解决方案 ->',
      delegation_security: '代表团安全',
      crisis_preparedness: '危机准备',
      executive_transit: '高管转运',
      all_rights_reserved: '© 2026 SECURIDE 24。版权所有。'
    },
    fr: {
      solutions: 'Solutions',
      capabilities: 'Capacités',
      industries: 'Secteurs',
      intelligence: 'Renseignement',
      about: 'À propos',
      contact: 'Contact',
      overview: 'Aperçu',
      solutions_overview: 'Aperçu des solutions',
      capabilities_overview: 'Aperçu des capacités',
      industries_overview: 'Aperçu des secteurs',
      intelligence_overview: 'Aperçu du renseignement',
      insights: 'Analyses',
      insights_overview: 'Aperçu des analyses',
      case_studies: 'Études de cas',
      active_alerts: 'Alertes actives',
      featured_insights: 'Analyses en vedette',
      intelligence_briefings: 'Briefings de renseignement',
      who_we_are: 'Qui sommes-nous',
      learn_more: 'En savoir plus',
      risk_intel_monitoring: 'Renseignement sur les risques & Surveillance',
      executive_mobility_travel: 'Mobilité exécutive & Voyages sécurisés',
      executive_protection_coordination: 'Coordination de la protection des dirigeants',
      crisis_response_coordination: 'Réponse de crise & Coordination des incidents',
      strategic_risk_advisory: 'Conseil stratégique en risques',
      intelligence_risk_analysis: 'Analyse du renseignement & des risques',
      security_operations_monitoring: 'Opérations de sécurité & Surveillance',
      protective_operations_coordination: 'Coordination des opérations de protection',
      incident_crisis_coordination: 'Coordination incidents & crise',
      secure_mobility_planning: 'Planification de mobilité sécurisée',
      strategic_security_advisory: 'Conseil stratégique en sécurité',
      corporate_executives: 'Dirigeants d\'entreprise',
      international_visitors: 'Visiteurs internationaux',
      diplomats_delegations: 'Diplomates & Délégations',
      ngos_project_teams: 'ONG & Équipes projet',
      investors_consultants: 'Investisseurs & Consultants',
      event_organisers: 'Organisateurs d\'événements',
      family_offices: 'Family offices',
      live_intelligence_platform: 'Plateforme de renseignement en direct',
      built_high_stakes: 'Conçu pour les décisions à fort enjeu',
      featured_platform_desc: 'Suivez l\'évolution des menaces, les alertes d\'incident et les avis de voyage via une vision opérationnelle unique axée sur le renseignement.',
      about_card_desc: 'Nous combinons renseignement stratégique et coordination opérationnelle éprouvée pour protéger les personnes, les opérations et la réputation.',
      featured_forecast_title: 'Prévision mondiale des risques',
      featured_forecast_desc: 'La Prévision mondiale des risques 2026 de Crisis24 aide les dirigeants à anticiper et à agir rapidement avec précision.',
      search_label: 'Rechercher...',
      popular_searches: 'Recherches populaires',
      build_organisational_resilience: 'Renforcer la résilience organisationnelle',
      contact_panel_intro: 'Notre équipe mondiale est prête à vous aider à définir la bonne trajectoire en sécurité et gestion des risques.',
      request_consultation: 'Demander une consultation',
      thank_you_short: 'Merci — nous vous répondrons rapidement.',
      active_intelligence_alerts: 'Alertes de renseignement actives',
      actionable_operational_updates: 'Mises à jour opérationnelles exploitables pour la mobilité et les déplacements sécurisés.',
      live_monitoring_active: 'Surveillance active en direct',
      alerts_description: 'Securide24 Intelligence surveille en continu les risques de voyage mondiaux, les perturbations de mobilité et les évolutions sécuritaires pouvant affecter les déplacements des dirigeants et la continuité des opérations.',
      solutions_support_title: 'Soutien au risque piloté par le renseignement pour environnements complexes',
      solutions_support_body: 'Nos services soutiennent la prise de décision éclairée, la mobilité sécurisée et la continuité opérationnelle.',
      operational_depth: 'Profondeur opérationnelle',
      regional_operational_familiarity: 'Connaissance opérationnelle régionale',
      global_reach: 'Présence mondiale',
      worldwide_engagement: 'Engagement mondial',
      global_engagement: 'Engagement global',
      global_monitoring_network: 'Réseau mondial de surveillance',
      worldwide_observation_analysis: 'Observation et analyse mondiales',
      risk_assurance_approach: 'Approche d\'assurance des risques',
      intelligence_advisory_protection: 'Renseignement. Conseil. Protection.',
      explore_risk_assurance_approach: 'Explorer notre approche d\'assurance des risques ->',
      global_intelligence_monitoring: 'Surveillance mondiale du renseignement',
      travel_security_solutions: 'Solutions de sécurité des déplacements',
      how_we_manage_risk: 'Comment nous gérons le risque',
      case_studies_subtitle: 'Des résultats éprouvés dans des environnements complexes.',
      view_all_case_studies: 'Voir toutes les études de cas',
      cta_build_resilience: 'Renforcez la résilience avant l\'escalade du risque.',
      access_subscriber_portal: 'Accéder au portail abonné ->',
      contact_us: 'Nous contacter',
      company: 'Entreprise',
      follow: 'Suivre',
      security_operations: 'Opérations de sécurité',
      crisis_coordination: 'Coordination de crise',
      anticipate: 'Anticiper',
      monitor: 'Surveiller',
      assess: 'Évaluer',
      advise: 'Conseiller',
      secure: 'Sécuriser',
      respond: 'Répondre',
      learn_more_caps: 'En savoir plus',
      access_report: 'Accéder au rapport',
      solutions_structured_support: 'SECURIDE 24 fournit un renseignement risque structuré, une planification de mobilité exécutive, une coordination de protection et un appui de crise pour les organisations et décideurs opérant dans des environnements complexes et évolutifs.',
      continuous_risk_analysis: 'Analyse continue des risques et renseignement mondial.',
      safe_secure_travel_planning: 'Planification et accompagnement de voyage sûrs et sécurisés.',
      vip_security_coordination: 'Coordination de la sécurité des VIP.',
      rapid_crisis_support: 'Gestion de crise rapide et soutien incident.',
      expert_risk_guidance: 'Conseil expert en risques et stratégie.',
      op_depth_intro_1: 'Bien que basé au Royaume-Uni, SECURIDE 24 conserve une forte familiarité opérationnelle',
      op_depth_intro_2: 'avec des environnements où l\'exposition au risque et les dynamiques régionales exigent une planification rigoureuse.',
      south_asia: 'Asie du Sud',
      middle_east: 'Moyen-Orient',
      africa: 'Afrique',
      focus_areas: 'Axes prioritaires :',
      south_asia_desc: 'Forte connaissance opérationnelle et régionale dans des environnements où les dynamiques politiques et d\'infrastructure influencent les déplacements et opérations.',
      middle_east_desc: 'SECURIDE 24 accompagne les organisations se déplaçant vers ou opérant au Moyen-Orient via conseil risque et planification de mobilité.',
      africa_desc: 'SECURIDE 24 soutient les clients opérant dans certains environnements africains via conseil et coordination avec des partenaires de confiance.',
      global_engagement_desc: 'Depuis sa base au Royaume-Uni, SECURIDE 24 accompagne les organisations dans leurs voyages internationaux, projets et missions en environnements complexes.',
      risk_assurance_subtitle: 'Un modèle coordonné qui transforme l\'insight situationnel en décisions de sécurité concrètes avant, pendant et après les déplacements.',
      intelligence_card_desc: 'Surveillance continue des évolutions géopolitiques, risques de voyage, troubles civils, perturbations d\'infrastructure et menaces émergentes',
      advisory_card_desc: 'Conseil opérationnel convertissant les insights en recommandations concrètes pour la planification sécurisée des déplacements.',
      protection_card_desc: 'Soutien opérationnel coordonné avec un réseau de partenaires fiables pour exécuter les plans de déplacement en sécurité.',
      process_global_forecast: 'PRÉVISION MONDIALE DES RISQUES',
      process_future_ready: 'PRÊT POUR L\'AVENIR, DÈS MAINTENANT',
      process_navigating_risk: 'Naviguer le risque avec insight opérationnel.',
      process_forecast_desc: 'La Prévision mondiale des risques 2026 de Securide24 aide les décideurs à anticiper et agir vite avec précision.',
      featured_reading: 'Lecture à la une',
      uk_operational_advisory: 'Avis opérationnel Royaume-Uni',
      travel_mobility_considerations: 'Considérations de voyage et mobilité',
      uk_operational_desc: 'Évaluation actuelle des menaces et guidance opérationnelle pour déplacements exécutifs et mobilité sécurisée au Royaume-Uni.',
      executive_travel_risk_planning: 'Planification du risque de voyage exécutif',
      assured_mobility: 'Mobilité assurée en environnements complexes',
      executive_travel_risk_desc: 'Cadres stratégiques et protocoles opérationnels pour protection des dirigeants et mobilité sécurisée en juridictions à risque élevé.',
      incident_response_readiness: 'Préparation à la réponse incident',
      structured_response: 'Réponse structurée quand chaque minute compte',
      incident_response_desc: 'Protocoles de gestion de crise et cadres de coordination conçus pour une action décisive.',
      intelligence_monitoring_subtitle: 'Notre centre mondial d\'opérations de sécurité surveille risques géopolitiques, menaces de voyage et perturbations de mobilité en temps réel.',
      travel_security_subtitle: 'Des solutions intégrées pour protéger dirigeants et voyageurs dans un environnement de menace complexe.',
      executive_travel_security: 'Sécurité des déplacements exécutifs',
      executive_travel_security_desc: 'Mesures de sécurité et de protection adaptées aux dirigeants',
      corporate_exec_mobility_desc: 'Gouvernance complète du risque de voyage pour entreprises',
      secure_mobility_coordination_title: 'Coordination de mobilité sécurisée',
      secure_mobility_coordination_desc: 'Coordination pilotée par le renseignement pour transferts et itinéraires exécutifs sûrs',
      case_summit_title: 'Renforcement des itinéraires de sommet',
      case_summit_desc: 'Segmentation d\'itinéraire et plans de repli multicouches pour une délégation multi-sites à haut risque.',
      case_incident_title: 'Exercice d\'évacuation incident',
      case_incident_desc: 'Exercice grandeur nature réduisant la latence décisionnelle et améliorant les temps de mouvement de 23 %.',
      case_convoy_title: 'Déviation de convoi exécutif',
      case_convoy_desc: 'Routage de contingence préservant sécurité du principal et continuité du planning.',
      united_kingdom_hub: 'Hub Royaume-Uni',
      pakistan_hub: 'Hub Pakistan',
      north_america: 'Amérique du Nord',
      south_america: 'Amérique du Sud',
      europe: 'Europe',
      africa_region: 'Afrique',
      asia_region: 'Asie',
      oceania_region: 'Océanie',
      primary_monitoring_node: 'Nœud principal de surveillance',
      countries_risk_alerts: 'Alertes de risque pays',
      travel_risk_intelligence: 'Renseignement sur les risques de voyage',
      real_time_threat_monitoring: 'Surveillance des menaces en temps réel',
      mobility_risk_analysis: 'Analyse des risques de mobilité',
      explore_intelligence_platform: 'Explorer la plateforme de renseignement ->',
      explore_travel_risk_solutions: 'Explorer les solutions de risque voyage ->',
      delegation_security: 'Sécurité des délégations',
      crisis_preparedness: 'Préparation de crise',
      executive_transit: 'Transit exécutif',
      all_rights_reserved: '© 2026 SECURIDE 24. Tous droits réservés.'
    },
    ar: {
      solutions: 'الحلول',
      capabilities: 'القدرات',
      industries: 'القطاعات',
      intelligence: 'الاستخبارات',
      about: 'من نحن',
      contact: 'اتصل',
      overview: 'نظرة عامة',
      solutions_overview: 'نظرة عامة على الحلول',
      capabilities_overview: 'نظرة عامة على القدرات',
      industries_overview: 'نظرة عامة على القطاعات',
      intelligence_overview: 'نظرة عامة على الاستخبارات',
      insights: 'الرؤى',
      insights_overview: 'نظرة عامة على الرؤى',
      case_studies: 'دراسات الحالة',
      active_alerts: 'تنبيهات نشطة',
      featured_insights: 'رؤى مميزة',
      intelligence_briefings: 'إحاطات استخباراتية',
      who_we_are: 'من نحن',
      learn_more: 'اعرف المزيد',
      risk_intel_monitoring: 'استخبارات المخاطر والمراقبة',
      executive_mobility_travel: 'تنقل التنفيذيين والسفر الآمن',
      executive_protection_coordination: 'تنسيق حماية التنفيذيين',
      crisis_response_coordination: 'الاستجابة للأزمات وتنسيق الحوادث',
      strategic_risk_advisory: 'الاستشارات الاستراتيجية للمخاطر',
      intelligence_risk_analysis: 'تحليل الاستخبارات والمخاطر',
      security_operations_monitoring: 'عمليات الأمن والمراقبة',
      protective_operations_coordination: 'تنسيق العمليات الوقائية',
      incident_crisis_coordination: 'تنسيق الحوادث والأزمات',
      secure_mobility_planning: 'تخطيط التنقل الآمن',
      strategic_security_advisory: 'الاستشارات الأمنية الاستراتيجية',
      corporate_executives: 'المديرون التنفيذيون',
      international_visitors: 'الزوار الدوليون',
      diplomats_delegations: 'الدبلوماسيون والوفود',
      ngos_project_teams: 'المنظمات غير الحكومية وفرق المشاريع',
      investors_consultants: 'المستثمرون والمستشارون',
      event_organisers: 'منظمو الفعاليات',
      family_offices: 'مكاتب العائلات',
      live_intelligence_platform: 'منصة استخبارات مباشرة',
      built_high_stakes: 'مصمم للقرارات عالية المخاطر',
      featured_platform_desc: 'تتبع تغيرات التهديدات وتنبيهات الحوادث وإرشادات السفر من خلال صورة تشغيلية واحدة مدعومة بالاستخبارات.',
      about_card_desc: 'نجمع بين الاستخبارات الاستراتيجية والتنسيق الميداني المجرب لحماية الأفراد والعمليات والسمعة.',
      featured_forecast_title: 'توقعات المخاطر العالمية',
      featured_forecast_desc: 'تساعد توقعات المخاطر العالمية 2026 من Crisis24 القادة على استباق القادم والتحرك بسرعة ودقة.',
      search_label: 'بحث...',
      popular_searches: 'عمليات البحث الشائعة',
      build_organisational_resilience: 'ابنِ المرونة المؤسسية',
      contact_panel_intro: 'فريقنا العالمي جاهز لمساعدتك في تحديد المسار الأنسب للأمن وإدارة المخاطر.',
      request_consultation: 'طلب استشارة',
      thank_you_short: 'شكرًا لك — سنرد عليك قريبًا.',
      active_intelligence_alerts: 'تنبيهات استخباراتية نشطة',
      actionable_operational_updates: 'تحديثات تشغيلية قابلة للتنفيذ للتنقل والسفر الآمن.',
      live_monitoring_active: 'المراقبة المباشرة نشطة',
      alerts_description: 'يراقب Securide24 Intelligence باستمرار مخاطر السفر العالمية وتعطلات التنقل والتطورات الأمنية التي قد تؤثر على حركة التنفيذيين واستمرارية العمليات.',
      solutions_support_title: 'دعم مخاطر قائم على الاستخبارات للبيئات المعقدة',
      solutions_support_body: 'تدعم خدماتنا اتخاذ القرار المستنير والتنقل الآمن واستمرارية العمليات.',
      operational_depth: 'العمق التشغيلي',
      regional_operational_familiarity: 'الإلمام التشغيلي الإقليمي',
      global_reach: 'الانتشار العالمي',
      worldwide_engagement: 'انخراط عالمي',
      global_engagement: 'تفاعل عالمي',
      global_monitoring_network: 'شبكة المراقبة العالمية',
      worldwide_observation_analysis: 'المراقبة والتحليل عالميًا',
      risk_assurance_approach: 'منهج ضمان المخاطر',
      intelligence_advisory_protection: 'استخبارات. استشارات. حماية.',
      explore_risk_assurance_approach: 'استكشف منهج ضمان المخاطر لدينا ->',
      global_intelligence_monitoring: 'المراقبة الاستخباراتية العالمية',
      travel_security_solutions: 'حلول أمن السفر',
      how_we_manage_risk: 'كيف ندير المخاطر',
      case_studies_subtitle: 'نتائج مثبتة في البيئات المعقدة.',
      view_all_case_studies: 'عرض جميع دراسات الحالة',
      cta_build_resilience: 'ابنِ المرونة قبل تصاعد المخاطر.',
      access_subscriber_portal: 'الدخول إلى بوابة المشتركين ->',
      contact_us: 'اتصل بنا',
      company: 'الشركة',
      follow: 'تابعنا',
      security_operations: 'عمليات الأمن',
      crisis_coordination: 'تنسيق الأزمات',
      anticipate: 'التوقع',
      monitor: 'المراقبة',
      assess: 'التقييم',
      advise: 'الإرشاد',
      secure: 'التأمين',
      respond: 'الاستجابة',
      learn_more_caps: 'اعرف المزيد',
      access_report: 'الوصول إلى التقرير',
      solutions_structured_support: 'تقدم SECURIDE 24 استخبارات مخاطر منظمة وتخطيط تنقل تنفيذي وتنسيق حماية ودعم أزمات للمنظمات وصناع القرار في البيئات المعقدة والمتغيرة.',
      continuous_risk_analysis: 'تحليل مستمر للمخاطر واستخبارات عالمية.',
      safe_secure_travel_planning: 'تخطيط ودعم سفر آمن.',
      vip_security_coordination: 'تنسيق أمن التنفيذيين وكبار الشخصيات.',
      rapid_crisis_support: 'إدارة أزمات سريعة ودعم للحوادث.',
      expert_risk_guidance: 'إرشاد متخصص في المخاطر واستشارات استراتيجية.',
      op_depth_intro_1: 'رغم أن المقر الرئيسي في المملكة المتحدة، تحتفظ SECURIDE 24 بإلمام تشغيلي عميق',
      op_depth_intro_2: 'بالبيئات التي تتطلب فيها ديناميكيات المنطقة والتعرض للمخاطر تخطيطًا دقيقًا.',
      south_asia: 'جنوب آسيا',
      middle_east: 'الشرق الأوسط',
      africa: 'أفريقيا',
      focus_areas: 'مجالات التركيز:',
      south_asia_desc: 'وعي تشغيلي قوي وإلمام إقليمي في بيئات تؤثر فيها التطورات السياسية والبنية التحتية على السفر والأعمال.',
      middle_east_desc: 'تدعم SECURIDE 24 الجهات العاملة أو المسافرة إلى الشرق الأوسط عبر الاستشارات وتخطيط التنقل.',
      africa_desc: 'تدعم SECURIDE 24 العملاء في بيئات أفريقية مختارة من خلال الإسناد الاستشاري والتنسيق مع شركاء موثوقين.',
      global_engagement_desc: 'من قاعدتها في المملكة المتحدة، تدعم SECURIDE 24 المنظمات في السفر الدولي والمشاريع والمهام عبر بيئات معقدة ومتغيرة.',
      risk_assurance_subtitle: 'نموذج تشغيلي منسق يحول الوعي الموقفي إلى قرارات أمنية عملية قبل وأثناء وبعد الحركة.',
      intelligence_card_desc: 'مراقبة مستمرة للتطورات الجيوسياسية ومخاطر السفر والاضطرابات المدنية وتعطل البنية التحتية والتهديدات الناشئة',
      advisory_card_desc: 'إرشاد تشغيلي يحول الرؤى الاستخباراتية إلى توصيات عملية للتخطيط الآمن للحركة والسفر.',
      protection_card_desc: 'دعم تشغيلي منسق عبر شبكات وشركاء أمن موثوقين لضمان التنفيذ الآمن لخطط الحركة.',
      process_global_forecast: 'توقعات المخاطر العالمية',
      process_future_ready: 'جاهزون للمستقبل الآن',
      process_navigating_risk: 'إدارة المخاطر برؤية تشغيلية.',
      process_forecast_desc: 'يساعد تقرير Securide24 لتوقعات المخاطر العالمية 2026 القادة على الاستباق والتحرك بسرعة ودقة.',
      featured_reading: 'قراءة مميزة',
      uk_operational_advisory: 'إرشاد تشغيلي للمملكة المتحدة',
      travel_mobility_considerations: 'اعتبارات السفر والتنقل',
      uk_operational_desc: 'تقييم تهديدات حالي وإرشاد تشغيلي لسفر التنفيذيين والفعاليات والتخطيط الآمن للحركة داخل المملكة المتحدة.',
      executive_travel_risk_planning: 'تخطيط مخاطر سفر التنفيذيين',
      assured_mobility: 'تنقل موثوق في البيئات المعقدة',
      executive_travel_risk_desc: 'أطر تخطيط استراتيجية وبروتوكولات تشغيلية لحماية التنفيذيين والتنقل الآمن في البيئات عالية المخاطر.',
      incident_response_readiness: 'جاهزية الاستجابة للحوادث',
      structured_response: 'استجابة منظمة عندما يكون الوقت حاسمًا',
      incident_response_desc: 'بروتوكولات إدارة الأزمات وأطر تنسيق الحوادث المصممة لاتخاذ إجراء حاسم.',
      intelligence_monitoring_subtitle: 'يراقب مركز عمليات الأمن العالمي لدينا المخاطر الجيوسياسية وتهديدات السفر وتعطل التنقل لتقديم استخبارات فورية قابلة للتنفيذ.',
      travel_security_subtitle: 'حلول متكاملة لحماية التنفيذيين والمسافرين في بيئة تهديد معقدة وغير متوقعة.',
      executive_travel_security: 'أمن سفر التنفيذيين',
      executive_travel_security_desc: 'تدابير أمن وحماية مصممة خصيصًا للكوادر التنفيذية',
      corporate_exec_mobility_desc: 'حوكمة شاملة لمخاطر السفر للمؤسسات',
      secure_mobility_coordination_title: 'تنسيق التنقل الآمن',
      secure_mobility_coordination_desc: 'تنسيق مدفوع بالاستخبارات لعمليات نقل ومسارات تنفيذية آمنة',
      case_summit_title: 'تحصين مسارات القمة',
      case_summit_desc: 'تجزئة المسارات وتخطيط بدائل متعددة الطبقات لوفد متعدد المواقع تحت مخاطر مرتفعة.',
      case_incident_title: 'تمرين إخلاء حادث',
      case_incident_desc: 'تمرين إخلاء شامل خفّض زمن اتخاذ القرار وحسّن توقيت الحركة بنسبة 23٪.',
      case_convoy_title: 'إعادة توجيه موكب تنفيذي',
      case_convoy_desc: 'مسار بديل يحافظ على سلامة الشخصية واستمرارية الجدول دون اضطراب عام.',
      united_kingdom_hub: 'مركز المملكة المتحدة',
      pakistan_hub: 'مركز باكستان',
      north_america: 'أمريكا الشمالية',
      south_america: 'أمريكا الجنوبية',
      europe: 'أوروبا',
      africa_region: 'أفريقيا',
      asia_region: 'آسيا',
      oceania_region: 'أوقيانوسيا',
      primary_monitoring_node: 'عقدة المراقبة الرئيسية',
      countries_risk_alerts: 'تنبيهات مخاطر الدول',
      travel_risk_intelligence: 'استخبارات مخاطر السفر',
      real_time_threat_monitoring: 'مراقبة التهديدات في الوقت الحقيقي',
      mobility_risk_analysis: 'تحليل مخاطر التنقل',
      explore_intelligence_platform: 'استكشف منصة الاستخبارات ->',
      explore_travel_risk_solutions: 'استكشف حلول مخاطر السفر ->',
      delegation_security: 'أمن الوفود',
      crisis_preparedness: 'الجاهزية للأزمات',
      executive_transit: 'تنقل التنفيذيين',
      all_rights_reserved: '© 2026 SECURIDE 24. جميع الحقوق محفوظة.'
    }
  },
  phraseToKeyMap: {},

  init() {
    this.header = Utils.qs('.site-header');
    this.navItems = Utils.qsa('.nav-item[data-mega]');
    this.megaDropdowns = Utils.qsa('.mega-dropdown');
    this.menuBtn = Utils.qs('#menuBtn');
    this.menuOverlay = Utils.qs('#menuOverlay');
    this.menuClose = Utils.qs('.menu-close');
    this.normalizeOverlayMenu();
    this.menuExpandBtns = Utils.qsa('[data-menu-expand]');
    this.menuBackBtns = Utils.qsa('.menu-sub-back');
    this.currentMega = null;
    this.currentMenuSub = null;

    this.setupScrollHeader();
    this.setupLanguageSystem();
    this.setupMegaDropdowns();
    this.setupMenuOverlay();
    this.setupResponsiveHandlers();
  },

  setupLanguageSystem() {
    this.phraseToKeyMap = Object.entries(this.i18nPhrases).reduce((accumulator, entry) => {
      const [key, phrase] = entry;
      accumulator[phrase] = key;
      return accumulator;
    }, {});

    this.injectMegaLanguageControls();
    this.normalizeLanguageControls();
    this.setupGoogleTranslate();
    this.registerTranslatableElements();
    this.bindLanguageControls();

    const saved = this.getSavedLanguage();
    this.applyLanguage(saved || this.defaultLanguage);
  },

  setupGoogleTranslate() {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    if (!document.getElementById('google_translate_element')) {
      const container = document.createElement('div');
      container.id = 'google_translate_element';
      container.style.display = 'none';
      document.body.appendChild(container);
    }

    const initialize = () => {
      if (!window.google || !window.google.translate || !window.google.translate.TranslateElement) {
        return;
      }

      if (!document.querySelector('.goog-te-combo')) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'zh-CN,fr,ar',
            autoDisplay: false,
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
          },
          'google_translate_element'
        );
      }

      this.googleTranslateReady = true;
      if (this.googleTranslatePendingLang) {
        this.applyGoogleTranslateLanguage(this.googleTranslatePendingLang);
        this.googleTranslatePendingLang = null;
      }
    };

    const previousInit = window.googleTranslateElementInit;
    window.googleTranslateElementInit = () => {
      if (typeof previousInit === 'function') {
        try {
          previousInit();
        } catch (error) {
          // ignore previous init errors from external scripts
        }
      }
      initialize();
    };

    const existingScript = document.querySelector('script[src*="translate.google.com/translate_a/element.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
      return;
    }

    initialize();
  },

  setGoogleTranslateComboValue(value) {
    const combo = document.querySelector('.goog-te-combo');
    if (!combo) {
      return false;
    }

    combo.value = value;
    combo.dispatchEvent(new Event('change'));
    return true;
  },

  setGoogleTranslateCookie(lang) {
    const langMap = {
      en: 'en',
      zh: 'zh-CN',
      fr: 'fr',
      ar: 'ar'
    };

    const target = langMap[lang] || 'en';
    const cookieValue = `/en/${target}`;

    document.cookie = `googtrans=${cookieValue};path=/;max-age=31536000`;
    document.cookie = `googtrans=${cookieValue};domain=${location.hostname};path=/;max-age=31536000`;
  },

  applyGoogleTranslateLanguage(lang) {
    const langMap = {
      en: 'en',
      zh: 'zh-CN',
      fr: 'fr',
      ar: 'ar'
    };

    const target = langMap[lang] || 'en';

    this.setGoogleTranslateCookie(lang);

    if (!this.googleTranslateReady) {
      this.googleTranslatePendingLang = lang;
      return;
    }

    const changed = this.setGoogleTranslateComboValue(target);
    if (!changed) {
      this.googleTranslatePendingLang = lang;
      setTimeout(() => this.applyGoogleTranslateLanguage(lang), 250);
    }
  },

  injectMegaLanguageControls() {
    this.megaDropdowns.forEach((dropdown) => {
      const leftCol = dropdown.querySelector('.mega-left');
      if (!leftCol || leftCol.querySelector('.mega-language')) {
        return;
      }

      const languageBlock = document.createElement('div');
      languageBlock.className = 'menu-language mega-language';
      languageBlock.innerHTML = `
        <span class="menu-language-icon">EN</span>
        <button type="button" class="lang-btn" data-lang="en">EN</button>
        <button type="button" class="lang-btn" data-lang="zh">中文</button>
        <button type="button" class="lang-btn" data-lang="fr">FR</button>
        <button type="button" class="lang-btn" data-lang="ar">AR</button>
      `;

      leftCol.appendChild(languageBlock);
    });
  },

  normalizeLanguageControls() {
    const controls = Utils.qsa('.menu-language');
    controls.forEach((control) => {
      const icon = control.querySelector('.menu-language-icon');
      if (icon) {
        icon.textContent = 'EN';
      }

      control.querySelectorAll('button').forEach((button) => button.remove());

      const languages = [
        { value: 'en', label: 'EN' },
        { value: 'zh', label: '中文' },
        { value: 'fr', label: 'FR' },
        { value: 'ar', label: 'AR' }
      ];

      languages.forEach((language) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'lang-btn';
        button.dataset.lang = language.value;
        button.textContent = language.label;
        control.appendChild(button);
      });
    });
  },

  bindLanguageControls() {
    Utils.qsa('.lang-btn[data-lang]').forEach((button) => {
      button.addEventListener('click', () => {
        const lang = button.dataset.lang;
        this.applyLanguage(lang);
      });
    });
  },

  getSavedLanguage() {
    try {
      return localStorage.getItem(this.languageStorageKey);
    } catch (error) {
      return null;
    }
  },

  saveLanguage(lang) {
    try {
      localStorage.setItem(this.languageStorageKey, lang);
    } catch (error) {
      return;
    }
  },

  registerTranslatableElements() {
    const scope = [
      ...Utils.qsa('.site-header .nav-item'),
      ...Utils.qsa('.mega-dropdown .mega-left h3'),
      ...Utils.qsa('.mega-dropdown .mega-left p'),
      ...Utils.qsa('.mega-dropdown .overview-cta'),
      ...Utils.qsa('.mega-dropdown .mega-list a'),
      ...Utils.qsa('.menu-main-item'),
      ...Utils.qsa('.mobile-sub-title'),
      ...Utils.qsa('.menu-sub-overview'),
      ...Utils.qsa('.menu-sub-heading'),
      ...Utils.qsa('.menu-feature-card h5'),
      ...Utils.qsa('.menu-feature-card p'),
      ...Utils.qsa('.menu-feature-link'),
      ...Utils.qsa('.btn-contact'),
      ...Utils.qsa('.search-input'),
      ...Utils.qsa('.popular-searches h3'),
      ...Utils.qsa('.contact-panel .panel-label'),
      ...Utils.qsa('.contact-panel h2'),
      ...Utils.qsa('.contact-panel p'),
      ...Utils.qsa('.contact-panel button[type="submit"]'),
      ...Utils.qsa('.hero-page h1, .hero-page h2, .hero-page h3, .hero-page p'),
      ...Utils.qsa('.hero-page .btn, .hero-page .alert-cta, .hero-page .flow-label, .hero-page .process-step-label, .hero-page .case-eyebrow, .hero-page .status-indicator'),
      ...Utils.qsa('.hero-page .node-tooltip strong, .hero-page .node-tooltip span'),
      ...Utils.qsa('.site-footer h4, .site-footer a, .site-footer p')
    ];

    scope.forEach((element) => {
      if (!element) {
        return;
      }

      if (element.classList.contains('search-input')) {
        const placeholder = (element.getAttribute('placeholder') || '').trim();
        const key = this.phraseToKeyMap[placeholder];
        if (key) {
          element.dataset.i18nKey = key;
        }
        return;
      }

      const directText = this.getDirectTextContent(element).trim();
      const fallbackText = element.textContent.trim();
      const resolvedText = directText || fallbackText;
      const key = this.phraseToKeyMap[resolvedText];
      if (key) {
        element.dataset.i18nKey = key;
      }
    });
  },

  getDirectTextContent(element) {
    return Array.from(element.childNodes)
      .filter((node) => node.nodeType === Node.TEXT_NODE)
      .map((node) => node.nodeValue)
      .join(' ')
      .replace(/\s+/g, ' ')
      .trim();
  },

  setElementText(element, value) {
    const textNodes = Array.from(element.childNodes).filter((node) => node.nodeType === Node.TEXT_NODE);

    if (textNodes.length) {
      const primaryNode = textNodes.find((node) => node.nodeValue && node.nodeValue.trim()) || textNodes[0];
      primaryNode.nodeValue = ` ${value} `;
      return;
    }

    element.textContent = value;
  },

  translateByKey(key, lang) {
    if (lang === this.defaultLanguage) {
      return this.i18nPhrases[key] || '';
    }

    const languageTable = this.translations[lang] || {};
    return languageTable[key] || this.i18nPhrases[key] || '';
  },

  applyLanguage(lang) {
    if (!this.supportedLanguages.includes(lang)) {
      return;
    }

    Utils.qsa('[data-i18n-key]').forEach((element) => {
      const key = element.dataset.i18nKey;
      if (!key) {
        return;
      }

      const translated = this.translateByKey(key, lang);
      if (!translated) {
        return;
      }

      if (element.classList.contains('search-input')) {
        element.setAttribute('placeholder', translated);
        return;
      }

      this.setElementText(element, translated);
    });

    const iconLabel = this.languageLabel[lang] || 'EN';
    Utils.qsa('.menu-language-icon').forEach((icon) => {
      icon.textContent = iconLabel;
    });

    Utils.qsa('.lang-btn[data-lang]').forEach((button) => {
      button.classList.toggle('lang-active', button.dataset.lang === lang);
    });

    document.documentElement.lang = lang === 'zh' ? 'zh' : lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    this.applyGoogleTranslateLanguage(lang);
    this.saveLanguage(lang);
  },

  normalizeOverlayMenu() {
    if (!this.menuOverlay) {
      return;
    }

    this.menuOverlay.querySelectorAll('.menu-sub-back').forEach((button) => {
      button.textContent = '‹';
    });

    const platformsBtn = this.menuOverlay.querySelector('[data-menu-expand="platforms"]');
    const platformsSub = this.menuOverlay.querySelector('[data-menu-sub="platforms"]');

    if (platformsBtn) {
      platformsBtn.dataset.menuExpand = 'industries';
      platformsBtn.textContent = 'Industries';
    }

    if (platformsSub) {
      platformsSub.dataset.menuSub = 'industries';

      const mobileTitle = platformsSub.querySelector('.mobile-sub-title');
      if (mobileTitle) {
        mobileTitle.textContent = 'Industries';
      }

      const overviewLink = platformsSub.querySelector('.menu-sub-overview');
      if (overviewLink) {
        overviewLink.textContent = 'Industries Overview';
      }
    }

    const insightsBtn = this.menuOverlay.querySelector('[data-menu-expand="insights"]');
    if (insightsBtn) {
      const insightsItem = insightsBtn.closest('li');
      if (insightsItem) {
        insightsItem.remove();
      } else {
        insightsBtn.remove();
      }
    }

    const insightsSub = this.menuOverlay.querySelector('[data-menu-sub="insights"]');
    if (insightsSub) {
      insightsSub.remove();
    }
  },

  setupScrollHeader() {
    const onScroll = Utils.throttle(() => {
      if (window.scrollY > 50) {
        this.header.classList.add('scrolled');
      } else {
        this.header.classList.remove('scrolled');
      }
    }, 100);

    window.addEventListener('scroll', onScroll);
    onScroll();
  },

  setupMegaDropdowns() {
    this.navItems.forEach(item => {
      item.addEventListener('click', (event) => {
        event.stopPropagation();
        if (window.innerWidth <= 768) {
          return;
        }

        const megaType = item.dataset.mega;
        this.toggleMega(megaType);
      });
    });

    document.addEventListener('click', (event) => {
      if (!event.target.closest('.mega-dropdown') && !event.target.closest('.nav-item')) {
        this.closeAllMegas();
      }
    });

    Utils.onEscapeKey(() => this.closeAllMegas());
  },

  toggleMega(type) {
    const targetMega = Utils.qs(`.mega-dropdown[data-mega="${type}"]`);
    const targetNavItem = Utils.qs(`.nav-item[data-mega="${type}"]`);

    if (this.currentMega === type) {
      this.closeAllMegas();
      return;
    }

    this.closeAllMegas();

    if (targetMega && targetNavItem) {
      targetMega.classList.add('active');
      targetNavItem.classList.add('active');
      this.currentMega = type;
      Utils.lockScroll();
    }
  },

  closeAllMegas() {
    this.megaDropdowns.forEach((mega) => mega.classList.remove('active'));
    this.navItems.forEach((item) => item.classList.remove('active'));
    this.currentMega = null;

    if (this.canUnlockScroll()) {
      Utils.unlockScroll();
    }
  },

  setupMenuOverlay() {
    // Open menu
    this.menuBtn.addEventListener('click', () => this.openMenu());

    // Close menu
    this.menuClose.addEventListener('click', () => this.closeMenu());

    // Close on ESC
    Utils.onEscapeKey(() => {
      if (this.menuOverlay.classList.contains('active')) {
        this.closeMenu();
      }
    });

    // Close on backdrop click
    this.menuOverlay.addEventListener('click', (e) => {
      if (e.target === this.menuOverlay) {
        this.closeMenu();
      }
    });

    // Submenu expansion
    this.menuExpandBtns.forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        if (window.innerWidth <= 768) {
          return;
        }

        const subType = btn.dataset.menuExpand;
        this.showMenuSub(subType);
      });

      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const subType = btn.dataset.menuExpand;
        this.showMenuSub(subType);
      });
    });

    this.menuBackBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.backToMenuMain();
      });
    });
  },

  openMenu() {
    this.menuOverlay.classList.add('active');
    Utils.lockScroll();
    this.closeAllMegas(); // Close any open mega dropdowns

    if (window.innerWidth <= 768) {
      this.backToMenuMain();
      return;
    }

    this.showMenuSub('solutions');
  },

  closeMenu() {
    this.menuOverlay.classList.remove('active');
    Utils.unlockScroll();
    this.hideAllMenuSubs();
  },

  showMenuSub(type) {
    const isMobile = window.innerWidth <= 768;

    // Keep the left column selection aligned with the active submenu.
    this.menuExpandBtns.forEach(btn => btn.classList.remove('active'));

    const activeBtn = Utils.qs(`[data-menu-expand="${type}"]`);
    if (activeBtn) {
      activeBtn.classList.add('active');
    }

    // Hide all first
    Utils.qsa('.menu-sub-content').forEach(sub => sub.classList.remove('active'));

    // Show the target
    const target = Utils.qs(`[data-menu-sub="${type}"]`);
    if (target) {
      target.classList.add('active');
      this.currentMenuSub = type;

      if (isMobile) {
        this.menuOverlay.classList.add('mobile-sub-open');
      }
    }
  },

  backToMenuMain() {
    this.menuOverlay.classList.remove('mobile-sub-open');
    this.hideAllMenuSubs();
  },

  hideAllMenuSubs() {
    Utils.qsa('.menu-sub-content').forEach(sub => sub.classList.remove('active'));
    this.menuExpandBtns.forEach(btn => btn.classList.remove('active'));
    this.currentMenuSub = null;
  },

  setupResponsiveHandlers() {
    const onResize = Utils.debounce(() => {
      if (window.innerWidth <= 768) {
        this.closeAllMegas();
      } else {
        this.menuOverlay.classList.remove('mobile-sub-open');
      }
    }, 150);

    window.addEventListener('resize', onResize);
  },

  canUnlockScroll() {
    const isMenuOpen = this.menuOverlay && this.menuOverlay.classList.contains('active');
    const searchOverlay = Utils.qs('#searchOverlay');
    const contactPanel = Utils.qs('#contactPanel');
    const isSearchOpen = searchOverlay && searchOverlay.classList.contains('active');
    const isContactOpen = contactPanel && contactPanel.classList.contains('active');

    return !isMenuOpen && !isSearchOpen && !isContactOpen;
  }
};

// Export
if (typeof window !== 'undefined') {
  window.Navigation = Navigation;
}
