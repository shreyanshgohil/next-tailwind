import { ButtonPrimary, ButtonSecondary } from "@/components/Global";
import Image from "next/image";
// Call to action component
const CTA = () => {
  // JSX
  return (
    <div className=" rounded-3xl grid  md:grid-cols-3  overflow-hidden">
      <div className="px-6 lg:px-16  flex  justify-center flex-col bg-primary800 pt-10 pb-12 lg:pt-0 lg:pb-0 md:col-span-2">
        <div className="mb-8 lg:mb-10 ">
          <h3 className="text-3xl  lg:text-4xl text-white font-semibold mb-4 lg:mb-5">
            Give us a shot
          </h3>
          <p className="text-lg  lg:text-xl text-primary200 ">
            Join over 4,000+ startups already growing with Untitled.
          </p>
        </div>
        <div className="flex flex-col md:flex-row  gap-3">
          <ButtonPrimary title="Learn more" />
          <ButtonSecondary title="Get started" />
        </div>
      </div>
      <div className="max-w-full lg:max-w-[480px]">
        <img
          className="hidden md:block w-[480px] h-full "
          src={"/assets/images/cat-image.png"}
          alt="cta-image"
        />
        <img
          className="md:hidden w-full"
          src={"/assets/images/cat-image-mobile.png"}
          alt="cta-image"
        />
      </div>
    </div>
  );
};

export default CTA;
