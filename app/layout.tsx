import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hemraj-psi.vercel.app/"),
  title: {
    default: "Hemraj | Full Stack Developer",
    template: "%s | Hemraj",
  },

  description:
    "Hemraj is a Full Stack Developer specializing in modern web applications using Next.js, React, PostgreSQL, and the MERN stack.",

  keywords: [
    "Hemraj",
    "Hemraj",
    "Full Stack Developer",
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "MERN Stack Developer",
    "PostgreSQL",
    "JavaScript Developer",
  ],

  authors: [
    {
      name: "Hemraj",
    },
  ],

  creator: "Hemraj",

  openGraph: {
    title: "Hemraj | Full Stack Developer",
    description:
      "Portfolio of Hemraj, a Full Stack Developer building modern and scalable web applications.",
    type: "website",
    locale: "en_IN",
    siteName: "Hemraj",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hemraj - Full Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hemraj | Full Stack Developer",
    description:
      "Portfolio of Hemraj, a Full Stack Developer building modern and scalable web applications.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
