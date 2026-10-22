import type { TileCardData } from "../components/ServiceTileCard";

export const smAccent = "#8B5CF6"; // purple / social accent
export const smAccentGlow = "rgba(139, 92, 246, 0.14)";
export const smAccentBorder = "rgba(139, 92, 246, 0.3)";

export const socialServiceCards: TileCardData[] = [
  {
    id: "sm-strategy",
    number: "01",
    title: "Social Media Strategy",
    description: "A custom roadmap that defines your voice, platforms, content pillars and growth targets before a single post is created.",
    deliverables: ["Platform selection", "Audience persona development", "Content pillar framework", "KPI & goal setting"],
  },
  {
    id: "sm-planning",
    number: "02",
    title: "Content Planning & Calendar",
    description: "A structured monthly calendar that keeps your brand consistent, timely and always ahead of the curve.",
    deliverables: ["Monthly content calendar", "Posting frequency strategy", "Campaign & campaign alignment", "Seasonal planning"],
  },
  {
    id: "sm-management",
    number: "03",
    title: "Social Media Management",
    description: "End-to-end management of your social presence — from scheduling and publishing to monitoring and reporting.",
    deliverables: ["Daily posting & scheduling", "Platform management", "Brand consistency audits", "Monthly performance reports"],
  },
  {
    id: "sm-design",
    number: "04",
    title: "Creative & Post Designing",
    description: "Scroll-stopping visual content crafted to match your brand identity and platform best practices.",
    deliverables: ["Static post design", "Carousel & infographic design", "Story & highlight cover design", "Brand-consistent templates"],
  },
  {
    id: "sm-reels",
    number: "05",
    title: "Reels & Short-Form Content",
    description: "Fast, engaging short-form video content for Instagram Reels, TikTok and YouTube Shorts — built to maximise reach.",
    deliverables: ["Reels scripting & editing", "TikTok video production", "YouTube Shorts", "Trending audio & formats"],
  },
  {
    id: "sm-copy",
    number: "06",
    title: "Copywriting & Captions",
    description: "Captions and copy that sound like your brand — engaging, on-tone, and optimised for reach and action.",
    deliverables: ["Caption writing", "Hashtag strategy", "CTA optimisation", "Brand voice development"],
  },
  {
    id: "sm-community",
    number: "07",
    title: "Community Management",
    description: "Active, human community management that turns followers into loyal advocates — one genuine interaction at a time.",
    deliverables: ["Comments & DM responses", "Community growth tactics", "Crisis response protocols", "Engagement rate optimisation"],
  },
  {
    id: "sm-influencer",
    number: "08",
    title: "Influencer Collaborations",
    description: "Strategic influencer partnerships that amplify your brand to highly relevant, pre-warmed audiences.",
    deliverables: ["Influencer identification & vetting", "Campaign brief development", "Collaboration management", "Performance tracking"],
  },
  {
    id: "sm-analytics",
    number: "09",
    title: "Social Media Analytics & Reporting",
    description: "Clear, actionable monthly reporting that tells you exactly what is working, what is not, and what to do next.",
    deliverables: ["Monthly analytics reports", "Competitive benchmarking", "Content performance breakdown", "Strategy iteration recommendations"],
  },
];

export interface WorkflowStep {
  number: string;
  label: string;
  description: string;
}

export const socialWorkflow: WorkflowStep[] = [
  { number: "01", label: "Strategy", description: "Define goals, audience, platforms and content pillars." },
  { number: "02", label: "Plan", description: "Build the monthly calendar aligned to campaigns and moments." },
  { number: "03", label: "Create", description: "Design, write and produce every piece of content." },
  { number: "04", label: "Publish", description: "Schedule and publish at peak engagement windows." },
  { number: "05", label: "Engage", description: "Respond, interact and grow the community actively." },
  { number: "06", label: "Analyze", description: "Review performance data across every metric that matters." },
  { number: "07", label: "Improve", description: "Iterate the strategy based on real results every cycle." },
];

export interface ContentType {
  id: string;
  label: string;
  description: string;
  image: string;
  tag: string;
}

export const contentTypes: ContentType[] = [
  { id: "reels", label: "Reels", description: "Short-form vertical video that drives reach and discovery.", image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=800&fit=crop&auto=format", tag: "Video" },
  { id: "posts", label: "Social Posts", description: "Static and carousel posts that communicate and convert.", image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&h=600&fit=crop&auto=format", tag: "Design" },
  { id: "stories", label: "Stories", description: "Ephemeral formats for authentic, behind-the-scenes moments.", image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&h=900&fit=crop&auto=format", tag: "Stories" },
  { id: "campaigns", label: "Campaign Creatives", description: "Multi-format creative suites tied to a campaign theme.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&auto=format", tag: "Campaign" },
  { id: "ugc", label: "UGC Content", description: "Creator-style content that builds authentic social proof.", image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=700&fit=crop&auto=format", tag: "UGC" },
  { id: "influencer", label: "Influencer Content", description: "Co-created content through strategic influencer partnerships.", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=700&h=500&fit=crop&auto=format", tag: "Collab" },
];

export interface DemoMetric {
  label: string;
  value: string;
  delta: string;
  positive: boolean;
}

export const socialDemoMetrics: DemoMetric[] = [
  { label: "Avg Reach Growth", value: "284%", delta: "↑ 6 months", positive: true },
  { label: "Engagement Rate", value: "6.4%", delta: "↑ vs 1.2% baseline", positive: true },
  { label: "Community Size", value: "142k", delta: "↑ 89k added", positive: true },
  { label: "Leads from Social", value: "1,240", delta: "Monthly avg", positive: true },
];
