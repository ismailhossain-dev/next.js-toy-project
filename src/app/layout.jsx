import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import localFont from "next/font/local";
import { ToastContainer } from "react-toastify";
import NextAuthProvider from "@/provider/NextAuthProvider";
import { Suspense } from "react";
//my own  font
const poppins = Poppins({
  weight: ["100", "200", "400", "500", "600", "800"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

//Next.js local bangla font use
export const FontBangla = localFont({
  src: "./../mayaboti-normal.ttf",
});

//create metadata chatgpt diye ami just chatgpt ke 2 image disi 1.logo, 2.product, homepage and text disi chatgpt ke create a production level metadata object for application also shareable link
//and 3ta link disi cloudinary
export const metadata = {
  metadataBase: new URL("https://toybazaar-weld.vercel.app"),

  title: {
    default: "ToyBazaar – Best Toys Shop for Kids",
    template: "%s | ToyBazaar",
  },

  description:
    "ToyBazaar is a modern online toy store where you can find high quality toys for kids at affordable prices.",

  keywords: [
    "ToyBazaar",
    "kids toys",
    "toy shop",
    "online toy store",
    "buy toys online",
    "kids games",
  ],

  authors: [
    {
      name: "ToyBazaar Team",
      url: "https://toybazaar-weld.vercel.app",
    },
  ],

  creator: "ToyBazaar",
  publisher: "ToyBazaar",

  openGraph: {
    title: "ToyBazaar – Best Toys Shop for Kids",
    description:
      "Discover amazing toys for kids at ToyBazaar. Safe, fun and affordable toys available online.",
    url: "https://toybazaar-weld.vercel.app",
    siteName: "ToyBazaar",
    images: [
      {
        url: "https://res.cloudinary.com/dttbhoaxs/image/upload/v1773547514/Screenshot_2026-03-15_095145_uxkyb9.png",
        width: 1200,
        height: 630,
        alt: "ToyBazaar Homepage Preview",
      },
      {
        url: "https://res.cloudinary.com/dttbhoaxs/image/upload/v1773547512/Screenshot_2026-03-15_095159_mdpp3q.png",
        width: 1200,
        height: 630,
        alt: "ToyBazaar Product Page Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ToyBazaar – Best Toys Shop",
    description: "Explore the best toys for kids at ToyBazaar.",
    images: [
      "https://res.cloudinary.com/dttbhoaxs/image/upload/v1773547514/Screenshot_2026-03-15_095145_uxkyb9.png",
    ],
    creator: "@ToyBazaar",
  },

  icons: {
    icon: "https://res.cloudinary.com/dttbhoaxs/image/upload/v1773547516/logo_iaz4r9.webp",
    shortcut: "https://res.cloudinary.com/dttbhoaxs/image/upload/v1773547516/logo_iaz4r9.webp",
    apple: "https://res.cloudinary.com/dttbhoaxs/image/upload/v1773547516/logo_iaz4r9.webp",
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "ecommerce",
};

export default function RootLayout({ children }) {
  return (
    <NextAuthProvider>
      <html suppressHydrationWarning lang="en">
        <body className={`${poppins.className} antialiased`}>
          <nav className="w-11/12 mx-auto">
            <Navbar />
          </nav>
          <Suspense>
            <div className="py-2 md:w-11/12 mx-auto min-h-[calc(100vh-287px)]">{children}</div>
          </Suspense>
          <Footer />
          <ToastContainer />
        </body>
      </html>
    </NextAuthProvider>
  );
}
