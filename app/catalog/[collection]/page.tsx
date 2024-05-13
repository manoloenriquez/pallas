import FadeInText from "@/components/fadeintext";
import CatalogItem from "@/components/sections/catalog-item";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useParams } from "next/navigation";
import productList from "@/assets/product-list.json";
import Link from "next/link";
import ProductItem from "@/components/sections/product-item";

const catalogItems = [
  {
    src: "/catalog/transmission.jpg",
    name: "Transmission",
  },
  {
    src: "/catalog/distribution.png",
    name: "Distribution",
  },
];

export default function Collection({
  params,
}: {
  params: { collection: string };
}) {
  const { collection } = params;
  const products = productList[collection as keyof typeof productList];
  console.log(products);

  const gridSize = {
    transmission: 3,
    distribution: 8,
  };

  const columns = {
    transmission: "md:grid-cols-3",
    distribution: "md:grid-cols-4",
  };

  return (
    <>
      <section id="collection" className="pt-[86px] min-h-screen md:h-full">
        <FadeInText
          className={`flex flex-col md:grid ${
            columns[collection as keyof typeof columns]
          } h-full w-full mx-auto`}
        >
          {products.map((product, idx) => (
            <Link
              key={product.href}
              href={`/catalog/${collection}/${product.href}`}
              className="flex-1 overflow-hidden h-full min-h-[400px]"
            >
              <ProductItem src={product.cover} name={product.name} />
            </Link>
          ))}
          <div className="border border-pallasred bg-pallasred grid place-items-center">
            {/* <Link href="/contact">
              <Button className="bg-pallasred mt-12">
                Request Quote / Technical Data Sheet
              </Button>
            </Link> */}
            <Link href="/" className="hover:opacity-70 transition-opacity">
              <Image src="/WhitePallas.png" alt="" width={300} height={100} />
            </Link>
          </div>
        </FadeInText>
      </section>
    </>
  );
}
