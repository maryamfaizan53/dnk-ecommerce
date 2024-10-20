
"use client";
import React from "react";
import Image from "next/image";
import { BsFillHandbagFill } from "react-icons/bs";
import { PiNumberCircleZeroFill } from "react-icons/pi";
import { BsPeopleFill } from "react-icons/bs";

const Nav = () => {
  return (
    <div className="bg-white flex flex-col bg-transparent z-0 relative">
    {/* Navbar */}
    <nav className="h-28 w-full bg-[#0274be] flex justify-between items-center px-4">
      <Image src="/logo.png" alt="logo" height={60} width={60} />

      <ul className="flex space-x-8 text-white hover:cursor-pointer">
        <li>EVERYTHING</li>
        <li>WOMEN</li>
        <li>MEN</li>
        <li>ACCESSORIES</li>
      </ul>

      <ul className="flex space-x-6 text-white hover:cursor-pointer">
        <li>ABOUT</li>
        <li>CONTACT US</li>
        <li>$0.00</li>
        <li className="flex items-center">
          <BsFillHandbagFill />
          <sup>
            <PiNumberCircleZeroFill />
          </sup>
        </li>
        <li><BsPeopleFill /></li>
      </ul>
    </nav></div>
  )
}

export default Nav