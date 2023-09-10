import { useState } from "react";
import HeaderDesktop from "../HeaderDesktop";
import HeaderMobile from "../HeaderMobile";

// Main header component
const Header = () => {
  // Inits
  const [toggleMenu, setToggleMenu] = useState(false);

  // Toggle menu item headler

  const toggleMenuHandler = () => {
    setToggleMenu(!toggleMenu);
  };
  // JSX
  return (
    <div>
      <div className="md:hidden">
        <HeaderMobile
          toggleMenu={toggleMenu}
          toggleMenuHandler={toggleMenuHandler}
        />
      </div>
      <div className="hidden md:block">
        <HeaderDesktop />
      </div>
    </div>
  );
};

export default Header;
