import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Rohith Siddanathi — iOS Dev",
  description:
    "iOS Mobile application Developer, currently open to work. Focused on interfaces and experiences.",
  generator: "Next.js",
  applicationName: "Rohith Siddanathi",
  keywords: [
    "freelance",
    "developer",
    "freelance developer",
    "iOS",
    "react",
    "iOS developer",
    "iOS engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "software",
    "software developer",
    "portfolio",
    "iOS developer portfolio",
    "creative developer portfolio",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Rohith Siddanathi — iOS Dev",
    description:
      "iOS Mobile application Developer, currently open to work. Focused on interfaces and experiences.",
    url: "https://rohithsiddanathi.netlify.app/",
    siteName: "rohithsiddanathi.netlify.app",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Rohith Siddanathi — iOS Dev",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohith Siddanathi — iOS Dev",
    description:
      "iOS Mobile application Developer, currently open to work. Focused on interfaces and experiences.",
    creator: "Rohith Siddanathi — iOS Dev",
    creatorId: "1243720976552144897",
    images: [""],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
