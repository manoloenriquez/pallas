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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-screen overflow-hidden">
      <body
        className={`h-screen snap-y snap-mandatory overflow-y-scroll text-lg md:text-2xl ${galvji.className}`}
      >
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
