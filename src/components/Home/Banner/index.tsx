import { ButtonPrimary, ButtonSecondary } from "@/components/Global";
import { PlaySvg } from "@/utils/svg";
import Image from "next/image";
// Home page banner
const Banner = () => {
  return (
    <div className="pt-[96px] bg-primary800">
      <div className="text-center">
        <p className="font-semibold text-base text-primary200 mb-3">
          Super. Simple. Banking.
        </p>
        <h1 className="text-white text-7xl font-semibold w-[788px] mx-auto px-[10px] mb-6">
          Banking technology that has your back.
        </h1>
        <p className=" text-xl text-primary200 mb-12">
          Simple, transparent banking. No hidden fees and free overdrafts.
        </p>
        <div className="flex items-center justify-center gap-3 mb-16">
          <ButtonPrimary title="Demo" svg={<PlaySvg />} />
          <ButtonSecondary title="Sign up" />
        </div>
        <div>
          <img src={"/assets/images/banner.png"} alt="banner-image" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
