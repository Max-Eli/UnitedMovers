import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { site } from "@/lib/site";
import { IconPhone, IconMapPin, IconClock } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact & Free Quote",
  description:
    "Get a free moving quote from United Movers in Sunny Isles Beach. Call 786-419-4969 or send the form and we will get right back to you.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let us put a real number on your move."
        intro="Fill out the form for a written quote or just call. Either way you get a straight answer from someone who knows South Florida, not a script."
        crumb="Contact"
      />

      <section className="container-p py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          {/* LEFT: details */}
          <div className="lg:pt-2">
            <h2 className="font-display text-2xl sm:text-3xl">
              Talk to a person, today.
            </h2>
            <p className="mt-3 text-ink/65">
              We answer during business hours and return every message. The more
              you tell us about the home and the buildings, the tighter the quote.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={site.phoneHref}
                className="card flex items-center gap-4 p-5 transition hover:-translate-y-0.5 hover:shadow-lift"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-clay text-white">
                  <IconPhone className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-sm text-ink/55">Call or text</span>
                  <span className="block font-display text-xl text-ink">
                    {site.phone}
                  </span>
                </span>
              </a>

              <div className="card flex items-center gap-4 p-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-ink text-white">
                  <IconMapPin className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-sm text-ink/55">Office</span>
                  <span className="block font-medium text-ink">
                    {site.address.line1}, {site.address.city}, {site.address.state}{" "}
                    {site.address.zip}
                  </span>
                </span>
              </div>

              <div className="card flex items-start gap-4 p-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-sea text-white">
                  <IconClock className="h-6 w-6" />
                </span>
                <div>
                  <span className="block text-sm text-ink/55">Hours</span>
                  <ul className="mt-1 space-y-0.5 text-[15px] text-ink/80">
                    {site.hours.map((h) => (
                      <li key={h.day} className="flex justify-between gap-6">
                        <span>{h.day}</span>
                        <span className="text-ink/55">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <p className="mt-6 text-sm text-ink/50">
              {site.legalName} · {site.license}
            </p>
          </div>

          {/* RIGHT: form */}
          <div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
