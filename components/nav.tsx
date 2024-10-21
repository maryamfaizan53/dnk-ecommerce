"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BsFillHandbagFill, BsPeopleFill } from "react-icons/bs";
import { PiNumberCircleZeroFill } from "react-icons/pi";
import { HiMenu, HiX } from "react-icons/hi";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-[#0274BF] bg-opacity-80 flex justify-between items-center px-4 h-20 z-10">
        <div className="flex items-center">
          <Image src="/logo.png" alt="logo" height={60} width={60} />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white hover:cursor-pointer">
          <li>Home</li>
          <li>Store</li>
          <li>Men</li>
          <li>Women</li>
          <li>Accessories</li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Desktop Right Menu */}
        <ul className="hidden md:flex space-x-6 text-white hover:cursor-pointer">
          <li>My account</li>
          <li>About</li>
          <li>Contact Us</li>
          <li className="flex items-center">
            <BsFillHandbagFill />
            <sup>
              <PiNumberCircleZeroFill />
            </sup>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0274BF] text-white flex flex-col space-y-4 p-4 fixed top-20 left-0 w-full z-10">
          <ul className="space-y-2">
            <li>Home</li>
            <li>Store</li>
            <li>Men</li>
            <li>Women</li>
            <li>Accessories</li>
          </ul>
          <ul className="space-y-2 mt-4 border-t border-white pt-4">
            <li>My account</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;

















// "use client";
// import React from "react";
// import Image from "next/image";
// import { BsFillHandbagFill } from "react-icons/bs";
// import { PiNumberCircleZeroFill } from "react-icons/pi";
// import { BsPeopleFill } from "react-icons/bs";

// const Nav = () => {
//   return (
//     <div className="bg-white flex flex-col bg-transparent z-0 relative">
//     {/* Navbar */}
//     <nav className="h-28 w-full bg-[#0274be] flex justify-between items-center px-4">
//       <Image src="/logo.png" alt="logo" height={60} width={60} />

//       <ul className="flex space-x-8 text-white hover:cursor-pointer">
//         <li>EVERYTHING</li>
//         <li>WOMEN</li>
//         <li>MEN</li>
//         <li>ACCESSORIES</li>
//       </ul>

//       <ul className="flex space-x-6 text-white hover:cursor-pointer">
//         <li>ABOUT</li>
//         <li>CONTACT US</li>
//         <li>$0.00</li>
//         <li className="flex items-center">
//           <BsFillHandbagFill />
//           <sup>
//             <PiNumberCircleZeroFill />
//           </sup>
//         </li>
//         <li><BsPeopleFill /></li>
//       </ul>
//     </nav></div>
//   )
// }

// export default Nav