'use client'
// "use client";
// import React from "react";
// import Image from "next/image";
// import { BsFillHandbagFill } from "react-icons/bs";
// import { PiNumberCircleZeroFill } from "react-icons/pi";
// import { BsPeopleFill } from "react-icons/bs";
// import { FaFacebookF, FaYoutube, FaTwitter, FaGoogle } from "react-icons/fa";
// import { AiOutlineInstagram } from "react-icons/ai";
// import { TiHome } from "react-icons/ti";

// const Home = () => {
//   return (
//     <>
//       <div className="bg-white h-screen w-screen flex flex-col">
//         {/* Navbar */}
//         <nav className="h-28 w-full bg-[#0084d6] flex justify-between items-center px-4">
//           <Image src="/logo.png" alt="logo" height={60} width={60} />

//           <ul className="flex space-x-8 text-white hover:cursor-pointer">
//             <li>EVERYTHING</li>
//             <li>WOMEN</li>
//             <li>MEN</li>
//             <li>ACCESSORIES</li>
//           </ul>

//           <ul className="flex space-x-6 text-white hover:cursor-pointer">
//             <li>ABOUT</li>
//             <li>CONTACT US</li>
//             <li>$0.00</li>
//             <li className="flex items-center">
//               <BsFillHandbagFill />
//               <sup>
//                 <PiNumberCircleZeroFill />
//               </sup>
//             </li>
//             <li><BsPeopleFill /></li>
//           </ul>
//         </nav>

//         {/* Hero Section */}
//         <div className="relative w-full h-[500px]">
//           <Image
//             src="/hero.png"
//             alt="background pic"
//             fill
//             className="object-cover opacity-30"
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900 opacity-75"></div>
//         </div>

//         {/* Client Logos */}
//         <div className="bg-white h-40 w-full flex justify-around items-center py-4">
//           {[1, 2, 3, 4, 5].map((i) => (
//             <Image
//               key={i}
//               src={`/client-logo-${i}.png`}
//               alt={`company logo ${i}`}
//               height={50}
//               width={50}
//             />
//           ))}
//         </div>

//         {/* Product Section */}
//         <div className="flex flex-wrap justify-around py-8">
//           {[1, 2, 3].map((i) => (
//             <div key={i} className="w-full md:w-1/3 p-4">
//               <Image
//                 src={`/product${i}.png`}
//                 alt={`product picture ${i}`}
//                 height={600}
//                 width={600}
//                 className="object-cover opacity-30"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Featured Products */}
//         <div className="bg-slate-100 py-12">
//           <h1 className="text-center text-3xl font-bold mb-8">Featured Products</h1>
//           <div className="flex flex-wrap justify-around">
//             {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
//               <div key={i} className="w-full md:w-1/3 lg:w-1/4 p-4 bg-white m-2 shadow-md">
//                 <Image
//                   src={`/p${i}.jpg`}
//                   alt={`product picture ${i}`}
//                   height={600}
//                   width={600}
//                   className="object-cover"
//                 />
//                 <h2 className="text-xl font-semibold mt-2">Product {i} Name</h2>
//                 <h5 className="text-gray-600">Category</h5>
//                 <h3 className="text-lg font-bold">$150.00</h3>
//                 <p className="text-sm">Description of the product goes here.</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Limited Offer */}
//         <div className="relative w-full h-[500px] my-12">
//           <Image
//             src="/banner-03.jpg"
//             alt="Limited Time Offer"
//             fill
//             className="object-cover opacity-30"
//           />
//           <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
//             <h3 className="text-3xl font-bold text-white">Limited Time Offer</h3>
//             <h2 className="text-4xl font-extrabold text-white mt-2">Special Edition</h2>
//             <p className="text-white max-w-md mt-4">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
//               tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
//             </p>
//             <h3 className="text-xl text-white mt-6">Buy This T-shirt At 20% Discount, Use Code OFF20</h3>
//             <button className="bg-white text-black mt-4 px-6 py-2">SHOP NOW</button>
//           </div>
//         </div>

//         {/* Offers Section */}
//         <div className="flex flex-wrap justify-around py-12 bg-gray-100">
//           {["Worldwide Shipping", "Best Quality", "Best Offers", "Secure Payments"].map((offer, i) => (
//             <div key={i} className="w-full md:w-1/4 p-4 text-center">
//               <Image
//                 src={`/e${i + 10}.png`}
//                 alt={offer}
//                 height={50}
//                 width={50}
//               />
//               <h2 className="text-xl font-bold mt-2">{offer}</h2>
//               <h3 className="text-gray-600">Lorem ipsum dolor sit amet.</h3>
//             </div>
//           ))}
//         </div>

//         {/* Sale Announcement */}
//         <div className="text-center py-12 bg-blue-800 text-white">
//           <h1 className="text-3xl font-bold">
//             SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.
//           </h1>
//         </div>

//         {/* Footer */}
//         <footer className="flex flex-col md:flex-row justify-between items-start bg-gray-800 text-white p-8">
//           <div className="w-full md:w-1/3">
//             <Image
//               src="/footerlogo.png"
//               alt="footer logo"
//               height={60}
//               width={60}
//             />
//             <h1 className="mt-4">The best look anytime, anywhere.</h1>
//           </div>
//           <div className="w-full md:w-1/3 flex justify-around mt-8 md:mt-0">
//             <div>
//               <h1 className="text-xl font-semibold mb-4">FOR HER</h1>
//               <ul>
//                 <li>Women Jeans</li>
//                 <li>Tops and Shirts</li>
//                 <li>Women Jackets</li>
//                 <li>Heels and Flats</li>
//                 <li>Women Accessories</li>
//               </ul>
//             </div>
//             <div>
//               <h1 className="text-xl font-semibold mb-4">FOR HIM</h1>
//               <ul>
//                 <li>Men Jeans</li>
//                 <li>Men Shirts</li>
//                 <li>Men Shoes</li>
//                 <li>Men Accessories</li>
//                 <li>Men Jackets</li>
//               </ul>
//             </div>
//           </div>
//           <div className="w-full md:w-1/3 flex flex-col items-start mt-8 md:mt-0">
//             <h1 className="text-xl font-semibold mb-4">Subscribe</h1>
//             <input
//               type="text"
//               placeholder="Your email address..."
//               className="p-2 mb-4 w-full bg-gray-700"
//             />
//             <button className="bg-blue-800 text-white p-2 w-full">Subscribe</button>
//           </div>
//         </footer>

//         <div className="flex justify-center items-center py-4 bg-black text-white">
//           <h4>Copyright © 2024 Brandstore. Powered by Brandstore.</h4>
//           <div className="flex space-x-4 ml-4">
//             <FaFacebookF />
//             <FaYoutube />
//             <FaTwitter />
//             <AiOutlineInstagram />
//             <FaGoogle />
//             <TiHome />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;
import React from 'react'
import Nav from '@/components/nav'
import Hero from '@/components/hero'
import Clientlogos from '@/components/clientlogos'
import Products from '@/components/products'
import FeaturedProducts from '@/components/featuredProducts'
import LimitedOffers from '@/components/limitedOffer'
import Offers from '@/components/offers'
import SaleAnnouncement from '@/components/saleAnnouncement'
import Footer from '@/components/footer'

const Home = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
       <Clientlogos/>
      <Products/>
      <FeaturedProducts/>
      <LimitedOffers/>
      <Offers/>
      <SaleAnnouncement/>
      <Footer/> 


    </div>
  )
}

export default Home
