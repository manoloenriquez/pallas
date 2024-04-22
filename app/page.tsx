import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="h-screen snap-center flex flex-col-reverse md:flex-row md:justify-between md:items-center">
        {/* Text */}
        <div className="p-4 lg:p-24">
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
          <Button asChild className="bg-pallasred">
            <Link href="#">MORE INFO</Link>
          </Button>
        </div>
        {/* Image slideshow */}
        <Carousel className="h-96 md:h-screen w-full md:w-5/12">
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
                src="/mohammad-mardani-U6x3xkzeFIE-unsplash.jpg"
                alt=""
                fill={true}
                style={{
                  objectFit: "cover",
                }}
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="ms-[60px]" />
          <CarouselNext className="me-[60px]" />
        </Carousel>
      </section>

      <section className="h-screen snap-center bg-[#e7e7e7] px-4 pt-24">
        <div className="flex flex-col md:flex-row max-w-screen-2xl mx-auto">
          <div className="p-4 lg:p-24 md:w-5/12">
            <h2 className="text-2xl">WHO WE ARE</h2>
            <h2 className="text-4xl sm:text-5xl md:text-6xl">
              We are{" "}
              <span className={`text-pallaslightred`}>
                designers & suppliers
              </span>
            </h2>
            <h3 className="text-3xl">
              of true high-quality power distribution products
            </h3>
            <ul className="pl-10 list-disc my-8 text-lg">
              <li>Fuse Cutouts</li>
              <li>Lightning Arresters</li>
              <li>Fuse Links</li>
              <li>Insulators</li>
              <li>Meters</li>
              <li>Other Electrical</li>
              <li>Products</li>
            </ul>
            <Button asChild className="bg-pallasred">
              <Link href="/catalog">SEE CATALOGUE</Link>
            </Button>
          </div>
          <div className="flex flex-col self-center gap-6 py-8 md:w-7/12">
            <Image
              src="/pexels-wencheng-jiang-7340354.jpg"
              alt=""
              width={600}
              height={0}
              style={{
                height: "auto",
                width: "100%",
                maxHeight: 400,
                objectFit: "cover",
              }}
            />
            <Image
              src="/mohammad-mardani-6HjSC_sQs8I-unsplash.jpg"
              alt=""
              width={600}
              height={0}
              style={{
                height: "auto",
                width: "100%",
                maxHeight: 400,
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </section>

      <section className="h-screen snap-center pt-24 pb-24">
        <div className="flex flex-col items-center max-w-screen-2xl mx-auto">
          <h2 className="font-bold text-2xl mt-10 mb-8">WHAT WE PROVIDE</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <Image
                src="/outlet.png"
                alt=""
                width={200}
                height={0}
                style={{
                  height: "auto",
                }}
              />
              <h3 className="text-3xl my-8">Lighting & Controls</h3>
              <p className="mb-8">
                indoor, outdoor, decorative, <br /> emergency, controls,
                inverters
              </p>
              <Button
                asChild
                className="md:w-6/12 text-lg shadow hover:opacity-70 transition-opacity bg-pallasred"
              >
                <Link href="#">MORE INFO</Link>
              </Button>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/electric-pole.png"
                alt=""
                width={200}
                height={0}
                style={{
                  height: "auto",
                }}
              />
              <h3 className="text-3xl my-8">Wiring & Electrical</h3>
              <p className="mb-8">
                indoor, outdoor, decorative, <br /> emergency, controls,
                inverters
              </p>
              <Button
                asChild
                className="md:w-6/12 text-lg shadow hover:opacity-70 transition-opacity bg-pallasred"
              >
                <Link href="#">MORE INFO</Link>
              </Button>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/power-button.png"
                alt=""
                width={200}
                height={0}
                style={{
                  height: "auto",
                }}
              />
              <h3 className="text-3xl my-8">Power & Utilities</h3>
              <p className="mb-8">
                indoor, outdoor, decorative, <br /> emergency, controls,
                inverters
              </p>
              <Button
                asChild
                className="md:w-6/12 text-lg shadow hover:opacity-70 transition-opacity bg-pallasred"
              >
                <Link href="#">MORE INFO</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
