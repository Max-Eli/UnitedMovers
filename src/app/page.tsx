import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { reviews, ratingSummary } from "@/lib/reviews";
import { ServiceIcon } from "@/components/ServiceIcon";
import { CtaBand } from "@/components/CtaBand";
import {
  IconArrow,
  IconStar,
  IconShield,
  IconTag,
  IconClock,
  IconCheck,
  IconMapPin,
} from "@/components/Icons";

const areas = [
  "Sunny Isles Beach",
  "Aventura",
  "Bal Harbour",
  "Miami Beach",
  "Hallandale Beach",
  "Fort Lauderdale",
  "Brickell",
  "Doral",
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2000&q=80"
            alt="Movers carrying furniture out of a South Florida home"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/40" />
        </div>

        <div className="container-p relative py-20 sm:py-28 lg:py-32">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl leading-[1.05] sm:text-6xl">
              Movers who treat your place like they have to come back.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/70">
              United Movers handles condo, home, and office moves across
              Miami-Dade and Broward. Careful crews, a written price you can
              hold us to, and buildings that actually let us back in.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Get a Free Quote <IconArrow className="h-4 w-4" />
              </Link>
              <a href={site.phoneHref} className="btn-outline-light">
                Call {site.phone}
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-white/65">
              <span className="inline-flex items-center gap-2">
                <span className="flex text-clay-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <IconStar key={i} className="h-4 w-4" />
                  ))}
                </span>
                {ratingSummary.average} from {ratingSummary.count}+ moves
              </span>
              <span className="inline-flex items-center gap-2">
                <IconShield className="h-4 w-4 text-clay-400" /> Licensed & insured
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-ink/8 bg-white">
        <div className="container-p grid grid-cols-2 gap-6 py-8 sm:grid-cols-4">
          {[
            { big: "12 yrs", small: "Moving South Florida" },
            { big: "10,000+", small: "Moves completed" },
            { big: "4.9★", small: "Average review" },
            { big: "$0", small: "Surprise fees" },
          ].map((s) => (
            <div key={s.small} className="text-center sm:text-left">
              <p className="font-display text-3xl text-ink sm:text-4xl">{s.big}</p>
              <p className="mt-1 text-sm text-ink/55">{s.small}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-p py-20 sm:py-28">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow">What we do</p>
            <h2 className="mt-4 font-display text-3xl sm:text-[44px] sm:leading-[1.08]">
              One crew for every kind of move.
            </h2>
            <p className="mt-4 text-ink/65">
              Whether it is a studio down the street or a house going up the
              coast, the same standard applies. Wrap it, load it right, and put
              it back the way you want it.
            </p>
          </div>
          <Link
            href="/services"
            className="link-underline hidden shrink-0 items-center gap-2 font-semibold text-clay sm:inline-flex"
          >
            All services <IconArrow className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="card group flex flex-col p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-ink text-white transition-colors group-hover:bg-clay">
                <ServiceIcon name={s.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-xl">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink/60">
                {s.blurb}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-clay">
                Learn more{" "}
                <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* HIGH-RISE SPECIALTY (differentiator) */}
      <section className="bg-ink text-white">
        <div className="container-p grid gap-12 py-20 sm:py-28 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="overflow-hidden rounded-[20px]">
              <Image
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80"
                alt="Oceanfront high-rise condo towers in Sunny Isles Beach"
                width={1400}
                height={1000}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden max-w-[240px] rounded-2xl bg-clay p-5 text-white shadow-lift sm:block">
              <p className="font-display text-lg leading-snug">
                COI sent, elevator booked, before we lift a box.
              </p>
            </div>
          </div>

          <div>
            <p className="eyebrow text-clay-400">Built for Collins Avenue</p>
            <h2 className="mt-4 font-display text-3xl sm:text-[42px] sm:leading-[1.08]">
              We speak fluent high-rise.
            </h2>
            <p className="mt-5 text-white/70">
              The towers along Sunny Isles, Aventura, and Bal Harbour do not
              hand out elevator time to anyone with a truck. There are
              certificates of insurance, loading dock windows, and rules about
              padding the common areas. We handle all of it before move day so
              you are not the one on the phone with the front desk.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "Certificate of insurance sent to management ahead of time",
                "Freight elevator and loading window reserved for you",
                "Hallways, floors, and elevators padded to building rules",
                "Crews that already know the buildings on Collins",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/80">
                  <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-clay-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/services/condo-high-rise" className="btn-primary mt-8">
              How high-rise moves work <IconArrow className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container-p py-20 sm:py-28">
        <div className="max-w-xl">
          <p className="eyebrow">How it goes</p>
          <h2 className="mt-4 font-display text-3xl sm:text-[44px] sm:leading-[1.08]">
            Three steps, no games.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            {
              n: "01",
              icon: <IconTag className="h-6 w-6" />,
              title: "Tell us about the move",
              text: "Call or send the form. We ask about the home, the stairs, the elevator, the timeline, and give you a clear written quote.",
            },
            {
              n: "02",
              icon: <IconShield className="h-6 w-6" />,
              title: "We handle the details",
              text: "Building paperwork, elevator windows, packing, materials. We lock the date and show up ready so move day is boring in a good way.",
            },
            {
              n: "03",
              icon: <IconClock className="h-6 w-6" />,
              title: "Moved and set up",
              text: "We wrap, load, drive, and unload, then rebuild the beds and place the furniture. You unpack into a home, not a maze of boxes.",
            },
          ].map((step) => (
            <div key={step.n} className="card p-8">
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-clay/10 text-clay">
                  {step.icon}
                </span>
                <span className="font-display text-4xl text-ink/10">{step.n}</span>
              </div>
              <h3 className="mt-5 font-display text-xl">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink/60">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* AREAS */}
      <section className="border-y border-ink/8 bg-white">
        <div className="container-p grid gap-10 py-16 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <p className="eyebrow">Where we work</p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl">
              All over South Florida.
            </h2>
            <p className="mt-4 text-ink/65">
              We are based on Collins Avenue in Sunny Isles Beach and cover
              Miami-Dade, Broward, and Palm Beach. If you are moving out of
              state, we take those too.
            </p>
            <Link
              href="/service-areas"
              className="link-underline mt-6 inline-flex items-center gap-2 font-semibold text-clay"
            >
              See every area we serve <IconArrow className="h-4 w-4" />
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            {areas.map((a) => (
              <span
                key={a}
                className="inline-flex items-center gap-2 rounded-full border border-ink/12 bg-paper px-4 py-2 text-sm font-medium text-ink/75"
              >
                <IconMapPin className="h-4 w-4 text-clay" /> {a}
              </span>
            ))}
            <Link
              href="/service-areas"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-white"
            >
              + more
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="container-p py-20 sm:py-28">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow">In their words</p>
            <h2 className="mt-4 font-display text-3xl sm:text-[44px] sm:leading-[1.08]">
              People who dreaded moving day.
            </h2>
          </div>
          <Link
            href="/reviews"
            className="link-underline hidden shrink-0 items-center gap-2 font-semibold text-clay sm:inline-flex"
          >
            Read all reviews <IconArrow className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.slice(0, 3).map((r) => (
            <figure key={r.name} className="card flex flex-col p-7">
              <div className="flex text-clay">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <IconStar key={i} className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink/75">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-6 border-t border-ink/8 pt-4">
                <p className="font-semibold text-ink">{r.name}</p>
                <p className="text-sm text-ink/55">
                  {r.location} · {r.move}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
