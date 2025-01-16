import ContactForm from "./components/contact-form";
import Image from "next/image";

export default async function Contact() {
  const data: {
    Email: string;
    Address: string;
    ContactNumber: string;
  } = (
    await fetch(
      `${process.env.STRAPI_URL}/Pallas-contact-information?fields`
    ).then((res) => res.json())
  ).data;

  const products: string[] = (
    await fetch(`${process.env.STRAPI_URL}/Pallas-catalogs?fields=Name`).then(
      (res) => res.json()
    )
  ).data
    // @ts-ignore
    .map((item) => item.Name)
    .sort();

  return (
    <>
      <section className="py-[86px] min-h-screen flex flex-col gap-12 justify-center items-center">
        <ContactForm products={products} />

        <div className="grid grid-cols-1 md:grid-cols-3 max-w-screen-lg mx-auto px-4">
          <div className="flex flex-col items-center">
            <div className="relative h-[50px] w-[50px] md:h-[100px] md:w-[100px]">
              <Image
                src="/contact/iphone.png"
                alt=""
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <h2 className="font-bold text-pallasred md:my-4">CALL US</h2>
            <p className="text-[.8rem] sm:text-xs md:text-sm text-center">
              {data.ContactNumber}
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative h-[50px] w-[50px] md:h-[100px] md:w-[100px]">
              <Image
                src="/contact/email-open.png"
                alt=""
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <h2 className="font-bold text-pallasred md:my-4">EMAIL US</h2>
            <p className="text-[.8rem] sm:text-xs md:text-sm text-center">
              {data.Email}
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative h-[50px] w-[50px] md:h-[100px] md:w-[100px]">
              <Image
                src="/contact/location-update-v1.png"
                alt=""
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <h2 className="font-bold text-pallasred md:my-4">FIND US</h2>
            <p className="text-xs md:text-sm text-center">{data.Address}</p>
          </div>
        </div>
      </section>
    </>
  );
}
