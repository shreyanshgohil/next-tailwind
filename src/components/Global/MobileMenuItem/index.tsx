import Link from "next/link";
import React, { FC } from "react";
import ButtonSecondary from "../ButtonSecondary";
import { CloseSvg } from "@/utils/svg";
import { MobileMenuItemProps } from "./types";

// List of menu items for mobile mnu
const MobileMenuItem: FC<MobileMenuItemProps> = (props) => {
  // Inits
  const { toggleMenuHandler } = props;

  //   Fot close mobile menu
  const closeMenuHandler = () => {
    toggleMenuHandler();
  };
  // JSX
  return (
    <div>
      <div className="absolute top-2.5 right-2.5" onClick={closeMenuHandler}>
        <CloseSvg />
      </div>
      <nav>
        <ul className=" flex h-screen  flex-col items-center justify-center  gap-10 ">
          <li className="text-base font-medium text-white">
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <select
              className="bg-primary600 text-white font-medium outline-none"
              defaultValue="Products"
            >
              <option value="Products">Products</option>
            </select>
          </li>
          <li>
            <select
              className="bg-primary600 text-white font-medium outline-none"
              defaultValue="Resources"
            >
              <option value="Resources">Resources</option>
            </select>
          </li>
          <li className="text-base font-medium text-white">
            <Link href={"/"}> Pricing </Link>
          </li>
          <li>
            <Link href={"/"} className="text-white font-medium">
              Log in
            </Link>
          </li>
          <li>
            <ButtonSecondary title="Sign up" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenuItem;
