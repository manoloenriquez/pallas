import FadeInText from "@/components/fadeintext";
import CatalogItem from "@/components/sections/catalog-item";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";
import ProductItem from "@/components/sections/product-item";
import FadeInView from "@/components/fadeinview";
import { BlocksContent } from "@strapi/blocks-react-renderer";
import { ProductData } from "../types";

export async function getStaticParams() {
  return [{ collection: "distribution" }, { collection: "transmission" }];
}

export default async function Collection({
  params,
}: {
  params: { collection: string };
}) {
  const { collection } = params;
  const collectionName =
    collection.at(0)?.toUpperCase() + collection.substring(1);

  const products: { data: ProductData[] } = await fetch(
    `${process.env.STRAPI_URL}/Pallas-catalogs?filters[Category][$eq]=${collectionName}&populate=*`
  ).then((res) => res.json());
  console.log(products);

  const columns = {
    transmission: "md:grid-cols-3",
    distribution: "md:grid-cols-4",
  };

  return (
    <>
      <section id="collection" className="pt-[86px] min-h-screen md:h-full">
        <FadeInView
          className={`grid grid-cols-2 md:grid ${
            columns[collection as keyof typeof columns]
          } h-full w-full mx-auto`}
        >
          {products.data.map((product, idx) => (
            <Link
              key={product.id}
              href={`/catalogue/${collection}/${product.slug}`}
              className="flex-1 overflow-hidden h-full min-h-[200px]"
            >
              <ProductItem
                src={product.CoverImage.url}
                name={product.Name}
                collection={collection}
              />
            </Link>
          ))}
          <div
            className={`border border-pallasred bg-pallasred grid place-items-center ${
              products.data.length % 3 === 0 ? "md:col-span-3" : ""
            }`}
          >
            {/* <Link href="/contact">
              <Button className="bg-pallasred mt-12">
                Request Quote / Technical Data Sheet
              </Button>
            </Link> */}
            <Link href="/" className="hover:opacity-70 transition-opacity">
              <Image src="/WhitePallas.png" alt="" width={300} height={100} />
            </Link>
          </div>
        </FadeInView>
      </section>
    </>
  );
}
