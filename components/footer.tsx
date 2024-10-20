"use client";
import React from "react";
import Image from "next/image";
import { FaFacebookF, FaYoutube, FaTwitter, FaGoogle } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { TiHome } from "react-icons/ti";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col md:flex-row justify-between items-start bg-gray-800 text-white p-8">
        <div className="w-full md:w-1/3">
          <Image
            src="/footerlogo.png"
            alt="footer logo"
            height={60}
            width={60}
          />
          <h1 className="mt-4">The best look anytime, anywhere.</h1>
        </div>
        <div className="w-full md:w-1/3 flex justify-around mt-8 md:mt-0">
          <div>
            <h1 className="text-xl font-semibold mb-4">FOR HER</h1>
            <ul>
              <li>Women Jeans</li>
              <li>Tops and Shirts</li>
              <li>Women Jackets</li>
              <li>Heels and Flats</li>
              <li>Women Accessories</li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl font-semibold mb-4">FOR HIM</h1>
            <ul>
              <li>Men Jeans</li>
              <li>Men Shirts</li>
              <li>Men Shoes</li>
              <li>Men Accessories</li>
              <li>Men Jackets</li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex flex-col items-start mt-8 md:mt-0">
          <h1 className="text-xl font-semibold mb-4">Subscribe</h1>
          <input
            type="text"
            placeholder="Your email address..."
            className="p-2 mb-4 w-full bg-gray-700"
          />
          <button className="bg-blue-800 text-white p-2 w-full">Subscribe</button>
        </div>
      </footer>

      <div className="flex justify-center items-center py-4 bg-black text-white">
        <h4>Copyright © 2024 Brandstore. Powered by Brandstore.</h4>
        <div className="flex space-x-4 ml-4">
          <FaFacebookF />
          <FaYoutube />
          <FaTwitter />
          <AiOutlineInstagram />
          <FaGoogle />
          <TiHome />
        </div>
      </div>
    </>
  );
};

export default Footer;
