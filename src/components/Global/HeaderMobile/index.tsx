import { Hamburgermenu, Logo } from "@/utils/svg";
import React, { FC } from "react";
import MobileMenuItem from "../MobileMenuItem";
import { HeaderMobileProps } from "./types";
import Link from "next/link";

//  Mobile header
const HeaderMobile: FC<HeaderMobileProps> = (props) => {
  // Inits
  const { toggleMenu, toggleMenuHandler } = props;

  //   For open the menu
  const openMenuHandler = () => {
    toggleMenuHandler();
  };

  // JSX
  return (
    <header className="flex items-center justify-between  bg-primary800 px-4 py-3.5">
      <div>
        <Link href={"/"} className="logo flex items-center gap-4 3xl:gap-8">
          <Logo />
          <p className="text-white font-semibold text-xl 2xl:text-[22px]">
            Hourglass
          </p>
        </Link>
      </div>
      <div onClick={openMenuHandler}>
        <Hamburgermenu />
      </div>
      <div
        className={`fixed w-screen h-screen top-0 left-0 z-20 bg-primary600  transition-all duration-500 ${
          toggleMenu ? "translate-x-0" : "translate-x-full"
        } `}
      >
        <MobileMenuItem toggleMenuHandler={toggleMenuHandler} />
      </div>
    </header>
  );
};

export default HeaderMobile;
