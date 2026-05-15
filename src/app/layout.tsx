// import type { Metadata } from "next";
// import { Inter, Roboto_Mono } from "next/font/google";
// import "./globals.css";
// import { personal } from "@/lib/data";

// const geistSans = Inter({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Roboto_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
// const ogImageUrl = process.env.NEXT_PUBLIC_OG_IMAGE_URL;

// export const metadata: Metadata = {
//   metadataBase: siteUrl ? new URL(siteUrl) : undefined,
//   alternates: siteUrl ? { canonical: siteUrl } : undefined,
//   title: "Aarsh Bhatnagar | Full-Stack Engineer & Applied AI Developer",
//   description:
//     "Portfolio of Aarsh Bhatnagar, a CS & AI student graduating in 2028, focused on full-stack engineering and applied AI. Open to internship opportunities.",
//   keywords: [
//     "Aarsh Bhatnagar",
//     "portfolio",
//     "full-stack engineer",
//     "applied AI developer",
//     "software engineering internship",
//     "AI internship",
//     "Next.js",
//   ],
//   authors: [{ name: personal.name }],
//   openGraph: {
//     title: "Aarsh Bhatnagar | Full-Stack Engineer & Applied AI Developer",
//     description:
//       "Explore full-stack and applied AI portfolio projects by Aarsh Bhatnagar, including deployed systems, AI workflows, and internship-ready product work.",
//     url: siteUrl,
//     type: "website",
//     siteName: "Aarsh Bhatnagar Portfolio",
//     locale: "en_US",
//     images: ogImageUrl
//       ? [
//           {
//             url: ogImageUrl,
//             alt: "Aarsh Bhatnagar portfolio preview",
//           },
//         ]
//       : undefined,
//   },
//   twitter: {
//     card: "summary",
//     title: "Aarsh Bhatnagar | Full-Stack Engineer & Applied AI Developer",
//     description:
//       "Full-stack and applied AI portfolio with deployed projects, production workflows, and internship-focused work.",
//     images: ogImageUrl ? [ogImageUrl] : undefined,
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{ children: React.ReactNode }>) {
//   // Change to: theme-notebook | theme-grid | theme-minimal
//   const designVariant = "theme-grid";

//   return (
//     <html lang="en" suppressHydrationWarning>
//       <head>
//         <link rel="icon" href="/favicon.ico" sizes="any" />
//       </head>
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} ${designVariant} antialiased text-gray-800 font-sans`}
//       >
//         <a
//           href="#main-content"
//           className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-blue-700 focus:shadow-lg"
//         >
//           Skip to main content
//         </a>
//         {children}
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { personal } from "@/lib/data";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const ogImageUrl = process.env.NEXT_PUBLIC_OG_IMAGE_URL;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  alternates: siteUrl ? { canonical: siteUrl } : undefined,
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
  },
  title: "Aarsh Bhatnagar | Full-Stack Engineer & Applied AI Developer",
  description:
    "Portfolio of Aarsh Bhatnagar, a CS & AI student graduating in 2028, focused on full-stack engineering and applied AI. Open to internship opportunities.",
  keywords: [
    "Aarsh Bhatnagar",
    "portfolio",
    "full-stack engineer",
    "applied AI developer",
    "software engineering internship",
    "AI internship",
    "Next.js",
  ],
  authors: [{ name: personal.name }],
  openGraph: {
    title: "Aarsh Bhatnagar | Full-Stack Engineer & Applied AI Developer",
    description:
      "Explore full-stack and applied AI portfolio projects by Aarsh Bhatnagar, including deployed systems, AI workflows, and internship-ready product work.",
    url: siteUrl,
    type: "website",
    siteName: "Aarsh Bhatnagar Portfolio",
    locale: "en_US",
    images: ogImageUrl
      ? [
          {
            url: ogImageUrl,
            alt: "Aarsh Bhatnagar portfolio preview",
          },
        ]
      : undefined,
  },
  twitter: {
    card: "summary",
    title: "Aarsh Bhatnagar | Full-Stack Engineer & Applied AI Developer",
    description:
      "Full-stack and applied AI portfolio with deployed projects, production workflows, and internship-focused work.",
    images: ogImageUrl ? [ogImageUrl] : undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Change to: theme-notebook | theme-grid | theme-minimal
  const designVariant = "theme-grid";

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${designVariant} antialiased text-gray-800 font-sans`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-blue-700 focus:shadow-lg"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
