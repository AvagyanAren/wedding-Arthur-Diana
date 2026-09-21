import type { Metadata, Viewport } from "next";
import { Noto_Sans_Armenian, Noto_Serif_Armenian } from "next/font/google";
import "./globals.css";

const serif = Noto_Serif_Armenian({
  subsets: ["armenian"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Noto_Sans_Armenian({
  subsets: ["armenian"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wedding-h-m.vercel.app"),
  title: "Արթուր և Դիանա · Հարսանիք",
  description: "Հրավեր մեր հարսանիքին · 18 հոկտեմբերի 2026 · Սաղմոսավանք",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hy" className={`${serif.variable} ${sans.variable}`}>
      <body className="bg-cream font-sans text-charcoal">{children}</body>
    </html>
  );
}
