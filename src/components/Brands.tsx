
"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import { useTheme } from "./context/ThemeContext";
import Image from "next/image";

const brandData = [
  {
    name: "Brand Name 1",
    logoSrc: "/path/to/logo1.png",
    altText: "Logo for Brand 1",
  },
  {
    name: "Brand Name 2",
    logoSrc: "/path/to/logo2.png",
    altText: "Logo for Brand 2",
  },
  {
    name: "Brand Name 3",
    logoSrc: "/path/to/logo3.png",
    altText: "Logo for Brand 3",
  },
  {
    name: "Brand Name 4",
    logoSrc: "/path/to/logo4.png",
    altText: "Logo for Brand 4",
  },
  {
    name: "Brand Name 5",
    logoSrc: "/path/to/logo5.png",
    altText: "Logo for Brand 5",
  },
  {
    name: "Brand Name 6",
    logoSrc: "/path/to/logo6.png",
    altText: "Logo for Brand 6",
  },
];

const Brands = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`py-6 px-2 mt-16 ${
        darkMode ? "bg-[#111] text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex flex-col justify-center items-center gap-10">
        <h1 className={`text-lg ${darkMode ? "text-white" : "text-black"}`}>
          Brands we work with
        </h1>


        <div className="w-full sm:w-full md:w-[90%] lg:w-[80%] xl:w-[80%] mx-auto">
          <Marquee
            pauseOnHover={true}
            speed={50}
            gradient={true}
            gradientColor={darkMode ? "#111" : "#fff"}
          >
            <div className="flex items-center gap-12">
              {brandData.map((brand, index) => (
                <div
                  key={brand.name + index}
                  className="flex flex-row gap-x-7 justify-center items-center p-4 border rounded-2xl"
                >
                  <Image
                    src={brand.logoSrc}
                    alt={brand.altText}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <span> {brand.name} </span>
                </div>
              ))}
              <div className="ml-3" />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Brands;