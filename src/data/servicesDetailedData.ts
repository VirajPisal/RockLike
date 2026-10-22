export interface SubServiceDetail {
  id: string;
  name: string;
  shortTagline: string;
  description: string;
  deliverables: string[];
  strategicImpact: string;
  timeline: string;
  deliverableFormat: string;
}

export interface ProcessPhase {
  phase: string;
  number: string;
  title: string;
  description: string;
  duration: string;
}

export interface MetricItem {
  value: string;
  label: string;
  subtext: string;
}

export interface ServiceDetailConfig {
  id: string;
  slug: string;
  title: string;
  fullTitle: string;
  category: string;
  heroBadge: string;
  tagline: string;
  heroHeadline: string;
  heroHeadlineAccent: string;
  heroImage: string;
  heroImageTag: string;
  introParagraph1: string;
  introParagraph2: string;
  subServicesHeading: string;
  subServices: SubServiceDetail[];
  metrics: MetricItem[];
  processTitle: string;
  processSubtitle: string;
  processSteps: ProcessPhase[];
  ctaHeadline: string;
  ctaSubtext: string;
}

export const allServicesDetailData: Record<string, ServiceDetailConfig> = {
  "branding": {
    id: "branding",
    slug: "branding",
    title: "Branding Solutions",
    fullTitle: "Branding Solutions & Visual Identity",
    category: "Identity & Visual Systems",
    heroBadge: "IDENTITY ARCHITECTURE & VISUAL SYSTEMS",
    tagline: "Building brands that command attention and stand the test of time.",
    heroHeadline: "Branding Solutions That Make You",
    heroHeadlineAccent: "Unforgettable.",
    heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=900&fit=crop&auto=format",
    heroImageTag: "IDENTITY THAT COMMANDS ATTENTION",
    introParagraph1: "At Rocklike Techventures, we transform businesses into iconic market leaders through rigorous brand strategy, timeless visual design, and comprehensive identity systems. We believe a brand is not merely a logo or a colour palette — it is the emotional and intellectual operating system of your business.",
    introParagraph2: "From core brand strategy and bespoke typography systems to exhaustive multi-channel guidelines and physical packaging, we craft every touchpoint with uncompromising precision. Whether you are launching an ambitious disruptive startup or repositioning a legacy enterprise, we deliver brand equity engineered to compound in value over decades.",
    subServicesHeading: "Sub Services Included",
    subServices: [
      {
        id: "brand-identity",
        name: "Brand Identity & Logo Design",
        shortTagline: "Iconic marks engineered to own mindshare across every digital and physical touchpoint.",
        description: "We craft versatile, memorable logo marks and comprehensive visual identity systems. Rooted in semiotic research and geometric harmony, our identity systems scale flawlessly from a 16px favicon to giant stadium billboards without losing an ounce of authority.",
        deliverables: [
          "Primary, Secondary & Responsive Logo Lockups",
          "Custom Monograms & Vector Brand Marks",
          "Color Palette Architecture (RGB, CMYK, Pantone)",
          "Typography Scale & Font Pairing Specifications",
          "Production-Ready Asset Formats (SVG, EPS, AI, PNG)"
        ],
        strategicImpact: "Increases immediate brand recognition by up to 80% and establishes instant enterprise authority in competitive bids.",
        timeline: "2 - 3 Weeks",
        deliverableFormat: "Vector Master Package + Cloud Asset Library"
      },
      {
        id: "brand-guidelines",
        name: "Brand Guidelines & Playbooks",
        shortTagline: "The definitive living operating manual for your global brand consistency.",
        description: "A bulletproof brand book that eliminates visual inconsistencies forever. We document clear, pragmatic rules for spacing, contrast, photography styles, typography hierarchies, and tone of voice so any designer or marketing partner executes flawlessly.",
        deliverables: [
          "Comprehensive Brand Standards Manual (60+ pages)",
          "Clear-Space & Minimum Size Governance",
          "Photography & Motion Art Direction Guidelines",
          "Tone of Voice & Messaging Matrix",
          "Print & Digital Application Blueprints"
        ],
        strategicImpact: "Prevents brand dilution across distributed global teams and cuts agency onboarding time by 65%.",
        timeline: "1 - 2 Weeks",
        deliverableFormat: "Interactive Digital Brand Book + PDF Manual"
      },
      {
        id: "corporate-branding",
        name: "Corporate Branding Systems",
        shortTagline: "Enterprise-grade identity architecture that commands respect from institutional stakeholders.",
        description: "Tailored for conglomerates, B2B enterprises, and scaling corporations. We unify disparate business units, acquisitions, and daughter brands under a coherent architectural framework that projects institutional strength and stability.",
        deliverables: [
          "Executive Stationery & Digital Letterhead Systems",
          "Master Pitch Deck & Annual Report Templates",
          "Enterprise Signage & Architectural Environments",
          "Internal Brand Culture & Staff Collateral",
          "Investor Relations & Press Kit Identity"
        ],
        strategicImpact: "Strengthens investor confidence and commands premium valuation multiples during fundraising or M&A.",
        timeline: "3 - 4 Weeks",
        deliverableFormat: "Enterprise Master Template Suite (Figma, Office, Adobe)"
      },
      {
        id: "rebranding-refresh",
        name: "Rebranding & Brand Refresh",
        shortTagline: "Revitalizing heritage brands for modern relevance without sacrificing historical equity.",
        description: "When market dynamics shift or your brand outgrows its original container, we manage surgical brand refreshes. We retain the valuable recognition you've built while modernizing your aesthetic for digital-first audiences.",
        deliverables: [
          "Brand Equity & Legacy Visual Audit",
          "Strategic Refresh Delta & Modernization Map",
          "Phased Migration & Deprecation Roadmap",
          "External Rebrand Announcement Campaign Creatives",
          "Stakeholder Alignment Workshops"
        ],
        strategicImpact: "Re-engages dormant customer bases and elevates category positioning into modern premium tiers.",
        timeline: "4 - 6 Weeks",
        deliverableFormat: "Complete Rebrand Rollout Kit + Transition Guide"
      },
      {
        id: "packaging-design",
        name: "Packaging & Print Design",
        shortTagline: "Tactile, shelf-stopping product packaging engineered for unboxing delight.",
        description: "We transform three-dimensional physical packaging into powerful marketing vehicles. We consider substrate materials, foil finishes, sustainable structural die-lines, and unboxing rituals that turn customers into organic social advocates.",
        deliverables: [
          "Custom Dielines & Structural Packaging Concepts",
          "Primary Label & Secondary Box Packaging Artwork",
          "Specialty Finishing Specs (Spot UV, Foil, Emboss)",
          "Regulatory & Barcode Compliance Layouts",
          "Photorealistic 3D Renders for E-Commerce"
        ],
        strategicImpact: "Increases retail shelf grab-rate and drives higher organic user-generated unboxing content.",
        timeline: "2 - 3 Weeks",
        deliverableFormat: "Print-Ready Press Vector Dielines + 3D Mockups"
      },
      {
        id: "typography-colour",
        name: "Typography & Colour Architecture",
        shortTagline: "Psychologically calibrated color systems and bespoke typographic harmony.",
        description: "Color and type dictate subconscious emotional reactions. We calibrate custom chromatic systems engineered for accessible digital contrast (WCAG AAA) and pair them with expressive typography that reflects your brand's unique cadence.",
        deliverables: [
          "Primary, Secondary & Semantic Color Palettes",
          "Light/Dark Mode Digital Color Tokens",
          "Editorial Headline & Body Typographic Scales",
          "Webfont Licensing & CSS Variable Tokens",
          "Accessible Contrast Compliance Ratios"
        ],
        strategicImpact: "Dramatically improves digital readability, reduces cognitive friction, and reinforces subconscious recall.",
        timeline: "1 - 2 Weeks",
        deliverableFormat: "Design Token Export (CSS/JSON) + Typography Guide"
      },
      {
        id: "tone-of-voice",
        name: "Brand Tone of Voice & Messaging",
        shortTagline: "Clarifying your strategic narrative so your brand speaks with unmistakable authority.",
        description: "Visuals get people to look; language gets them to believe. We craft your core value propositions, elevator pitches, taglines, messaging pillars, and conversational dos-and-don'ts across marketing, sales, and customer service.",
        deliverables: [
          "Core Strategic Brand Narrative & Manifesto",
          "Pillars of Tone, Cadence & Personality",
          "Audience Persona Messaging Scripts",
          "Tagline & Headline Ideation Library",
          "Copywriting Examples Across Email, Web & Ads"
        ],
        strategicImpact: "Unifies marketing and sales copy, eliminating mixed messaging and accelerating deal closes.",
        timeline: "2 Weeks",
        deliverableFormat: "Copywriting Framework & Voice Guide"
      },
      {
        id: "digital-asset-systems",
        name: "Digital Asset Systems & UI Kits",
        shortTagline: "Production-ready digital design components that power fast, scalable web experiences.",
        description: "We bridge the gap between static brand design and dynamic digital products. We supply your web and product engineering teams with fully atomized UI component kits, vector icons, social media templates, and responsive banners.",
        deliverables: [
          "Figma Component Library with Auto-Layout",
          "Social Media Template Suite (Reels, Carousels, Posts)",
          "Vector Icon Set Designed on a Unified Grid",
          "Email Newsletter & CRM Templates",
          "Display Advertising Master Creative Suite"
        ],
        strategicImpact: "Enables internal marketing teams to ship branded campaigns 3x faster with zero design drift.",
        timeline: "2 - 3 Weeks",
        deliverableFormat: "Organized Figma Component Library + Ready Assets"
      }
    ],
    metrics: [
      { value: "240+", label: "Brands Launched", subtext: "Across 14 industries worldwide" },
      { value: "98.8%", label: "Client Approval", subtext: "On first-round strategic presentations" },
      { value: "3.4x", label: "Average Equity Lift", subtext: "Reported in post-rebrand valuation" }
    ],
    processTitle: "Our 5-Stage Identity Process",
    processSubtitle: "A battle-tested methodology blending strategic semiotics with high-craft digital execution.",
    processSteps: [
      { phase: "Discover", number: "01", title: "Audit & Competitive Archaeology", description: "Deep immersion into your market, competitors, customer sentiment, and operational ambitions.", duration: "Week 1" },
      { phase: "Define", number: "02", title: "Strategic Positioning Matrix", description: "Articulating your unique brand moat, audience personas, core values, and narrative thesis.", duration: "Week 2" },
      { phase: "Design", number: "03", title: "Identity Exploration & Craft", description: "Developing three distinct, high-fidelity visual directions with real-world application mockups.", duration: "Weeks 3-4" },
      { phase: "Develop", number: "04", title: "Systemization & Guidelines", description: "Fleshing out the chosen direction into an exhaustive multi-touchpoint design system.", duration: "Week 5" },
      { phase: "Deploy", number: "05", title: "Asset Rollout & Enablement", description: "Master asset packaging, cloud library handover, and team implementation training.", duration: "Week 6" }
    ],
    ctaHeadline: "Ready to Build an Unforgettable Brand?",
    ctaSubtext: "Book a strategic consultation with our brand architects and discover how we can elevate your market presence."
  },

  "video-production": {
    id: "video-production",
    slug: "video-production",
    title: "Video Production",
    fullTitle: "Video Production & Content Creation",
    category: "Cinematic Visuals & Motion",
    heroBadge: "CINEMATIC VISUALS & EDITORIAL DIRECTION",
    tagline: "High-concept visual storytelling engineered to stop the scroll and captivate audiences.",
    heroHeadline: "Stories That Move People and Drive",
    heroHeadlineAccent: "Unstoppable Momentum.",
    heroImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1600&h=900&fit=crop&auto=format",
    heroImageTag: "STORIES THAT MOVE PEOPLE",
    introParagraph1: "At Rocklike Techventures, our video production unit operates at the intersection of Hollywood cinematic craft and modern algorithmic performance. We produce content designed not merely to be viewed, but to provoke visceral emotional reactions and compel concrete viewer action.",
    introParagraph2: "From high-concept 4K brand commercials and narrative documentaries to fast-turnaround viral social reels and intricate 3D motion graphics, we manage the entire lifecycle in-house: concept development, scriptwriting, talent casting, studio production, and color grading.",
    subServicesHeading: "Sub Services Included",
    subServices: [
      {
        id: "brand-films",
        name: "Brand Films & Documentaries",
        shortTagline: "Cinematic narratives that articulate your enterprise mission with emotional gravity.",
        description: "Long-form visual masterpieces that immortalize your founding vision, customer transformations, or corporate milestones. Captured on RED and ARRI cinema camera systems with custom orchestral scoring.",
        deliverables: [
          "Director's Treatment & Storyboarding",
          "Scriptwriting & Executive Interview Direction",
          "Multi-Day 4K Cinema Production Crew",
          "Bespoke Sound Design & Original Score",
          "Color Grading in DaVinci Resolve Master Suite"
        ],
        strategicImpact: "Creates deep brand loyalty, commands investor admiration, and builds permanent cultural equity.",
        timeline: "3 - 5 Weeks",
        deliverableFormat: "4K DCI Masters + Web HDR Exports"
      },
      {
        id: "commercials",
        name: "TV & Digital Commercials",
        shortTagline: "High-energy commercial spots engineered for maximum memorability and conversions.",
        description: "15, 30, and 60-second commercials calibrated for streaming platforms (Hulu, YouTube, Netflix Ads) and traditional broadcast. Engineered with hook-first pacing to capture viewer attention within the first 2 seconds.",
        deliverables: [
          "Hook Ideation & Storyboard Variations",
          "Full Cast & Location Management",
          "High-Key Lighting & Set Construction",
          "Voiceover Casting & Multi-Language Audio",
          "Multi-Ratio Delivery (16:9, 9:16, 1:1, 4:5)"
        ],
        strategicImpact: "Drives 40% higher recall over standard ads and lowers acquisition costs on paid video campaigns.",
        timeline: "2 - 4 Weeks",
        deliverableFormat: "Broadcast Spec ProRes 422HQ + Web Optimised MP4"
      },
      {
        id: "social-reels",
        name: "High-Impact Social Reels & Shorts",
        shortTagline: "Algorithmic-native short-form content designed to capture millions of organic views.",
        description: "TikTok, Instagram Reels, and YouTube Shorts formatted to exploit modern attention spans. Dynamic kinetic subtitles, sound effects, meme culture literacy, and retention-maximizing editing rhythms.",
        deliverables: [
          "Trending Audio & Format Research",
          "Batch Scripting (15-30 pieces per cycle)",
          "Studio & Lifestyle Shooting Days",
          "Kinetic Typography & Dynamic Motion B-Roll",
          "A/B Hook Variations for Paid Scaling"
        ],
        strategicImpact: "Compounds organic social reach by millions without incurring recurring media spend.",
        timeline: "Weekly Batches",
        deliverableFormat: "Vertical 9:16 Ultra HD Reels with Baked Captions"
      },
      {
        id: "product-launches",
        name: "Product Launch Cinematics",
        shortTagline: "Apple-caliber product reveals that showcase every bevel, feature, and innovation.",
        description: "Give your physical or digital product the reveal it deserves. We combine extreme macro cinematography, controlled robotic camera motion, and photorealistic 3D product renders to showcase engineering perfection.",
        deliverables: [
          "Product Lighting & Macro Turntable Shoots",
          "Feature Callout Graphics & UI Tracking",
          "CAD to 3D Exploded View Animations",
          "Teaser Snippets for Social Media Countdown",
          "Keynote & Landing Page Hero Video Loops"
        ],
        strategicImpact: "Drives massive preorder volume and establishes perceived product value far above competitors.",
        timeline: "2 - 3 Weeks",
        deliverableFormat: "4K Keynote Video + WebM Lightweight Video Loops"
      },
      {
        id: "motion-graphics",
        name: "3D Motion Graphics & VFX",
        shortTagline: "Eye-popping visual effects and CGI animations that explain complex abstractions.",
        description: "When live-action cannot convey your technology or abstract vision, our 3D animators bring it to life in Cinema 4D, Blender, and Unreal Engine. Physics simulations, particle systems, and holographic UI.",
        deliverables: [
          "3D Concept Art & Style Frames",
          "Fluid & Particle Dynamic Simulations",
          "Complex Explainer & Architectural Walkthroughs",
          "Transparent Alpha Channel Motion Badges",
          "Sound FX Synchronized Audio Integration"
        ],
        strategicImpact: "Simplifies sophisticated technical concepts into intuitive, visually stunning assets.",
        timeline: "2 - 4 Weeks",
        deliverableFormat: "4K ProRes 4444 with Alpha + WebGL Assets"
      },
      {
        id: "corporate-profiles",
        name: "Corporate & Executive Profiles",
        shortTagline: "Polished thought leadership interviews that humanize executive leadership.",
        description: "Highlight your CEO, leadership bench, or talent culture. We create cinematic sit-down interviews that convey genuine authenticity, leadership vision, and company ethos.",
        deliverables: [
          "Multi-Camera Interview Setup with Soft Lighting",
          "On-Site Teleprompter & Media Coaching Support",
          "B-Roll Footage of Workplace & Collaboration",
          "Bite-Sized LinkedIn Cutdowns with Captions",
          "Full Archival Master File Delivery"
        ],
        strategicImpact: "Attracts tier-1 executive talent and strengthens relationship with key enterprise accounts.",
        timeline: "1 - 2 Weeks",
        deliverableFormat: "Long-form Profile + 5 LinkedIn Micro-Cuts"
      },
      {
        id: "event-coverage",
        name: "Event & Summit Aftermovies",
        shortTagline: "Electric highlight films that capture the energy and prestige of your live experiences.",
        description: "Fast-paced, adrenaline-pumping highlight videos from your summits, trade expos, and brand activations. We capture keynote addresses, crowd reactions, and behind-the-scenes moments with same-day turnaround available.",
        deliverables: [
          "Multi-Videographer On-Site Capture Crew",
          "Gimbal & Drone Aerial Footage",
          "Same-Day Teaser Cut for Social Feeds",
          "Official Cinematic Aftermovie (2-3 Minutes)",
          "Raw Footage Repository Cloud Archive"
        ],
        strategicImpact: "Drives early-bird ticket sales for subsequent editions and provides continuous marketing collateral.",
        timeline: "24-48 Hours Post-Event",
        deliverableFormat: "Full HD & 4K Event Master Reel"
      },
      {
        id: "post-production",
        name: "Post-Production & Color Grading",
        shortTagline: "Surgical editorial polish, sound engineering, and cinematic color science.",
        description: "Already shot footage? Let our master editors and colorists elevate it into a polished commercial film. We offer Hollywood-grade color grading, noise reduction, Foley sound design, and master mastering.",
        deliverables: [
          "Offline Rough Cut to Final Picture Lock Edit",
          "Custom Cinema LUT & Show LUT Creation",
          "Audio Denoising, Dialog Isolation & Master EQ",
          "Bilingual Subtitles & Closed Captioning (SRT)",
          "Platform Quality Control & Deliverable Formatting"
        ],
        strategicImpact: "Transforms average footage into high-end cinematic content that commands premium attention.",
        timeline: "3 - 7 Days",
        deliverableFormat: "Color Graded Master Files in All Industry Standard Codecs"
      }
    ],
    metrics: [
      { value: "1,200+", label: "Videos Produced", subtext: "Commercials, reels, and films" },
      { value: "48M+", label: "Combined Views", subtext: "Generated across global client campaigns" },
      { value: "4K DCI", label: "Master Quality", subtext: "Standard camera package across all shoots" }
    ],
    processTitle: "Our Production Blueprint",
    processSubtitle: "Seamless coordination from initial treatment to post-production color grading.",
    processSteps: [
      { phase: "Pre-Production", number: "01", title: "Creative Concept & Treatment", description: "Scriptwriting, storyboards, mood reels, talent casting, and location permits.", duration: "Weeks 1-2" },
      { phase: "Production", number: "02", title: "Principal Photography", description: "Executing the shoot with cinema gear, precision lighting, and directorial oversight.", duration: "Production Days" },
      { phase: "Post-Production", number: "03", title: "Editorial Cut & Sound", description: "Assembly cut, pacing refinement, sound design, and custom score placement.", duration: "Weeks 3-4" },
      { phase: "Color & Finish", number: "04", title: "Grading & Visual Effects", description: "Color grading in DaVinci, 3D VFX integration, and multi-platform aspect ratio exports.", duration: "Week 5" }
    ],
    ctaHeadline: "Ready to Create Content That Moves People?",
    ctaSubtext: "Schedule a creative briefing with our directorial team to discuss your next cinematic production."
  },

  "performance-marketing": {
    id: "performance-marketing",
    slug: "performance-marketing",
    title: "Performance Marketing",
    fullTitle: "Performance Marketing & Online Advertising",
    category: "Full-Funnel Growth & Acquisition",
    heroBadge: "ALGORITHMIC CUSTOMER ACQUISITION & ATTRIBUTION",
    tagline: "Growth engineered with scientific rigor — turning ad capital into compounding revenue.",
    heroHeadline: "Performance Marketing Engineered for",
    heroHeadlineAccent: "Predictable Scale.",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop&auto=format",
    heroImageTag: "DATA-DRIVEN REVENUE ENGINES",
    introParagraph1: "At Rocklike Techventures, we reject the notion that advertising is an unpredictable expense. We treat performance marketing as an engineered capital allocation vehicle where every dollar invested is tracked, optimized, and held ruthlessly accountable to bottom-line profitability.",
    introParagraph2: "By fusing predictive machine learning bidding, high-velocity creative testing, server-side attribution tracking, and deep conversion rate optimization (CRO), we build scalable customer acquisition machines across Google, Meta, TikTok, and Programmatic networks.",
    subServicesHeading: "Sub Services Included",
    subServices: [
      {
        id: "paid-search",
        name: "Paid Search & Google Ads (PMax)",
        shortTagline: "Capturing high-intent buyers at the precise moment they search for your solutions.",
        description: "We architect hyper-structured Google Search, Performance Max, and Shopping campaigns. Leveraging negative keyword sculpts, first-party data audiences, and custom value-based bidding scripts to dominate search results efficiently.",
        deliverables: [
          "Granular Search Campaign Architecture (SKAG/STAG)",
          "Performance Max Asset Group Strategy & Scripting",
          "Negative Keyword & Match-Type Optimization Engine",
          "Dynamic Search Ads & Responsive Search Copywriting",
          "Value-Based Smart Bidding Setup (tROAS / tCPA)"
        ],
        strategicImpact: "Increases high-intent conversion rate by 45% while reducing wasted non-converting search spend.",
        timeline: "Ongoing Sprint Engine",
        deliverableFormat: "Live Google Ads Architecture + Bi-Weekly Performance Logs"
      },
      {
        id: "paid-social",
        name: "Paid Social (Meta, TikTok, LinkedIn)",
        shortTagline: "Interrupting consumer feeds with compelling creative that forces conversions.",
        description: "Scalable advertising across Instagram, Facebook, TikTok, and LinkedIn. We match creative formats (UGC, founder stories, comparison charts, unboxing reels) with custom algorithmic targeting to scale spend without suffering ad fatigue.",
        deliverables: [
          "Broad & Lookalike Audience Segmentation",
          "High-Velocity Creative Testing Sandbox",
          "Dynamic Product Ads (DPA) & Catalog Sales Setup",
          "LinkedIn B2B Account-Based Marketing (ABM) Layer",
          "Ad Copy Variations Tailored to Buyer Psychological Angles"
        ],
        strategicImpact: "Enables stable monthly ad spend scaling from $10k to $250k+ without diminishing marginal returns.",
        timeline: "Weekly Iteration Cycle",
        deliverableFormat: "Active Ad Sets + Creative Performance Scorecards"
      },
      {
        id: "programmatic",
        name: "Programmatic Display & Video Ads",
        shortTagline: "Targeting institutional and high-net-worth audiences across premier digital publishers.",
        description: "Reach elite audiences beyond walled gardens. We utilize Demand-Side Platforms (DSPs) to buy high-impact digital out-of-home (DOOH), connected TV (CTV), and premium editorial banner placements with granular demographic filters.",
        deliverables: [
          "DSP Platform Setup & Deal ID Negotiation",
          "Connected TV (CTV) & OTT Video Ad Distribution",
          "High-Impact Rich Media Responsive Banners",
          "Geo-Fencing & Contextual Behavioral Targeting",
          "Brand Safety & Anti-Fraud Verification Filtering"
        ],
        strategicImpact: "Expands brand authority across top-tier digital publications (Forbes, Bloomberg, WSJ).",
        timeline: "Monthly Placement Flights",
        deliverableFormat: "Programmatic Distribution Dashboards"
      },
      {
        id: "full-funnel",
        name: "Full-Funnel Growth Architecture",
        shortTagline: "Unifying top-of-funnel awareness with bottom-of-funnel conversion and retention.",
        description: "Most agencies run ads in silos. We design unified customer journeys that gently usher cold prospects through awareness, education, objection handling, and conversion, backed by automated retargeting sequences.",
        deliverables: [
          "Multi-Touch Customer Journey Mapping",
          "Retargeting Sequence Architecture (Days 1-30)",
          "Lead Magnet & Tripwire Conversion Funnels",
          "Email & SMS Abandonment Integration",
          "Cohort LTV and Payback Period Financial Modeling"
        ],
        strategicImpact: "Shortens customer decision cycles and increases overall 90-day Customer Lifetime Value (LTV).",
        timeline: "2 Weeks to Deploy",
        deliverableFormat: "Figma Funnel Blueprints + Active Sequence Automation"
      },
      {
        id: "cro-optimization",
        name: "Conversion Rate Optimization (CRO)",
        shortTagline: "Turning your existing traffic into 2x to 3x more paying customers.",
        description: "Traffic without conversion is vanity. We conduct heatmap analysis, scroll tracking, and rigorous A/B split testing on your landing pages to eliminate friction points and maximize the revenue yield of every visitor.",
        deliverables: [
          "Qualitative Heatmap & User Session Recording Audits",
          "High-Converting Landing Page Design & Copywriting",
          "A/B Split Test Experiments via VWO / Optimizely",
          "Checkout & Form Flow Friction Reduction",
          "Mobile-First Speed & Performance Optimizations"
        ],
        strategicImpact: "Typically delivers a +25% to +60% increase in baseline conversion rate without increasing ad spend.",
        timeline: "Bi-Weekly Testing Sprints",
        deliverableFormat: "Custom Coded Landing Pages + Statistical Test Reports"
      },
      {
        id: "creative-testing",
        name: "Creative Testing & Iteration Engine",
        shortTagline: "Systematic weekly production and testing of new ad hooks and angles.",
        description: "In the modern algorithmic era, creative is the targeting. We operate a dedicated creative studio producing fresh video hooks, static carousels, and narrative angles each week to stay ahead of audience fatigue.",
        deliverables: [
          "Weekly Creative Strategy & Ideation Boards",
          "Hook Testing Matrices (3 Hooks × 3 Bodies × 3 CTAs)",
          "UGC Creator Briefing & Coordination",
          "Fatigue Detection & Automated Pausing Rules",
          "Creative Winner Iteration & Scaling Variants"
        ],
        strategicImpact: "Guarantees a continuous pipeline of winning ad creatives to fuel sustained revenue growth.",
        timeline: "Continuous Weekly Drops",
        deliverableFormat: "Figma Ad Boards + Batch Export Packages"
      },
      {
        id: "tracking-attribution",
        name: "Server-Side Tracking & Attribution",
        shortTagline: "Bulletproof first-party data infrastructure immune to iOS updates and cookie loss.",
        description: "Cookie degradation and privacy updates blinded traditional tracking. We implement robust Server-Side Google Tag Manager, Meta Conversions API (CAPI), and multi-touch attribution tools (Triple Whale, Northbeam).",
        deliverables: [
          "Server-Side Google Tag Manager (sGTM) Deployment",
          "Meta Conversions API (CAPI) & GA4 Integration",
          "Triple Whale / Northbeam Multi-Touch Attribution",
          "First-Party Data Enrichment & Offline Conversion Sync",
          "Custom Looker Studio Executive Dashboard"
        ],
        strategicImpact: "Restores up to 35% of lost attribution data, allowing ad algorithms to optimize with complete visibility.",
        timeline: "1 - 2 Weeks",
        deliverableFormat: "Cloud Infrastructure Setup + Real-Time Executive Dashboard"
      },
      {
        id: "retargeting-audiences",
        name: "Audience Segmentation & Retargeting",
        shortTagline: "Hyper-personalized messaging that recaptures high-intent drop-offs.",
        description: "We build granular dynamic audience clusters based on user on-site behavior: video viewers, category abandoners, high-AOV cart abandoners, and repeat purchasers, serving them customized incentives.",
        deliverables: [
          "Dynamic RFM (Recency, Frequency, Monetary) Segmentation",
          "Cross-Channel Cart Abandonment Triggers",
          "Custom Exclusions to Prevent Ad Fatigue",
          "VIP Customer Loyalty Retention Sequences",
          "Win-Back Campaigns for Inactive Subscribers"
        ],
        strategicImpact: "Generates high ROAS (often 6x - 12x) from high-intent warm traffic ready to purchase.",
        timeline: "Ongoing Optimization",
        deliverableFormat: "Custom Audience Rules in Ad Managers"
      }
    ],
    metrics: [
      { value: "$48M+", label: "Client Revenue Generated", subtext: "Attributed across our growth accounts" },
      { value: "4.8x", label: "Average Blended ROAS", subtext: "Across active e-commerce and lead accounts" },
      { value: "38%", label: "Average CPA Reduction", subtext: "Achieved within the first 60 days of management" }
    ],
    processTitle: "The Scientific Growth Framework",
    processSubtitle: "How we systematically turn uncertainty into compounding revenue.",
    processSteps: [
      { phase: "Audit", number: "01", title: "Data Archaeology & Tracking Setup", description: "Deploying server-side tracking, cleaning historical data, and identifying leakages.", duration: "Week 1" },
      { phase: "Architecture", number: "02", title: "Campaign & Funnel Engineering", description: "Restructuring campaigns, establishing bidding rules, and coding high-converting landing pages.", duration: "Week 2" },
      { phase: "Launch", number: "03", title: "Creative Sprint & Initial Testing", description: "Launching baseline ad sets with multi-angle creative variants to establish benchmarks.", duration: "Week 3" },
      { phase: "Scale", number: "04", title: "Algorithmic Scaling & Optimization", description: "Doubling down on winning combinations, expanding audiences, and scaling budgets profitably.", duration: "Weeks 4+" }
    ],
    ctaHeadline: "Ready to Scale Your Revenue Predictably?",
    ctaSubtext: "Claim a complimentary growth audit. We'll analyze your ad accounts and uncover immediate profit opportunities."
  },

  "social-media-marketing": {
    id: "social-media-marketing",
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    fullTitle: "Social Media Marketing & Brand Culture",
    category: "Community & Cultural Narrative",
    heroBadge: "CULTURAL MOMENTUM & COMMUNITY ARCHITECTURE",
    tagline: "Building hyper-engaged digital communities that turn casual followers into passionate brand advocates.",
    heroHeadline: "Social Media That Commands Culture and",
    heroHeadlineAccent: "Builds Die-Hard Advocates.",
    heroImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1600&h=900&fit=crop&auto=format",
    heroImageTag: "COMMUNITIES THAT GROW BRANDS",
    introParagraph1: "At Rocklike Techventures, we believe social media is no longer about broadcast scheduling — it is about cultural infiltration. Audiences don't want corporate announcements; they crave identity, entertainment, status, and community.",
    introParagraph2: "We design native social strategies that feel effortless yet operate with calculated precision. From editorial calendars and viral vertical video production to community moderation and creator collaborations, we transform your social channels into your brand's most vibrant cultural asset.",
    subServicesHeading: "Sub Services Included",
    subServices: [
      {
        id: "content-strategy",
        name: "Content Strategy & Editorial Roadmap",
        shortTagline: "Data-backed content pillars designed to balance brand authority with viral reach.",
        description: "We eliminate the guessing game from your content calendar. We define recurring content franchises, audience consumption habits, platform-specific tone rules, and publishing schedules engineered for algorithmic favor.",
        deliverables: [
          "Monthly 360° Editorial Content Calendar",
          "Platform-Specific Content Pillar Framework",
          "Competitor Social Tear-Down & Gap Analysis",
          "Hashtag & Keyword SEO Search Optimizations",
          "Publishing Cadence & Asset Distribution Plan"
        ],
        strategicImpact: "Establishes consistent publishing rhythm, boosts algorithmic trust score, and drives organic reach.",
        timeline: "Monthly Deliverables",
        deliverableFormat: "Interactive Notion/Airtable Workspace"
      },
      {
        id: "creative-production",
        name: "High-Engagement Creative Production",
        shortTagline: "Stop-the-scroll visuals, carousels, and motion graphics built for modern feeds.",
        description: "Our in-house design team produces bespoke carousels, infographic teardowns, motion graphics, and lifestyle still assets that look like high-end editorial magazines, instantly elevating your visual stature.",
        deliverables: [
          "Multi-Slide Educational & Storytelling Carousels",
          "Custom Motion Graphic Memes & Cultural Tweets",
          "Interactive Poll & Story Engagement Assets",
          "High-Resolution Branded Photography Edits",
          "Feed Aesthetic Harmony & Grid Layout Direction"
        ],
        strategicImpact: "Increases average post saves and shares by 300%, signaling high value to platform algorithms.",
        timeline: "Weekly Batches",
        deliverableFormat: "Ready-to-Post High-Res Assets + Captions"
      },
      {
        id: "community-management",
        name: "Community Management & Moderation",
        shortTagline: "Human-first conversational engagement that turns comment sections into community hubs.",
        description: "Social media is a two-way street. Our community specialists manage comments, DMs, story replies, and relevant conversations across the internet, replying with wit, empathy, and speed to foster fierce loyalty.",
        deliverables: [
          "7-Day Active DM & Comment Triage & Response",
          "Brand Voice FAQ & Escalation Protocol Playbook",
          "Proactive Commenting on Industry Peer Accounts",
          "Spam & Negative Sentiment Moderation",
          "Weekly Sentiment Analysis & Customer Feedback Reports"
        ],
        strategicImpact: "Transforms passive observers into passionate advocates and catches customer service issues early.",
        timeline: "Daily Active Management",
        deliverableFormat: "Real-Time Moderation + Weekly Reports"
      },
      {
        id: "influencer-partnerships",
        name: "Influencer & Creator Co-Creation",
        shortTagline: "Partnering with verified creators who authentically live and breathe your niche.",
        description: "We don't do hollow product placements. We identify, negotiate with, and direct authentic content creators who create genuine, relatable stories featuring your brand that drive real conversion.",
        deliverables: [
          "Targeted Influencer Roster Curation & Vetting",
          "Outreach, Negotiation & Legal Usage Contracts",
          "Creative Briefing & Whitelist Advertising Rights",
          "Sample Seeding & Logistics Management",
          "Campaign Performance & ROI Attribution Tracking"
        ],
        strategicImpact: "Injects immediate peer credibility and provides a steady stream of authentic third-party creative.",
        timeline: "Campaign Flights",
        deliverableFormat: "Creator Roster + Whitelisted Ad Creatives"
      },
      {
        id: "viral-campaigns",
        name: "Viral Social Campaign Ideation",
        shortTagline: "High-concept creative stunts and challenges engineered for mass cultural sharing.",
        description: "When you need a seismic jump in brand awareness, we orchestrate viral campaigns, social contests, and cultural activations that break through the noise and spark organic conversations across platforms.",
        deliverables: [
          "Disruptive Creative Campaign Treatments",
          "Contest Mechanics & Interactive Challenge Rules",
          "Coordinated Multi-Creator Launch Waves",
          "Press & Meme Aggregator Distribution Push",
          "Post-Campaign Engagement & Reach Analytics"
        ],
        strategicImpact: "Creates massive spikes in organic search volume and positions your brand at the cultural forefront.",
        timeline: "3 - 4 Weeks to Launch",
        deliverableFormat: "Complete Campaign Playbook + Launch Deck"
      },
      {
        id: "trend-jacking",
        name: "Trend Jacking & Real-Time Content",
        shortTagline: "Capitalizing on breaking cultural moments with lightning-fast brand relevance.",
        description: "The internet moves fast; slow brands get left behind. Our social monitors spot trending audios, viral formats, and cultural events within hours, crafting witty, on-brand adaptations before the moment passes.",
        deliverables: [
          "Daily Trend & Pop Culture Monitoring",
          "Same-Day Turnaround Meme & Reel Production",
          "Twitter/X Real-Time Banter Strategy",
          "Cultural Nuance & Brand Safety Clearance",
          "High-Velocity Rapid Feedback Loop"
        ],
        strategicImpact: "Humanizes your brand and capitalizes on existing algorithmic tailwinds for massive organic reach.",
        timeline: "Same-Day Deployment",
        deliverableFormat: "Rapid-Fire Social Assets"
      },
      {
        id: "paid-integration",
        name: "Paid Social Amplification Integration",
        shortTagline: "Pouring algorithmic fuel on your top-performing organic social winners.",
        description: "We connect organic social with paid advertising. Whenever an organic post demonstrates exceptional watch time or sharing velocity, we immediately put paid media behind it to scale its reach 100x.",
        deliverables: [
          "Organic Post Velocity Performance Triggers",
          "Dark Post & Partnership Ad Boost Setup",
          "Audience Warm-Up Sequences for Retargeting",
          "Cross-Channel Creative Syndication",
          "Paid vs Organic Attribution Correlation Modeling"
        ],
        strategicImpact: "Maximizes the ROI of organic content and drastically lowers cost-per-click on paid ads.",
        timeline: "Continuous Alignment",
        deliverableFormat: "Boosted Posts in Ad Manager"
      },
      {
        id: "social-analytics",
        name: "Social Listening & Sentiment Analytics",
        shortTagline: "Deep intelligence on audience sentiment, brand perception, and share of voice.",
        description: "Know what the market is saying about you before it becomes headline news. We track brand mentions, competitor chatter, and sentiment trends across millions of social touchpoints to refine strategy continuously.",
        deliverables: [
          "AI-Powered Social Listening Dashboard Setup",
          "Competitive Share of Voice (SOV) Benchmarks",
          "Audience Demographic & Psychographic Breakdown",
          "Virality Factor & Engagement Rate Scorecard",
          "Monthly Strategic Action Recommendations Deck"
        ],
        strategicImpact: "Provides executive leadership with real-time feedback on brand reputation and consumer sentiment.",
        timeline: "Monthly Intelligence Briefings",
        deliverableFormat: "Looker Studio Dashboard + PDF Executive Deck"
      }
    ],
    metrics: [
      { value: "50M+", label: "Organic Reach Generated", subtext: "Across managed client social handles" },
      { value: "8.4%", label: "Average Engagement Rate", subtext: "More than 4x above the industry standard" },
      { value: "340K+", label: "Net Followers Grown", subtext: "Genuine, targeted community members" }
    ],
    processTitle: "Our Community Architecture Process",
    processSubtitle: "How we turn passive social feeds into magnetic cultural hubs.",
    processSteps: [
      { phase: "Audit", number: "01", title: "Culture & Voice Calibration", description: "Analyzing audience demographics, historical performance, and finding your brand's unique tone.", duration: "Week 1" },
      { phase: "Systemize", number: "02", title: "Franchise & Template Design", description: "Building reusable content franchises, visual templates, and establishing the editorial roadmap.", duration: "Week 2" },
      { phase: "Produce", number: "03", title: "Batch Creative Production", description: "Filming reels, designing carousels, and writing engaging hooks 2 weeks ahead of schedule.", duration: "Ongoing" },
      { phase: "Engage", number: "04", title: "Live Community Amplification", description: "Publishing, active comment engagement, trend jacking, and boosting top performers.", duration: "Daily" }
    ],
    ctaHeadline: "Ready to Command the Social Conversation?",
    ctaSubtext: "Schedule a social strategy review. We'll show you the exact content roadmap to dominate your category."
  },

  "brand-building-strategies": {
    id: "brand-building-strategies",
    slug: "brand-building-strategies",
    title: "Brand Building & Strategies",
    fullTitle: "Brand Building & Enterprise Strategies",
    category: "Strategic Architecture & Positioning",
    heroBadge: "STRATEGIC POSITIONING & MARKET MOATS",
    tagline: "Engineering bulletproof market positioning, brand moats, and long-term enterprise value.",
    heroHeadline: "Strategic Brand Architecture That Unlocks",
    heroHeadlineAccent: "Category Dominance.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=900&fit=crop&auto=format",
    heroImageTag: "POSITIONING FOR LONGEVITY",
    introParagraph1: "At Rocklike Techventures, we understand that tactical execution without strategic architecture is merely noise. Before designing a single visual element or spending a rupee on ads, high-growth enterprises must clarify their fundamental right to win in the market.",
    introParagraph2: "We construct rigorous brand architecture, competitive moats, pricing psychology, and distinct strategic narratives that elevate your business out of commodity price wars and into defensible category leadership.",
    subServicesHeading: "Sub Services Included",
    subServices: [
      {
        id: "brand-positioning",
        name: "Brand Positioning & Differentiation",
        shortTagline: "Carving out an undisputed, high-margin category of one in your customers' minds.",
        description: "We identify your brand's unique value quadrant where competitors cannot follow. We synthesize competitor weaknesses, emerging macro trends, and customer pain points into a proprietary positioning statement that commands premium pricing.",
        deliverables: [
          "Strategic Category Positioning Map",
          "Unique Selling Proposition (USP) Articulation",
          "Value Proposition Canvas & Messaging Framework",
          "Competitive Moat Identification Document",
          "Executive Positioning Manifesto"
        ],
        strategicImpact: "Allows you to command 20% to 50% price premiums over competitors by escaping direct commoditization.",
        timeline: "2 - 3 Weeks",
        deliverableFormat: "Executive Strategy Dossier"
      },
      {
        id: "competitive-intelligence",
        name: "Competitive Intelligence & Market Audits",
        shortTagline: "Exhaustive forensic analysis of your rivals' strengths, flaws, and market blindspots.",
        description: "We conduct deep qualitative and quantitative investigations into rival brands: their pricing models, advertising spends, customer complaints, and SEO footprints, uncovering overlooked vulnerabilities you can exploit.",
        deliverables: [
          "Multi-Competitor Matrix & SWOT Deep Dive",
          "Price Elasticity & Market Share Breakdown",
          "Customer Sentiment & Review Sentiment Mining",
          "Whitespace Opportunity Identification Map",
          "Counter-Positioning Action Playbook"
        ],
        strategicImpact: "Eliminates blindspots and gives leadership absolute clarity on where to attack for market share.",
        timeline: "2 Weeks",
        deliverableFormat: "Competitive Intelligence Report"
      },
      {
        id: "brand-architecture",
        name: "Brand Architecture & Hierarchy",
        shortTagline: "Designing coherent relationships between master brands, sub-brands, and product lines.",
        description: "As businesses expand or acquire, brand hierarchies become tangled. We architect logical brand structures (Monolithic / Branded House vs. Pluralistic / House of Brands), ensuring clarity for consumers and operational synergy.",
        deliverables: [
          "Master Brand Architecture Hierarchy Blueprint",
          "Sub-Brand Extension Evaluation Rubric",
          "M&A Brand Integration Decision Tree",
          "Product Naming Conventions & Nomenclature",
          "Cross-Selling Visual Affinity Framework"
        ],
        strategicImpact: "Prevents customer confusion, streamlines marketing overhead, and maximizes cross-sell revenue.",
        timeline: "2 - 3 Weeks",
        deliverableFormat: "Architecture System Diagrams + Guidelines"
      },
      {
        id: "strategic-narrative",
        name: "Strategic Narrative & Value Propositions",
        shortTagline: "Crafting a compelling master story that aligns sales, marketing, and investors.",
        description: "The greatest companies are defined by an epochal narrative: an undeniable shift in the world, the old way failing, and a new way winning. We write your enterprise story to galvanize internal teams and mesmerize enterprise clients.",
        deliverables: [
          "The 'Shift in the World' Strategic Story Framework",
          "Buyer Transformation Journey Arc",
          "Executive Sales Deck Narrative Script",
          "Internal Town Hall Alignment Materials",
          "Customer Case Study Narrative Templates"
        ],
        strategicImpact: "Shortens enterprise sales cycles by making your solution feel like an inevitable historical necessity.",
        timeline: "2 Weeks",
        deliverableFormat: "Narrative Playbook & Slide Master"
      },
      {
        id: "growth-roadmap",
        name: "Multi-Year Growth Strategy Roadmap",
        shortTagline: "Phased strategic priorities aligning marketing investments with enterprise milestones.",
        description: "A pragmatic 12 to 36-month strategic execution blueprint. We define which markets to enter, which capabilities to build, when to launch new products, and how to allocate marketing budgets for optimal long-term enterprise valuation.",
        deliverables: [
          "3-Year Brand Maturity & Growth Horizon Model",
          "Key Performance Indicator (KPI) Milestones",
          "Resource Allocation & Hiring Recommendations",
          "Go-to-Market (GTM) Rollout Sequencing",
          "Quarterly Executive Review Framework"
        ],
        strategicImpact: "Keeps leadership teams focused on compounding priorities rather than chasing short-term shiny objects.",
        timeline: "3 Weeks",
        deliverableFormat: "Executive Roadmap Deck & Gantt Framework"
      },
      {
        id: "persona-mapping",
        name: "Consumer Persona & Journey Mapping",
        shortTagline: "Psychographic profiles and behavioral decision maps of your highest-value customers.",
        description: "Moving beyond superficial demographics like age or gender. We map the psychological anxieties, status aspirations, trigger moments, and evaluation criteria of your ideal customer profiles (ICPs).",
        deliverables: [
          "In-Depth Buyer Psychographic Dossiers",
          "End-to-End Decision Journey Touchpoint Maps",
          "Emotional Friction Points & Remedy Blueprint",
          "Key Influencer & Stakeholder Mapping (B2B)",
          "Customer Retention & Advocacy Trigger Points"
        ],
        strategicImpact: "Aligns your entire company around the real behavioral triggers that motivate customer purchasing.",
        timeline: "2 Weeks",
        deliverableFormat: "Persona Playbooks & Touchpoint Maps"
      },
      {
        id: "brand-governance",
        name: "Brand Governance & Internal Adoption",
        shortTagline: "Empowering internal teams to embody and safeguard the brand strategy daily.",
        description: "A strategy sitting on a shelf is useless. We design governance structures, review boards, and internal training workshops to ensure every employee, from sales to customer support, acts as a brand ambassador.",
        deliverables: [
          "Brand Governance Council Operating Charter",
          "Employee Brand Onboarding Immersion Kit",
          "Departmental Brand Activation Workshops",
          "Brand Compliance Audit Checklist",
          "Internal Recognition & Reward Program Framework"
        ],
        strategicImpact: "Builds a unified high-performance corporate culture aligned with external customer promises.",
        timeline: "2 Weeks",
        deliverableFormat: "Internal Culture Playbook + Training Slides"
      },
      {
        id: "category-creation",
        name: "Category Creation & Market Redefinition",
        shortTagline: "Designing a new market category where you write the rules and own 80% market share.",
        description: "Why compete in someone else's category when you can invent your own? We help bold disruptors define a novel market category, popularize new industry vocabulary, and establish themselves as the definitive category king.",
        deliverables: [
          "Category Point of View (POV) Whitepaper",
          "Proprietary Terminology & Industry Glossary",
          "Category Evangelism Playbook",
          "Analyst (Gartner/Forrester) Briefing Strategy",
          "Category Launch Stunt Concept"
        ],
        strategicImpact: "Category kings routinely capture 76% of total industry market cap and command premium valuations.",
        timeline: "4 Weeks",
        deliverableFormat: "Category Creation Manifesto & Launch Strategy"
      }
    ],
    metrics: [
      { value: "180+", label: "Brands Repositioned", subtext: "From startups to publicly listed conglomerates" },
      { value: "+64%", label: "Average Margin Lift", subtext: "Recorded after positioning implementation" },
      { value: "12", label: "Category Kings Created", subtext: "Now defining their respective industries" }
    ],
    processTitle: "The Strategic Rigor Blueprint",
    processSubtitle: "A disciplined five-phase framework for establishing defensible market leadership.",
    processSteps: [
      { phase: "Immersion", number: "01", title: "Internal & External Diagnostics", description: "Executive interviews, customer listening sessions, and competitive forensic analysis.", duration: "Week 1" },
      { phase: "Hypothesis", number: "02", title: "Whitespace Moat Discovery", description: "Identifying high-margin positioning options where competitors cannot easily follow.", duration: "Week 2" },
      { phase: "Codification", number: "03", title: "Architecture & Narrative Design", description: "Drafting the strategic positioning manifesto, brand architecture, and value propositions.", duration: "Weeks 3-4" },
      { phase: "Activation", number: "04", title: "Roadmap & Organizational Alignment", description: "Delivering the multi-year growth roadmap and training key leadership teams.", duration: "Week 5" }
    ],
    ctaHeadline: "Ready to Architect an Undisputed Market Moat?",
    ctaSubtext: "Consult with our senior strategy partners to analyze your category dynamics and unlock new enterprise value."
  },

  "celebrity-management": {
    id: "celebrity-management",
    slug: "celebrity-management",
    title: "Celebrity Management",
    fullTitle: "Celebrity Management & Influencer Talent",
    category: "Talent Curation & Cultural Endorsements",
    heroBadge: "HIGH-IMPACT TALENT & STRATEGIC ENDORSEMENTS",
    tagline: "Connecting visionary brands with cultural icons that command undivided public attention.",
    heroHeadline: "Celebrity Partnerships Engineered for",
    heroHeadlineAccent: "Maximum Cultural Clout.",
    heroImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1600&h=900&fit=crop&auto=format",
    heroImageTag: "TALENT THAT CREATES IMPACT",
    introParagraph1: "At Rocklike Techventures, our talent and celebrity management division transforms star power into measurable brand equity. We bridge the gap between corporate strategy and cultural celebrity, orchestrating partnerships that feel organic, authentic, and culturally resonant.",
    introParagraph2: "From A-list celebrity brand ambassadorships and sports icon endorsements to high-tier creator integrations and private event appearances, we manage the entire ecosystem: talent scouting, contract negotiations, image rights, production coordination, and PR amplification.",
    subServicesHeading: "Sub Services Included",
    subServices: [
      {
        id: "a-list-endorsements",
        name: "A-List Celebrity Endorsements",
        shortTagline: "Securing national and global cultural icons to become the face of your brand.",
        description: "We identify and secure tier-one film stars, celebrated artists, and household names who perfectly align with your brand ethos, elevating your company to instant mainstream prominence and consumer trust.",
        deliverables: [
          "Targeted Celebrity Alignment Analysis & Feasibility Study",
          "Direct Talent Agency & Manager Outreach",
          "Contract Terms & Morality Clause Structuring",
          "Commercial Shoot Scheduling & Coordination",
          "Press Release & National Media Launch Strategy"
        ],
        strategicImpact: "Generates massive mainstream brand recognition overnight and establishes tier-one credibility.",
        timeline: "3 - 6 Weeks",
        deliverableFormat: "Executed Legal Contracts + Production Schedules"
      },
      {
        id: "macro-micro-matching",
        name: "Tier-1 Macro & Micro Influencer Matching",
        shortTagline: "Curated influencer cohorts designed for high-conversion hyper-targeted reach.",
        description: "Beyond raw follower counts, we evaluate audience authenticity, comment quality, engagement velocity, and demographic overlap to assemble high-performing creator rosters for targeted product launches.",
        deliverables: [
          "Algorithmic Audience Integrity & Fraud Audits",
          "Custom Influencer Match Scorecards",
          "Rate Card Benchmark & Fee Negotiation",
          "Campaign Briefing & Deliverable Tracking",
          "Real-Time Link & Promo Code Performance Dashboards"
        ],
        strategicImpact: "Delivers cost-effective customer acquisition with genuine peer recommendations and higher trust.",
        timeline: "1 - 2 Weeks",
        deliverableFormat: "Vetted Creator Roster + Performance Dashboard"
      },
      {
        id: "talent-outreach",
        name: "Talent Outreach & Representation",
        shortTagline: "Professional, confidential negotiation on your behalf with premier talent agencies.",
        description: "Navigating talent agents, managers, and publicists requires finesse and established industry relationships. We protect your brand budget and reputation, negotiating favorable commercial terms and usage rights.",
        deliverables: [
          "Confidential Representation & Outreach Inquiries",
          "Scope of Work (SOW) & Deliverable Articulation",
          "Competitive Compensation Benchmarking",
          "Exclusivity Clause & Competitor Restrictions",
          "Contingency & Replacement Protections"
        ],
        strategicImpact: "Saves up to 30% on standard talent booking fees through direct relationships and seasoned negotiation.",
        timeline: "1 - 2 Weeks",
        deliverableFormat: "Formal Talent Term Sheets"
      },
      {
        id: "contract-negotiation",
        name: "Contract Negotiation & Legal Rights",
        shortTagline: "Ironclad legal contracts safeguarding intellectual property, usage rights, and brand safety.",
        description: "We safeguard your investment with bespoke legal agreements covering territorial rights, digital and TV broadcasting periods, social media deliverables, force majeure, morality clauses, and dispute resolution.",
        deliverables: [
          "Comprehensive Celebrity Service Agreement (CSA)",
          "Digital & Broadcast Media Usage Rights Clearances",
          "Morality & Brand Safety Termination Triggers",
          "Likeness, Voice & AI Reproduction Protections",
          "Payment Escrow & Deliverable Milestone Structuring"
        ],
        strategicImpact: "Eliminates legal vulnerabilities and guarantees maximum commercial return on talent spend.",
        timeline: "1 - 2 Weeks",
        deliverableFormat: "Executed Legal Agreements"
      },
      {
        id: "creative-briefing",
        name: "Creative Briefing & Directorial Coordination",
        shortTagline: "Translating corporate objectives into talent-friendly creative concepts that inspire stars.",
        description: "Celebrities perform best when given inspired, respectful creative direction. We craft bespoke treatments and scripts that allow their natural charisma to shine through while hitting every mandatory brand message.",
        deliverables: [
          "Celebrity-Tailored Director's Script & Vision Deck",
          "Wardrobe, Styling & Aesthetic Coordination",
          "Pre-Production Rehearsal & Alignment Calls",
          "On-Brand Talking Points & Improvisation Boundaries",
          "Green-Room & Rider Hospitality Management"
        ],
        strategicImpact: "Ensures seamless, frictionless production days where talent is genuinely excited to champion your brand.",
        timeline: "1 - 2 Weeks Prior to Shoot",
        deliverableFormat: "Creative Briefing Deck + Talent Call Sheets"
      },
      {
        id: "on-set-supervision",
        name: "On-Set Production Supervision",
        shortTagline: "White-glove executive coordination on set to ensure perfect execution without delays.",
        description: "Our dedicated talent handlers manage every moment of the production day: VIP transportation, security, glam teams, catering riders, and time management, keeping talent energized and focused on delivering brilliant takes.",
        deliverables: [
          "Dedicated Celebrity Handler & Liaison On-Site",
          "VIP Green Room Hospitality & Rider Execution",
          "Time Tracking & Contractual Hour Compliance",
          "Directorial Review of Mandatory Shot Clearances",
          "Signed On-Set Release Forms & Approvals"
        ],
        strategicImpact: "Guarantees zero on-set drama, prevents costly overtime overruns, and keeps talent delighted.",
        timeline: "Shoot Days",
        deliverableFormat: "On-Site Management + Wrap Reports"
      },
      {
        id: "pr-synergy",
        name: "Campaign Amplification & PR Synergy",
        shortTagline: "Leveraging celebrity moments into national entertainment headlines and viral social frenzy.",
        description: "A celebrity campaign shouldn't live only on your ad account. We synchronize the announcement with premier entertainment news publications, paparazzi moments, red carpets, and coordinated social blitzes.",
        deliverables: [
          "Entertainment & Trade Media Press Kit Release",
          "Exclusive Reveal Stories with Leading Media Houses",
          "Coordinated Talent Social Media Post Scheduling",
          "Behind-the-Scenes (BTS) Viral Content Cutdowns",
          "Earned Media Value (EMV) Measurement Report"
        ],
        strategicImpact: "Generates massive earned media coverage (often 4x to 8x paid ad spend value) through PR virality.",
        timeline: "Launch Week",
        deliverableFormat: "PR Coverage Dossier + EMV Scorecard"
      },
      {
        id: "long-term-ambassadors",
        name: "Usage Rights & Long-Term Ambassadorships",
        shortTagline: "Structuring multi-year brand ambassadorships with equity or royalty alignments.",
        description: "Move beyond transactional one-off shoots. We structure deep, multi-year strategic ambassadorships where talent becomes deeply invested in your brand's growth, including equity incentives and advisory board seats.",
        deliverables: [
          "Multi-Year Brand Ambassadorship Master Contracts",
          "Equity & Performance Milestone Advisory Structure",
          "Annual Appearance Schedule & Keynote Commitments",
          "Ongoing Social Media Minimum Post Quotas",
          "Renewals & Exclusive Category Rights Management"
        ],
        strategicImpact: "Cement permanently associated brand prestige and creates long-term cultural moats against competitors.",
        timeline: "Annual & Multi-Year Agreements",
        deliverableFormat: "Ambassador Master Agreements"
      }
    ],
    metrics: [
      { value: "120+", label: "Campaigns Executed", subtext: "With leading actors, musicians, and sports icons" },
      { value: "3.8x", label: "Average Earned Media Value", subtext: "Generated above direct campaign investment" },
      { value: "100%", label: "Contractual Delivery", subtext: "Flawless on-time execution without legal disputes" }
    ],
    processTitle: "The Talent Curation Blueprint",
    processSubtitle: "How we navigate the celebrity landscape to deliver high-impact partnerships.",
    processSteps: [
      { phase: "Scouting", number: "01", title: "Brand Synergy & Feasibility", description: "Auditing talent demographics, public affinity, brand safety records, and budget fit.", duration: "Week 1" },
      { phase: "Negotiation", number: "02", title: "Outreach & Deal Structuring", description: "Direct negotiations with talent management, locking deliverables, exclusivity, and pricing.", duration: "Weeks 2-3" },
      { phase: "Production", number: "03", title: "Creative & On-Set Execution", description: "Full on-set handling, shoot coordination, script direction, and asset approvals.", duration: "Week 4" },
      { phase: "Amplification", number: "04", title: "PR Blitz & Media Synergy", description: "Coordinated social launch, press distribution, and multi-channel campaign rollout.", duration: "Weeks 5+" }
    ],
    ctaHeadline: "Ready to Connect Your Brand With Cultural Star Power?",
    ctaSubtext: "Speak with our celebrity talent directors to explore strategic partnerships tailored to your brand."
  },

  "event-designing": {
    id: "event-designing",
    slug: "event-designing",
    title: "Event Designing",
    fullTitle: "Event Designing & Spatial Environments",
    category: "Immersive Spaces & Spatial Branding",
    heroBadge: "SPATIAL ARCHITECTURE & IMMERSIVE ENVIRONMENTS",
    tagline: "Transforming physical and hybrid spaces into unforgettable, world-class brand experiences.",
    heroHeadline: "Design Experiences That Captivate and",
    heroHeadlineAccent: "Leave an Indelible Mark.",
    heroImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&h=900&fit=crop&auto=format",
    heroImageTag: "EVENTS THAT BRING PEOPLE CLOSER",
    introParagraph1: "At Rocklike Techventures, we transform corporate events and product launches into immersive visual experiences. We design cohesive, high-impact aesthetic environments that capture your brand's essence and leave a lasting impression on your attendees.",
    introParagraph2: "From thematic event concepts and stage/set visual designs to high-resolution backdrops, stall branding, and digital event collaterals, we manage every visual touchpoint. Whether you are hosting an intimate product launch, an international exhibition, or a large-scale corporate conference, we ensure your event space is visually stunning and seamlessly branded.",
    subServicesHeading: "Sub Services Included",
    subServices: [
      {
        id: "ed-concept",
        name: "Event Concept & Theme",
        shortTagline: "The cohesive narrative and emotional north star that runs through every physical touchpoint.",
        description: "Every legendary event begins with a powerful creative thesis. We articulate a bespoke theme, mood boards, sensory cues, and spatial narrative that transforms an ordinary venue into an unforgettable physical world.",
        deliverables: [
          "Master Creative Concept Treatment & Theme Document",
          "Mood Boards, Material Swatches & Visual References",
          "Spatial Storytelling Narrative & Guest Journey",
          "Sensory Experience Architecture (Sound, Light, Texture)",
          "Executive Presentation Pitch Deck for Stakeholders"
        ],
        strategicImpact: "Unifies the entire event under a single memorable concept, increasing attendee retention and word-of-mouth.",
        timeline: "1 - 2 Weeks",
        deliverableFormat: "Creative Treatment Dossier + Mood Board Suite"
      },
      {
        id: "ed-branding",
        name: "Event Branding",
        shortTagline: "A comprehensive, high-impact visual identity system designed specifically for the event.",
        description: "We craft an exclusive identity for your event that complements your master brand while feeling special and urgent: custom event typography, dynamic badges, signage systems, and digital promotional touchpoints.",
        deliverables: [
          "Event Logo, Wordmark & Symbolic Iconography",
          "Dynamic Event Color Palette & Typography Hierarchy",
          "Physical & Digital Signage Wayfinding System",
          "Badges, Lanyards & Delegate Pass Design",
          "Event Brand Standards & Production Guidelines"
        ],
        strategicImpact: "Gives your event institutional authority, encouraging social media photography and sponsorship prestige.",
        timeline: "2 Weeks",
        deliverableFormat: "Event Identity Guide + Vector Production Assets"
      },
      {
        id: "ed-stage",
        name: "Stage & Set Design",
        shortTagline: "Architectural-grade stage concepts, 3D renders, and monumental keynote environments.",
        description: "The stage is the focal altar of your event. We engineer breathtaking 3D stage designs featuring curved LED walls, dramatic architectural lighting, scenic podiums, and dynamic spatial layers that frame speakers with cinematic majesty.",
        deliverables: [
          "3D Spatial Photorealistic Stage Renders & Fly-Throughs",
          "Architectural Elevation Blueprints & Dielines",
          "Lighting Rig & DMX Fixture Coordinate Plans",
          "Scenic Carpentry & Material Finish Specifications",
          "Audio-Visual (AV) & Technical Supplier Production Brief"
        ],
        strategicImpact: "Elevates speaker authority and ensures every keynote photograph looks like a premier global summit.",
        timeline: "2 - 3 Weeks",
        deliverableFormat: "3D CAD/Render Package + Technical Schematics"
      },
      {
        id: "ed-backdrop",
        name: "Backdrop & Display Design",
        shortTagline: "High-resolution media walls, step-and-repeats, and photo-opportunity installations.",
        description: "We engineer press backdrops, photo walls, registration booths, and display structures calibrated for camera flash, glare-free matte finishes, and optimal social media framing (16:9 and 9:16 vertical).",
        deliverables: [
          "VIP Red Carpet Step-and-Repeat Backdrops",
          "Interactive 3D Photo Booth & Selfie Installations",
          "Registration Desk & Welcome Portal Graphics",
          "Floor Graphics & Spatial Wayfinding Decals",
          "Large-Format High-Resolution Print Ready Files"
        ],
        strategicImpact: "Maximizes earned organic social impressions as attendees eagerly photograph and post from branded installations.",
        timeline: "1 Week",
        deliverableFormat: "Print-Ready Vector Press Artworks at 1:1 Scale"
      },
      {
        id: "ed-digital",
        name: "Digital Event Creatives",
        shortTagline: "Mesmerizing LED wall loop content, keynote motion graphics, and interactive digital signage.",
        description: "Static stages are a relic of the past. We create seamless high-resolution motion graphic loops for massive LED backdrops, dynamic speaker intro stings, countdown sequences, and interactive attendee screens.",
        deliverables: [
          "Ultra-Wide Aspect Ratio LED Wall Motion Backgrounds",
          "Speaker Intro Motion Bumpers & Lower Thirds",
          "Keynote Presentation Master Deck Template (16:9)",
          "Live Twitter/Q&A Interactive Social Wall Integration",
          "Digital Agenda Screens & Real-Time Schedule Displays"
        ],
        strategicImpact: "Keeps energy and visual spectacle peak-level throughout hours of conference sessions.",
        timeline: "1 - 2 Weeks",
        deliverableFormat: "4K / 8K Pixel-Mapped Video Files (HAP / ProRes / MP4)"
      },
      {
        id: "ed-corporate",
        name: "Corporate Event Design",
        shortTagline: "Sophisticated visual environments for leadership retreats, AGMs, and global partner summits.",
        description: "When executive leaders, board members, and global partners gather, every detail must convey prestige and purpose. We design end-to-end environments that facilitate focused strategic discourse and collaborative celebration.",
        deliverables: [
          "Conference Spatial Zone Mapping & Acoustic Planning",
          "Breakout Session Room Themes & Environmental Graphics",
          "Executive Table Setting & Gala Dinner Centerpiece Design",
          "Delegate Kits, Notebooks & Executive Gifting Sets",
          "VIP Lounge & Private Meeting Room Environmental Branding"
        ],
        strategicImpact: "Strengthens corporate culture, aligns leadership, and reinforces high institutional stature.",
        timeline: "2 - 3 Weeks",
        deliverableFormat: "Full Environmental Blueprint & Vendor Specs"
      },
      {
        id: "ed-launch",
        name: "Product Launch Design",
        shortTagline: "Dramatic reveal staging, experiential showcases, and press-worthy unveiling moments.",
        description: "A product launch is theater. We choreograph dramatic unveilings with timed lighting sequences, motorized reveal structures, interactive hands-on demo pods, and media stations that turn releases into cultural moments.",
        deliverables: [
          "Product Reveal Choreography & Kinetic Staging",
          "Hands-On Interactive Demo Pod Architecture",
          "Media Testing Station & Tech Spec Display Stands",
          "Press Gift Packaging & Embossed Media Kits",
          "Launch Countdown Synchronized Lighting & Sound Brief"
        ],
        strategicImpact: "Generates intense product desire and immediate media coverage that propels opening sales.",
        timeline: "2 - 4 Weeks",
        deliverableFormat: "Launch Stage 3D Models + Production Manifest"
      },
      {
        id: "ed-exhibition",
        name: "Exhibition & Stall Branding",
        shortTagline: "Custom trade show booths and exhibition stalls that command attention in crowded halls.",
        description: "Stand out in massive convention centers. We architect 360° exhibition pavilions that maximize traffic flow, highlight core technologies, and create welcoming meeting zones that convert passersby into qualified leads.",
        deliverables: [
          "Custom Trade Show Booth 3D Architecture & Layout",
          "Suspended Ceiling Banners & Long-Distance Signage",
          "Interactive Touchscreen & Demonstration Kiosks",
          "Storage, Hospitality & Private Meeting Room Layouts",
          "Contractor Fabrication Drawings & Material Finishes"
        ],
        strategicImpact: "Increases booth dwell time by 300% and generates significantly higher qualified B2B leads.",
        timeline: "3 Weeks",
        deliverableFormat: "Fabrication Drawings + 3D Render Sets"
      },
      {
        id: "ed-collateral",
        name: "Event Collaterals",
        shortTagline: "Tactile print and digital touchpoints that complete the guest experience.",
        description: "From luxury foil-stamped invitations and embossed event programs to bespoke delegate gift boxes and thank-you stationery, we ensure every tactile physical object feels precious and collectible.",
        deliverables: [
          "Luxury Physical Invitations with Envelope Wax Seals",
          "Event Agendas, Program Booklets & Speaker Guides",
          "Curated Swag Bags & Branded Executive Gifts",
          "Table Numbers, Menus & Place Card Typography",
          "Post-Event Thank You Notes & Digital Photo Galleries"
        ],
        strategicImpact: "Leaves attendees with memorable physical artifacts that reinforce event memories long after closing.",
        timeline: "1 - 2 Weeks",
        deliverableFormat: "Press-Ready Print Dielines + Packaging Layouts"
      }
    ],
    metrics: [
      { value: "400+", label: "Events Designed", subtext: "From summits to high-profile brand reveals" },
      { value: "100K+", label: "Attendees Immersed", subtext: "Across worldwide physical & hybrid events" },
      { value: "99.8%", label: "On-Time Completion", subtext: "Flawless execution before doors open" }
    ],
    processTitle: "Our Experiential Production Flow",
    processSubtitle: "How we move from spatial concept to opening night spectacle.",
    processSteps: [
      { phase: "Concept", number: "01", title: "Theme & Spatial Strategy", description: "Brainstorming creative themes, guest journeys, and venue floor plan feasibility.", duration: "Week 1" },
      { phase: "Design", number: "02", title: "3D Spatial Renders & Graphics", description: "Developing photorealistic 3D stage renders, wayfinding signs, and LED visuals.", duration: "Weeks 2-3" },
      { phase: "Fabrication", number: "03", title: "Vendor Coordination & Print", description: "Reviewing print proofs, supervising carpentry fabrication, and AV setup.", duration: "Week 4" },
      { phase: "Execution", number: "04", title: "On-Site Staging & Show Run", description: "On-site setup supervision, sound/light cue checks, and live event management.", duration: "Event Days" }
    ],
    ctaHeadline: "Ready to Design an Unforgettable Event?",
    ctaSubtext: "Consult with our experiential design team to craft an immersive physical environment for your next milestone."
  },

  "franchise-development": {
    id: "franchise-development",
    slug: "franchise-development",
    title: "Franchise Development",
    fullTitle: "Franchise Development & Scalable Expansion",
    category: "Franchise Architecture & Scaling Systems",
    heroBadge: "ENTERPRISE SCALABILITY & EXPANSION BLUEPRINTS",
    tagline: "Packaging proven business models into turn-key franchise systems ready for nationwide scaling.",
    heroHeadline: "Franchise Systems Engineered for",
    heroHeadlineAccent: "Exponential Scale.",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=900&fit=crop&auto=format",
    heroImageTag: "SCALING WITH PRECISION",
    introParagraph1: "At Rocklike Techventures, we transform profitable single-location businesses into institutional, multi-unit franchise empires. Scaling through franchising requires far more than operational know-how; it demands institutional systems, bulletproof brand consistency, and investor-ready marketing engines.",
    introParagraph2: "We construct the complete franchise expansion stack: financial unit modeling, comprehensive Standard Operating Procedures (SOPs), retail spatial designs, legal frameworks, and high-converting franchisee lead generation funnels.",
    subServicesHeading: "Sub Services Included",
    subServices: [
      {
        id: "franchise-model",
        name: "Franchise Strategy & Model Engineering",
        shortTagline: "Designing the financial, operational, and royalty architecture for sustainable growth.",
        description: "We analyze your unit economics to design a winning franchise business model. We define upfront franchise fees, ongoing royalty structures, marketing fund contributions, territory exclusive zones, and franchisee ROI payback periods.",
        deliverables: [
          "Unit Economics & Pro-Forma Financial Model",
          "Franchise Fee & Royalty Rate Benchmarking",
          "Territory Mapping & Protected Zone Criteria",
          "Franchisee Profile & Ideal Partner Selection Rubric",
          "Strategic Multi-Year National Expansion Roadmap"
        ],
        strategicImpact: "Ensures both the franchisor and franchisees achieve strong, predictable profitability as you scale.",
        timeline: "3 Weeks",
        deliverableFormat: "Financial Models (Excel) + Strategy Blueprint"
      },
      {
        id: "operations-manuals",
        name: "Operations Manuals & SOP Documentation",
        shortTagline: "The definitive turn-key operational Bible that allows any location to run identically.",
        description: "A franchise is only as good as its replication standard. We exhaustively document every daily operational procedure, inventory management, hygiene standard, customer greeting, and staff training protocol into clear, accessible digital manuals.",
        deliverables: [
          "Master Franchise Operations Manual (FOPM)",
          "Step-by-Step SOP Checklists for Daily Shifts",
          "Inventory Control, Sourcing & Supply Chain Protocol",
          "Customer Service & Complaint Resolution Manual",
          "Staff Recruitment, Onboarding & Training Materials"
        ],
        strategicImpact: "Guarantees identical customer experience and service quality across 10, 50, or 500 locations.",
        timeline: "4 - 6 Weeks",
        deliverableFormat: "Digital Cloud Knowledgebase + PDF Master Manuals"
      },
      {
        id: "retail-identity",
        name: "Franchise Brand & Retail Identity System",
        shortTagline: "Standardized architectural store layouts, exterior signage, and retail guidelines.",
        description: "We translate your brand into a standardized retail prototype (kiosk, standalone, express). We supply comprehensive architectural guidelines covering shopfront elevations, interior materials, furniture specs, and customer flow.",
        deliverables: [
          "Standardized Retail Prototype Architectural Drawings",
          "Exterior Facade & Signage Compliance Guidelines",
          "Interior Layout & Customer Traffic Flow Optimization",
          "Approved Vendor Material & Furniture Specification Catalog",
          "Store Opening Visual Merchandising Handbook"
        ],
        strategicImpact: "Lowers store fit-out costs by 20% and ensures instant visual recognition on any high street.",
        timeline: "3 - 4 Weeks",
        deliverableFormat: "Architectural Guideline Pack + 3D Store Models"
      },
      {
        id: "franchisee-acquisition",
        name: "Franchisee Acquisition & Lead Generation",
        shortTagline: "Targeted digital advertising funnels that attract qualified, capitalized franchise buyers.",
        description: "Selling franchises requires high-trust, B2B investor marketing. We design specialized Google, LinkedIn, and Meta acquisition campaigns that filter out casual tire-kickers and deliver high-net-worth franchise inquiries.",
        deliverables: [
          "High-Converting Franchise Opportunity Landing Pages",
          "Investor Lead Qualification Quiz & Financial Filter",
          "Paid Media Funnels on LinkedIn, Google & Meta",
          "Automated Email Nurture Sequences for Investors",
          "CRM Pipeline Setup & Sales Rep Tracking (HubSpot)"
        ],
        strategicImpact: "Delivers a steady pipeline of vetted investors with the liquid capital to purchase multi-unit territories.",
        timeline: "2 Weeks to Deploy",
        deliverableFormat: "Active Investor Ad Funnel + CRM Pipeline"
      },
      {
        id: "discovery-day",
        name: "Investor Pitch Decks & Discovery Day Materials",
        shortTagline: "Institutional pitch decks and discovery day presentations that close qualified buyers.",
        description: "When an investor visits your headquarters for 'Discovery Day', everything must convey immense scale and competence. We design your master franchise pitch deck, economic summary sheets, and discovery day itineraries.",
        deliverables: [
          "Master Franchise Opportunity Pitch Deck",
          "One-Page Financial & Unit Economics Teaser (FDD)",
          "Discovery Day Presentation & Event Itinerary",
          "Franchisee Testimonial Video Production",
          "Frequently Asked Legal & Financial Questions (FAQ) Sheet"
        ],
        strategicImpact: "Significantly increases Discovery Day close rates from qualified candidates into signed agreements.",
        timeline: "2 Weeks",
        deliverableFormat: "Figma/PowerPoint Decks + Printed Presentation Books"
      },
      {
        id: "unit-economics",
        name: "Unit Economics & Royalty Frameworks",
        shortTagline: "Fine-tuning store-level profitability, supply chain rebates, and gross margins.",
        description: "We optimize your store-level P&L to ensure strong unit margins. We calculate optimal price ceilings, vendor rebate models, software fee splits, and local cooperative advertising fund management guidelines.",
        deliverables: [
          "Store-Level 5-Year Cash Flow & P&L Projections",
          "Break-Even Footfall & Ticket Size Analysis",
          "Supply Chain Centralization & Rebate Structure",
          "Ad Fund Legal Terms & Expenditure Governance",
          "Performance Audit Thresholds & Cure Periods"
        ],
        strategicImpact: "Prevents franchisee distress and builds a healthy, self-funding franchise ecosystem.",
        timeline: "2 Weeks",
        deliverableFormat: "Financial Models + Governance Document"
      },
      {
        id: "expansion-roadmap",
        name: "Regional Expansion Roadmap",
        shortTagline: "Strategic market prioritization: Tier 1, 2, and 3 city expansion sequence.",
        description: "Scaling haphazardly across distant territories strains supply chains and logistics. We build clustered expansion maps that prioritize metropolitan clusters, regional warehousing synergies, and localized demographic fit.",
        deliverables: [
          "City Tier Categorization & Demographic Heatmaps",
          "Cluster Expansion Scheduling for Supply Chain Optimization",
          "Master Franchisee vs Area Developer Rights Framework",
          "Real Estate Site Selection Scorecard & Footfall Criteria",
          "Legal Regulatory Clearance by State / Territory"
        ],
        strategicImpact: "Minimizes logistics costs and establishes regional brand dominance before moving into new markets.",
        timeline: "2 Weeks",
        deliverableFormat: "Expansion Geo-Map & Strategy Dossier"
      },
      {
        id: "launch-support",
        name: "Franchise Launch & Store Rollout Support",
        shortTagline: "Grand opening playbooks and local area marketing engines for new store launches.",
        description: "We ensure every new franchise location opens to packed lines and instant local buzz. We provide a turn-key Grand Opening Playbook including PR announcements, influencer visits, local SEO setups, and flyer distribution.",
        deliverables: [
          "30-Day Grand Opening Marketing Playbook",
          "Local Google Business Profile & Hyperlocal SEO Setup",
          "Localized Social Media Ad Campaign Templates",
          "Opening Day Promotional Offers & VIP Event Concepts",
          "Store Opening Checklist & Post-Launch Review"
        ],
        strategicImpact: "Ensures new locations achieve break-even within their first 90 days of opening.",
        timeline: "Per Store Opening Flight",
        deliverableFormat: "Grand Opening Toolkit + Local Ad Templates"
      }
    ],
    metrics: [
      { value: "60+", label: "Franchises Launched", subtext: "Across retail, F&B, wellness, and service sectors" },
      { value: "94%", label: "Store Survival Rate", subtext: "Far exceeding industry average through rigorous SOPs" },
      { value: "18 Mo", label: "Average Payback", subtext: "Targeted unit economics for franchisee capital" }
    ],
    processTitle: "The Franchise Blueprint",
    processSubtitle: "How we package your business model for unstoppable replication.",
    processSteps: [
      { phase: "Audit", number: "01", title: "Feasibility & Unit Economics", description: "Auditing current store profitability, supply chain, and defining the franchise fee structure.", duration: "Week 1" },
      { phase: "Systemize", number: "02", title: "SOPs & Operational Manuals", description: "Writing the exhaustive operations Bible and designing the retail prototype guidelines.", duration: "Weeks 2-4" },
      { phase: "Package", number: "03", title: "Investor Deck & Legal Framework", description: "Creating high-converting investor pitch decks and structuring franchise agreements.", duration: "Weeks 5-6" },
      { phase: "Scale", number: "04", title: "Lead Generation & Expansion", description: "Launching targeted investor acquisition campaigns and guiding your first store openings.", duration: "Weeks 7+" }
    ],
    ctaHeadline: "Ready to Scale Your Business Into a National Franchise?",
    ctaSubtext: "Consult with our franchise expansion architects to evaluate your concept's scaling readiness."
  }
};

export const serviceNavList = [
  { id: "branding", title: "Branding Solutions", href: "/services/branding" },
  { id: "video-production", title: "Video Production & Content Creation", href: "/services/video-production" },
  { id: "performance-marketing", title: "Performance Marketing & Online Advertising", href: "/services/performance-marketing" },
  { id: "social-media-marketing", title: "Social Media Marketing", href: "/services/social-media-marketing" },
  { id: "brand-building-strategies", title: "Brand Building & Strategies", href: "/services/brand-building-strategies" },
  { id: "celebrity-management", title: "Celebrity Management", href: "/services/celebrity-management" },
  { id: "event-designing", title: "Event Designing", href: "/services/event-designing" },
  { id: "franchise-development", title: "Franchise Development", href: "/services/franchise-development" },
];
