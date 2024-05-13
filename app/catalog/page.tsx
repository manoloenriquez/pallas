import FadeInText from "@/components/fadeintext";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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
          <h1 className="text-8xl sm:text-9xl text-pallaslightred">Products</h1>
          <Button className="w-fit bg-pallaslightred" asChild>
            <a href="#collection">SEE COLLECTION</a>
          </Button>
        </FadeInText>
      </section>

      <section
        id="collection"
        className="pt-[86px] min-h-screen snap-center flex items-center justify-center"
      >
        <FadeInText className="grid grid-cols-2 md:grid-cols-3 h-full w-full mx-auto gap-1">
          {[...Array(6)].map((_, idx) => (
            <CatalogItem
              src="https://via.placeholder.com/100"
              name={`Product ${idx + 1}`}
            />
          ))}
        </FadeInText>
      </section>
    </>
  );
}

function CatalogItem({ src, name }: { src: string; name: string }) {
  return (
    <div className="flex flex-col w-full h-full relative">
      <div className="overflow-hidden h-full">
        <img src={src} alt="" className="w-full h-full object-cover" />
      </div>
      <p className="text-center text-pallaslightred mt-4 absolute">{name}</p>
    </div>
  );
}
