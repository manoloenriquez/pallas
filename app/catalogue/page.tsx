import FadeInText from "@/components/fadeintext";
import FadeInView from "@/components/fadeinview";
import CatalogItem from "@/components/sections/catalog-item";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const catalogItems = [
  {
    src: "/catalog/transmission.jpg",
    name: "Transmission",
    href: "transmission",
  },
  {
    src: "/catalog/distribution.png",
    name: "Distribution",
    href: "distribution",
  },
];

export default function Catalog() {
  return (
    <>
      <section
        className="pt-[86px] h-screen grid place-items-center snap-center"
        style={{
          backgroundImage: "url('/catalog-bg.jpg')",
          backgroundPosition: "center 30px",
          backgroundSize: "cover",
        }}
      >
        <FadeInText className="flex flex-col items-center gap-12">
          <h1 className="text-7xl sm:text-9xl text-pallaslightred">Products</h1>
          <Button className="w-fit bg-pallaslightred" asChild>
            <a href="#collection">SEE COLLECTION</a>
          </Button>
        </FadeInText>
      </section>

      <section id="collection" className="min-h-screen h-full snap-center">
        <FadeInView className="grid grid-cols-1 md:grid-cols-2 h-full w-full mx-auto gap-1">
          {/* {[...Array(2)].map((_, idx) => (
            <CatalogItem
              src="https://via.placeholder.com/100"
              name={`Product ${idx + 1}`}
            />
          ))} */}

          {catalogItems.map(({ src, name, href }) => (
            <Link key={href} href={`/catalogue/${href}`}>
              <CatalogItem src={src} name={name} />
            </Link>
          ))}
        </FadeInView>
      </section>
    </>
  );
}
