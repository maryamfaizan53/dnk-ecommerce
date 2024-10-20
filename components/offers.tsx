"use client";
import React from "react";
import Image from "next/image";

const Offers = () => {
  return (
    <div className="flex flex-wrap justify-around py-12 bg-gray-100">
    {["Worldwide Shipping", "Best Quality", "Best Offers", "Secure Payments"].map((offer, i) => (
      <div key={i} className="w-full md:w-1/4 p-4 text-center">
        <Image
          src={`/e${i + 10}.png`}
          alt={offer}
          height={50}
          width={50}
        />
        <h2 className="text-xl font-bold mt-2">{offer}</h2>
        <h3 className="text-gray-600">Lorem ipsum dolor sit amet.</h3>
      </div>
    ))}
  </div>

  )
}

export default Offers