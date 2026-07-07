import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { reviews, ratingSummary } from "@/lib/reviews";
import { IconStar } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description:
    "Read what South Florida families and businesses say about moving with United Movers. Over 260 five-star reviews across Miami-Dade and Broward.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="The people who let us move their whole life."
        intro="We would rather show you than tell you. Here is a straight sampling of what folks say after move day, from high-rise studios to full-house long distance runs."
      />

      {/* SUMMARY */}
      <section className="border-b border-ink/8 bg-white">
        <div className="container-p flex flex-col items-center gap-4 py-12 text-center sm:flex-row sm:justify-center sm:gap-10">
          <div className="flex items-center gap-3">
            <span className="font-display text-5xl text-ink">
              {ratingSummary.average}
            </span>
            <div className="text-left">
              <div className="flex text-clay">
                {Array.from({ length: 5 }).map((_, i) => (
                  <IconStar key={i} className="h-5 w-5" />
                ))}
              </div>
              <p className="mt-1 text-sm text-ink/55">
                Average across {ratingSummary.count}+ reviews
              </p>
            </div>
          </div>
          <span className="hidden h-12 w-px bg-ink/10 sm:block" />
          <p className="max-w-sm text-ink/60">
            Verified from real moves across Google and our own customer follow-ups.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="container-p py-16 sm:py-24">
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5 [&>*]:break-inside-avoid">
          {reviews.map((r) => (
            <figure key={r.name} className="card p-7">
              <div className="flex items-center justify-between">
                <div className="flex text-clay">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <IconStar key={i} className="h-4 w-4" />
                  ))}
                </div>
                <span className="text-xs text-ink/45">{r.date}</span>
              </div>
              <blockquote className="mt-4 text-[15px] leading-relaxed text-ink/75">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-5 border-t border-ink/8 pt-4">
                <p className="font-semibold text-ink">{r.name}</p>
                <p className="text-sm text-ink/55">
                  {r.location} · {r.move}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CtaBand
        heading="Ready to be the next five-star review?"
        sub="Tell us about your move and we will send a clear quote. No pressure, no runaround."
      />
    </>
  );
}
