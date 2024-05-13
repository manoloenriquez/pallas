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
import { PropsWithChildren } from "react";
import FadeInText from "@/components/fadeintext";

const Heading = ({ children }: PropsWithChildren) => (
  <FadeInText>
    <h2 className="text-5xl mb-2">{children}</h2>
    <div className="bg-pallaslightred w-2/12 h-[4px] mb-4"></div>
  </FadeInText>
);

const Subheading = ({ children }: PropsWithChildren) => (
  <FadeInText>
    <h1 className="text-5xl mb-2">{children}</h1>
    <div className="bg-pallaslightred w-4/12 h-[4px] mb-4"></div>
  </FadeInText>
);

const AboutContent = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => (
  <FadeInText className="md:min-h-96">
    <Subheading>{title}</Subheading>
    <p>{content}</p>
  </FadeInText>
);

export default function About() {
  return (
    <>
      <section className="hidden md:block text-pallaslightred text-justify p-24 h-screen snap-center max-w-screen-2xl mx-auto pt-32 relative">
        <div className="mt-12">
          <Heading>About Us</Heading>
        </div>

        <div className="flex flex-col md:grid grid-cols-2 gap-12 mt-16">
          <FadeInText>
            <p>
              <strong>Pallas Electrical</strong> is a designer and supplier of
              true high-quality power distribution products such as Fuse
              Cutouts, Lightning Arresters, Fuse Links, Insulators, Meters, and
              other electrical products.
            </p>
            <br />
            <p>
              Knowing that our product line-up is an indispensible component of
              electrical grid , we make sure that it is backed by our confidence
              in the strength of our expertise and outstanding customer support.{" "}
              Pallas Electrical guarantees exceptional products that power homes
              and business
            </p>
          </FadeInText>
          <div className="relative min-h-[40rem] lg:hidden">
            <Image
              src="/about/pexels-pixabay-159279.jpg"
              alt=""
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        <div className="absolute h-screen w-5/12 top-0 right-0 hidden lg:block">
          <Image
            src="/about/pexels-pixabay-159279.jpg"
            alt=""
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </section>
      {/* <div className="bg-pallaslightred w-full h-[4px] mt-8"></div> */}
      <section className="hidden text-pallaslightred text-justify pt-40 md:flex flex-col items-stretch h-screen snap-center max-w-screen-2xl mx-auto">
        <div className="flex px-32">
          <div className="relative min-h-96 w-5/12">
            <Image
              src="/about/scott-blake-x-ghf9LjrVg-unsplash.jpg"
              alt=""
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>

          <div className="w-7/12 pl-16">
            <AboutContent
              title="Our Mission"
              content="We are committed to creating a symphony of outstanding products,
              operational excellence and exceptional customer service throught
              its unwavering expertise and unparalleled execution. Everyday
              Pallas Electrical will strive to contribute to the betterment of
              the lives of its team and clients."
            />
          </div>
        </div>

        <div className="flex px-32 mt-12">
          <div className="w-7/12 pr-16">
            <AboutContent
              title="Our Vision"
              content="To be a trusted, respected, and preferred world-class provider of
              reliable supplier of power distribution products."
            />
          </div>

          <div className="relative min-h-96 w-5/12">
            <Image
              src="/about/emmanuel-ikwuegbu-_2AlIm-F6pw-unsplash.jpg"
              alt=""
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </section>
      <section className="hidden text-pallaslightred text-justify pt-40 md:flex flex-col items-stretch h-screen snap-center max-w-screen-2xl mx-auto">
        <div className="flex px-32">
          <div className="relative min-h-96 w-5/12">
            <Image
              src="/about/thisisengineering-raeng-FXgbqr-t7uw-unsplash.jpg"
              alt=""
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>

          <div className="w-7/12 pl-16">
            <AboutContent
              title="Our Team"
              content="PALLAS Electrical is the brainchild of power line material
              designers headquartered in Boston, Massachusetts, USA, guided by
              field and industry veterans based in Taiwan. We are run by
              forward-thinking individuals, enabling the company to deliver
              world-class products on both global and local levels. PALLAS
              Electrical is operated by a passionate workforce with a geographic
              footprint from the Americas to Asia in the electrical industry for
              over 15 years."
            />
          </div>
        </div>

        <div className="flex px-32 mt-12">
          <div className="w-7/12 pr-16">
            <AboutContent
              title="Our Craft"
              content="At core, PALLAS Electrical designs and supplies tested and true
              high-quality power line products. Pledged to excellence, PALLAS
              Electrical provides top-notch products to power providers on
              programs of all sizes-be it multiple micro sites or vast lands."
            />
          </div>
          <div className="relative min-h-96 w-5/12">
            <Image
              src="/about/pexels-pixabay-236089.jpg"
              alt=""
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </section>

      <section className="text-pallaslightred text-justif md:hidden pt-[86px] p-8 h-screen snap-center max-w-screen-2xl mx-auto">
        <Heading>About Us</Heading>

        <div className="flex flex-col md:grid grid-cols-2 gap-4">
          <div>
            <p>
              <strong>Pallas Electrical</strong> is a designer and supplier of
              true high-quality power distribution products such as Fuse
              Cutouts, Lightning Arresters, Fuse Links, Insulators, Meters, and
              other electrical products.
            </p>
            <br />
            <p>
              <strong>
                Knowing that our product line-up is an indispensible component
                of electrical grid
              </strong>
              , we make sure that it is backed by our confidence in the strength
              of our expertise and outstanding customer support.{" "}
              <strong>Pallas Electrical</strong> guarantees exceptional products
              that power homes and business
            </p>
          </div>

          <div className="relative min-h-96">
            <Image
              src="/about/pexels-pixabay-159279.jpg"
              alt=""
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </section>
      <div className="bg-pallaslightred w-full h-[4px] mt-8"></div>
      <section className="text-pallaslightred text-justify pt-[86px] md:hidden flex flex-col items-stretch h-screen snap-center max-w-screen-2xl mx-auto">
        <div className="relative min-h-96">
          <Image
            src="/about/scott-blake-x-ghf9LjrVg-unsplash.jpg"
            alt=""
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>

        <AboutContent
          title="Our Mission"
          content="We are committed to creating a symphony of outstanding products,
              operational excellence and exceptional customer service throught
              its unwavering expertise and unparalleled execution. Everyday
              Pallas Electrical will strive to contribute to the betterment of
              the lives of its team and clients."
        />
      </section>
      <section className="text-pallaslightred text-justify pt-[86px] md:hidden flex flex-col items-stretch h-screen snap-center max-w-screen-2xl mx-auto">
        <div className="relative min-h-96">
          <Image
            src="/about/emmanuel-ikwuegbu-_2AlIm-F6pw-unsplash.jpg"
            alt=""
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>

        <AboutContent
          title="Our Vision"
          content="To be a trusted, respected, and preferred world-class provider of
              reliable supplier of power distribution products."
        />
      </section>
      <section className="text-pallaslightred text-justify pt-[86px] md:hidden flex flex-col items-stretch h-screen snap-center max-w-screen-2xl mx-auto">
        <div className="relative min-h-96">
          <Image
            src="/about/thisisengineering-raeng-FXgbqr-t7uw-unsplash.jpg"
            alt=""
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>

        <AboutContent
          title="Our Team"
          content="PALLAS Electrical is the brainchild of power line material
              designers headquartered in Boston, Massachusetts, USA, guided by
              field and industry veterans based in Taiwan. We are run by
              forward-thinking individuals, enabling the company to deliver
              world-class products on both global and local levels. PALLAS
              Electrical is operated by a passionate workforce with a geographic
              footprint from the Americas to Asia in the electrical industry for
              over 15 years."
        />
      </section>
      <section className="text-pallaslightred text-justify pt-[86px] md:hidden flex flex-col items-stretch h-screen snap-center max-w-screen-2xl mx-auto">
        <div className="relative min-h-96">
          <Image
            src="/about/pexels-pixabay-236089.jpg"
            alt=""
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>

        <AboutContent
          title="Our Craft"
          content="At core, PALLAS Electrical designs and supplies tested and true
              high-quality power line products. Pledged to excellence, PALLAS
              Electrical provides top-notch products to power providers on
              programs of all sizes-be it multiple micro sites or vast lands."
        />
      </section>
    </>
  );
}
