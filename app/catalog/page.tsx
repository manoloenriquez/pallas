import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Catalog() {
  return (
    <>
      <section
        className="pt-24 h-screen grid place-items-center snap-center"
        style={{
          backgroundImage: "url('/catalog-bg.jpg')",
          backgroundPosition: "center 30px",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col items-center gap-12">
          <h1 className="text-8xl sm:text-9xl text-pallaslightred">Products</h1>
          <Button className="w-fit bg-pallaslightred" asChild>
            <a href="#collection">SEE COLLECTION</a>
          </Button>
        </div>
      </section>

      <section
        id="collection"
        className="py-24 px-8 min-h-screen snap-center flex items-center justify-center"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-screen-lg w-full mx-auto">
          {[...Array(6)].map((_, idx) => (
            <CatalogItem
              src="https://via.placeholder.com/100"
              name={`Product ${idx + 1}`}
            />
          ))}
        </div>
      </section>
    </>
  );
}

function CatalogItem({ src, name }: { src: string; name: string }) {
  return (
    <div className="flex flex-col w-full">
      <div className="overflow-hidden rounded-2xl border-pallaslightred border-4">
        <img src={src} alt="" className="w-full h-full object-cover" />
      </div>
      <p className="text-center text-pallaslightred mt-4">{name}</p>
    </div>
  );
}
