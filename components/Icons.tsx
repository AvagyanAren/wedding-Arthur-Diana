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

export function MapOutlineIcon({ className }: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <path
        fill="currentColor"
        d="M8.16113 2.58068C8.68891 2.31686 9.31109 2.31686 9.83887 2.58068L14.832 5.07775C14.9376 5.13054 15.0624 5.13054 15.168 5.07775L19.0361 3.14318C20.2827 2.52005 21.7497 3.42638 21.75 4.81994V17.3043C21.75 18.0143 21.3488 18.6634 20.7139 18.9811L15.8389 21.4186C15.311 21.6825 14.689 21.6825 14.1611 21.4186L9.16797 18.9225C9.06248 18.8698 8.93752 18.8698 8.83203 18.9225L4.96387 20.8561C3.71718 21.4794 2.25 20.5732 2.25 19.1793V6.69494C2.25015 5.98504 2.65126 5.33581 3.28613 5.01818L8.16113 2.58068ZM9.16797 3.92248C9.06248 3.8698 8.93752 3.8698 8.83203 3.92248L3.95703 6.35998C3.83033 6.42351 3.75015 6.5532 3.75 6.69494V19.1793C3.75 19.4581 4.04363 19.6399 4.29297 19.5153L8.16113 17.5807C8.68891 17.3169 9.31109 17.3169 9.83887 17.5807L14.832 20.0778C14.9376 20.1305 15.0624 20.1305 15.168 20.0778L20.043 17.6403C20.1699 17.5767 20.25 17.4463 20.25 17.3043V4.81994C20.2497 4.54145 19.9562 4.36052 19.707 4.48498L15.8389 6.41857C15.311 6.68251 14.689 6.68251 14.1611 6.41857L9.16797 3.92248ZM15 8.24963C15.4141 8.24963 15.7498 8.58561 15.75 8.99963V17.2496C15.75 17.6638 15.4142 17.9996 15 17.9996C14.5858 17.9996 14.25 17.6638 14.25 17.2496V8.99963C14.2502 8.58561 14.5859 8.24963 15 8.24963ZM9 5.99963C9.41408 5.99963 9.74978 6.33561 9.75 6.74963V14.9996C9.75 15.4138 9.41421 15.7496 9 15.7496C8.58579 15.7496 8.25 15.4138 8.25 14.9996V6.74963C8.25022 6.33561 8.58592 5.99963 9 5.99963Z"
      />
    </svg>
  );
}

export function ArrowTopRightOnSquareIcon({ className }: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <path
        fill="currentColor"
        d="M13.5 5.25C13.9142 5.25 14.25 5.58579 14.25 6C14.25 6.41421 13.9142 6.75 13.5 6.75H5.25C4.42157 6.75 3.75 7.42157 3.75 8.25V18.75C3.75 19.5784 4.42157 20.25 5.25 20.25H15.75C16.5784 20.25 17.25 19.5784 17.25 18.75V10.5C17.25 10.0858 17.5858 9.75 18 9.75C18.4142 9.75 18.75 10.0858 18.75 10.5V18.75C18.75 20.4069 17.4069 21.75 15.75 21.75H5.25C3.59315 21.75 2.25 20.4069 2.25 18.75V8.25C2.25 6.59315 3.59315 5.25 5.25 5.25H13.5ZM21 2.25C21.1989 2.25 21.3896 2.32907 21.5303 2.46973C21.6709 2.61038 21.75 2.80109 21.75 3V8.25C21.75 8.66421 21.4142 9 21 9C20.5858 9 20.25 8.66421 20.25 8.25V4.81055L8.03027 17.0303C7.73738 17.3232 7.26262 17.3232 6.96973 17.0303C6.67683 16.7374 6.67683 16.2626 6.96973 15.9697L19.1895 3.75H15.75C15.3358 3.75 15 3.41421 15 3C15 2.58579 15.3358 2.25 15.75 2.25H21Z"
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

