import React, { useState } from "react"; // ✅ Added useState to control dropdown
import Logo from "../../assets/netflixLogo.png";
import search_icon from "../../assets/search_icon.svg";
import profile_img from "./../../assets/profile_img.png";
import bell_icon from "../../assets/bell_icon.svg";
import cart from "../../assets/caret_icon.svg";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false); // ✅ State to toggle dropdown

  return (
    <nav className="flex items-center justify-around cursor-pointer p-4 bg-black text-white relative">
      {/* Logo */}
      <div className="nav-logo">
        <img src={Logo} alt="Netflixlogo" className="w-35 h-20 navbar-logo" />
      </div>

      {/* Menu Links */}
      <ul className="flex gap-5">
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
        <li>Browse By Language</li>
      </ul>

      {/* Right Side Icons */}
      <div className="flex gap-8 items-center">
        <img src={search_icon} alt="search icon" />
        <img src={bell_icon} alt="bell icon" />

        {/* ✅ Profile + Dropdown container */}
        <div
          className="flex flex-col items-center relative" // ✅ relative is needed for absolute dropdown
          onMouseEnter={() => setShowMenu(true)} // ✅ Show dropdown on hover
          onMouseLeave={() => setShowMenu(false)} // ✅ Hide dropdown when mouse leaves
        >
          {/* Profile Clickable Area */}
          <div className="flex gap-3 items-center cursor-pointer">
            <img src={profile_img} alt="profile_img" className="w-8 h-8" />
            <img src={cart} alt="caret" className="w-4 h-4" />
          </div>

          {/* ✅ Netflix-style dropdown using absolute */}
          {showMenu && (
            <div className="absolute top-full mt-2 right-0 bg-gray-900 text-white p-3 rounded shadow-lg min-w-[150px]">
              {/* Dropdown item */}
              <p className="hover:underline cursor-pointer">Sign Out Of Netflix</p>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
