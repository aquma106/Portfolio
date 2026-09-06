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
  metadataBase: new URL("https://hemraj-psi.vercel.app"),

  alternates: {
    canonical: "/",
  },
  title: {
    default: "Hemraj Shah | Full Stack Developer",
    template: "%s | Hemraj Shah",
  },

  description:
    "Hemraj Shah is a Full Stack Developer specializing in modern web applications using Next.js, React, PostgreSQL, and the MERN stack.",

  keywords: [
    "Hemraj Shah",
    "Full Stack Developer",
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "MERN Stack Developer",
    "PostgreSQL Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Software Developer",
  ],
  authors: [
    {
      name: "Hemraj Shah",
    },
  ],

  creator: "Hemraj Shah",

  openGraph: {
    title: "Hemraj Shah | Full Stack Developer",
    description:
      "Portfolio of Hemraj Shah, a Full Stack Developer building modern and scalable web applications.",
    type: "website",
    locale: "en_IN",
    siteName: "Hemraj Shah",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hemraj Shah - Full Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hemraj Shah | Full Stack Developer",
    description:
      "Portfolio of Hemraj Shah, a Full Stack Developer building modern and scalable web applications.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hemraj Shah",
  url: "https://hemraj-psi.vercel.app",
  jobTitle: "Full Stack Developer",
  description:
    "Hemraj Shah is a Full Stack Developer specializing in modern web applications using Next.js, React, PostgreSQL, and the MERN stack.",
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "Prisma",
    "MERN Stack",
    "Web Development",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <body className="flex min-h-full flex-col">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(jsonLd),
            }}
          />

          {children}
        </body>
        {children}
      </body>
    </html>
  );
}
