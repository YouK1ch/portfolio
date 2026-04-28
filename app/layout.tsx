import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Denys Stolyk | Cybersecurity Portfolio",
  description:
    "3rd-year Cybersecurity Cadet at KNUIA. Focused on pentesting, network defense, OSINT, and security engineering. TryHackMe & HackTheBox active practitioner.",
  keywords: [
    "cybersecurity", "pentesting", "OSINT", "network security",
    "TryHackMe", "HackTheBox", "KNUIA", "Denys Stolyk", "ethical hacking",
  ],
  authors: [{ name: "Denys Stolyk" }],
  openGraph: {
    title: "Denys Stolyk | Cybersecurity Portfolio",
    description:
      "Cybersecurity student & researcher at KNUIA. Focused on pentesting, defense, and security engineering.",
    type: "website",
    url: "https://denys-stolyk.dev",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Denys Stolyk | Cybersecurity",
    description: "Cybersecurity cadet. Pentesting | Defense | OSINT",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
