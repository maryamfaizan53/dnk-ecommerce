"use client";
import React from "react";
import Image from "next/image";


const Clientlogos = () => {
  return (
    <div className="bg-white h-40 w-full flex justify-around items-center py-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <Image
              key={i}
              src={`/client-logo-${i}.png`}
              alt={`company logo ${i}`}
              height={50}
              width={50}
            />
          ))}
        </div>
  )
}

export default Clientlogos