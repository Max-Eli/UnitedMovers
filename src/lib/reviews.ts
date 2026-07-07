export type Review = {
  name: string;
  location: string;
  date: string;
  rating: number;
  text: string;
  move: string;
};

export const reviews: Review[] = [
  {
    name: "Marisol T.",
    location: "Sunny Isles Beach, FL",
    date: "March 2026",
    rating: 5,
    text: "We moved from a unit in Trump Towers to a house in Aventura and I was dreading the building side of it. They had the certificate of insurance to management two days early and booked the freight elevator without me chasing anyone. The crew wrapped every piece of furniture before it left the room. Nothing was scratched.",
    move: "Condo to house",
  },
  {
    name: "Derek P.",
    location: "Fort Lauderdale, FL",
    date: "February 2026",
    rating: 5,
    text: "Third time using United and the reason is simple. They show up when they say, the price on the quote is the price I paid, and the guys actually hustle. Loaded a three bedroom in under four hours and didn't ding a single wall on the way out.",
    move: "3 bedroom local",
  },
  {
    name: "Aisha R.",
    location: "Aventura, FL",
    date: "February 2026",
    rating: 5,
    text: "Long distance to Charlotte. What sold me was that the same two guys who loaded the truck in Florida were the ones who carried everything into the new place. No warehouse, no waiting two weeks wondering where my stuff was. Delivered on the day they promised.",
    move: "Long distance to NC",
  },
  {
    name: "Jon M.",
    location: "Bal Harbour, FL",
    date: "January 2026",
    rating: 5,
    text: "I run a small law office and needed to move over a weekend without losing a business day. They labeled everything by desk, moved us Saturday, and we were up and running Monday morning. Zero downtime, which is exactly what I asked for.",
    move: "Office relocation",
  },
  {
    name: "Camila S.",
    location: "Hallandale Beach, FL",
    date: "January 2026",
    rating: 5,
    text: "The packing team saved me. I have a lot of art and glass and I did not trust myself to box it. They crated the big pieces and had the whole kitchen packed in an afternoon. Everything arrived in one piece and it was labeled so unpacking was easy.",
    move: "Full packing + local",
  },
  {
    name: "Greg L.",
    location: "Miami Beach, FL",
    date: "December 2025",
    rating: 5,
    text: "Our closing got pushed a week and we had nowhere to put our furniture. They stored everything, sent me an inventory list, and delivered the day the new place cleared. Took a stressful gap and made it a non-issue.",
    move: "Storage + delivery",
  },
  {
    name: "Priya N.",
    location: "Sunny Isles Beach, FL",
    date: "December 2025",
    rating: 5,
    text: "Honest quote, no surprise fees at the end, and the movers were polite and quick. They put down floor runners and padded the elevator without me even asking. You can tell they have done a lot of these high-rise moves.",
    move: "High-rise studio",
  },
  {
    name: "Tomás V.",
    location: "Doral, FL",
    date: "November 2025",
    rating: 5,
    text: "Booked them for my parents who don't speak much English and the crew was patient and respectful the whole day. Reassembled the beds, set up the dining table, and made sure everything was where my mom wanted it before they left.",
    move: "2 bedroom local",
  },
];

export const ratingSummary = {
  average: 4.9,
  count: 260,
};
