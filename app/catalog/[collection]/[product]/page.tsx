"use client";

import FadeInText from "@/components/fadeintext";
import CatalogItem from "@/components/sections/catalog-item";
import productList from "@/assets/product-list.json";
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

function convertTo2DArray(arr: string[], elementsPerRow: number) {
  let result = [];
  for (let i = 0; i < arr.length; i += elementsPerRow) {
    result.push(arr.slice(i, i + elementsPerRow));
  }
  return result;
}

export default function Collection({
  params,
}: {
  params: { collection: string; product: string };
}) {
  const { collection, product } = params;
  const productIdxMap = {
    distribution: {
      "fuse-cutout": 0,
      "lightning-arresters": 1,
      "fuse-link": 2,
      "meter-base": 3,
      "disconnect-switch": 4,
      insulator: 5,
      "fuse-tube": 6,
    },
    transmission: {
      "69kv": 0,
      "138kv": 1,
      "250kv": 2,
    },
  };
  const data =
    productList[collection as keyof typeof productList][
      // @ts-ignore
      productIdxMap[collection][product]
    ];
  console.log(data);
  const splitImages = convertTo2DArray(data.images, 3);
  const [activeImg, setActiveImg] = useState(0);

  return (
    <>
      <section
        id="collection"
        className="pt-[86px] md:pt-32 min-h-screen px-4 pb-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-screen-xl mx-auto">
          <div className="max-w-[530px] w-full">
            {activeImg < data.images.length && (
              <Dialog>
                <DialogTrigger className="w-full">
                  <div className="relative w-full h-[530px] mx-auto">
                    <Image
                      src={data.images[activeImg]}
                      alt=""
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <div className="w-[530px] h-[530px]">
                    <Image
                      src={data.images[activeImg]}
                      alt=""
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </DialogContent>
              </Dialog>
            )}

            {/* <div className="grid grid-cols-3 mx-auto h-[132px] mt-4 w-fit">
              {data.images.map((image, idx) => (
                <div
                  className="relative w-[132px] h-[132px] cursor-pointer"
                  onClick={() => setActiveImg(idx)}
                >
                  <Image
                    src={image}
                    alt=""
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ))}
            </div> */}

            {splitImages.length > 1 && (
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
          <FadeInText className="mt-12">
            <h1 className="text-4xl font-bold text-pallasred mb-8">
              {data.name}
            </h1>
            <p
              className="text-justify text-lg"
              dangerouslySetInnerHTML={{ __html: data.description }}
            ></p>
            <Link href="/contact">
              <Button className="bg-pallasred mt-12">
                Request Quote / Technical Data Sheet
              </Button>
            </Link>
          </FadeInText>
        </div>
      </section>
    </>
  );
}
