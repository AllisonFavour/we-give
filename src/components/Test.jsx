import { useState } from "react";
import ArrowDownIcon from "../assets/icons/arrow-down.png";
import SearchIcon from "../assets/icons/search.png";
import HamburgerMenu from "../assets/icons/pajamas_hamburger.png";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white top-0 shadow-lg z-50 px-4 py-6 md:px-12 md:py-10">
      <div className="max-w-screen-xl mx-auto w-full">
        {/* DESKTOP/TABLET GRID LAYOUT */}
        <div className="hidden md:grid w-full grid-cols-[auto_1fr_auto] items-center gap-4">
          {/* LEFT: Logo */}
          <div className="flex-shrink-0">
            <span className="font-bold text-xl">WeGive</span>
          </div>

          {/* CENTER: Nav Links */}
          <ul className="flex justify-center items-center space-x-4 md:space-x-6 lg:space-x-8 overflow-hidden">
            <li><a href="#" className="text-lg">Home</a></li>
            <li><a href="#" className="text-lg">About Us</a></li>
            <li className="flex items-center space-x-2 cursor-pointer">
              <a href="#" className="text-lg">Campaigns</a>
              <img src={ArrowDownIcon} alt="Arrow Down" className="w-4 h-4" />
            </li>
            <li><a href="#" className="text-lg">Contact Us</a></li>
            <li><a href="#" className="text-lg">Blog</a></li>
            <li>
              <a href="#"><img src={SearchIcon} alt="Search Icon" className="w-6 h-6" /></a>
            </li>
          </ul>

          {/* RIGHT: Volunteer Button */}
          <div className="flex-shrink-0">
            <a
              href="#"
              className="bg-white text-black px-4 py-3 border border-black rounded-sm whitespace-nowrap"
            >
              Become a volunteer
            </a>
          </div>
        </div>

        {/* MOBILE HEADER (Hamburger + Search) */}
        <div className="flex md:hidden justify-between items-center w-full">
          <span className="font-bold text-xl">WeGive</span>

          <ul className="flex items-center space-x-4">
            <li>
              <a href="#" onClick={() => setMenuOpen(!menuOpen)}>
                <img src={SearchIcon} alt="Search" className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setMenuOpen(!menuOpen)}>
                <img src={HamburgerMenu} alt="Hamburger Menu" className="w-6 h-6" />
              </a>
            </li>
          </ul>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <ul className="flex flex-col space-y-4 px-4 pb-4">
              <li><a href="#" className="block text-sm">Home</a></li>
              <li><a href="#" className="block text-sm">About</a></li>
              <li className="flex items-center space-x-1">
                <a href="#" className="block text-sm">Campaigns</a>
                <img src={ArrowDownIcon} alt="Arrow Down" className="w-4 h-4" />
              </li>
              <li><a href="#" className="block text-sm">Contact</a></li>
              <li><a href="#" className="block text-sm">Blog</a></li>
              <li><a href="#"><img src={SearchIcon} alt="Search Icon" className="w-6 h-6" /></a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
