"use client";
import { Button } from "@/components/ui/button";
import { Roboto } from "next/font/google";
import Image from "next/image";

const roboto = Roboto({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const Feature = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <Image src="/football.jpg" alt="banner" fill objectFit="cover" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1
          className={`${roboto.className} text-2xl lg:text-6xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent font-extrabold`}
        >
          Gear Up for Your <br /> Next Game
        </h1>

        <Button
          className="min-w-[100px] px-2 lg:px-3 py-2 text-sm tracking-wide text-white text-center capitalize rounded-md
             bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500
             transition-all duration-300 transform hover:scale-105 hover:text-yellow-100 focus:outline-none focus:ring-4 focus:ring-purple-300 cursor-pointer mt-4"
        >
          Explore More
        </Button>
      </div>
    </div>
  );
};

export default Feature;
