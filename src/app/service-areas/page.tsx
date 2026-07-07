import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { site } from "@/lib/site";
import { IconMapPin, IconArrow, IconRoute } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Service Areas Across South Florida",
  description:
    "United Movers serves Miami-Dade, Broward, and Palm Beach counties, from Sunny Isles Beach and Aventura to Fort Lauderdale and Boca Raton. Long distance moves too.",
};

const counties = [
  {
    name: "Miami-Dade County",
    cities: [
      "Sunny Isles Beach",
      "Aventura",
      "Bal Harbour",
      "Miami Beach",
      "North Miami Beach",
      "Golden Beach",
      "Brickell",
      "Downtown Miami",
      "Doral",
      "Coral Gables",
    ],
  },
  {
    name: "Broward County",
    cities: [
      "Hallandale Beach",
      "Hollywood",
      "Fort Lauderdale",
      "Pembroke Pines",
      "Weston",
      "Davie",
      "Plantation",
      "Coral Springs",
    ],
  },
  {
    name: "Palm Beach County",
    cities: [
      "Boca Raton",
      "Delray Beach",
      "Boynton Beach",
      "West Palm Beach",
      "Jupiter",
      "Wellington",
    ],
  },
];

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Service areas"
        title="Based in Sunny Isles. At home across South Florida."
        intro="Our office sits on Collins Avenue, but our trucks run the whole tri-county. If your city is not on the list, call us anyway. We probably cover it, and if we do not, we will point you somewhere honest."
      />

      <section className="container-p py-16 sm:py-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {counties.map((c) => (
            <div key={c.name} className="card p-8">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-clay/10 text-clay">
                <IconMapPin className="h-6 w-6" />
              </span>
              <h2 className="mt-5 font-display text-2xl">{c.name}</h2>
              <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5 text-[15px] text-ink/70">
                {c.cities.map((city) => (
                  <li key={city} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-clay" />
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Long distance callout */}
        <div className="mt-10 grid items-center gap-8 rounded-[24px] border border-ink/10 bg-white p-8 sm:p-12 lg:grid-cols-[1fr_auto]">
          <div className="flex items-start gap-5">
            <span className="hidden h-14 w-14 shrink-0 place-items-center rounded-xl bg-ink text-white sm:grid">
              <IconRoute className="h-7 w-7" />
            </span>
            <div>
              <h2 className="font-display text-2xl sm:text-3xl">
                Moving out of Florida?
              </h2>
              <p className="mt-3 max-w-xl text-ink/65">
                We run long distance moves up and down the East Coast and across
                the country. One crew, one price, and a delivery date you can
                plan your life around. No warehouse shuffle.
              </p>
            </div>
          </div>
          <Link href="/services/long-distance" className="btn-primary shrink-0">
            Long distance moves <IconArrow className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* MAP */}
      <section className="border-y border-ink/8 bg-white">
        <div className="container-p grid gap-10 py-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Come by the office</p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl">
              Find us on Collins Avenue.
            </h2>
            <p className="mt-4 text-ink/65">
              We are right in the heart of Sunny Isles Beach. Call ahead and we
              will have someone ready to talk through your move.
            </p>
            <div className="mt-6 space-y-1 text-ink/80">
              <p className="block font-medium">
                {site.address.line1}, {site.address.city}, {site.address.state} {site.address.zip}
              </p>
              <a href={site.phoneHref} className="block font-medium text-clay">
                {site.phone}
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-[20px] border border-ink/10 shadow-card">
            <iframe
              title="United Movers office location map"
              src="https://www.google.com/maps?q=17600+Collins+Ave+Sunny+Isles+Beach+FL+33160&output=embed"
              width="100%"
              height="360"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[360px] w-full border-0"
            />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
