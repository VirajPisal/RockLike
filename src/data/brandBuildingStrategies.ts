import type { TileCardData } from "../components/ServiceTileCard";

export const bbAccent = "#F59E0B"; // amber / strategy accent
export const bbAccentGlow = "rgba(245, 158, 11, 0.14)";
export const bbAccentBorder = "rgba(245, 158, 11, 0.3)";

export const brandStrategyCards: TileCardData[] = [
  {
    id: "bb-brand-strategy",
    number: "01",
    title: "Brand Strategy",
    description: "The master plan that defines who you are, what you stand for, and how you will win in your market over the long term.",
    deliverables: ["Brand purpose & vision", "Core values definition", "Long-term strategic roadmap", "Brand architecture"],
  },
  {
    id: "bb-positioning",
    number: "02",
    title: "Brand Positioning",
    description: "Carve out a clear, defensible position in your market that makes choosing you the obvious decision.",
    deliverables: ["Competitive positioning analysis", "Positioning statement", "Differentiation framework", "Value proposition design"],
  },
  {
    id: "bb-research",
    number: "03",
    title: "Market & Competitor Research",
    description: "Deep-dive research into your market landscape, competitor strategies and untapped white space opportunities.",
    deliverables: ["Market sizing & segmentation", "Competitor analysis", "SWOT & gap analysis", "Opportunity mapping"],
  },
  {
    id: "bb-audience",
    number: "04",
    title: "Target Audience Strategy",
    description: "Define exactly who your best customers are, what drives them, and how to build a brand they love.",
    deliverables: ["Audience persona development", "Psychographic profiling", "Audience segmentation", "Jobs-to-be-done analysis"],
  },
  {
    id: "bb-communication",
    number: "05",
    title: "Brand Communication Strategy",
    description: "A unified messaging architecture that ensures every touchpoint speaks with one consistent, compelling voice.",
    deliverables: ["Messaging framework", "Tone of voice guide", "Key message hierarchy", "Channel communication strategy"],
  },
  {
    id: "bb-gtm",
    number: "06",
    title: "Go-To-Market Strategy",
    description: "A structured launch playbook that takes your brand from ready to visible — with precision and measurable impact.",
    deliverables: ["Launch strategy & timeline", "Channel prioritisation", "Go-to-market playbook", "Launch performance framework"],
  },
  {
    id: "bb-campaign-strategy",
    number: "07",
    title: "Campaign Strategy",
    description: "Individual campaign strategies that connect to the broader brand narrative and drive measurable business results.",
    deliverables: ["Campaign brief development", "Creative strategy direction", "Campaign KPI framework", "Cross-channel planning"],
  },
  {
    id: "bb-growth",
    number: "08",
    title: "Brand Growth Planning",
    description: "A long-term growth plan that systematically expands your brand equity, market share and commercial performance.",
    deliverables: ["12-month growth roadmap", "Brand equity measurement", "Growth lever identification", "Quarterly strategic reviews"],
  },
];

export interface FrameworkStage {
  number: string;
  label: string;
  description: string;
  outputs: string[];
}

export const brandFramework: FrameworkStage[] = [
  { number: "01", label: "Understand", description: "Deep research into your market, audience and competitive landscape.", outputs: ["Market research", "Audience analysis", "Competitor audit"] },
  { number: "02", label: "Position", description: "Define where you stand, what you own, and how you differentiate.", outputs: ["Positioning statement", "Differentiation map", "Value proposition"] },
  { number: "03", label: "Communicate", description: "Craft the messaging and voice that makes your position real.", outputs: ["Messaging framework", "Tone of voice", "Key narratives"] },
  { number: "04", label: "Launch", description: "Activate your brand in market with precision and confidence.", outputs: ["GTM playbook", "Launch campaign", "Channel strategy"] },
  { number: "05", label: "Grow", description: "Systematically expand brand equity, share of voice and revenue.", outputs: ["Growth roadmap", "Brand tracking", "Iteration cycles"] },
];

export interface ResearchLayer {
  label: string;
  description: string;
}

export const researchLayers: ResearchLayer[] = [
  { label: "Market", description: "Size, trends, dynamics and growth trajectory." },
  { label: "Competitors", description: "Strategies, positioning, messaging and gaps." },
  { label: "Audience", description: "Needs, motivations, behaviours and language." },
  { label: "Brand", description: "Current perception, equity and identity audit." },
  { label: "Opportunity", description: "The white space only your brand can own." },
];

export interface GrowthNode {
  label: string;
  description: string;
}

export const growthPath: GrowthNode[] = [
  { label: "Brand Foundation", description: "Purpose, values, positioning" },
  { label: "Market Position", description: "Differentiation, audience fit" },
  { label: "Communication", description: "Messaging, voice, channels" },
  { label: "Campaigns", description: "Activation, creative, media" },
  { label: "Growth", description: "Equity, revenue, scale" },
];
