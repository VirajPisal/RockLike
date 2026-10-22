export interface BrandingCard {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface BrandingProcessStep {
  step: number;
  phase: string;
  title: string;
  description: string;
  duration: string;
  outputs: string[];
}

export interface ShowcaseItem {
  id: string;
  client: string;
  project: string;
  tag: string;
  image: string;
  wide?: boolean;
  tall?: boolean;
}

export const brandingCards: BrandingCard[] = [
  {
    id: "brand-identity",
    number: "01",
    title: "Brand Identity & Logo Design",
    description:
      "Marks that own their space. We create logo systems that are instantly recognisable, infinitely scalable, and built to outlast trends.",
    deliverables: [
      "Primary logo & variations",
      "Symbol & wordmark",
      "Monogram & favicon",
      "Colour & usage rules",
    ],
  },
  {
    id: "brand-guidelines",
    number: "02",
    title: "Brand Guidelines",
    description:
      "A complete, living playbook that ensures your brand is applied consistently across every team, touchpoint, and timezone.",
    deliverables: [
      "Visual standards manual",
      "Typography & colour specs",
      "Tone of voice guide",
      "Digital & print templates",
    ],
  },
  {
    id: "corporate-branding",
    number: "03",
    title: "Corporate Branding",
    description:
      "Enterprise-grade identity systems for organisations that need to project authority, trust, and cohesion at scale.",
    deliverables: [
      "Corporate identity system",
      "Internal brand architecture",
      "Presentation templates",
      "Email & document templates",
    ],
  },
  {
    id: "packaging",
    number: "04",
    title: "Packaging & Label Design",
    description:
      "Packaging that wins the shelf. We design tactile, commercial, and shelf-stopping packaging for products that demand attention.",
    deliverables: [
      "Primary & secondary packaging",
      "Label & tag design",
      "Retail & e-commerce packaging",
      "Sustainable packaging direction",
    ],
  },
  {
    id: "collateral",
    number: "05",
    title: "Brand Collateral Design",
    description:
      "Every piece of printed or digital material your brand touches — designed to the same standard as your identity.",
    deliverables: [
      "Business cards & stationery",
      "Brochures & catalogues",
      "Signage & environmental",
      "Social media templates",
    ],
  },
  {
    id: "campaign",
    number: "06",
    title: "Creative Campaign Branding",
    description:
      "Campaign identities that carry your brand into a moment — launches, seasons, activations, and cultural events.",
    deliverables: [
      "Campaign visual identity",
      "Art direction & moodboards",
      "Multi-format campaign assets",
      "Cross-channel creative suite",
    ],
  },
  {
    id: "rebranding",
    number: "07",
    title: "Rebranding Solutions",
    description:
      "Strategic brand renewal for companies that have outgrown who they were — positioned for where they're going.",
    deliverables: [
      "Brand audit & gap analysis",
      "Competitive repositioning",
      "Identity refresh or full rebuild",
      "Rollout & change management",
    ],
  },
  {
    id: "positioning",
    number: "08",
    title: "Brand Positioning",
    description:
      "The intellectual work behind the visual work. We define where your brand sits in the market and why it wins there.",
    deliverables: [
      "Market landscape analysis",
      "Positioning statement",
      "Messaging framework",
      "Brand story & narrative",
    ],
  },
];

export const brandingProcess: BrandingProcessStep[] = [
  {
    step: 1,
    phase: "Discover",
    title: "Understand Everything",
    description:
      "We immerse ourselves in your business, audience, competitors, and category. No brief is too deep, no question too basic.",
    duration: "Week 1–2",
    outputs: ["Brand audit", "Research report", "Competitor map"],
  },
  {
    step: 2,
    phase: "Define",
    title: "Set the Strategy",
    description:
      "From the research, we distil a clear strategic direction: positioning, personality, voice, and the visual territory we'll own.",
    duration: "Week 3–4",
    outputs: ["Positioning statement", "Brand personality", "Creative brief"],
  },
  {
    step: 3,
    phase: "Design",
    title: "Build the Identity",
    description:
      "We design, present, and refine — with structured feedback rounds that move quickly and produce work worth keeping.",
    duration: "Week 5–8",
    outputs: ["Logo system", "Visual identity", "Colour & type"],
  },
  {
    step: 4,
    phase: "Develop",
    title: "Extend the System",
    description:
      "The identity is extended across every touchpoint — guidelines, templates, collateral, and digital assets.",
    duration: "Week 9–10",
    outputs: ["Brand guidelines", "Asset library", "Templates"],
  },
  {
    step: 5,
    phase: "Deploy",
    title: "Launch with Confidence",
    description:
      "We support your team through the rollout — ensuring every brand expression lands exactly as intended.",
    duration: "Week 11–12",
    outputs: ["Launch package", "Rollout plan", "Ongoing support"],
  },
];

export const brandingShowcase: ShowcaseItem[] = [
  {
    id: "s1",
    client: "Meridian Capital",
    project: "Brand Identity System",
    tag: "Identity",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=900&h=640&fit=crop&auto=format",
    wide: true,
  },
  {
    id: "s2",
    client: "Nordhavn Co.",
    project: "Brand Guidelines",
    tag: "Guidelines",
    image:
      "https://images.unsplash.com/photo-1658863025658-4a259cc68fc9?w=800&h=600&fit=crop&auto=format",
  },
  {
    id: "s3",
    client: "Dune Apparel",
    project: "Packaging Design",
    tag: "Packaging",
    image:
      "https://images.unsplash.com/photo-1698376620976-6a1f258d844b?w=800&h=600&fit=crop&auto=format",
  },
  {
    id: "s4",
    client: "Solara Energy",
    project: "Brand Collateral",
    tag: "Collateral",
    image:
      "https://images.unsplash.com/photo-1718670013988-c6e3edb92345?w=800&h=600&fit=crop&auto=format",
    tall: true,
  },
  {
    id: "s5",
    client: "Atlas Ventures",
    project: "Campaign Branding",
    tag: "Campaign",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=600&fit=crop&auto=format",
  },
];

/* Legacy named exports kept for backward compatibility */
export const brandingServices = brandingCards.slice(0, 4).map((c) => ({
  id: c.id,
  title: c.title,
  description: c.description,
  deliverables: c.deliverables,
}));
