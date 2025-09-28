"use client";
import React from "react";
import { useTheme } from "../context/ThemeContext";
import Footer from "../Footer";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const { darkMode } = useTheme();

  return (
    <main
      className={`min-h-screen w-full ${
        darkMode ? "bg-[#111] text-white" : "bg-white text-black"
      }`}
    >
      <div className="sm:px-6 mx-auto lg:px-28 py-8 lg:py-16 px-4">
        {children}
        <Footer />
      </div>
    </main>
  );
};

export default PageLayout;
