import { Logo } from "@/utils/svg";

const Header = () => {
  return (
    <header className="flex bg-primary800 py-[18px] 2xl:px-28">
      <div>
        <div className="logo flex items-center gap-4">
          <div>
            <Logo />
          </div>
          <p className="text-white font-semibold text-xl 2xl:text-[22px]">
            Hourglass
          </p>
        </div>
        <nav></nav>
      </div>
      <div></div>
    </header>
  );
};

export default Header;
