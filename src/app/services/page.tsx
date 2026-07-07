import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/services";
import { ServiceIcon } from "@/components/ServiceIcon";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { IconArrow, IconCheck } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Moving Services in South Florida",
  description:
    "Local moving, long distance, condo and high-rise, office, packing, and storage across Miami-Dade and Broward. Trained crews and flat written quotes.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Everything a move needs, under one roof."
        intro="Pick the piece you need or hand us the whole thing. We do local and long distance, the tricky high-rise stuff, offices, packing, and storage when the dates do not line up."
      />

      <section className="container-p py-16 sm:py-24">
        <div className="space-y-16 sm:space-y-24">
          {services.map((s, i) => (
            <div
              key={s.slug}
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="overflow-hidden rounded-[20px] shadow-card">
                  <Image
                    src={s.image}
                    alt={s.title}
                    width={1200}
                    height={840}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-ink text-white">
                  <ServiceIcon name={s.icon} className="h-6 w-6" />
                </span>
                <h2 className="mt-5 font-display text-3xl sm:text-[34px]">
                  {s.title}
                </h2>
                <p className="mt-3 text-ink/70">{s.intro}</p>
                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {s.includes.slice(0, 4).map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[15px] text-ink/75">
                      <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-clay" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/services/${s.slug}`} className="btn-ink mt-8">
                  {s.title} details <IconArrow className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
