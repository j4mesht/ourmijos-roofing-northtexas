import {
  Wrench,
  Hammer,
  Droplets,
  Zap,
  Paintbrush,
  DoorOpen,
  Layers,
  WashingMachine,
  Bath,
  UtensilsCrossed,
  TreePine,
  Package,
  ShieldCheck,
  Truck,
  Building2,
  Fence,
  Blocks,
  type LucideIcon,
} from "lucide-react";

export interface ServiceCategory {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
}

export const services: ServiceCategory[] = [
  {
    id: "general-repairs",
    icon: Wrench,
    title: "General Repairs & Maintenance",
    description:
      "From squeaky floors to loose railings, we handle the everyday fixes that keep your home safe and comfortable.",
    items: [
      "Fix squeaky floors",
      "Patch drywall",
      "Replace broken tiles and trim",
      "Caulk fixtures",
      "Weatherstrip openings",
      "Fix doors and cabinets",
      "Secure loose railings",
    ],
  },
  {
    id: "carpentry",
    icon: Hammer,
    title: "Carpentry & Woodwork",
    description:
      "Custom carpentry solutions from shelving and molding to deck repairs and outdoor structures.",
    items: [
      "Build and install shelves and molding",
      "Install doors and closet organizers",
      "Build storage units and outdoor structures",
      "Repair decks and fences",
      "Add wainscoting and handrails",
    ],
  },
  {
    id: "plumbing",
    icon: Droplets,
    title: "Plumbing",
    description:
      "Professional plumbing services from faucet replacements to repiping and water filtration systems.",
    items: [
      "Replace water heaters, faucets, and toilets",
      "Fix leaks and clear drains",
      "Install showerheads and garbage disposals",
      "Repair running toilets",
      "Handle repiping and water filters",
    ],
  },
  {
    id: "electrical",
    icon: Zap,
    title: "Electrical",
    description:
      "Safe, reliable electrical work including fixture installation, smart home upgrades, and safety devices.",
    items: [
      "Replace light fixtures and outlets",
      "Install ceiling fans and smart switches",
      "Hang chandeliers",
      "Add under-cabinet lighting",
      "Install doorbells, smoke detectors, and CO detectors",
    ],
  },
  {
    id: "painting",
    icon: Paintbrush,
    title: "Painting & Finishing",
    description:
      "Interior and exterior painting, cabinet refinishing, deck staining, and protective coatings.",
    items: [
      "Paint interiors, exteriors, cabinets, and trim",
      "Stain decks",
      "Remove wallpaper",
      "Seal wood surfaces",
      "Apply protective coatings",
    ],
  },
  {
    id: "windows-doors",
    icon: DoorOpen,
    title: "Windows & Doors",
    description:
      "Complete window and door services including installation, screen replacement, and hardware repair.",
    items: [
      "Install windows, storm doors, and pet doors",
      "Replace screens and hardware",
      "Repair locks and adjust hinges",
      "Replace weather seals",
    ],
  },
  {
    id: "flooring",
    icon: Layers,
    title: "Flooring",
    description:
      "Expert flooring installation and repair for laminate, vinyl, tile, and more.",
    items: [
      "Install laminate, vinyl, and tile flooring",
      "Repair cracked tiles",
      "Replace and regrout tile",
      "Install transition strips",
      "Fix squeaky subfloors",
    ],
  },
  {
    id: "appliance",
    icon: WashingMachine,
    title: "Appliance Installation & Repair",
    description:
      "Professional installation and repair for dishwashers, washers, dryers, and other household appliances.",
    items: [
      "Install dishwashers, washers, and dryers",
      "Install microwaves, ovens, and range hoods",
      "Repair appliance doors",
      "Connect refrigerator water lines",
    ],
  },

  {
    id: "kitchen",
    icon: UtensilsCrossed,
    title: "Kitchen Services",
    description:
      "Transform your kitchen with new cabinets, countertops, backsplashes, and hardware upgrades.",
    items: [
      "Install cabinets and countertops",
      "Install sinks and backsplashes",
      "Install pot racks and range hoods",
      "Replace cabinet hardware",
    ],
  },
  {
    id: "exterior",
    icon: TreePine,
    title: "Exterior & Outdoor Work",
    description:
      "Keep your property's exterior in top shape with power washing, gutter service, and outdoor lighting.",
    items: [
      "Power wash surfaces",
      "Clean and install gutters",
      "Repair fences and patios",
      "Maintain decks",
      "Install outdoor lighting and shutters",
      "Fix siding",
    ],
  },
  {
    id: "assembly",
    icon: Package,
    title: "Assembly & Installation",
    description:
      "We assemble furniture, mount TVs, install shelving systems, and organize your garage and closets.",
    items: [
      "Assemble furniture",
      "Mount TVs and artwork",
      "Install curtain rods, blinds, and shelving",
      "Install closet rods and wall anchors",
      "Set up garage storage systems",
    ],
  },
  {
    id: "safety",
    icon: ShieldCheck,
    title: "Safety & Accessibility",
    description:
      "Make your home safer and more accessible with grab bars, ramps, childproofing, and safety devices.",
    items: [
      "Install grab bars, ramps, and handrails",
      "Install cabinet locks and window guards",
      "Install fire extinguishers and exit lighting",
      "Complete childproofing services",
    ],
  },
  {
    id: "moving",
    icon: Truck,
    title: "Moving & Property Prep",
    description:
      "From furniture relocation to pre-sale repairs, we handle moves, rental turnovers, and punch-lists.",
    items: [
      "Handle moves and furniture relocation",
      "Rental turnovers",
      "Pre-sale repairs and punch-lists",
      "Home inspection fixes",
    ],
  },
  {
    id: "commercial",
    icon: Building2,
    title: "Commercial Handyman Tasks",
    description:
      "Professional handyman services for offices and commercial spaces — furniture, fixtures, and repairs.",
    items: [
      "Assemble office furniture",
      "Install retail fixtures and signs",
      "Replace ceiling tiles and repair drywall",
      "Install door closers",
      "Handle minor plumbing and electrical fixes",
    ],
  },
  {
    id: "bathroom",
    icon: Bath,
    title: "Bathroom Services & Remodels",
    description:
      "From quick fixture upgrades to full bathroom remodeling — vanities, tubs, tile, fixtures, lighting, and more.",
    items: [
      "Replace vanities, toilets, tubs, and flooring",
      "Install tile and shower surrounds",
      "Install towel racks, grab bars, and medicine cabinets",
      "Replace shower doors and sink basins",
      "Upgrade fixtures and lighting",
      "Replace exhaust fans and mirrors",
      "Repair drywall, regrout, and paint",
    ],
  },
  {
    id: "fencing",
    icon: Fence,
    title: "Fencing Services",
    description:
      "Install and repair wood, vinyl, chain link, and aluminum fences — including gates, staining, and hardware.",
    items: [
      "Install and repair wood, vinyl, chain link, and aluminum fences",
      "Replace posts and panels",
      "Install gates",
      "Stain, paint, and pressure wash fences",
      "Extend height and replace latches and hinges",
    ],
  },
  {
    id: "drywall",
    icon: Blocks,
    title: "Sheetrock / Drywall Services",
    description:
      "Expert drywall repair, texture matching, popcorn ceiling removal, and wall preparation for painting.",
    items: [
      "Repair holes, cracks, and water damage",
      "Replace full or partial drywall panels",
      "Apply tape, mud, and skim coat",
      "Match and repair textures (orange peel, knockdown, popcorn, smooth)",
      "Remove popcorn ceilings",
      "Install soundproofing and fire-rated drywall",
      "Sand, finish, and prepare walls for painting",
    ],
  },
];

/** A curated subset of the most popular / high-demand services shown on the homepage */
export const popularServiceIds = [
  "general-repairs",
  "plumbing",
  "electrical",
  "painting",
  "bathroom",
  "fencing",
  "drywall",
  "carpentry",
];

export const getPopularServices = () =>
  services.filter((s) => popularServiceIds.includes(s.id));
