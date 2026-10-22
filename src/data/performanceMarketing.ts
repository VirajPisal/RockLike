import type { TileCardData } from "../components/ServiceTileCard";

export type { TileCardData as PerformanceServiceCard };

export interface PerformanceChannel {
  id: string;
  name: string;
  description: string;
  platforms: string[];
}

export interface PerformanceMetric {
  id: string;
  label: string;
  value: string;
  context: string;
  positive: boolean;
  delta?: string;
}

export interface FunnelStage {
  id: string;
  label: string;
  description: string;
  metric: string;
  width: string;
}

export interface FullFunnelStage {
  id: string;
  step: number;
  label: string;
  icon: string;
  description: string;
  tactic: string;
  metric: string;
  widthPct: number;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface AnalyticsMonth {
  month: string;
  revenue: number;
  spend: number;
}

export interface PlatformSplit {
  platform: string;
  percentage: number;
  spend: string;
  color: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  title: string;
  challenge: string;
  result: string;
  metrics: { label: string; value: string }[];
  image: string;
}

/* ─── 9 performance service tile cards ─── */
export const performanceServiceCards: TileCardData[] = [
  {
    id: "google-ads",
    number: "01",
    title: "Google Ads",
    description:
      "Search, Shopping, Display, and YouTube campaigns engineered to capture demand at every stage of intent.",
    deliverables: ["Search & Shopping campaigns", "Performance Max", "Keyword strategy & bidding", "Quality Score optimisation"],
  },
  {
    id: "meta-ads",
    number: "02",
    title: "Meta Ads",
    description:
      "Full-funnel Meta campaigns across Facebook and Instagram — from cold audience acquisition to warm retargeting that converts.",
    deliverables: ["Prospecting & retargeting", "Creative strategy & testing", "Advantage+ campaigns", "Catalogue & dynamic ads"],
  },
  {
    id: "youtube-ads",
    number: "03",
    title: "YouTube Advertising",
    description:
      "Video ad campaigns that build brand equity and drive measurable action across the world's second-largest search engine.",
    deliverables: ["In-stream & bumper ads", "YouTube demand gen", "Video sequencing", "Connected TV placement"],
  },
  {
    id: "lead-gen",
    number: "04",
    title: "Lead Generation Campaigns",
    description:
      "B2B and B2C lead gen campaigns built to deliver qualified pipeline — not just form fills. Quality over volume, always.",
    deliverables: ["Lead magnet strategy", "Landing page optimisation", "CRM integration", "Lead scoring & nurture"],
  },
  {
    id: "conversion",
    number: "05",
    title: "Conversion Campaigns",
    description:
      "Bottom-of-funnel campaigns targeting high-intent audiences and removing every friction point between interest and purchase.",
    deliverables: ["Purchase & ROAS campaigns", "Checkout optimisation", "Cart abandonment recovery", "Offer & creative testing"],
  },
  {
    id: "ecommerce",
    number: "06",
    title: "E-commerce Advertising",
    description:
      "Full-funnel e-commerce strategy across Google Shopping, Meta, and marketplaces — built to scale revenue without scaling waste.",
    deliverables: ["Google & Meta Shopping", "Product feed management", "Seasonal campaign planning", "ROAS & margin optimisation"],
  },
  {
    id: "retargeting",
    number: "07",
    title: "Retargeting Campaigns",
    description:
      "Precision retargeting flows that re-engage your warmest audiences with the right message at exactly the right moment.",
    deliverables: ["Audience segmentation", "Dynamic retargeting", "Cross-channel sequences", "Frequency & burn management"],
  },
  {
    id: "strategy",
    number: "08",
    title: "Performance Campaign Strategy",
    description:
      "The thinking behind the spending. We architect your full channel mix, budget allocation, and creative strategy before a single dollar goes live.",
    deliverables: ["Channel mix modelling", "Budget allocation framework", "Competitor audit", "KPI & attribution framework"],
  },
  {
    id: "analytics",
    number: "09",
    title: "Campaign Optimization & Analytics",
    description:
      "Continuous improvement driven by clean data. Weekly optimisation cadences, monthly strategic reviews, and reporting that actually means something.",
    deliverables: ["GA4 & pixel setup", "Custom dashboard build", "Weekly optimisation reports", "Attribution & LTV modelling"],
  },
];

/* ─── 7-stage full funnel ─── */
export const fullFunnelStages: FullFunnelStage[] = [
  {
    id: "reach",
    step: 1,
    label: "Reach",
    icon: "broadcast",
    description: "Introduce your brand to qualified audiences who have never heard of you — at scale, with relevance.",
    tactic: "Programmatic display, YouTube pre-roll, broad interest targeting",
    metric: "12M+ impressions / mo",
    widthPct: 100,
  },
  {
    id: "engage",
    step: 2,
    label: "Engage",
    icon: "cursor",
    description: "Turn initial awareness into meaningful interaction — clicks, views, site visits, and content consumption.",
    tactic: "Video ads, blog traffic campaigns, awareness remarketing",
    metric: "4.2% avg CTR",
    widthPct: 82,
  },
  {
    id: "click",
    step: 3,
    label: "Click",
    icon: "link",
    description: "Drive high-intent traffic to optimised landing pages designed to convert at every price point.",
    tactic: "Paid search, shopping ads, high-intent audience targeting",
    metric: "$1.40 avg CPC",
    widthPct: 65,
  },
  {
    id: "lead",
    step: 4,
    label: "Lead",
    icon: "person",
    description: "Capture qualified interest through lead magnets, forms, and gated content that qualify before they call.",
    tactic: "Lead gen campaigns, content downloads, webinar registrations",
    metric: "1,847 leads / mo",
    widthPct: 50,
  },
  {
    id: "convert",
    step: 5,
    label: "Convert",
    icon: "cart",
    description: "Close sales with purchase-ready messaging, social proof, and offers that eliminate the last objection.",
    tactic: "Conversion campaigns, cart recovery, urgency triggers",
    metric: "6.2× avg ROAS",
    widthPct: 36,
  },
  {
    id: "retarget",
    step: 6,
    label: "Retarget",
    icon: "refresh",
    description: "Re-engage lost prospects and past visitors with precision sequences that bring them back to buy.",
    tactic: "Dynamic retargeting, cross-sell campaigns, win-back flows",
    metric: "38% lift in CVR",
    widthPct: 24,
  },
  {
    id: "scale",
    step: 7,
    label: "Scale",
    icon: "trending",
    description: "Systematically expand what's working — more budget into proven winners, new audiences, new markets.",
    tactic: "Lookalike scaling, international expansion, creative iteration",
    metric: "3.1× repeat purchase",
    widthPct: 14,
  },
];

/* ─── Legacy funnel stages (kept for GrowthFunnel component) ─── */
export const funnelStages: FunnelStage[] = [
  { id: "awareness", label: "Awareness", description: "Reach qualified audiences who don't know you yet.", metric: "12M+ impressions / mo", width: "100%" },
  { id: "consideration", label: "Consideration", description: "Nurture interest with targeted creative sequences.", metric: "4.2% avg CTR", width: "74%" },
  { id: "conversion", label: "Conversion", description: "Close sales with high-intent messaging.", metric: "6.2× avg ROAS", width: "52%" },
  { id: "retention", label: "Retention", description: "Maximize LTV through post-purchase campaigns.", metric: "3.1× repeat purchase", width: "34%" },
];

/* ─── Performance metrics ─── */
export const performanceMetrics: PerformanceMetric[] = [
  { id: "m1", label: "Average ROAS Delivered", value: "6.2×", context: "across e-commerce clients", positive: true, delta: "↑ 38%" },
  { id: "m2", label: "Reduction in CPA", value: "41%", context: "vs. prior agency average", positive: true, delta: "↓ 41%" },
  { id: "m3", label: "Revenue Attributed", value: "$48M+", context: "across client portfolio", positive: true, delta: "Since 2019" },
  { id: "m4", label: "Campaigns Managed", value: "200+", context: "since 2019", positive: true, delta: "Active now" },
];

/* ─── Demo analytics data — clearly labelled ─── */
export const demoMonthlyData: AnalyticsMonth[] = [
  { month: "Jan", revenue: 38400, spend: 8200 },
  { month: "Feb", revenue: 52100, spend: 9800 },
  { month: "Mar", revenue: 67800, spend: 11200 },
  { month: "Apr", revenue: 84300, spend: 12800 },
  { month: "May", revenue: 101600, spend: 14100 },
  { month: "Jun", revenue: 124200, spend: 15600 },
];

export const demoPlatformSplit: PlatformSplit[] = [
  { platform: "Google Ads", percentage: 40, spend: "$18,400 / mo", color: "var(--clr-performance)" },
  { platform: "Meta Ads", percentage: 30, spend: "$13,800 / mo", color: "#3B82F6" },
  { platform: "YouTube Ads", percentage: 18, spend: "$8,280 / mo", color: "#8B5CF6" },
  { platform: "LinkedIn Ads", percentage: 12, spend: "$5,520 / mo", color: "#F59E0B" },
];

/* ─── Case studies ─── */
export const performanceCaseStudies: CaseStudy[] = [
  {
    id: "cs1",
    client: "Dune Apparel",
    industry: "E-commerce · Fashion",
    title: "6.8× ROAS in 90 Days",
    challenge: "Inherited a fragmented ad account with no attribution and a 1.9× ROAS.",
    result: "Rebuilt from scratch: clean structure, creative testing framework, and Advantage+ scaling.",
    metrics: [{ label: "ROAS", value: "6.8×" }, { label: "CPA ↓", value: "54%" }, { label: "Revenue ↑", value: "312%" }],
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=500&fit=crop&auto=format",
  },
  {
    id: "cs2",
    client: "Peak Systems",
    industry: "B2B · Enterprise SaaS",
    title: "CPL Halved. Pipeline Tripled.",
    challenge: "High CPL, low lead quality, and no way to attribute which campaigns drove actual revenue.",
    result: "Full-funnel LinkedIn + Search strategy with proper CRM attribution and content gating.",
    metrics: [{ label: "CPL ↓", value: "54%" }, { label: "Pipeline ↑", value: "3.1×" }, { label: "SQLs ↑", value: "89%" }],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop&auto=format",
  },
  {
    id: "cs3",
    client: "Lumen Health",
    industry: "Health & Wellness · D2C",
    title: "From Break-Even to Profitable at Scale",
    challenge: "Spending $40k/mo with a 1.1× ROAS. Great product, broken funnel.",
    result: "Creative overhaul, audience restructure, and landing page optimisation turned the account profitable in 6 weeks.",
    metrics: [{ label: "ROAS", value: "5.4×" }, { label: "Blended CPA ↓", value: "67%" }, { label: "AOV ↑", value: "28%" }],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop&auto=format",
  },
];

/* ─── Legacy exports ─── */
export const performanceChannels: PerformanceChannel[] = [
  { id: "paid-search", name: "Paid Search", description: "Capture high-intent buyers at the exact moment they're searching.", platforms: ["Google Ads", "Microsoft Ads", "Google Shopping"] },
  { id: "paid-social", name: "Paid Social", description: "Audience-first creative strategy that builds pipeline.", platforms: ["Meta Ads", "LinkedIn Ads", "TikTok Ads"] },
  { id: "programmatic", name: "Programmatic", description: "Precision-targeted display and video campaigns.", platforms: ["DV360", "The Trade Desk", "Amazon DSP"] },
  { id: "analytics", name: "Analytics", description: "Clean, consistent attribution for every dollar.", platforms: ["GA4", "Looker Studio", "Northbeam"] },
];

export const performanceProcess: ProcessStep[] = [
  { step: 1, title: "Audit & Baseline", description: "We audit your existing accounts and establish a true performance baseline." },
  { step: 2, title: "Strategy Architecture", description: "Design a full-funnel channel mix aligned to your growth targets." },
  { step: 3, title: "Creative & Launch", description: "Build campaign structures and launch with systematic A/B testing." },
  { step: 4, title: "Optimize & Scale", description: "Weekly optimisation cycles tied to proven ROAS thresholds." },
];
