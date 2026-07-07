type IconProps = { className?: string };

const base = "1.6";

export function IconTruck({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M2 6.5h11v9H2z" stroke="currentColor" strokeWidth={base} strokeLinejoin="round" />
      <path d="M13 9h4.6l2.9 2.9v3.6H13z" stroke="currentColor" strokeWidth={base} strokeLinejoin="round" />
      <circle cx="6.5" cy="18" r="1.9" stroke="currentColor" strokeWidth={base} />
      <circle cx="16.5" cy="18" r="1.9" stroke="currentColor" strokeWidth={base} />
    </svg>
  );
}

export function IconRoute({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="6" cy="6" r="2.2" stroke="currentColor" strokeWidth={base} />
      <circle cx="18" cy="18" r="2.2" stroke="currentColor" strokeWidth={base} />
      <path d="M8 6h6a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h6" stroke="currentColor" strokeWidth={base} strokeLinecap="round" />
    </svg>
  );
}

export function IconBuilding({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6 21V4.5A1.5 1.5 0 0 1 7.5 3h6A1.5 1.5 0 0 1 15 4.5V21" stroke="currentColor" strokeWidth={base} strokeLinejoin="round" />
      <path d="M15 9h2.5A1.5 1.5 0 0 1 19 10.5V21M4 21h16" stroke="currentColor" strokeWidth={base} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.5 7h1.5M8.5 11h1.5M8.5 15h1.5" stroke="currentColor" strokeWidth={base} strokeLinecap="round" />
    </svg>
  );
}

export function IconBox({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 3 4 7v10l8 4 8-4V7z" stroke="currentColor" strokeWidth={base} strokeLinejoin="round" />
      <path d="M4 7l8 4 8-4M12 11v10" stroke="currentColor" strokeWidth={base} strokeLinejoin="round" />
    </svg>
  );
}

export function IconBriefcase({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="7.5" width="18" height="12" rx="2" stroke="currentColor" strokeWidth={base} />
      <path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5M3 12.5h18" stroke="currentColor" strokeWidth={base} strokeLinecap="round" />
    </svg>
  );
}

export function IconShield({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 3l7 2.5v5.2c0 4.5-3 7.8-7 9.3-4-1.5-7-4.8-7-9.3V5.5z" stroke="currentColor" strokeWidth={base} strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth={base} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconClock({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth={base} />
      <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth={base} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconTag({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 4.5h6.5l8.5 8.5-6.5 6.5L4 11z" stroke="currentColor" strokeWidth={base} strokeLinejoin="round" />
      <circle cx="8" cy="8.5" r="1.3" fill="currentColor" />
    </svg>
  );
}

export function IconStar({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 3.2l2.5 5.4 5.9.7-4.4 4 1.2 5.8L12 16.9 6.8 19l1.2-5.8-4.4-4 5.9-.7z" />
    </svg>
  );
}

export function IconPhone({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6 3.5c1 0 1.7.6 2 1.5l.9 2.5c.2.7 0 1.4-.6 1.9l-1 .8a11 11 0 0 0 4.8 4.8l.8-1c.5-.6 1.2-.8 1.9-.6l2.5.9c.9.3 1.5 1 1.5 2v2.2c0 1.2-1 2.2-2.3 2A16.5 16.5 0 0 1 4 6.8C3.8 5.5 4.8 4.5 6 4.5z" stroke="currentColor" strokeWidth={base} strokeLinejoin="round" />
    </svg>
  );
}

export function IconMapPin({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 21c4-3.7 6.5-7 6.5-10.5a6.5 6.5 0 0 0-13 0C5.5 14 8 17.3 12 21z" stroke="currentColor" strokeWidth={base} strokeLinejoin="round" />
      <circle cx="12" cy="10.5" r="2.4" stroke="currentColor" strokeWidth={base} />
    </svg>
  );
}

export function IconCheck({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconArrow({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth={base} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
