import { FC } from "react";
import { ButtonSecondaryProps } from "./types";

// For secondary button of website
const ButtonSecondary: FC<ButtonSecondaryProps> = (props) => {
  // Inits
  const { title } = props;
  // JSX
  return (
    <div>
      <button className="px-[18px] py-2.5 text-white font-medium bg-primary600 rounded-lg">
        {title}
      </button>
    </div>
  );
};

export default ButtonSecondary;
