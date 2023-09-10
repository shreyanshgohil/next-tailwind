import { FC } from "react";
import { ButtonPrimaryProps } from "./types";

// For primary button of website
const ButtonPrimary: FC<ButtonPrimaryProps> = (props) => {
  // Inits
  const { title, svg } = props;

  // JSX
  return (
    <div>
      <button className="px-[18px] py-2.5 text-color_344054 font-medium bg-white rounded-lg flex items-center gap-3">
        {svg}
        <p>{title}</p>
      </button>
    </div>
  );
};

export default ButtonPrimary;
