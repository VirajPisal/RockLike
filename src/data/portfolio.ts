export type PortfolioCategory =
  | "All"
  | "Branding"
  | "Video"
  | "Performance";

export interface PortfolioItem {
  id: string;
  client: string;
  title: string;
  category: Exclude<PortfolioCategory, "All">;
  tags: string[];
  description: string;
  image: string;
  year: number;
  featured?: boolean;
  accent: string;
}

export const portfolioCategories: PortfolioCategory[] = [
  "All",
  "Branding",
  "Video",
  "Performance",
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "p1",
    client: "Meridian Capital",
    title: "Full Brand Overhaul",
    category: "Branding",
    tags: ["Brand Identity", "Strategy", "Collateral"],
    description:
      "Repositioned a legacy fintech firm as a modern, trusted partner for growth-stage companies. New identity launched across 12 markets.",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=900&h=640&fit=crop&auto=format",
    year: 2024,
    featured: true,
    accent: "var(--clr-branding)",
  },
  {
    id: "p2",
    client: "Lumen Health",
    title: "Feel Better Campaign",
    category: "Video",
    tags: ["Brand Film", "Commercial", "Social Content"],
    description:
      "A 6-piece content campaign across broadcast and digital, anchored by a 30-second hero spot that drove 38% lift in brand recall.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&h=640&fit=crop&auto=format",
    year: 2024,
    featured: true,
    accent: "var(--clr-video)",
  },
  {
    id: "p3",
    client: "Dune Apparel",
    title: "Growth Engine Setup",
    category: "Performance",
    tags: ["Meta Ads", "Google Shopping", "Attribution"],
    description:
      "Rebuilt their paid media architecture from scratch, achieving 6.8× ROAS within the first 90 days of launch.",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900&h=640&fit=crop&auto=format",
    year: 2024,
    featured: true,
    accent: "var(--clr-performance)",
  },
  {
    id: "p4",
    client: "Nordhavn Co.",
    title: "Heritage Brand Identity",
    category: "Branding",
    tags: ["Brand Identity", "Collateral", "Guidelines"],
    description:
      "A premium identity system for a third-generation furniture maker entering the global luxury market for the first time.",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&h=640&fit=crop&auto=format",
    year: 2023,
    accent: "var(--clr-branding)",
  },
  {
    id: "p5",
    client: "Atlas Ventures",
    title: "Series B Launch Event",
    category: "Video",
    tags: ["Event Coverage", "Brand Film"],
    description:
      "Multi-camera event coverage and a 3-minute sizzle reel for their $120M raise announcement, viewed 1.4M times in 48 hours.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&h=640&fit=crop&auto=format",
    year: 2023,
    accent: "var(--clr-video)",
  },
  {
    id: "p6",
    client: "Peak Systems",
    title: "Enterprise Lead Generation",
    category: "Performance",
    tags: ["LinkedIn Ads", "Paid Search", "B2B"],
    description:
      "Full-funnel B2B campaign that reduced CPL by 54% while tripling the volume of qualified pipeline in six months.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&h=640&fit=crop&auto=format",
    year: 2023,
    accent: "var(--clr-performance)",
  },
  {
    id: "p7",
    client: "Solara Energy",
    title: "Clean Energy Rebrand",
    category: "Branding",
    tags: ["Brand Strategy", "Visual Identity"],
    description:
      "Complete strategic rebrand of a renewable energy company ahead of their IPO, built to instill investor confidence.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=900&h=640&fit=crop&auto=format",
    year: 2023,
    accent: "var(--clr-branding)",
  },
  {
    id: "p8",
    client: "Koru Studios",
    title: "Product Launch Film",
    category: "Video",
    tags: ["Commercial", "Product"],
    description:
      "A cinematic 60-second launch film for their flagship workspace product, distributed across broadcast and paid digital.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&h=640&fit=crop&auto=format",
    year: 2024,
    accent: "var(--clr-video)",
  },
];
