"use client";
import React from "react";
import Image from "next/image";


const Products = () => {
  return (
    <div className="flex flex-wrap justify-around py-8 m-10 opacity-70">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-full md:w-1/3 p-4">
              <Image
                src={`/product${i}.jpg`}
                alt={``}
                height={600}
                width={600}
                className="object-cover opacity-30"
              />
            </div>
          ))}
        </div>
  )
}

export default Products