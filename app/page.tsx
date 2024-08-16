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
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Masthead />

      <section className="min-h-screen snap-start md:snap-center bg-[#e7e7e7] px-4 pt-24">
        <div className="flex flex-col md:flex-row max-w-screen-2xl mx-auto">
          <FadeInText className="p-4 lg:p-24 md:w-5/12">
            <h2 className="text-2xl">WHO WE ARE</h2>
            {/* <h2 className="text-4xl sm:text-5xl md:text-6xl">
              We are{" "}
              <span className={`text-pallaslightred`}>
                designers & suppliers
              </span>
            </h2>
            <h3 className="text-3xl">
              of true high-quality power distribution products
            </h3> */}
            <br />
            <p className="text-lg">
              PALLAS ELECTRICAL™ is a world-class electrical design and
              engineering company that is known for its innovative approach in
              manufacturing premiere electrical equipment and tools catered for
              all markets across the globe.
            </p>
            <br />
            <p>Expertise. Execution.</p>
            <ul className="pl-10 list-disc my-8 text-lg">
              <li>Fuse Cutout</li>
              <li>Lightning Arrester</li>
              <li>Fuse Link</li>
              <li>Disconnect Switch</li>
              <li>Insulator</li>
              <li>Meter</li>
              <li>Other Electrical Products</li>
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

      <section className="min-h-screen snap-start md:snap-center pt-24 flex flex-col">
        <FadeInText className="flex flex-col items-center max-w-screen-2xl mx-auto my-auto px-4">
          <h2 className="font-bold text-2xl mt-10 mb-8">WHAT WE PROVIDE</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 text-center">
            <div className="flex flex-col items-center">
              <Image
                src="/home/[ICON] POWER AND UTILITY.png"
                alt=""
                width={200}
                height={0}
                style={{
                  height: "auto",
                }}
              />
              <h3 className="text-3xl my-8">Power & Utility</h3>
              <p className="mb-8 text-lg">
                Outdoor transmission and distribution pole line hardware for
                power utilities and other vital industries.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/home/[ICON] DESIGN AND INNOVATION.png"
                alt=""
                width={200}
                height={0}
                style={{
                  height: "auto",
                }}
              />
              <h3 className="text-3xl my-8">Design & Innovation</h3>
              <p className="mb-8 text-lg">
                PALLAS ELECTRICAL™ is proud to have an in-house design team that
                works with top engineers around the world to develop only the
                best electrical products.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/home/[ICON]-SERVICE-SOLUTIONS.png"
                alt=""
                width={200}
                height={0}
                style={{
                  height: "auto",
                }}
              />
              <h3 className="text-3xl my-8">Service Solutions</h3>
              <p className="mb-8 text-lg">
                Premiere customer service solutions through inbound and outbound
                phone, chat, email, text, and after sales care with negotiable
                warranties for all our products across the board.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/home/[ICON] SAFETY EQUIPMENT AND ACCESSORIES.png"
                alt=""
                width={200}
                height={0}
                style={{
                  height: "auto",
                }}
              />
              <h3 className="text-3xl my-8">Safety Equipment & Accessories</h3>
              <p className="mb-8 text-lg">
                Electrical safety equipment made to protect the modern
                electrical linemen.
              </p>
            </div>
          </div>
        </FadeInText>
        <div className="mt-auto">
          <Footer />
        </div>
      </section>
    </>
  );
}
