export const site = {
  name: "United Movers",
  legalName: "United Movers LLC",
  tagline: "South Florida moving, handled right.",
  phone: "786-419-4969",
  phoneHref: "tel:+17864194969",
  smsHref: "sms:+17864194969",
  email: "unitedmovingfl@gmail.com",
  emailHref: "mailto:unitedmovingfl@gmail.com",
  address: {
    line1: "17600 Collins Ave",
    city: "Sunny Isles Beach",
    state: "FL",
    zip: "33160",
    full: "17600 Collins Ave, Sunny Isles Beach, FL 33160",
  },
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=17600+Collins+Ave+Sunny+Isles+Beach+FL+33160",
  hours: [
    { day: "Monday to Friday", time: "7:00 AM to 7:00 PM" },
    { day: "Saturday", time: "8:00 AM to 5:00 PM" },
    { day: "Sunday", time: "By appointment" },
  ],
  founded: 2014,
  license: "USDOT 3591420 · FL IM No. 2842",
  domain: "unitedmoversfl.com",
} as const;

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
] as const;
