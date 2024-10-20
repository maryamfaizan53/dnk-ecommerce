"use client";
import React from "react";
import Image from "next/image";


const LimitedOffer = () => {
  return (
    <div className="relative w-full h-[500px] my-12">
          <Image
            src="/banner-03.jpg"
            alt="Limited Time Offer"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h3 className="text-3xl font-bold text-white">Limited Time Offer</h3>
            <h2 className="text-4xl font-extrabold text-white mt-2">Special Edition</h2>
            <p className="text-white max-w-md mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <h3 className="text-xl text-white mt-6">Buy This T-shirt At 20% Discount, Use Code OFF20</h3>
            <button className="bg-white text-black mt-4 px-6 py-2">SHOP NOW</button>
          </div>
        </div>

  )
}

export default LimitedOffer