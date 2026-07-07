import Link from "next/link";
import { site } from "@/lib/site";
import { IconArrow } from "./Icons";

export function CtaBand({
  heading = "Get a straight answer on your move.",
  sub = "Tell us where you are going and what you are bringing. We will send back a clear, written quote with no runaround.",
}: {
  heading?: string;
  sub?: string;
}) {
  return (
    <section className="container-p py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-[24px] bg-ink px-7 py-14 text-white sm:px-14">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-clay/25 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-sea/25 blur-3xl"
        />
        <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow text-clay-400">Free, no-pressure quote</p>
            <h2 className="mt-4 max-w-xl font-display text-3xl leading-tight sm:text-[40px]">
              {heading}
            </h2>
            <p className="mt-4 max-w-lg text-white/65">{sub}</p>
          </div>
          <div className="flex flex-col gap-3 lg:items-end">
            <Link href="/contact" className="btn-primary w-full sm:w-auto">
              Get a Free Quote <IconArrow className="h-4 w-4" />
            </Link>
            <a href={site.phoneHref} className="btn-outline-light w-full sm:w-auto">
              Call {site.phone}
            </a>
            <p className="mt-1 text-sm text-white/45">
              Mon to Fri, 7a to 7p · Sat 8a to 5p
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
