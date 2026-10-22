import type { TileCardData } from "../components/ServiceTileCard";

export type { TileCardData as VideoServiceCard };

export interface VideoService {
  id: string;
  title: string;
  description: string;
  formats: string[];
  turnaround: string;
}

export interface VideoProject {
  id: string;
  client: string;
  title: string;
  category: "Brand Film" | "Commercial" | "Social Content" | "Event Coverage";
  thumbnail: string;
  duration: string;
  year: number;
  featured?: boolean;
}

export type VideoCategory =
  | "All"
  | "Brand Film"
  | "Commercial"
  | "Social Content"
  | "Event Coverage";

export const videoCategories: VideoCategory[] = [
  "All",
  "Brand Film",
  "Commercial",
  "Social Content",
  "Event Coverage",
];

/* ─── 13 service tile cards ─── */
export const videoServiceCards: TileCardData[] = [
  {
    id: "green-screen",
    number: "01",
    title: "Green Screen / Chroma Videos",
    description:
      "Studio-quality chroma key production that puts your talent or product anywhere in the world — seamlessly composited for broadcast, social, and digital.",
    deliverables: ["Chroma key shooting", "Background compositing", "Studio lighting setup", "Motion tracked VFX"],
  },
  {
    id: "ad-vsl",
    number: "02",
    title: "Ad Campaign Videos & VSL",
    description:
      "Direct-response video built to convert. From 15-second paid social ads to long-form VSLs that do the selling for you.",
    deliverables: ["Script & copywriting", "15s / 30s / 60s cuts", "VSL long-form video", "Platform-native edits"],
  },
  {
    id: "reels-podcast",
    number: "03",
    title: "Reels & Podcast-Type Reels",
    description:
      "Scroll-stopping short-form content engineered for Instagram, TikTok, and YouTube Shorts — with the depth of a podcast, the pace of a reel.",
    deliverables: ["Vertical & square formats", "Captions & subtitles", "Hook-optimised cuts", "Batch content packages"],
  },
  {
    id: "ugc",
    number: "04",
    title: "UGC Videos",
    description:
      "Authentic, creator-style content that blends into the feed and builds trust. Indistinguishable from organic — performance-tested.",
    deliverables: ["UGC script frameworks", "Creator-style production", "Multi-variant testing", "Raw & polished cuts"],
  },
  {
    id: "testimonial",
    number: "05",
    title: "Testimonial & Customer Feedback Videos",
    description:
      "Real voices, real results. We capture and cut customer stories that do more for conversion than any ad copy ever could.",
    deliverables: ["Customer interview shoots", "Multi-camera setup", "Social-ready highlight cuts", "Trust-signal packaging"],
  },
  {
    id: "explainer",
    number: "06",
    title: "Product / Service Explainer Videos",
    description:
      "Complex made simple. We translate what you do into clear, engaging video that moves audiences from confused to convinced.",
    deliverables: ["Script & storyboard", "2D / 3D animation", "Live-action hybrid", "Multi-language versions"],
  },
  {
    id: "demo",
    number: "07",
    title: "Demo Videos",
    description:
      "Show exactly how it works. Product demos, software walkthroughs, and feature showcases that eliminate objections before the call.",
    deliverables: ["Screen recording & VO", "Live-action product demo", "Annotated walkthroughs", "Interactive exports"],
  },
  {
    id: "brand-story",
    number: "08",
    title: "Brand Story & Culture Videos",
    description:
      "The film that defines who you are. Origin stories, culture docs, and mission-driven content that builds emotional equity over time.",
    deliverables: ["Narrative scriptwriting", "Cinematic production", "Interview-driven storytelling", "Founder / team features"],
  },
  {
    id: "case-study",
    number: "09",
    title: "Case Study Videos",
    description:
      "Proof in motion. We turn your best client results into compelling video case studies that close enterprise deals and justify budgets.",
    deliverables: ["Client interview direction", "Before/after story arc", "Data visualisation inserts", "Sales deck cut-downs"],
  },
  {
    id: "ai-video",
    number: "10",
    title: "AI Videos with Voice-Overs",
    description:
      "High-volume, cost-efficient video at scale using AI-generated visuals, avatars, and voice synthesis — produced to brand standard.",
    deliverables: ["AI avatar production", "Voice synthesis & sync", "Multilingual versions", "Brand-consistent templates"],
  },
  {
    id: "corporate-event",
    number: "11",
    title: "Corporate Event Videos",
    description:
      "Rapid-turnaround multi-camera coverage for conferences, product launches, annual summits, and brand activations.",
    deliverables: ["Multi-cam live direction", "Same-day highlights", "Speaker cutdowns", "Social event recap"],
  },
  {
    id: "documentary",
    number: "12",
    title: "Documentaries",
    description:
      "Long-form, cinematic documentary production. Impact films, brand docs, and editorial series that position you as a category authority.",
    deliverables: ["Story development & research", "Multi-day production", "Interview & B-roll direction", "Festival-ready masters"],
  },
  {
    id: "customized",
    number: "13",
    title: "Customized Videos",
    description:
      "Something on your mind that doesn't fit a category? Good. We thrive on briefs that don't have a template. Tell us the goal and we'll build the format around it.",
    deliverables: ["Bespoke brief workshop", "Custom format development", "Cross-discipline production", "End-to-end delivery"],
  },
];

