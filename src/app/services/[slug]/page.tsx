import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getService } from "@/lib/services";
import { site } from "@/lib/site";
import { ServiceIcon } from "@/components/ServiceIcon";
import { CtaBand } from "@/components/CtaBand";
import { IconArrow, IconCheck, IconPhone } from "@/components/Icons";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service not found" };
  return {
    title: `${service.title} in South Florida`,
    description: service.intro.slice(0, 155),
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="border-b border-ink/8 bg-white">
        <div className="container-p grid gap-10 py-14 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
          <div>
            <nav className="mb-6 flex items-center gap-2 text-sm text-ink/45">
              <Link href="/" className="hover:text-ink">
                Home
              </Link>
              <IconArrow className="h-3.5 w-3.5" />
              <Link href="/services" className="hover:text-ink">
                Services
              </Link>
              <IconArrow className="h-3.5 w-3.5" />
              <span className="text-ink/70">{service.title}</span>
            </nav>
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-clay text-white">
              <ServiceIcon name={service.icon} className="h-6 w-6" />
            </span>
            <h1 className="mt-5 font-display text-4xl leading-[1.06] sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-ink/70">{service.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Get a Free Quote <IconArrow className="h-4 w-4" />
              </Link>
              <a href={site.phoneHref} className="btn-ghost">
                <IconPhone className="h-4 w-4" /> {site.phone}
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-[20px] shadow-card">
            <Image
              src={service.image}
              alt={service.title}
              width={1200}
              height={900}
              priority
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="container-p py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div>
            <p className="eyebrow">What is included</p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl">
              What you get with {service.title.toLowerCase()}.
            </h2>
            <p className="mt-4 text-ink/65">
              Every job comes with trained movers, quality materials, and a
              price you approve before we start. No mystery line items at the
              end.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {service.includes.map((item) => (
              <li key={item} className="card flex items-start gap-3 p-5">
                <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-clay" />
                <span className="text-[15px] text-ink/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* STEPS */}
      <section className="bg-ink text-white">
        <div className="container-p py-16 sm:py-24">
          <p className="eyebrow text-clay-400">How it works</p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl">
            Simple from quote to move-in.
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {service.steps.map((step, i) => (
              <div
                key={step.title}
                className="rounded-[16px] border border-white/10 bg-white/[0.03] p-7"
              >
                <span className="font-display text-4xl text-clay-400">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-xl">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/65">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="container-p py-16 sm:py-24">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-2xl sm:text-3xl">Other services</h2>
          <Link
            href="/services"
            className="link-underline hidden items-center gap-2 font-semibold text-clay sm:inline-flex"
          >
            View all <IconArrow className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {others.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="card group p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-ink text-white transition-colors group-hover:bg-clay">
                <ServiceIcon name={s.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{s.short}</p>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
