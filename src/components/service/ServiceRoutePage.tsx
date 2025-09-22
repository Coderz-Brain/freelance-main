"use client";

import React from "react";
import { useTheme } from "@/components/context/ThemeContext";
import Image from "next/image";
import Brands from "@/components/Brands";
import Services from "@/components/Services"


const ServiceRoutePage = () => {


  const { darkMode } = useTheme();

  return (
    <div
      id="/services"
      className="max-w-[1280px] w-full mx-auto my-8 md:my-36 px-4 lg:px-0 md:py-16 rounded-[45px]"
    >
      <div className="flex flex-col md:flex-row gap-10 justify-center items-center">

        {/* Left side - Text content */}
        <div className="flex flex-col md:w-1/2 gap-5 text-left my-8">
          <span className="w-fit bg-[#cbfb45] px-3 py-1 text-xs md:px-4 md:py-1 md:text-sm text-gray-600 rounded-full">
            Our Services
          </span>
          <span className="text-3xl md:text-4xl lg:text-5xl ">
            We are a Website Development Agency
          </span>
          <p className="text-sm text-justify md:text-base lg:text-lg">
            At Nova, we're not just about creating content; we're about crafting
            a digital experience that resonates with your audience and drives
            tangible results. Our team of expert marketers employs cutting-edge
            strategies and creative prowess to enhance your online presence,
            engage your community, and convert followers into loyal customers.
          </p>

          <div className="flex flex-row gap-5 justify-center lg:justify-start items-center">
            <button
              className={`px-6 py-2 text-base font-medium text-white hover:text-[#cbfb45] bg-[#000] rounded-full transition duration-300 ${
                darkMode
                  ? "bg-[#000] rouded-full text-gray-400 border border-gray-600"
                  : "text-gray-600k"
              } `}
            >
              Get in touch
            </button>
            <button className="px-6 py-2 text-base font-medium text-gray-600 bg-white border border-gray-800 rounded-full hover:bg-[#000] hover:text-white transition duration-300">
              Book a call
            </button>
          </div>
        </div>

        {/* Right side - Image container */}
        <div className="flex flex-col md:w-1/2 justify-center items-center order-first md:order-last">
          <Image
            src="https://cb-assets.vercel.app/assets/freelance-main/home/Services-right.png"
            width={800}
            height={900}
            alt="Services-rightside"
            className="rounded-4xl mt-28 lg:my-0"
          />
        </div>
      </div>

      <Brands/>

      <Services/>

    </div>
  );
};

export default ServiceRoutePage;

