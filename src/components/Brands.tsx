
"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import { useTheme } from "./context/ThemeContext";
import Image from "next/image";

const brandData = [
  {
    name: "Brand Name 1",
    logoSrc: "https://project-assets-phi.vercel.app/assets/dashboard/assignment.png",
    altText: "Logo for Brand 1",
  },
  {
    name: "Brand Name 2",
    logoSrc: "https://project-assets-phi.vercel.app/assets/dashboard/calendar.png",
    altText: "Logo for Brand 2",
  },
  {
    name: "Brand Name 3",
    logoSrc: "https://project-assets-phi.vercel.app/assets/dashboard/finance.png",
    altText: "Logo for Brand 3",
  },
  {
    name: "Brand Name 4",
    logoSrc: "https://project-assets-phi.vercel.app/assets/dashboard/home.png",
    altText: "Logo for Brand 4",
  },
  {
    name: "Brand Name 5",
    logoSrc: "https://project-assets-phi.vercel.app/assets/dashboard/lesson.png",
    altText: "Logo for Brand 5",
  },
  {
    name: "Brand Name 6",
    logoSrc: "https://project-assets-phi.vercel.app/assets/dashboard/mail.png",
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


        <div className="w-full sm:w-full md:w-[90%] lg:w-[90%] xl:w-[80%] mx-auto">
          <Marquee
            speed={70}
            gradient={true}
            gradientColor={darkMode ? "#111" : "#fff"}
          >
            <div className="flex items-center gap-12">
              {brandData.map((brand, index) => (
                <div
                  key={brand.name + index}
                  className="flex flex-row gap-x-7 justify-center items-center p-4 rounded-2xl"
                >
                  <Image
                    src={brand.logoSrc}
                    alt={brand.altText}
                    width={38}
                    height={38}
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