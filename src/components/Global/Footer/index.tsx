import Logo from "@/utils/svg";

// Footer of website
const Footer = () => {
  return (
    <footer className="bg-gray800 flex items-center justify-between px-28 py-12">
      <div className="logo flex items-center gap-4 3xl:gap-8">
        <Logo />
        <p className="text-white font-semibold text-xl 2xl:text-[22px]">
          Hourglass
        </p>
      </div>
      <p className="text-gray400">© 2077 Fake Company. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
