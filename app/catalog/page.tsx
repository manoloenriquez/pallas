import FadeInText from "@/components/fadeintext";
import CatalogItem from "@/components/sections/catalog-item";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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

      <section
        id="collection"
        className="pt-[86px] min-h-screen h-full snap-center"
      >
        <FadeInText className="grid grid-cols-1 md:grid-cols-2 h-full w-full mx-auto gap-1">
          {/* {[...Array(2)].map((_, idx) => (
            <CatalogItem
              src="https://via.placeholder.com/100"
              name={`Product ${idx + 1}`}
            />
          ))} */}

          {catalogItems.map(({ src, name }) => (
            <CatalogItem src={src} name={name} />
          ))}
        </FadeInText>
      </section>
    </>
  );
}

// function CatalogItem({ src, name }: { src: string; name: string }) {

//   return (
//     <div className="flex flex-col w-full h-full">
//       <div className="relative w-full h-full transition-opacity">
//         {/* <div className="overflow-hidden h-full grayscale hover:grayscale-0 transition-all">
//           <img
//             src={src}
//             alt=""
//             className="w-full h-full object-cover"
//             style={{ objectPosition: "center 50px" }}
//           />
//         </div> */}
//         <div
//           className="overflow-hidden h-full grayscale hover:grayscale-0 transition-all"
//           style={{
//             backgroundImage: `url('${src}')`,
//             backgroundSize: "cover",
//             backgroundPosition: "center center",
//             backgroundRepeat: "no-repeat",
//           }}
//         ></div>
//         <p
//           className="text-4xl text-center text-pallaslightred mt-4 absolute top-[50%] left-[50%] justify-center"
//           style={{
//             transform: "translate(-50%, -50%)",
//           }}
//         >
//           {name}
//         </p>
//       </div>
//     </div>
//   );
// }
