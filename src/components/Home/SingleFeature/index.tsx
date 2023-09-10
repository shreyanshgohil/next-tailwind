import React, { FC } from "react";
import { SingleFeatureProps } from "./types";

// For single feature from list of feature
const SingleFeature: FC<SingleFeatureProps> = (props) => {
  // Inits
  const { singleFeature } = props;
  // JSX
  return (
    <div className="flex flex-col gap-2 ">
      <h4 className="text-black text-xl font-medium">{singleFeature.title}</h4>
      <p className="text-base text-gray500 ">{singleFeature.description}</p>
    </div>
  );
};

export default SingleFeature;
