"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "./context/ThemeContext";

const OurTeam = () => {
  const { darkMode } = useTheme();

  return (
    <div id="ourTeam" className="mx-auto py-16 w-full">
      <div className="flex flex-col gap-5 text-left">
        <span className="w-fit bg-[#cbfb45] px-4 py-1 text-sm text-gray-600 rounded-full">
          Who you work with
        </span>
        <span className="text-3xl lg:text-5xl">Our team</span>
        <div className="flex flex-row justify-between items-center">
          <span className="text-base lg:text-lg max-w-3xl">
            Meet the TEAM behind our success
          </span>
          <Link
            href="/"
            className={`px-6 py-2 text-base font-medium text-white hover:text-[#cbfb45] bg-[#171717] rounded-full transition duration-300 ${
              darkMode ? " border border-gray-600" : ""
            }`}
          >
            All Team Members
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
