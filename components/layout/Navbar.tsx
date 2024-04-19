"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type LinkType = {
  label: string;
  href: string;
};

const links: LinkType[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Catalog",
    href: "/catalog",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled =
        window.scrollY > 50 || window.document.body.scrollTop > 50;
      // if (isScrolled !== scrolled) {
      //   setScrolled(isScrolled);
      // }

      setScrolled(isScrolled);
    };

    // Adding the event listener when component mounts
    window.addEventListener("scroll", handleScroll);
    document.body.addEventListener("scroll", handleScroll);

    // Clean up to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.document.body.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`p-4 text-lg fixed w-full transition-colors z-10 ${
        scrolled ? "bg-white" : ""
      }`}
    >
      <div className="flex items-center gap-6">
        <Link href="/" className="hover:opacity-70 transition-opacity">
          <Image
            src="/Pallas-Logo_Logo With Name.png"
            alt=""
            width={140}
            height={0}
            style={{ height: "auto" }}
          />
        </Link>
        <div className="flex gap-6 uppercase text-pallaslightred">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:opacity-70 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
