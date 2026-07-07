import Link from "next/link";
import { Logo } from "./Logo";
import { site } from "@/lib/site";

const columns = [
  {
    title: "Moving Services",
    links: [
      { label: "Local Moving", href: "/services/local-moving" },
      { label: "Long Distance", href: "/services/long-distance" },
      { label: "Condo & High-Rise", href: "/services/condo-high-rise" },
      { label: "Office & Commercial", href: "/services/commercial" },
      { label: "Packing & Crating", href: "/services/packing" },
      { label: "Storage", href: "/services/storage" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Service Areas", href: "/service-areas" },
      { label: "Reviews", href: "/reviews" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
];

export function Footer() {
  const year = 2026;
  return (
    <footer className="bg-ink text-white/70">
      <div className="container-p py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo variant="light" />
            <p className="mt-5 text-[15px] leading-relaxed text-white/60">
              A South Florida moving company built on careful crews, honest
              quotes, and buildings that actually let us back in. Local moves,
              long hauls, and everything in between.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={site.phoneHref} className="btn-primary">
                {site.phone}
              </a>
              <Link href="/contact" className="btn-outline-light">
                Get a Quote
              </Link>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-white/45">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3 text-[15px]">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="link-underline hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-white/45">
              Office
            </p>
            <p className="mt-2 block text-[15px] not-italic leading-relaxed">
              {site.address.line1}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </p>
          </div>
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-white/45">
              Hours
            </p>
            <ul className="mt-2 space-y-1 text-[15px]">
              {site.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4 sm:max-w-[260px]">
                  <span>{h.day}</span>
                  <span className="text-white/55">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-white/45">
              Get in touch
            </p>
            <a href={site.phoneHref} className="mt-2 block text-[15px] hover:text-white">
              {site.phone}
            </a>
            <a href={site.emailHref} className="block text-[15px] hover:text-white">
              {site.email}
            </a>
            <p className="mt-2 text-[13px] text-white/45">{site.license}</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-[13px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p>
            Serving Miami-Dade, Broward, and Palm Beach counties.
          </p>
        </div>
      </div>
    </footer>
  );
}
