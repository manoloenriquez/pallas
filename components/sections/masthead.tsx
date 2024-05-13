"use client";

import { useEffect, useRef } from "react";
import FadeInText from "../fadeintext";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Link from "next/link";
import Image from "next/image";

export default function Masthead() {
  const nextBtn = useRef(null);
  const prevBtn = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // @ts-ignore
      nextBtn.current?.click();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen snap-center flex flex-col-reverse md:flex-row md:justify-between md:items-center">
      {/* Text */}
      <div className="p-4 lg:p-24">
        <FadeInText>
          <h1 className="text-4xl sm:text-5xl md:text-6xl mb-4">
            <span className="text-pallaslightred">
              Unwavering <br />
              Expertise.
            </span>{" "}
            <br />
            <span className="text-pallasdarkred">
              Unmatched <br />
              Execution.
            </span>
          </h1>
        </FadeInText>
        <Button asChild className="bg-pallasred">
          <Link href="/about">MORE INFO</Link>
        </Button>
      </div>
      {/* Image slideshow */}
      <Carousel
        opts={{ loop: true }}
        className="h-96 md:h-screen w-full md:w-5/12"
      >
        <CarouselContent className="h-96 md:h-screen">
          <CarouselItem className="h-full relative">
            <Image
              src="/mohammad-mardani-U6x3xkzeFIE-unsplash.jpg"
              alt=""
              fill={true}
              style={{
                objectFit: "cover",
              }}
            />
          </CarouselItem>
          <CarouselItem className="h-full relative">
            <Image
              src="/home/2.jpg"
              alt=""
              fill={true}
              style={{
                objectFit: "cover",
              }}
            />
          </CarouselItem>
          <CarouselItem className="h-full relative">
            <Image
              src="/home/3.jpg"
              alt=""
              fill={true}
              style={{
                objectFit: "cover",
              }}
            />
          </CarouselItem>
          <CarouselItem className="h-full relative">
            <Image
              src="/mohammad-mardani-U6x3xkzeFIE-unsplash.jpg"
              alt=""
              fill={true}
              style={{
                objectFit: "cover",
              }}
            />
          </CarouselItem>
          <CarouselItem className="h-full relative">
            <Image
              src="/home/2.jpg"
              alt=""
              fill={true}
              style={{
                objectFit: "cover",
              }}
            />
          </CarouselItem>
          <CarouselItem className="h-full relative">
            <Image
              src="/home/3.jpg"
              alt=""
              fill={true}
              style={{
                objectFit: "cover",
              }}
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="ms-[60px] hidden" ref={prevBtn} />
        <CarouselNext className="me-[60px] hidden" ref={nextBtn} />
      </Carousel>
    </section>
  );
}
