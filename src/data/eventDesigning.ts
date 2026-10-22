import type { TileCardData } from "../components/ServiceTileCard";

export const edAccent = "#F97316";      // energetic orange
export const edAccentGlow = "rgba(249, 115, 22, 0.14)";
export const edAccentBorder = "rgba(249, 115, 22, 0.3)";

export const eventServiceCards: TileCardData[] = [
  {
    id: "ed-concept",
    number: "01",
    title: "Event Concept & Theme",
    description: "The creative foundation of every event — a fully developed concept, theme and narrative that runs through every design decision.",
    deliverables: ["Creative concept development", "Mood boards & references", "Theme articulation", "Experience brief"],
  },
  {
    id: "ed-branding",
    number: "02",
    title: "Event Branding",
    description: "A complete visual identity for your event — from the logo and colour system to signage, print and digital touchpoints.",
    deliverables: ["Event logo & identity", "Colour & typography system", "Brand guidelines", "Branded touchpoint design"],
  },
  {
    id: "ed-stage",
    number: "03",
    title: "Stage & Set Design",
    description: "Architectural-grade stage and set design that transforms a physical space into an immersive brand environment.",
    deliverables: ["Stage concept & rendering", "Set design & architecture", "Prop & styling direction", "Supplier coordination"],
  },
  {
    id: "ed-backdrop",
    number: "04",
    title: "Backdrop & Display Design",
    description: "High-impact backdrops, step-and-repeats, standees and display structures that maximise visual presence at every angle.",
    deliverables: ["Backdrop design", "Step-and-repeat branding", "Display structure design", "Print-ready artwork"],
  },
  {
    id: "ed-digital",
    number: "05",
    title: "Digital Event Creatives",
    description: "Motion graphics, LED wall content, digital signage and social-ready event assets that extend the brand into every screen.",
    deliverables: ["LED & screen content", "Motion graphics", "Digital invites & EDMs", "Social event content"],
  },
  {
    id: "ed-corporate",
    number: "06",
    title: "Corporate Event Design",
    description: "Premium design for conferences, summits, AGMs and internal events — where brand authority and experience quality matter most.",
    deliverables: ["Conference design system", "Speaker environment design", "Registration & flow design", "Branded delegate materials"],
  },
  {
    id: "ed-launch",
    number: "07",
    title: "Product Launch Design",
    description: "Designed to create maximum impact on launch day — environments, packaging, digital moments and press-worthy visual statements.",
    deliverables: ["Launch environment design", "Product display & staging", "Press moment creation", "Launch content production"],
  },
  {
    id: "ed-exhibition",
    number: "08",
    title: "Exhibition & Stall Branding",
    description: "Exhibition stand and stall designs that stop foot traffic, communicate your brand instantly and convert walk-bys into conversations.",
    deliverables: ["Stand design & layout", "Branded structure design", "Display & signage", "Interactive touchpoints"],
  },
  {
    id: "ed-collateral",
    number: "09",
    title: "Event Collaterals",
    description: "All the branded materials that complete the event experience — from invites and programmes to giveaways and thank-you kits.",
    deliverables: ["Invitations & RSVP design", "Programmes & agendas", "Branded giveaways", "On-site print materials"],
  },
];

export interface EventStage {
  number: string;
  label: string;
  description: string;
  icon: string;
}

export const eventFlow: EventStage[] = [
  { number: "01", label: "Concept", description: "Develop the creative idea, theme and emotional experience you want to deliver.", icon: "✦" },
  { number: "02", label: "Design", description: "Translate the concept into a complete visual and spatial design system.", icon: "◈" },
  { number: "03", label: "Build", description: "Coordinate production, suppliers and construction with precision.", icon: "⬡" },
  { number: "04", label: "Experience", description: "The event goes live — immersive, polished and exactly as designed.", icon: "◉" },
  { number: "05", label: "Remember", description: "Content capture and post-event amplification that extends the experience.", icon: "★" },
];

export interface ShowcaseProject {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  wide?: boolean;
}

export const showcaseProjects: ShowcaseProject[] = [
  { id: "ev1", category: "Corporate", title: "Annual Leadership Summit", description: "Full-environment conference design for 800 executives.", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop&auto=format", wide: true },
  { id: "ev2", category: "Product Launch", title: "Tech Product Reveal", description: "Reveal-format launch environment with LED integration.", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=700&fit=crop&auto=format" },
  { id: "ev3", category: "Exhibition", title: "Trade Show Presence", description: "Multi-zone exhibition stand with interactive display.", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=700&fit=crop&auto=format" },
  { id: "ev4", category: "Brand Activation", title: "Street Activation Series", description: "Pop-up experiential installation across three cities.", image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=500&fit=crop&auto=format" },
  { id: "ev5", category: "Stage Design", title: "Brand Awards Night", description: "Theatrical stage design for a 1,200-seat awards ceremony.", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=500&fit=crop&auto=format", wide: true },
];

export const ecosystemNodes = [
  "Brand Identity",
  "Event Environment",
  "Stage + Set",
  "Digital Experience",
  "Audience",
  "Brand Memory",
];
