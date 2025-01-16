import { ProductData } from "../../types";
import Content from "./content";

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 60;

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true; // or false, to 404 on unknown paths

export async function generateStaticParams() {
  const products: { data: ProductData[] } = await fetch(
    `${process.env.STRAPI_URL}/Pallas-catalogs`
  ).then((res) => res.json());
  const params: { collection: string; product: string }[] = [];
  console.log(products);
  products.data.forEach((product) => {
    if (product.Category === "Transmission") {
      params.push({ collection: "transmission", product: product.slug });
    } else if (product.Category === "Distribution") {
      params.push({ collection: "distribution", product: product.slug });
    }
  });
  console.log(params);
  return params;
}

export default async function Collection({
  params,
}: {
  params: { collection: string; product: string };
}) {
  const { collection, product } = params;
  const { data }: { data: ProductData[] } = await fetch(
    `${process.env.STRAPI_URL}/Pallas-catalogs?filters[slug][$eq]=${product}&populate=*`
  ).then((res) => res.json());
  console.log("current product", data);

  return <Content collection={collection} product={product} data={data[0]} />;
}
