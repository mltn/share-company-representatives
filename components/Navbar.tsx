import Logo from "./Logo";
import LangLink from "./LangLink";

const Navbar = () => (
  <nav className="text-white bg-[#1b1a18] leading-[90px]">
    <div className="flex justify-between pr-[20px] md:pr-[30px]">
      <Logo />
      <div className="lang-links">
        <LangLink lang="sr" />
        <LangLink lang="en" />
      </div>
    </div>
  </nav>
);

export default Navbar;
