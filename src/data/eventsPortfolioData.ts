export interface EventProject {
  id: string;
  title: string;
  edition: string;
  client?: string;
  category: "Mega Sammelan" | "Expo & Exhibition" | "Competition & Awards" | "Corporate & Conclave";
  image: string;
  badge: string;
  summary: string;
  description: string;
  services: string[];
  highlights: string[];
  impactMetric: { value: string; label: string };
  location: string;
  featured?: boolean;
}

export const eventsPortfolioData: EventProject[] = [
  {
    id: "marathi-sahitya-sammelan-2026",
    title: "Akhil Bhartiya Marathi Sahitya Sammelan",
    edition: "2026 (99th Sammelan)",
    client: "Akhil Bhartiya Marathi Sahitya Mahamandal",
    category: "Mega Sammelan",
    image: "/assets/events/Events-images-01.webp",
    badge: "99th Historic Edition",
    summary: "End-to-end digital presence, celebrity & dignitary management, and documentary film production for Maharashtra's premier literary conclave.",
    description:
      "Rocklike Techventures managed the event's digital presence and promotional activities through influencer collaborations, celebrity management, and strategic pre-event marketing. Our team handled pre-event shoots, awareness campaigns, and collaborations to build anticipation and engagement. During the event, we managed shoots, content creation, event coverage, and video production. Post-event, we handled data processing, content publishing, and developed documentary-style content to capture and showcase the overall event journey.",
    services: [
      "Influencer Collaborations & Management",
      "Celebrity Management",
      "Strategic Collaborations",
      "Pre-Event Shoots",
      "Marketing & Awareness Campaigns",
      "Event Shoots & Multi-Camera Coverage",
      "Full Video Production",
      "Post-Event Data Processing & Publishing",
      "Documentary Film Production",
    ],
    highlights: [
      "High-profile dignitary coverage including Chief Minister of Maharashtra",
      "Massive stadium & stage broadcast coverage across 3 days",
      "Documentary aftermovie capturing the literary and cultural journey",
      "Strategic regional influencer campaign driving statewide engagement",
    ],
    impactMetric: { value: "100k+", label: "Footfall & Digital Impressions" },
    location: "Satara, Maharashtra",
    featured: true,
  },
  {
    id: "mas-industrial-expo-2023",
    title: "Manufacturer Association of Satara Expo (MAS)",
    edition: "2023",
    client: "Manufacturer Association of Satara",
    category: "Expo & Exhibition",
    image: "/assets/events/Events-images-02.webp",
    badge: "Industrial B2B Expo",
    summary: "Complete event design, industrial branding mascots, pre-event promotional campaigns, and on-ground media coverage.",
    description:
      "Rocklike Techventures supported the Manufacturer Association of Satara Expo with event designing, collaborations, and pre-event promotional activities. Our team worked on marketing and awareness campaigns to build visibility before the event, followed by event shoots, content management, and video production during the expo. Post-event, we managed content processing and publishing.",
    services: [
      "Event Designing",
      "Collaborations",
      "Pre-Event Marketing",
      "Awareness Campaigns",
      "Event Shoots & Coverage",
      "Video Production",
      "Post-Event Content Processing & Publishing",
    ],
    highlights: [
      "Designed the signature 'MAS Industrial Expo - Connecting Industries' brand theme",
      "Engineered exhibition layouts, stage design, and registration signage",
      "Produced industrialist keynote video series and technical session highlights",
      "Facilitated enterprise collaborations across manufacturing clusters",
    ],
    impactMetric: { value: "250+", label: "Industrial Exhibitors" },
    location: "Satara Industrial Center",
    featured: true,
  },
  {
    id: "national-abacus-competition",
    title: "National Level Abacus Competition",
    edition: "2023 / 2024 / 2025",
    client: "Success Abacus & Education India Pvt. Ltd.",
    category: "Competition & Awards",
    image: "/assets/events/Events-images-03.webp",
    badge: "National Annual Series",
    summary: "Multi-year event designing, Bollywood celebrity guest coordination, multi-camera live coverage, and student prize distributions.",
    description:
      "Rocklike Techventures managed the event's overall designing, promotional activities, and digital content requirements across multiple editions. Our work included event designing, celebrity management, collaborations, pre-event marketing, and awareness campaigns. During the competition, we handled event shoots, content management, and video production, followed by post-event data processing and content publishing.",
    services: [
      "Event Designing",
      "Celebrity Management",
      "Collaborations",
      "Pre-Event Marketing",
      "Awareness Campaigns",
      "Event Shoots & Coverage",
      "Video Production",
      "Post-Event Content Processing & Publishing",
    ],
    highlights: [
      "Celebrity guest management featuring Bollywood actor Shreyas Talpade",
      "Arena-scale stage layout, backdrop branding, and trophy design",
      "Same-day parent-student video highlights and live social broadcasts",
      "End-to-end attendee data collation and participant recognition certificates",
    ],
    impactMetric: { value: "5,000+", label: "Student Competitors" },
    location: "Major Auditoriums, Maharashtra",
    featured: true,
  },
  {
    id: "shatakveer-sanman-sohala",
    title: "Shatakveer Sanman Sohala & Franchise Meet",
    edition: "2023 / 2024 / 2025",
    client: "Franchise Excellence Network",
    category: "Corporate & Conclave",
    image: "/assets/events/Events-images-04.webp",
    badge: "Leadership & Awards",
    summary: "Annual business leadership conclave, keynote celebrity facilitation with historical orator Nitin Banugade Patil, and gala award production.",
    description:
      "For the Shatakveer Sanman Sohala, Rocklike Techventures handled event designing along with promotional and digital content activities. The scope included celebrity management, collaborations, pre-event marketing, and awareness campaigns. Our team also managed event shoots, content and video production during the event, followed by post-event data processing and publishing.",
    services: [
      "Event Designing",
      "Celebrity Management",
      "Collaborations",
      "Pre-Event Marketing",
      "Awareness Campaigns",
      "Event Shoots & Coverage",
      "Video Production",
      "Post-Event Content Processing & Publishing",
    ],
    highlights: [
      "Distinguished keynotes by Prof. Nitin Banugade Patil & Samir Dharmadhikari",
      "Franchise Meet & Business Training stage architecture and delegate kits",
      "Comprehensive cinematic documentary and photography archive",
      "Multi-year brand continuity and corporate milestone celebrations",
    ],
    impactMetric: { value: "3 Consecutive", label: "Annual Editions Managed" },
    location: "State-of-the-Art Convention Centers",
    featured: true,
  },
  {
    id: "tlc-events-bigbash-gaurav",
    title: "TLC Events – Bigbash & Gaurav",
    edition: "2023 / 2026",
    client: "The Leaders Club (TLC)",
    category: "Corporate & Conclave",
    image: "/assets/events/Events-images-05.webp",
    badge: "Corporate Extravaganza",
    summary: "Monumental stage LED engineering, auditorium acoustics, keynote speaker broadcasts, and celebratory gala productions.",
    description:
      "Rocklike Techventures worked on event designing along with marketing, awareness activities, and video content for TLC Events – Bigbash & Gaurav. The focus was on creating an engaging event presence supported by promotional communication and visual content.",
    services: [
      "Event Designing",
      "Marketing",
      "Awareness Campaigns",
      "Video Production",
      "Stage LED Production",
    ],
    highlights: [
      "Spectacular 'TLC Byg Bash Kolhapur 2026' and 'Vijaypath' spatial design",
      "High-lumen LED wall graphics, cinematic intros, and live multicam switching",
      "Corporate leadership awards protocol and executive recognition media",
      "Pre-event teaser videos driving record delegate registrations",
    ],
    impactMetric: { value: "1,500+", label: "Business Delegates" },
    location: "Kolhapur & Regional Auditoriums",
    featured: true,
  },
  {
    id: "rachana-expo-2024-bai",
    title: "Rachana Expo 2024 by BAI",
    edition: "2024",
    client: "Builders Association of India (BAI)",
    category: "Expo & Exhibition",
    image: "/assets/events/Events-images-06.webp",
    badge: "Construction & Architecture",
    summary: "Pre-event architectural marketing shoots, influencer walkthroughs, and fast-paced daily video coverage for Maharashtra's premier building expo.",
    description:
      "For Rachana Expo 2024, Rocklike Techventures managed influencer collaborations and pre-event marketing shoots to create awareness and engagement around the event. During the expo, our team handled event shoots and video content, followed by post-event data processing and content publishing.",
    services: [
      "Influencer Collaborations",
      "Pre-Event Marketing Shoots",
      "Awareness Campaigns",
      "Event Shoots & Coverage",
      "Video Production",
      "Post-Event Content Processing & Publishing",
    ],
    highlights: [
      "Curated lifestyle and civil engineering influencer site walkthroughs",
      "Dynamic daily video recaps delivered for broadcast within hours",
      "Comprehensive post-event exhibitor directory and analytics reporting",
    ],
    impactMetric: { value: "3-Day", label: "Flagship Construction Expo" },
    location: "Satara / BAI Regional Grounds",
    featured: true,
  },
  {
    id: "gharkul-expo-2025",
    title: "Gharkul Expo & Property Melawa",
    edition: "2025",
    client: "Builders Association of India – Satara Center",
    category: "Expo & Exhibition",
    image: "/assets/events/Events-images-06.webp",
    badge: "Real Estate Property Show",
    summary: "Grand entrance archway designing, targeted pre-event marketing shoots, and comprehensive video production for regional homebuyers.",
    description:
      "Rocklike Techventures supported Gharkul Expo through collaborations and pre-event marketing shoots designed to create awareness and engagement. Our team managed event shoots and video content during the expo, followed by post-event data processing and publishing.",
    services: [
      "Collaborations",
      "Pre-Event Marketing Shoots",
      "Awareness Campaigns",
      "Event Shoots & Coverage",
      "Video Production",
      "Post-Event Content Processing & Publishing",
    ],
    highlights: [
      "Monumental floral & branded entrance gateway architecture",
      "Direct homebuyer promotional communication across print and digital",
      "On-ground video interviews with leading developers and banking partners",
    ],
    impactMetric: { value: "15,000+", label: "Homebuyer Footfall" },
    location: "Satara Ground Pavilions",
  },
  {
    id: "saturday-club-events",
    title: "Saturday Club Global Events",
    edition: "Annual Chapter Series",
    client: "Saturday Club Global Trust",
    category: "Corporate & Conclave",
    image: "/assets/events/Events-images-05.webp",
    badge: "Entrepreneurial Network",
    summary: "Cohesive event design, stage identity, and networking atmosphere tailored for high-growth business entrepreneurs.",
    description:
      "Rocklike Techventures provided event designing support for Saturday Club events, focusing on creating engaging and visually consistent event experiences.",
    services: ["Event Designing", "Visual Experience", "Branding Assets", "Stage Aesthetics"],
    highlights: [
      "Clean, modern corporate stage aesthetics maintaining brand guidelines",
      "Engaging networking zone layouts facilitating B2B partnerships",
      "High-impact digital backdrops and presentation collateral design",
    ],
    impactMetric: { value: "B2B", label: "Entrepreneurial Chapter" },
    location: "Western Maharashtra Chapters",
  },
  {
    id: "rayat-cafc-event",
    title: "Rayat – CAFC Event",
    edition: "Academic Milestone",
    client: "Rayat Shikshan Sanstha",
    category: "Corporate & Conclave",
    image: "/assets/events/Events-images-01.webp",
    badge: "Institutional Milestone",
    summary: "Academic event designing, student awareness campaign, event cinematography, and official video production.",
    description:
      "For the Rayat – CAFC Event, Rocklike Techventures handled event designing, marketing, and awareness activities. Our team also managed event shoots and video production to capture and communicate the event effectively.",
    services: [
      "Event Designing",
      "Marketing",
      "Awareness Campaigns",
      "Event Shoots",
      "Video Production",
    ],
    highlights: [
      "Educational branding reflecting Rayat's century-old pedagogical legacy",
      "Multi-channel student awareness drives across campuses",
      "Documentary recording of keynote sessions and academic laurels",
    ],
    impactMetric: { value: "Youth Focus", label: "Educational Conclave" },
    location: "Rayat Institutional Campus",
  },
];
