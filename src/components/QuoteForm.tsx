"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";
import { IconArrow, IconCheck } from "./Icons";

const moveSizes = [
  "Studio / 1 bedroom",
  "2 bedroom",
  "3 bedroom",
  "4+ bedroom / house",
  "Office / commercial",
  "A few items",
];

const serviceTypes = [
  "Local move",
  "Long distance",
  "Condo / high-rise",
  "Office / commercial",
  "Packing only",
  "Storage",
];

type Status = "idle" | "submitting" | "success" | "error";

export function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    if (!data.name || !data.phone) {
      setStatus("error");
      setError("Please add your name and a phone number so we can reach you.");
      return;
    }

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError(
        "Something went wrong sending that. Please call us at " + site.phone + " and we will take care of it."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="card p-8 text-center sm:p-10">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-clay/10 text-clay">
          <IconCheck className="h-7 w-7" />
        </div>
        <h3 className="mt-5 font-display text-2xl">Got it. We will be in touch.</h3>
        <p className="mx-auto mt-3 max-w-md text-ink/65">
          Thanks for the details. A member of our team will reach out shortly to
          confirm the specifics and send your quote. If you need us sooner, give
          us a call.
        </p>
        <a href={site.phoneHref} className="btn-ink mt-6">
          Call {site.phone}
        </a>
      </div>
    );
  }

  const field =
    "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-[15px] text-ink placeholder:text-ink/40 outline-none transition focus:border-clay focus:ring-2 focus:ring-clay/20";
  const label = "mb-1.5 block text-[13px] font-semibold text-ink/70";

  return (
    <form onSubmit={handleSubmit} className="card p-6 sm:p-8" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">
            Full name*
          </label>
          <input id="name" name="name" className={field} placeholder="Jordan Rivera" autoComplete="name" required />
        </div>
        <div>
          <label className={label} htmlFor="phone">
            Phone*
          </label>
          <input id="phone" name="phone" type="tel" className={field} placeholder="(786) 000-0000" autoComplete="tel" required />
        </div>
        <div>
          <label className={label} htmlFor="email">
            Email
          </label>
          <input id="email" name="email" type="email" className={field} placeholder="you@email.com" autoComplete="email" />
        </div>
        <div>
          <label className={label} htmlFor="date">
            Move date
          </label>
          <input id="date" name="date" type="date" className={field} />
        </div>
        <div>
          <label className={label} htmlFor="from">
            Moving from
          </label>
          <input id="from" name="from" className={field} placeholder="Sunny Isles Beach, ZIP" />
        </div>
        <div>
          <label className={label} htmlFor="to">
            Moving to
          </label>
          <input id="to" name="to" className={field} placeholder="City / ZIP" />
        </div>
        <div>
          <label className={label} htmlFor="size">
            Home size
          </label>
          <select id="size" name="size" className={field} defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            {moveSizes.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={label} htmlFor="service">
            Type of move
          </label>
          <select id="service" name="service" className={field} defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            {serviceTypes.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label className={label} htmlFor="message">
          Anything else we should know?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={field}
          placeholder="Piano, a lot of stairs, tight elevator window, fragile art… whatever helps us quote it right."
        />
      </div>

      <div className="mt-5 rounded-xl border border-ink/10 bg-paper p-4">
        <label className="flex cursor-pointer items-start gap-3 text-[13px] leading-relaxed text-ink/70">
          <input
            type="checkbox"
            name="smsConsent"
            value="yes"
            className="mt-0.5 h-4 w-4 shrink-0 accent-clay"
          />
          <span>
            I agree to receive text messages from {site.name} about my quote and
            move at the number provided. Message frequency varies. Message and
            data rates may apply. Reply STOP to opt out or HELP for help. Consent
            is not a condition of any purchase. See our{" "}
            <Link href="/privacy-policy" className="font-semibold text-clay underline">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/terms" className="font-semibold text-clay underline">
              Terms
            </Link>
            .
          </span>
        </label>
      </div>

      {status === "error" && (
        <p className="mt-4 rounded-lg bg-clay/10 px-4 py-3 text-sm text-clay-600">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Sending…" : "Request My Quote"}
        {status !== "submitting" && <IconArrow className="h-4 w-4" />}
      </button>
      <p className="mt-3 text-center text-xs text-ink/45">
        No spam and no selling your info. We use it only to quote and schedule
        your move.
      </p>
    </form>
  );
}
