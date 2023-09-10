import { PowerSvg } from "@/utils/svg";
import React from "react";
import { features } from "@/utils/data";
import SingleFeature from "../SingleFeature";
const Features = () => {
  return (
    <div className="flex py-24 gap-16">
      <div className="max-w-[30%] w-full">
        <div className="mb-6">
          <PowerSvg />
        </div>
        <h3 className="text-4xl font-semibold mb-5">
          The only card you’ll ever need. Simple.
        </h3>
        <p className="text-xl text-gray500">
          Spend smarter, lower your bills, get cashback on everything you buy,
          and unlock credit to grow your business.
        </p>
      </div>
      <div className="max-w-[70%] w-full grid grid-cols-2 gap-x-16 gap-y-8">
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
