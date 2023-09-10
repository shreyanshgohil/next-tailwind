import { PowerSvg } from "@/utils/svg";
import React from "react";
import { features } from "@/utils/data";
import SingleFeature from "../SingleFeature";

// Features section home page
const Features = () => {
  // JSX
  return (
    <div className="grid md:grid-cols-3 py-16 md:py-24 gap-y-8  gap-x-12 lg:gap-10 xl:gap-16">
      <div>
        <div className="mb-6">
          <PowerSvg />
        </div>
        <h3 className="text-3xl lg:text-4xl font-semibold mb-4 lg:mb-5">
          The only card you’ll ever need. Simple.
        </h3>
        <p className="text-lg lg:text-xl text-gray500">
          Spend smarter, lower your bills, get cashback on everything you buy,
          and unlock credit to grow your business.
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-x-4 xl:gap-x-16 gap-y-10 xl:gap-y-8 md:col-span-2">
        {features.map((singleFeature, index) => {
          return (
            <SingleFeature
              singleFeature={singleFeature}
              key={index}
            ></SingleFeature>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
