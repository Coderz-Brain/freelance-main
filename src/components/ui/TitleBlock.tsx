"use client";
import React from "react";
import { useTheme } from "../context/ThemeContext";

interface TitleBlockProps {
  styleType?: "split" | "hero";
  heading: string;
  subheading?: string;
  children?: React.ReactNode;
}

const TitleBlock = ({ styleType = "split", heading, subheading, children }: TitleBlockProps) => {
  const { darkMode } = useTheme();

  const containerClasses =
    styleType === "split"
      ? "flex flex-col gap-5 text-left"
      : "flex flex-col items-center text-center gap-5";

  const buttonContainerClasses =
    styleType === "split"
      ? "flex flex-row gap-5 justify-center lg:justify-start items-center"
      : "flex flex-row gap-5 mb-16 justify-center";

  return (
    <div className={containerClasses}>
      {subheading && (
        <span className="px-3 w-fit h-fit py-1 md:px-4 md:py-1 text-xs md:text-sm rounded-full bg-[#cbfb45] text-gray-600">
          {subheading}
        </span>
      )}

      <h1
        className={`text-2xl md:text-3xl lg:text-6xl leading-tight ${
          darkMode ? "text-gray-100" : "text-black"
        }`}
      >
        {heading}
      </h1>

      {children}

      <div className={buttonContainerClasses}>
        <button
          className={`px-6 py-2 text-base font-medium text-white hover:text-[#cbfb45] bg-[#000] rounded-full transition duration-300 ${
            darkMode ? "bg-[#000] border rounded-full text-gray-400" : "text-gray-600k"
          }`}
        >
          Get in touch
        </button>

        <button className="px-6 py-2 text-base font-medium text-gray-600 bg-white border border-gray-800 rounded-full hover:bg-[#000] hover:text-[#cbfb45] transition duration-300">
          Book a call
        </button>
      </div>
    </div>
  );
};

export default TitleBlock;
