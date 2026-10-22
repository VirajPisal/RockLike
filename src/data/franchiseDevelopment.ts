import type { TileCardData } from "../components/ServiceTileCard";

export const fdAccent = "#0EA5E9";      // sky blue — structured / corporate
export const fdAccentGlow = "rgba(14, 165, 233, 0.14)";
export const fdAccentBorder = "rgba(14, 165, 233, 0.3)";

export const franchiseServiceCards: TileCardData[] = [
  {
    id: "fd-brand-strategy",
    number: "01",
    title: "Franchise Brand Strategy",
    description: "A master brand strategy built for replication — clear positioning, values and visual standards that maintain quality across every location.",
    deliverables: ["Brand strategy development", "Franchise positioning", "Brand standards definition", "Franchisee brand guidelines"],
  },
  {
    id: "fd-model",
    number: "02",
    title: "Franchise Model Development",
    description: "We help you design a franchise model that is operationally sound, financially viable and attractive to the right franchisee profile.",
    deliverables: ["Business model structuring", "Fee & royalty framework", "Operations model design", "Franchisee profile definition"],
  },
  {
    id: "fd-documentation",
    number: "03",
    title: "Franchise Documentation",
    description: "All the written documentation needed to operate and grow a franchise — from the operations manual to the franchise agreement brief.",
    deliverables: ["Operations manual", "Franchise disclosure document", "Training materials", "System process documentation"],
  },
  {
    id: "fd-branding",
    number: "04",
    title: "Franchise Branding",
    description: "Complete brand identity and system design for your franchise — built to scale consistently whether you have 1 or 100 locations.",
    deliverables: ["Visual identity system", "Signage & environment design", "Brand asset library", "Scalable brand templates"],
  },
  {
    id: "fd-marketing-strategy",
    number: "05",
    title: "Franchise Marketing Strategy",
    description: "A dual-level marketing strategy — national brand campaigns that drive awareness and local marketing support that drives franchisee revenue.",
    deliverables: ["National marketing plan", "Local marketing playbook", "Digital marketing strategy", "Campaign templates"],
  },
  {
    id: "fd-lead-gen",
    number: "06",
    title: "Franchise Lead Generation",
    description: "Performance-driven campaigns designed to attract, qualify and convert serious franchise enquiries — not tyre kickers.",
    deliverables: ["Franchise lead gen campaigns", "Franchisee landing pages", "Lead qualification system", "CRM & pipeline setup"],
  },
  {
    id: "fd-sales",
    number: "07",
    title: "Franchise Sales Support",
    description: "Sales collateral, presentations and toolkits that give your franchise development team everything they need to close qualified franchisees.",
    deliverables: ["Franchise prospectus", "Sales deck & presentations", "Due diligence materials", "Franchisee onboarding kit"],
  },
  {
    id: "fd-launch",
    number: "08",
    title: "Franchise Launch & Promotion",
    description: "Location launch campaigns that build local awareness fast — from pre-opening teasers to grand opening activations and ongoing media.",
    deliverables: ["Pre-opening campaign", "Grand opening strategy", "Local PR & media", "Launch content production"],
  },
];

export interface FrameworkStage {
  number: string;
  label: string;
  objective: string;
  activity: string;
  output: string;
}

export const franchiseFramework: FrameworkStage[] = [
  { number: "01", label: "Strategy", objective: "Define the franchise opportunity and competitive position.", activity: "Market research, opportunity mapping, franchisee profiling", output: "Franchise strategy document" },
  { number: "02", label: "Model", objective: "Build a financially viable and operationally sound franchise model.", activity: "Fee structure, operations design, territory planning", output: "Franchise model blueprint" },
  { number: "03", label: "Systems", objective: "Document every system, process and standard.", activity: "Operations manual, training design, tech stack setup", output: "Complete operations documentation" },
  { number: "04", label: "Brand", objective: "Create a brand that scales consistently across all locations.", activity: "Visual identity, brand guidelines, environment design", output: "Franchise brand system" },
  { number: "05", label: "Market", objective: "Build the marketing engine to attract franchisees and customers.", activity: "Lead gen campaigns, local marketing playbooks, digital strategy", output: "Franchise marketing system" },
  { number: "06", label: "Launch", objective: "Activate the franchise model in market with confidence.", activity: "Franchisee recruitment, territory launches, PR and media", output: "Live franchise network" },
];

export const growthCycleNodes = [
  "Strategy",
  "Branding",
  "Marketing",
  "Lead Generation",
  "Sales",
  "Launch",
  "Growth",
];

export interface ScalingNode {
  label: string;
  sublabel: string;
  count?: string;
}

export const scalingPath: ScalingNode[] = [
  { label: "One Brand", sublabel: "Your proven business model" },
  { label: "Franchise Model", sublabel: "Packaged and documented" },
  { label: "First Location", sublabel: "Proven concept, new market" },
  { label: "Multiple Locations", sublabel: "Consistent brand, regional growth" },
  { label: "Scalable Network", sublabel: "Systems-driven expansion" },
];
