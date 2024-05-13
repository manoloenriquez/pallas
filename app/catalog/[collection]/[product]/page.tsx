"use client";

import FadeInText from "@/components/fadeintext";
import CatalogItem from "@/components/sections/catalog-item";
import productList from "@/assets/product-list.json";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

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
  const data = productList["distribution"][1];

  const [activeImg, setActiveImg] = useState(0);

  return (
    <>
      <section
        id="collection"
        className="pt-[86px] md:pt-32 min-h-screen h-full snap-center px-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-2xl mx-auto">
          <div className="max-w-[530px] w-full">
            {/* Main */}
            <div className="relative w-full h-[530px] mx-auto">
              <Image src={data.images[activeImg]} alt="" fill />
            </div>
            <div className="grid grid-cols-4 h-[132px]">
              {data.images.map((image) => (
                <div className="relative w-[132px] h-[132px]">
                  <Image
                    src={image}
                    alt=""
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12">
            <h1 className="text-4xl font-bold text-pallasred mb-8">
              {data.name}
            </h1>
            <p className="text-justify">{data.description}</p>
            <Button className="bg-pallasred mt-12">Request Quote</Button>
          </div>
        </div>
      </section>
    </>
  );
}
