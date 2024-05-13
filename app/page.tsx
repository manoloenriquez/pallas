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
import FadeInText from "@/components/fadeintext";
import Masthead from "@/components/sections/masthead";

export default function Home() {
  return (
    <>
      <Masthead />

      <section className="h-screen snap-center bg-[#e7e7e7] px-4 pt-24">
        <div className="flex flex-col md:flex-row max-w-screen-2xl mx-auto">
          <FadeInText className="p-4 lg:p-24 md:w-5/12">
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
          </FadeInText>
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
        <FadeInText className="flex flex-col items-center max-w-screen-2xl mx-auto">
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
            </div>
          </div>
        </FadeInText>
      </section>
    </>
  );
}
