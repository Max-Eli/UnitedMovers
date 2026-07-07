import Link from "next/link";
import { IconArrow } from "./Icons";

export function PageHero({
  eyebrow,
  title,
  intro,
  crumb,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  crumb?: string;
}) {
  return (
    <section className="border-b border-ink/8 bg-white">
      <div className="container-p py-14 sm:py-20">
        <nav className="mb-6 flex items-center gap-2 text-sm text-ink/45">
          <Link href="/" className="hover:text-ink">
            Home
          </Link>
          <IconArrow className="h-3.5 w-3.5" />
          <span className="text-ink/70">{crumb ?? title}</span>
        </nav>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.06] sm:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-lg text-ink/65">{intro}</p>
        )}
      </div>
    </section>
  );
}
