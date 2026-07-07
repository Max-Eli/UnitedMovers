import Link from "next/link";
import { site } from "@/lib/site";
import { IconArrow } from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="container-p flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-display text-7xl text-clay sm:text-8xl">404</p>
      <h1 className="mt-4 font-display text-3xl sm:text-4xl">
        This page took a wrong turn.
      </h1>
      <p className="mt-4 max-w-md text-ink/65">
        We could not find the page you were looking for. It may have moved. Let
        us get you back on the road.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-primary">
          Back home <IconArrow className="h-4 w-4" />
        </Link>
        <a href={site.phoneHref} className="btn-ghost">
          Call {site.phone}
        </a>
      </div>
    </section>
  );
}
