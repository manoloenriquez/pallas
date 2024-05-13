import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-pallasred text-white p-4 md:py-12 md:px-8">
      <div className="flex relative">
        <div className="flex flex-col w-9/12 text-[1rem]">
          <Link href="/about" className="transition-opacity hover:opacity-70">
            ABOUT
          </Link>
          <Link href="/catalog" className="transition-opacity hover:opacity-70">
            CATALOG
          </Link>
          <Link href="/contact" className="transition-opacity hover:opacity-70">
            CONTACT US
          </Link>
        </div>
        <div className="md:border-l-2 border-white w-[300px] h-[100px] relative">
          <Image
            src="/WhitePallas.png"
            className="h-full w-full"
            alt=""
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </footer>
  );
}
