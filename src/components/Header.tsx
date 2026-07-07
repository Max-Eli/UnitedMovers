"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="hidden bg-ink text-white/85 lg:block">
        <div className="container-p flex h-10 items-center justify-between text-[13px]">
          <p className="tracking-wide">
            Licensed & insured local and long distance movers · {site.license}
          </p>
          <div className="flex items-center gap-6">
            <span>
              {site.address.line1}, {site.address.city}
            </span>
            <a href={site.phoneHref} className="font-semibold text-white link-underline">
              {site.phone}
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "border-b border-ink/8 bg-paper/85 backdrop-blur-md"
            : "border-b border-transparent bg-paper"
        }`}
      >
        <div className="container-p flex h-[72px] items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[15px] font-medium transition-colors ${
                    active ? "text-clay" : "text-ink/75 hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href={site.phoneHref} className="btn-ghost">
              {site.phone}
            </a>
            <Link href="/contact" className="btn-primary">
              Get a Free Quote
            </Link>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 lg:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 block h-0.5 w-5 bg-ink transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-0.5 w-5 bg-ink transition-all duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-5 bg-ink transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-30 lg:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-ink/40 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <nav
          className={`absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-paper px-6 pb-8 pt-6 shadow-lift transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 text-xl"
            >
              ×
            </button>
          </div>
          <div className="mt-8 flex flex-col divide-y divide-ink/10 border-y border-ink/10">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-4 font-display text-2xl text-ink"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-auto flex flex-col gap-3 pt-8">
            <a href={site.phoneHref} className="btn-ink w-full">
              Call {site.phone}
            </a>
            <Link href="/contact" className="btn-primary w-full">
              Get a Free Quote
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
