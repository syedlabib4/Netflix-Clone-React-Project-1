import React, { useState } from "react"; // ✅ Added useState to control dropdown
import Logo from "../../assets/netflixLogo.png";
import search_icon from "../../assets/search_icon.svg";
import profile_img from "./../../assets/profile_img.png";
import bell_icon from "../../assets/bell_icon.svg";
import cart from "../../assets/caret_icon.svg";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false); // ✅ State to toggle dropdown

  return (
   

   
    <nav className="  absolute top-0 left-0 w-full h-15 flex justify-between items-center px-8 bg-transparent z-50 ">
      <div>
        <img src={Logo} alt="NetflixLogo" className=" w-50 h-25 " />
      </div>

      <ul className="flex gap-5 font-semibold cursor-pointer">
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
        <li>Browse By Language</li>
      </ul>
      <div className="flex items-center gap-5">
        <div className="flex gap-4">
          <img src={search_icon} alt="search icon" />
          <img src={bell_icon} alt="bell icon" />
        </div>

   <div
  className="flex items-center gap-1 relative"
  onMouseEnter={() => setShowMenu(true)}
  onMouseLeave={() => setShowMenu(false)}
>
  {/* Profile */}
  <img src={profile_img} alt="profile_img" className="rounded-sm" />
  <img src={cart} alt="caret" className="w-4 h-4" />

  {/* Dropdown */}
  {showMenu && (
    <div className="absolute top-full mt-2 right-[-10px] bg-gray-900 text-white p-3 rounded shadow-lg min-w-[180px]">
      <p className="hover:underline cursor-pointer whitespace-nowrap">
        Sign Out Of Netflix
      </p>
    </div>
  )}
</div>

      </div>  

   </nav>
  );
};

export default Navbar;
