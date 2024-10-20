import Image from 'next/image';

const Banner = () => {
  return (
    <div className="absolute flex items-center justify-start h-screen w-full text-white z-100">
      {/* Gradient Overlay */}
      <div className="absolute inset-0  bg-gradient-to-r from-blue/10 to-transpernt z-10"></div>
      
      {/* Text Container */}
      <div className="absolute left-12 z-20">
        <h1 className="text-4xl font-bold mb-4">Raining Offers For Hot Summer!</h1>
        <p className="text-xl mb-6">25% Off On All Products</p>
        <div className="flex space-x-4">
          <button className="bg-transparent border-2 border-white px-6 py-2 hover:bg-white hover:text-black transition-all">
            SHOP NOW
          </button>
          <button className="bg-transparent border-2 border-white px-6 py-2 hover:bg-white hover:text-black transition-all">
            FIND MORE
          </button>
        </div>
      </div>
      
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image 
          src="/hero.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
    </div>
  );
}

export default Banner;
