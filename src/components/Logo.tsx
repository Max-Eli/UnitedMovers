import Link from "next/link";
import Image from "next/image";

export function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  // variant "light" = placed on a dark background (footer)
  const onDark = variant === "light";

  return (
    <Link
      href="/"
      aria-label="United Movers home"
      className={`inline-flex items-center ${className}`}
    >
      {onDark ? (
        <span className="inline-flex items-center rounded-xl bg-white px-2.5 py-1.5 shadow-sm">
          <Image
            src="/united-movers-logo.png"
            alt="United Movers"
            width={200}
            height={200}
            className="h-11 w-auto"
          />
        </span>
      ) : (
        <Image
          src="/united-movers-logo.png"
          alt="United Movers"
          width={220}
          height={220}
          priority
          className="h-14 w-auto mix-blend-multiply"
        />
      )}
    </Link>
  );
}