/* ─── Legacy service list (kept for compatibility) ─── */
export const videoServices: VideoService[] = [
  {
    id: "brand-films",
    title: "Brand Films",
    description: "Narrative-driven productions that communicate who you are and why it matters.",
    formats: ["60s — 3min hero film", "Interview-driven documentary", "Animated hybrid", "Behind-the-scenes series"],
    turnaround: "6–10 weeks",
  },
  {
    id: "commercials",
    title: "Commercials & Ads",
    description: "Conversion-optimized spots built for performance across broadcast, digital, and social.",
    formats: ["15s, 30s, 60s edits", "Horizontal & vertical formats", "Platform-native cuts", "A/B creative variants"],
    turnaround: "4–8 weeks",
  },
  {
    id: "social-content",
    title: "Social Content",
    description: "Scroll-stopping content engineered for the feeds.",
    formats: ["Reels & TikTok", "YouTube Shorts", "Stories & carousels", "UGC-style production"],
    turnaround: "2–4 weeks",
  },
  {
    id: "event-coverage",
    title: "Event Coverage",
    description: "Multi-camera live coverage and rapid-turnaround edits.",
    formats: ["Live multi-cam direction", "Same-day highlights reel", "Speaker cutdowns", "Social-first edit packages"],
    turnaround: "1–3 weeks",
  },
];

export const videoProjects: VideoProject[] = [
  {
    id: "v1",
    client: "Meridian Capital",
    title: "What We Build For",
    category: "Brand Film",
    thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=500&fit=crop&auto=format",
    duration: "2:34",
    year: 2024,
    featured: true,
  },
  {
    id: "v2",
    client: "Lumen Health",
    title: "Feel Better, Move Faster",
    category: "Commercial",
    thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop&auto=format",
    duration: "0:30",
    year: 2024,
    featured: true,
  },
  {
    id: "v3",
    client: "Nordhavn Co.",
    title: "Crafted Without Shortcuts",
    category: "Brand Film",
    thumbnail: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=500&fit=crop&auto=format",
    duration: "3:12",
    year: 2024,
  },
  {
    id: "v4",
    client: "Atlas Ventures",
    title: "Series B Launch Day",
    category: "Event Coverage",
    thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop&auto=format",
    duration: "4:05",
    year: 2023,
  },
  {
    id: "v5",
    client: "Dune Apparel",
    title: "Summer 2024 Drop",
    category: "Social Content",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=500&fit=crop&auto=format",
    duration: "0:15",
    year: 2024,
  },
  {
    id: "v6",
    client: "Peak Systems",
    title: "Built for Scale",
    category: "Commercial",
    thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop&auto=format",
    duration: "1:00",
    year: 2023,
  },
];
