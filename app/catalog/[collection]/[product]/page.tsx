import FadeInText from "@/components/fadeintext";
import CatalogItem from "@/components/sections/catalog-item";

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
  params: { collection: string; product: string };
}) {
  const { collection, product } = params;

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
        Product page
      </section>
    </>
  );
}
