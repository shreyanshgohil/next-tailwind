import { Logo } from "@/utils/svg";

// Footer of website
const Footer = () => {
  return (
    <footer className="bg-gray800 flex  md:items-center md:justify-between flex-col md:flex-row px-4 lg:px-10 xl:px-28 py-6 xl:py-12">
      <div className="logo flex items-center gap-4 3xl:gap-8">
        <div className="mb-6 md:mb-0">
          <Logo />
        </div>
        <p className="text-white font-semibold text-[22px] ">Hourglass</p>
      </div>
      <p className="text-gray400">© 2077 Fake Company. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
