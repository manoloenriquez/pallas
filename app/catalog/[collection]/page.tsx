import FadeInText from "@/components/fadeintext";
import CatalogItem from "@/components/sections/catalog-item";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useParams } from "next/navigation";
import productList from "@/assets/product-list.json";

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
      <section
        id="collection"
        className="pt-[86px] min-h-screen h-full snap-center"
      >
        <FadeInText
          className={`grid grid-cols-1 ${
            columns[collection as keyof typeof columns]
          } h-full w-full mx-auto gap-1`}
        >
          {products.map((product, idx) => (
            <CatalogItem src={product.cover} name={product.name} />
          ))}
        </FadeInText>
      </section>
    </>
  );
}
