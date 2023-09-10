import { ButtonPrimary, ButtonSecondary } from "@/components/Global";
import { PlaySvg } from "@/utils/svg";
// Home page banner
const Banner = () => {
  return (
    <div className="pt-20 md:pt-24 bg-primary800">
      <div className="">
        <div className="relative z-10 px-4 md:text-center">
          <p className="font-semibold text-base text-primary200 mb-3">
            Super. Simple. Banking.
          </p>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl leading-[44px] md:!leading-[55px] lg:!leading-[75px]  xl:!leading-[90px] xl:text-7xl font-semibold lg:max-w-[788px] mx-auto mb-4 md:mb-6 tracking-[-2px]">
            Banking technology that has your back.
          </h1>
          <p className=" xl:text-xl text-primary200 mb-8 lg:mb-12">
            Simple, transparent banking. No hidden fees and free overdrafts.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-16">
            <ButtonPrimary title="Demo" svg={<PlaySvg />} />
            <ButtonSecondary title="Sign up" />
          </div>
        </div>
        <div className="relative ">
          <img src={"/assets/images/banner.png"} alt="banner-image" />
          <img
            src={"/assets/images/light-accent.png"}
            className="absolute bottom-0 right-0"
            alt="banner-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
