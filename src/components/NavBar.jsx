import { useState } from "react";
import ArrowDownIcon from "../assets/icons/arrow-down.png";
import SearchIcon from "../assets/icons/search.png";
import HamburgerMenu from "../assets/icons/pajamas_hamburger.png";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white top-0 shadow-lg z-50 px-4 py-6 md:px-6 md:py-10 lg:px-12">
      <div className="flex items-center justify-between">
        {/* LOGO */}
        <span className="flex-shrink-0 font-bold text-2xl">WeGive</span>

        {/* TABLET AND DESKTOP MENU */}
        {/* <div className="hidden md:flex justify-between items-center text-black"> */}
        <ul className="hidden md:flex items-center justify-between md:space-x-3 lg:space-x-6">
          <li>
            <a href="/" className="text-sm">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-sm">
              About Us
            </a>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer">
            <a href="#" className="text-sm">
              Campaigns
            </a>
            <img
              src={ArrowDownIcon}
              alt="Arrow Down"
              className="inline-block text-black"
            />
          </li>
          <li>
            <a href="#" className="text-sm">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#" className="text-sm">
              Blog
            </a>
          </li>
          <li>
            <a href="#">
              <img src={SearchIcon} alt="Search Icon" className="" />
            </a>
          </li>
        </ul>

        {/* VOLUNTEER BUTTON (DESKTOP ONLY) */}
        <div className="flex-shrink-0 hidden md:block">
          <a
            href="#"
            className="bg-white text-sm text-black px-4 py-3 border-black border-1 rounded-sm"
          >
            Become a volunteer
          </a>
        </div>
        {/* </div> */}

        {/* MOBILE HAMBURGER MENU (MOBILE ONLY) */}
        <ul className="flex items-center space-x-4 md:hidden">
          <li>
            <a href="#" onClick={() => setMenuOpen(!menuOpen)}>
              <img
                src={SearchIcon}
                alt="Search"
                className="inline-block w-6 h-6"
              />
            </a>
          </li>

          <li className="ml-6">
            <a href="#" onClick={() => setMenuOpen(!menuOpen)}>
              <img
                src={HamburgerMenu}
                alt="Hamburger Menu"
                className="inline-block w-6 h-6"
              />
            </a>
          </li>
        </ul>
      </div>

      {/* MOBILE MENU (DROPDOWN) */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col justify-center items-center space-y-6 px-4 pb-4 mt-2 text-center">
            <li>
              <a href="#" className="block text-lg">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block text-lg">
                About Us
              </a>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer">
              <a href="#" className="text-lg">
                Campaigns
              </a>
              <img
                src={ArrowDownIcon}
                alt="Arrow Down"
                className="text-black"
              />
            </li>
            <li>
              <a href="#" className="block text-lg">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="block text-lg">
                Blog
              </a>
            </li>
            <li >
              <a href="#" >
                <img src={SearchIcon} alt="Search Icon" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
