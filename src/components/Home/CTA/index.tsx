import { ButtonPrimary, ButtonSecondary } from "@/components/Global";
import Image from "next/image";
// Call to action component
const CTA = () => {
  return (
    <div className=" rounded-3xl flex overflow-hidden">
      <div className="px-16 max-w-[calc(100%-480px)] w-full flex  justify-center flex-col bg-primary800">
        <div className="mb-10">
          <h3 className="text-4xl text-white font-semibold mb-5">
            Give us a shot
          </h3>
          <p className="text-xl text-primary200 ">
            Join over 4,000+ startups already growing with Untitled.
          </p>
        </div>
        <div className="flex gap-3">
          <ButtonPrimary title="Learn more" />
          <ButtonSecondary title="Get started" />
        </div>
      </div>
      <div className="max-w-[480px]">
        <div className="w-[480px] h-[400px]">
          <img
            className=""
            src={"/assets/images/cat-image.png"}
            height={1000}
            width={1000}
            alt="cta-image"
          />
        </div>
      </div>
    </div>
  );
};

export default CTA;
