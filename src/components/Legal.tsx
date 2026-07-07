import { PageHero } from "./PageHero";

export function LegalPage({
  eyebrow,
  title,
  updated,
  crumb,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  crumb: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} crumb={crumb} />
      <section className="container-p py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="mb-10 text-sm text-ink/50">Last updated: {updated}</p>
          <div className="legal-prose">{children}</div>
        </div>
      </section>
    </>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10 first:mt-0">
      <h2 className="font-display text-2xl text-ink">{title}</h2>
      <div className="mt-3 space-y-4 text-[15px] leading-relaxed text-ink/75 [&_a]:font-semibold [&_a]:text-clay [&_a]:underline [&_ul]:mt-3 [&_ul]:space-y-2 [&_li]:relative [&_li]:pl-5">
        {children}
      </div>
    </section>
  );
}
