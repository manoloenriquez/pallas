"use client";

import FadeInText from "@/components/fadeintext";
import CatalogItem from "@/components/sections/catalog-item";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import FadeInView from "@/components/fadeinview";
import { ProductData } from "../../types";
import BlockRendererClient from "@/components/block-renderer-client";

function convertTo2DArray(product: ProductData, elementsPerRow: number) {
  let result = [];
  const arr = product.Images.map((image) => image.url);

  for (let i = 0; i < arr.length; i += elementsPerRow) {
    result.push(arr.slice(i, i + elementsPerRow));
  }

  return result;
}

export default function Content({
  collection,
  product,
  data,
}: {
  collection: string;
  product: string;
  data: ProductData;
}) {
  const splitImages = convertTo2DArray(data, 3);
  const [activeImg, setActiveImg] = useState(0);
  return (
    <>
      <section
        id="collection"
        className="pt-[86px] md:pt-32 min-h-screen px-4 pb-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-screen-xl mx-auto">
          <div className="max-w-[530px] w-full">
            {activeImg < data.Images.length && (
              <Dialog>
                <DialogTrigger className="w-full">
                  <div className="relative w-full h-[530px] mx-auto">
                    <Image
                      src={data.Images[activeImg].url}
                      alt=""
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <div className="w-[530px] h-[530px]">
                    <Image
                      src={data.Images[activeImg].url}
                      alt=""
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </DialogContent>
              </Dialog>
            )}

            {splitImages[0].length > 1 && (
              <Carousel>
                <CarouselContent>
                  {splitImages.map((imgGroup, grpIdx) => (
                    <CarouselItem key={grpIdx}>
                      <div className="grid grid-cols-3 mx-auto h-[132px] mt-4 w-fit gap-4">
                        {imgGroup.map((image, idx) => (
                          <div
                            className="relative w-[132px] h-[132px] cursor-pointer"
                            onClick={() =>
                              setActiveImg(idx + grpIdx * imgGroup.length)
                            }
                          >
                            <Image
                              src={image}
                              alt=""
                              fill
                              style={{ objectFit: "cover" }}
                            />
                          </div>
                        ))}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            )}
          </div>
          <FadeInView className="mt-12">
            <h1 className="text-4xl font-bold text-pallasred mb-8">
              {data.Name}
            </h1>
            <div className="text-justify text-lg">
              <BlockRendererClient content={data.Description} />
            </div>
            <Link href="/contact">
              <Button className="bg-pallasred mt-12">
                Request Quote / Technical Data Sheet
              </Button>
            </Link>
          </FadeInView>
        </div>
      </section>
    </>
  );
}
