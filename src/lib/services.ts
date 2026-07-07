export type Service = {
  slug: string;
  icon:
    | "truck"
    | "route"
    | "building"
    | "briefcase"
    | "box"
    | "shield";
  title: string;
  short: string;
  blurb: string;
  image: string;
  intro: string;
  includes: string[];
  steps: { title: string; text: string }[];
};

export const services: Service[] = [
  {
    slug: "local-moving",
    icon: "truck",
    title: "Local Moving",
    short: "Moves across Miami-Dade & Broward",
    blurb:
      "Studios to five-bedroom houses, moved across town without the day dragging into the night.",
    image:
      "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=1400&q=80",
    intro:
      "Most of our work is right here in South Florida, and we know the difference a well-run local move makes. We show up when we say we will, wrap your furniture before it leaves the room, and load the truck so nothing shifts on I-95. You get a real arrival window, not a vague morning-or-afternoon shrug.",
    includes: [
      "Furniture disassembly and reassembly",
      "Blankets, shrink wrap, and floor runners on every job",
      "Two, three, or four movers depending on the home",
      "Careful handling of TVs, mirrors, and glass tops",
      "Loading laid out so the truck rides tight and safe",
    ],
    steps: [
      { title: "Walkthrough", text: "We price by the home and the inventory, not by guesswork over the phone." },
      { title: "Pad and load", text: "Everything gets wrapped in the room, then carried out and loaded with a plan." },
      { title: "Set down", text: "Furniture goes where you want it, beds get rebuilt, and we take the trash." },
    ],
  },
  {
    slug: "long-distance",
    icon: "route",
    title: "Long Distance",
    short: "Florida to anywhere in the country",
    blurb:
      "Leaving the state? We handle the whole run with one crew and one point of contact.",
    image:
      "https://images.unsplash.com/photo-1601585144584-767a89aa2f96?auto=format&fit=crop&w=1400&q=80",
    intro:
      "A long move should not mean your things get passed between four strangers and a warehouse. We keep it simple: a guaranteed price, a delivery window you can plan around, and the same team from your driveway in Sunny Isles to the front door in Atlanta, Nashville, or New York.",
    includes: [
      "Binding written quote with no surprise weight tickets",
      "Direct delivery windows, not open-ended freight",
      "Full-value protection options on every shipment",
      "One dispatcher you can actually reach on the road",
      "Inventory tagged and checked at pickup and drop-off",
    ],
    steps: [
      { title: "Lock the quote", text: "We inventory the home and give you a firm number before anything moves." },
      { title: "Load and roll", text: "Your shipment travels tagged and tracked, with dates you can build around." },
      { title: "Deliver", text: "We unload, place the big pieces, and check the inventory with you at the door." },
    ],
  },
  {
    slug: "condo-high-rise",
    icon: "building",
    title: "Condo & High-Rise",
    short: "Oceanfront towers, done by the book",
    blurb:
      "Certificates of insurance, elevator reservations, loading docks. The building side, handled.",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=80",
    intro:
      "Sunny Isles, Aventura, and Bal Harbour run on rules, and the buildings on Collins Avenue are strict for good reason. We send the certificate of insurance ahead of time, book the freight elevator and loading window with management, and pad the common areas so nobody gets a violation notice. Half of a smooth high-rise move happens before we ever touch a box.",
    includes: [
      "Certificate of insurance sent to management in advance",
      "Freight elevator and loading dock scheduled with the building",
      "Wall, floor, and elevator padding to meet building rules",
      "Crews that know the Collins Avenue tower routine",
      "Move-out and move-in coordinated to the minute",
    ],
    steps: [
      { title: "Clear the building", text: "We handle the COI, elevator booking, and any paperwork management asks for." },
      { title: "Protect and move", text: "Common areas get padded, the elevator is reserved, and the crew works the window." },
      { title: "Settle in", text: "We place everything, break down boxes, and leave the unit and hallways clean." },
    ],
  },
  {
    slug: "commercial",
    icon: "briefcase",
    title: "Office & Commercial",
    short: "Offices, retail, and build-outs",
    blurb:
      "Move the office over a weekend and open Monday like nothing happened.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
    intro:
      "Downtime is the real cost of an office move, so we plan around your calendar, not ours. Nights and weekends are normal for us. We label by department, keep workstations together, and get the desks, files, and IT gear across town so your team walks in Monday and just plugs back in.",
    includes: [
      "After-hours and weekend scheduling to protect uptime",
      "Color-coded labeling by department or workstation",
      "Desks, cubicles, and conference furniture broken down and rebuilt",
      "Server and electronics handled with dedicated care",
      "Certificates of insurance for both buildings",
    ],
    steps: [
      { title: "Plan the phases", text: "We map the move by department and set a schedule that keeps you running." },
      { title: "Move after hours", text: "The crew works nights or the weekend so the business day stays open." },
      { title: "Reset for Monday", text: "Everything lands labeled and rebuilt, ready for your team to power on." },
    ],
  },
  {
    slug: "packing",
    icon: "box",
    title: "Packing & Crating",
    short: "Full-service or just the fragile stuff",
    blurb:
      "The kitchen, the art, the closet you have been avoiding. Packed right, unpacked fast.",
    image:
      "https://images.unsplash.com/photo-1530685932526-48ec92998eaa?auto=format&fit=crop&w=1400&q=80",
    intro:
      "Packing is where most moves go sideways, so we treat it like its own job. Want us to do the whole house? We will show up with the boxes and paper and have it wrapped in a day. Just need the china, the TVs, and a few pieces of art crated? We can do only that too. Everything gets labeled by room so unpacking is not a scavenger hunt.",
    includes: [
      "Full-home packing or fragile-only, your call",
      "Custom wood crating for art, mirrors, and marble",
      "Dish packs, wardrobe boxes, and quality materials",
      "Labeled by room and content for fast unpacking",
      "Unpacking service and debris removal on request",
    ],
    steps: [
      { title: "Bring the materials", text: "We arrive with boxes, paper, and crates sized to what you own." },
      { title: "Pack and label", text: "Everything is wrapped, boxed, and marked by room and contents." },
      { title: "Unpack if you want", text: "We can set the kitchen and closets back up and haul off the empties." },
    ],
  },
  {
    slug: "storage",
    icon: "shield",
    title: "Storage",
    short: "Short gaps and long holds",
    blurb:
      "Closing dates that do not line up? Your things wait with us, clean and accounted for.",
    image:
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1400&q=80",
    intro:
      "When the closing dates do not match or the new place is not ready, you should not have to scramble for a storage unit and a second crew. We pick up, hold your things in a clean and monitored facility, and deliver when you are ready. It is inventoried on the way in, so you know exactly what is there.",
    includes: [
      "Short-term storage between closing dates",
      "Longer holds for renovations and staging",
      "Inventoried in and out so nothing goes missing",
      "Clean, monitored, climate-conscious facility",
      "One crew handles pickup, storage, and final delivery",
    ],
    steps: [
      { title: "Pick up", text: "We inventory and pad everything, then bring it into storage." },
      { title: "Hold it safe", text: "Your things wait in a clean, monitored space for as long as you need." },
      { title: "Deliver on your date", text: "When the new place is ready, the same crew brings it all back." },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
