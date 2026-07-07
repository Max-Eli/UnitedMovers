import Link from "next/link";

export function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const first = variant === "light" ? "text-white" : "text-ink";
  const badgeBg = variant === "light" ? "#ffffff" : "#0B1E33";
  const truck = variant === "light" ? "#0B1E33" : "#ffffff";

  return (
    <Link
      href="/"
      aria-label="United Movers home"
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <span className="relative inline-grid h-11 w-11 place-items-center overflow-hidden rounded-[13px] shadow-[0_10px_22px_-10px_rgba(11,30,51,0.55)] transition-transform duration-300 group-hover:scale-[1.04]">
        <svg
          viewBox="0 0 44 44"
          className="h-full w-full"
          aria-hidden="true"
        >
          <rect width="44" height="44" rx="13" fill={badgeBg} />
          {/* clay corner accent for a designed, two-tone feel */}
          <path d="M44 0v18c-10 0-18-8-18-18z" fill="#E1552B" opacity="0.9" />
          {/* cargo box */}
          <rect x="6.5" y="14" width="17" height="13.5" rx="2.4" fill={truck} />
          {/* cab */}
          <path
            d="M23.5 18h6.4l4.6 4.9v4.6H23.5z"
            fill={truck}
          />
          {/* windshield cutout */}
          <path d="M25 19.6h4l2.9 3.1H25z" fill={badgeBg} />
          {/* wheels */}
          <circle cx="13.5" cy="30.4" r="3.4" fill="#E1552B" />
          <circle cx="27.5" cy="30.4" r="3.4" fill="#E1552B" />
          <circle cx="13.5" cy="30.4" r="1.2" fill={truck} />
          <circle cx="27.5" cy="30.4" r="1.2" fill={truck} />
        </svg>
      </span>
      <span className="font-display text-[21px] font-semibold leading-none tracking-[-0.015em]">
        <span className={first}>United</span>
        <span className="text-clay"> Movers</span>
      </span>
    </Link>
  );
}
