type IconProps = {
  className?: string;
};

export function CarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <path
        d="M4 14.5h16M6.2 14.5 7.3 10.4A1.4 1.4 0 0 1 8.6 9.5h6.8a1.4 1.4 0 0 1 1.3.9l1.1 4.1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.6 9.5 9.3 7.6A.9.9 0 0 1 10.1 7h3.8a.9.9 0 0 1 .8.6l.7 1.9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="7.2" cy="16.4" r="1.35" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16.8" cy="16.4" r="1.35" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function RingsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <circle cx="9" cy="13.5" r="4.6" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="15" cy="13.5" r="4.6" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M13.1 9.4 14.4 6.6h2.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CameraIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <rect
        x="3.6"
        y="8"
        width="16.8"
        height="11"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="13.5" r="3.2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M8.6 8 9.5 6.2h5L15.4 8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="17.6" cy="10.6" r="0.7" fill="currentColor" />
    </svg>
  );
}

export function GlassesIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <path
        d="M6.2 4.8h4.2v1.1c0 2.4-1.1 5.4-2.1 7.4H8.3c-1-2-2.1-5-2.1-7.4V4.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M8.3 13.3v5.2M6.6 18.5h3.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M13.6 4.8h4.2v1.1c0 2.4-1.1 5.4-2.1 7.4h-.9c-1-2-2.1-5-2.1-7.4V4.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M15.7 13.3v5.2M14 18.5h3.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M10.4 8.6h3.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <path
        d="M12 21s6.4-6.3 6.4-10.7A6.4 6.4 0 0 0 12 3.9a6.4 6.4 0 0 0-6.4 6.4C5.6 14.7 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10.4" r="2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function PinSolidIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2.6c-3.7 0-6.7 3-6.7 6.7 0 5.1 6.7 12.1 6.7 12.1s6.7-7 6.7-12.1c0-3.7-3-6.7-6.7-6.7Zm0 4.3a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8Z"
      />
    </svg>
  );
}

export function UtensilsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <path
        d="M7.2 4.2v5.2M5.4 4.2v3.6M9 4.2v3.6M7.2 9.4V19.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M16.4 4.2c.4 4.2.2 7.2-1.6 9.4V19.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.4 4.2c-1.4 3.4-1.4 6.6 0 9.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <path
        d="M5 12h14M14 7l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HeartIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <path
        d="M12 19.2S5.4 14.8 3.6 11.2C2 8.3 3.4 5.2 6.6 4.8c1.8-.3 3.4.6 4.3 2.1.9-1.5 2.5-2.4 4.3-2.1 3.2.4 4.6 3.5 3 6.4-1.8 3.6-8.2 8-8.2 8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function OliveBranch({ className }: IconProps) {
  return (
    <svg viewBox="0 0 180 100" className={className} aria-hidden="true" fill="none">
      <path
        d="M6 86c34-8 62-26 94-50 22-16 42-28 76-32"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <ellipse cx="40" cy="62" rx="7" ry="13" transform="rotate(-42 40 62)" stroke="currentColor" strokeWidth="1.2" />
      <ellipse cx="58" cy="48" rx="7" ry="13" transform="rotate(-32 58 48)" stroke="currentColor" strokeWidth="1.2" />
      <ellipse cx="78" cy="34" rx="6.5" ry="12" transform="rotate(-22 78 34)" stroke="currentColor" strokeWidth="1.2" />
      <ellipse cx="100" cy="22" rx="6" ry="11" transform="rotate(-12 100 22)" stroke="currentColor" strokeWidth="1.2" />
      <ellipse cx="122" cy="14" rx="5.5" ry="10" transform="rotate(2 122 14)" stroke="currentColor" strokeWidth="1.2" />
      <ellipse cx="144" cy="10" rx="5" ry="9" transform="rotate(12 144 10)" stroke="currentColor" strokeWidth="1.2" />
      <ellipse cx="50" cy="70" rx="6" ry="11" transform="rotate(-50 50 70)" stroke="currentColor" strokeWidth="1.2" />
      <ellipse cx="88" cy="42" rx="5.5" ry="10" transform="rotate(-28 88 42)" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}
