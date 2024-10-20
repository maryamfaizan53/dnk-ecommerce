"use client";
import React from "react";
import Image from "next/image";


const FeaturedProducts = () => {
  return (
    <div className="bg-slate-100 py-12">
          <h1 className="text-center text-3xl font-bold mb-8">Featured Products</h1>
          <div className="flex flex-wrap justify-around">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <div key={i} className="w-full md:w-1/3 lg:w-1/4 p-4 bg-white m-2 shadow-md">
                <Image
                  src={`/p${i}.jpg`}
                  alt={`product picture ${i}`}
                  height={600}
                  width={600}
                  className="object-cover"
                />
                <h2 className="text-xl font-semibold mt-2">Product {i} Name</h2>
                <h5 className="text-gray-600">Category</h5>
                <h3 className="text-lg font-bold">$150.00</h3>
                <p className="text-sm">Description of the product goes here.</p>
              </div>
            ))}
          </div>
        </div>

  )
}

export default FeaturedProducts