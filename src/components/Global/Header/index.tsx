import { Logo } from "@/utils/svg";
import Link from "next/link";
import ButtonSecondary from "../ButtonSecondary";

const Header = () => {
  return (
    <header className="flex items-center justify-between  bg-primary800 py-[18px] lg:px-10 xl:px-16 3xl:px-28">
      <div className="flex items-center gap-9 3xl:gap-10">
        <div className="logo flex items-center gap-4 3xl:gap-8">
          <div>
            <Logo />
          </div>
          <p className="text-white font-semibold text-xl 2xl:text-[22px]">
            Hourglass
          </p>
        </div>
        <nav>
          <ul className=" flex gap-5">
            <li className="text-base font-medium text-white">Home</li>
            <li>
              <select
                className="bg-primary800 text-white font-medium"
                defaultValue="Products"
              >
                <option value="Products">Products</option>
              </select>
            </li>
            <li>
              <select
                className="bg-primary800 text-white font-medium"
                defaultValue="Resources"
              >
                <option value="Resources">Resources</option>
              </select>
            </li>
            <li className="text-base font-medium text-white">Pricing</li>
          </ul>
        </nav>
      </div>
      <div className="flex gap-7 items-center">
        <Link href={"/"} className="text-white font-medium">
          Log in
        </Link>
        <ButtonSecondary title="Sign up" />
      </div>
    </header>
  );
};

export default Header;
