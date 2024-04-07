"use client";

import Image from "next/image";
import Link from "next/link";

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
  return (
    <nav className="p-4 text-lg md:absolute">
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
