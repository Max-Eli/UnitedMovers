import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { site } from "@/lib/site";
import { IconCheck, IconShield, IconTag, IconClock, IconMapPin } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About United Movers",
  description:
    "United Movers is a Sunny Isles Beach moving company that has spent over a decade learning the buildings, the traffic, and the right way to treat people's things.",
};

const values = [
  {
    icon: <IconTag className="h-6 w-6" />,
    title: "The quote is the price",
    text: "We walk the job, ask the right questions, and put a real number in writing. What you approve is what you pay. No day-of surprises.",
  },
  {
    icon: <IconShield className="h-6 w-6" />,
    title: "Careful is the whole job",
    text: "Every piece gets wrapped before it leaves the room. Floors get runners, corners get padding. Careful is not an upgrade here, it is the standard.",
  },
  {
    icon: <IconClock className="h-6 w-6" />,
    title: "On time, and honest about it",
    text: "We give real arrival windows and keep them. If traffic on 95 is going to cost us ten minutes, you hear it from us first.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        title="A local crew that grew up moving these buildings."
        intro="We started United Movers because too many people were getting burned by lowball quotes that doubled on move day. We do the opposite: tell you the truth, show up ready, and earn the next job."
      />

      {/* STORY */}
      <section className="container-p py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
          <div className="overflow-hidden rounded-[20px] shadow-card">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1300&q=80"
              alt="United Movers crew loading a moving truck"
              width={1300}
              height={1000}
              className="aspect-[13/11] w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">Our story</p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl">
              Started in {site.founded}. Still answering our own phone.
            </h2>
            <div className="mt-5 space-y-4 text-ink/70">
              <p>
                United Movers began with one truck, two guys, and a simple
                promise to the neighbors along Collins Avenue: give people a fair
                price and actually keep it. That reputation is what built the
                company, one referral at a time.
              </p>
              <p>
                More than a decade later, we have moved thousands of families and
                businesses across South Florida. We learned the buildings, the
                doormen, the loading docks, and the fastest way in and out of
                every tower from Sunny Isles to Brickell. That knowledge is why
                our move days run smooth.
              </p>
              <p>
                We are licensed, insured, and local. When you call, you get
                someone who knows your building, not a call center three states
                away.
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3 text-sm">
              <span className="inline-flex items-center gap-2 text-ink/70">
                <IconMapPin className="h-4 w-4 text-clay" /> {site.address.city}, FL
              </span>
              <span className="inline-flex items-center gap-2 text-ink/70">
                <IconShield className="h-4 w-4 text-clay" /> {site.license}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="border-y border-ink/8 bg-white">
        <div className="container-p py-16 sm:py-24">
          <div className="max-w-xl">
            <p className="eyebrow">What we stand on</p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl">
              The stuff we refuse to cut corners on.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="card p-8">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-clay/10 text-clay">
                  {v.icon}
                </span>
                <h3 className="mt-5 font-display text-xl">{v.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink/65">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="container-p py-16 sm:py-24">
        <div className="grid gap-8 rounded-[24px] bg-ink px-8 py-14 text-white sm:grid-cols-2 lg:grid-cols-4 sm:px-12">
          {[
            { big: "12+", small: "Years in business" },
            { big: "10,000+", small: "Moves completed" },
            { big: "260+", small: "Five-star reviews" },
            { big: "3", small: "Counties covered" },
          ].map((s) => (
            <div key={s.small}>
              <p className="font-display text-4xl text-clay-400">{s.big}</p>
              <p className="mt-2 text-white/60">{s.small}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY LIST */}
      <section className="border-t border-ink/8 bg-white">
        <div className="container-p py-16 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div>
              <p className="eyebrow">Why people pick us</p>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl">
                Reasons the referrals keep coming.
              </h2>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "Written quotes with no hidden fees",
                "Trained, background-checked movers",
                "Full protection options on every move",
                "Certificates of insurance for any building",
                "Furniture wrapped before it moves an inch",
                "Same crew from load to unload",
                "Flexible nights and weekend scheduling",
                "We answer the phone and mean it",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink/75">
                  <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-clay" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
