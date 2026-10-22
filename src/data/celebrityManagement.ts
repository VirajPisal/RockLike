import type { TileCardData } from "../components/ServiceTileCard";

export const cmAccent = "#C084FC";      // luxury lavender
export const cmAccentGlow = "rgba(192, 132, 252, 0.14)";
export const cmAccentBorder = "rgba(192, 132, 252, 0.3)";

export const celebrityServiceCards: TileCardData[] = [
  {
    id: "cm-endorsements",
    number: "01",
    title: "Celebrity Endorsements",
    description: "Strategic endorsement deals that attach the right personality to your brand — increasing credibility, recognition and commercial performance.",
    deliverables: ["Talent identification & vetting", "Deal structuring", "Contract negotiation", "Usage rights management"],
  },
  {
    id: "cm-collaborations",
    number: "02",
    title: "Celebrity Collaborations",
    description: "Co-created campaigns and product collaborations with celebrities that generate earned media, cultural relevance and sustained brand conversation.",
    deliverables: ["Collaboration concept development", "Product co-creation", "Content strategy", "Launch campaign planning"],
  },
  {
    id: "cm-ambassador",
    number: "03",
    title: "Brand Ambassador Management",
    description: "Long-term brand ambassador relationships that keep your brand front-of-mind through consistent, authentic celebrity representation.",
    deliverables: ["Ambassador strategy", "Onboarding & briefing", "Activity scheduling", "Performance monitoring"],
  },
  {
    id: "cm-campaigns",
    number: "04",
    title: "Celebrity Campaigns",
    description: "Full-scale creative campaigns built around a celebrity partnership — from concept and production to paid media activation and PR.",
    deliverables: ["Campaign concept", "Creative direction", "Production coordination", "Media amplification"],
  },
  {
    id: "cm-appearances",
    number: "05",
    title: "Celebrity Event Appearances",
    description: "High-impact celebrity appearances at launches, activations and events that generate press, social coverage and brand association at scale.",
    deliverables: ["Talent booking", "Appearance management", "Press & PR coordination", "Social content strategy"],
  },
  {
    id: "cm-partnerships",
    number: "06",
    title: "Influencer & Celebrity Partnerships",
    description: "Bridging the gap between celebrity culture and creator economy — strategic partnerships that work across traditional and digital media.",
    deliverables: ["Hybrid talent strategy", "Cross-platform activation", "Creator-celebrity pairing", "Integrated campaign management"],
  },
  {
    id: "cm-execution",
    number: "07",
    title: "Campaign Coordination & Execution",
    description: "End-to-end campaign management: briefing, scheduling, approvals, content delivery and post-campaign reporting — handled without friction.",
    deliverables: ["Project management", "Talent coordination", "Content approvals", "Campaign performance reporting"],
  },
];

export interface CampaignStage {
  number: string;
  label: string;
  description: string;
}

export const campaignJourney: CampaignStage[] = [
  { number: "01", label: "Discover", description: "We identify celebrities whose values, audience and aesthetic genuinely align with your brand." },
  { number: "02", label: "Match", description: "We model audience overlap, brand affinity and campaign fit before making any approach." },
  { number: "03", label: "Negotiate", description: "We manage the deal — fees, rights, exclusivity, usage — to protect your budget and objectives." },
  { number: "04", label: "Execute", description: "Full production and campaign management with the talent, creative team and media partners." },
  { number: "05", label: "Amplify", description: "We maximise every asset through paid, earned and owned media to compound campaign reach." },
];

export interface DemoProfile {
  id: string;
  initials: string;
  category: string;
  audience: string;
  reach: string;
  fit: string;
  color: string;
}

export const demoProfiles: DemoProfile[] = [
  { id: "p1", initials: "A.K.", category: "Entertainment", audience: "18–35 Urban", reach: "12M", fit: "High", color: cmAccent },
  { id: "p2", initials: "M.S.", category: "Sport & Fitness", audience: "25–45 Active", reach: "8.4M", fit: "Strong", color: "#818CF8" },
  { id: "p3", initials: "R.J.", category: "Fashion & Lifestyle", audience: "22–38 Premium", reach: "5.1M", fit: "Excellent", color: "#F472B6" },
  { id: "p4", initials: "D.L.", category: "Business & Tech", audience: "30–50 Professional", reach: "3.8M", fit: "Good", color: "#34D399" },
];
