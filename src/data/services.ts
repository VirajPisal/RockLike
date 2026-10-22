export interface Service {
  id: string;
  title: string;
  fullTitle: string;
  tagline: string;
  description: string;
  accent: string;
  accentGlow: string;
  accentBorder: string;
  href: string;
  highlights: string[];
  subServices: string[];
  image: string;
  stat: string;
  statLabel: string;
}

export const services: Service[] = [
  {
    id: "branding",
    title: "Branding",
    fullTitle: "Branding Solutions",
    tagline: "Identity that commands attention",
    description:
      "We build brands that don't just look good — they endure. From visual identity systems to brand strategy, we craft the visual language of market leaders that resonate with audiences and stand the test of time.",
    accent: "var(--clr-branding)",
    accentGlow: "var(--clr-branding-glow)",
    accentBorder: "var(--clr-branding-border)",
    href: "/services/branding",
    highlights: [
      "Brand Strategy",
      "Visual Identity",
      "Logo & Mark Design",
      "Brand Guidelines",
    ],
    subServices: [
      "Brand Strategy & Positioning",
      "Visual Identity Systems",
      "Logo & Mark Design",
      "Brand Guidelines & Playbooks",
      "Collateral & Print Design",
      "Rebranding & Brand Refresh",
    ],
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop&auto=format",
    stat: "240+",
    statLabel: "Brands Launched",
  },
  {
    id: "video",
    title: "Video Production",
    fullTitle: "Video Production & Content Creation",
    tagline: "Stories that move people",
    description:
      "Cinematic production from concept to delivery. Brand films, commercials, social content, and everything in between — crafted with editorial precision and made to stop the scroll and hold attention.",
    accent: "var(--clr-video)",
    accentGlow: "var(--clr-video-glow)",
    accentBorder: "var(--clr-video-border)",
    href: "/services/video-production",
    highlights: [
      "Brand Films",
      "Commercials",
      "Social Content",
      "Event Coverage",
    ],
    subServices: [
      "Brand Films & Documentaries",
      "TV & Digital Commercials",
      "Social Media Content",
      "Event & Conference Coverage",
      "Product Launch Videos",
      "Animation & Motion Graphics",
    ],
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&h=800&fit=crop&auto=format",
    stat: "1,200+",
    statLabel: "Videos Produced",
  },
  {
    id: "performance",
    title: "Performance Marketing",
    fullTitle: "Performance Marketing & Online Advertising",
    tagline: "Growth engineered with precision",
    description:
      "Data-driven campaigns that convert. We architect full-funnel strategies that turn ad spend into measurable revenue across every platform that matters — with attribution and reporting that keeps every dollar accountable.",
    accent: "var(--clr-performance)",
    accentGlow: "var(--clr-performance-glow)",
    accentBorder: "var(--clr-performance-border)",
    href: "/services/performance-marketing",
    highlights: [
      "Paid Search & Social",
      "Funnel Architecture",
      "Creative Testing",
      "Analytics & Attribution",
    ],
    subServices: [
      "Paid Search (Google & Microsoft)",
      "Paid Social (Meta, TikTok, LinkedIn)",
      "Programmatic Display & Video",
      "Full-Funnel Strategy",
      "Creative Testing & Optimization",
      "Analytics & Attribution Setup",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&auto=format",
    stat: "$48M+",
    statLabel: "Revenue Driven",
  },
  {
    id: "social",
    title: "Social Media Marketing",
    fullTitle: "Social Media Marketing",
    tagline: "Build communities that grow your brand",
    description:
      "Build communities, create conversations and grow your digital presence. We craft scroll-stopping content and growth strategies that turn followers into brand advocates — across every platform that matters.",
    accent: "var(--clr-social)",
    accentGlow: "var(--clr-social-glow)",
    accentBorder: "var(--clr-social-border)",
    href: "/services/social-media-marketing",
    highlights: [
      "Content Strategy",
      "Community Management",
      "Influencer Partnerships",
      "Social Analytics",
    ],
    subServices: [
      "Content Strategy & Calendar",
      "Creative Content Production",
      "Community Management",
      "Influencer & Creator Partnerships",
      "Paid Social Integration",
      "Social Analytics & Reporting",
    ],
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=800&fit=crop&auto=format",
    stat: "50M+",
    statLabel: "Reach Generated",
  },
  {
    id: "brand-building",
    title: "Brand Building",
    fullTitle: "Brand Building & Strategies",
    tagline: "Define your position, build for longevity",
    description:
      "Define your position, strengthen your brand and build for long-term growth. We help businesses move from reactive to strategic — with a clear brand architecture that guides every decision and every dollar.",
    accent: "var(--clr-strategy)",
    accentGlow: "var(--clr-strategy-glow)",
    accentBorder: "var(--clr-strategy-border)",
    href: "/services/brand-building-strategies",
    highlights: [
      "Brand Positioning",
      "Competitive Strategy",
      "Brand Architecture",
      "Growth Planning",
    ],
    subServices: [
      "Brand Positioning & Messaging",
      "Competitive Analysis",
      "Brand Architecture Design",
      "Brand Voice & Tone",
      "Growth Strategy Roadmap",
      "Brand Audit & Refresh",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&auto=format",
    stat: "180+",
    statLabel: "Brands Repositioned",
  },
  {
    id: "celebrity",
    title: "Celebrity Management",
    fullTitle: "Celebrity Management",
    tagline: "Connect brands with personalities that create impact",
    description:
      "Connect your brand with personalities that create attention and impact. We identify, negotiate and manage celebrity and influencer partnerships that are strategically matched — not just famous faces.",
    accent: "var(--clr-celebrity)",
    accentGlow: "var(--clr-celebrity-glow)",
    accentBorder: "var(--clr-celebrity-border)",
    href: "/services/celebrity-management",
    highlights: [
      "Talent Discovery",
      "Campaign Matching",
      "Partnership Negotiation",
      "Campaign Execution",
    ],
    subServices: [
      "Celebrity & Influencer Discovery",
      "Strategic Brand Matching",
      "Contract & Negotiation Management",
      "Campaign Execution",
      "Content Creation Coordination",
      "Performance & Amplification",
    ],
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&h=800&fit=crop&auto=format",
    stat: "120+",
    statLabel: "Campaigns Executed",
  },
  {
    id: "events",
    title: "Event Designing",
    fullTitle: "Event Designing",
    tagline: "Transform ideas into immersive experiences",
    description:
      "Transform ideas into immersive experiences people remember. From concept to execution, we design event environments, stage productions and brand activations that leave a lasting impression — and a strong visual story.",
    accent: "var(--clr-events)",
    accentGlow: "var(--clr-events-glow)",
    accentBorder: "var(--clr-events-border)",
    href: "/services/event-designing",
    highlights: [
      "Concept & Theme",
      "Stage & Set Design",
      "Event Branding",
      "Digital Experience",
    ],
    subServices: [
      "Event Concept & Theme Development",
      "Stage & Set Design",
      "Event Branding & Identity",
      "Digital & LED Content",
      "Corporate Event Design",
      "Exhibition & Activation Design",
    ],
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop&auto=format",
    stat: "400+",
    statLabel: "Events Designed",
  },
  {
    id: "franchise",
    title: "Franchise Development",
    fullTitle: "Franchise Development",
    tagline: "Build the foundation for scalable expansion",
    description:
      "Build the strategy, systems and brand foundation for scalable expansion. We help businesses package their model into a franchise-ready system — from strategy and documentation to marketing and launch.",
    accent: "var(--clr-franchise)",
    accentGlow: "var(--clr-franchise-glow)",
    accentBorder: "var(--clr-franchise-border)",
    href: "/services/franchise-development",
    highlights: [
      "Franchise Strategy",
      "Model Development",
      "Franchise Branding",
      "Lead Generation",
    ],
    subServices: [
      "Franchise Strategy & Model",
      "Operations Documentation",
      "Franchise Brand System",
      "Franchise Marketing Strategy",
      "Franchisee Lead Generation",
      "Launch Support",
    ],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop&auto=format",
    stat: "60+",
    statLabel: "Franchises Launched",
  },
];
