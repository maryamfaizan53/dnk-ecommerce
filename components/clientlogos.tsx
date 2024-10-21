"use client";
import React from "react";
import Image from "next/image";

const Clientlogos = () => {
  return (
    <div className="bg-white w-full h-40 flex flex-wrap justify-around items-center py-4 mt-8">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="p-2 w-1/2 sm:w-1/4 md:w-1/5 flex justify-center">
          <Image
            src={`/client-logo-${i}.png`}
            alt={`Company logo ${i}`}
            height={50}
            width={50}
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default Clientlogos;












// "use client";
// import React from "react";
// import Image from "next/image";


// const Clientlogos = () => {
//   return (
//     <div className="bg-white w-full h-40 flex justify-around items-center py-4 sm:py-0">
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
//   )
// }

// export default Clientlogos