import { FC } from "react";
import { ButtonPrimaryProps } from "./types";

// For primary button of website
const ButtonPrimary: FC<ButtonPrimaryProps> = (props) => {
  // Inits
  const { title, svg } = props;

  // JSX
  return (
    <div className="w-full md:w-auto">
      <button className="px-[18px] w-full md:w-auto   py-2.5 text-color_344054 font-medium bg-white rounded-lg flex items-center justify-center gap-3">
        {svg}
        <p>{title}</p>
      </button>
    </div>
  );
};

export default ButtonPrimary;
