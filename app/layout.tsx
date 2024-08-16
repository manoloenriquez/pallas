import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import localFont from "next/font/local";

const galvji = localFont({
  src: [
    {
      path: "../assets/galvji.ttf",
      weight: "400",
    },
    {
      path: "../assets/galvji-bold.ttf",
      weight: "700",
    },
  ],
});

export const metadata: Metadata = {
  title: "Pallas Electrical",
  description:
    "PALLAS ELECTRICAL™ is a world-class electrical design and engineering company that is known for its innovative approach in manufacturing premiere electrical equipment and tools catered for all markets across the globe.",
  openGraph: {
    type: "website",
    title: "Pallas Electrical",
    description:
      "PALLAS ELECTRICAL™ is a world-class electrical design and engineering company that is known for its innovative approach in manufacturing premiere electrical equipment and tools catered for all markets across the globe.",
    images: "/Pallas-Logo_Logo With Name.png",
  },
  twitter: {
    title: "Pallas Electrical",
    description:
      "PALLAS ELECTRICAL™ is a world-class electrical design and engineering company that is known for its innovative approach in manufacturing premiere electrical equipment and tools catered for all markets across the globe.",
    images: "/Pallas-Logo_Logo With Name.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-screen overflow-hidden">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`h-screen overflow-y-scroll text-lg md:text-2xl ${galvji.className}`}
      >
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
