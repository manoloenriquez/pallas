import ContactForm from "./components/contact-form";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <section className="py-[86px] min-h-screen flex flex-col gap-12 justify-center items-center">
        <ContactForm />

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
              +1 6176557200
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
              sales@pallaselectrical.com
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
            <h2 className="font-bold text-pallasred md:my-4">CALL US</h2>
            <p className="text-xs md:text-sm text-center">
              75 State Street, Boston, Massachusetts, 02109, United States of
              America
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
