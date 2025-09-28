"use client";
import React from "react";
import { useTheme } from "./context/ThemeContext";
import SectionLayout from "./layout/SectionLayout";
import TitleBlock from "./ui/TitleBlock";
import HeroImage from "./ui/HeroImage";

interface MainProps {
  heading: string;
  subheading?: string;
  description?: React.ReactNode;
  imageSrc?: string;
  styleType?: "split" | "hero";
}

const Main = ({
  heading,
  subheading,
  description,
  imageSrc,
  styleType = "split",
}: MainProps) => {
  const { darkMode } = useTheme();

  return styleType === "split" ? (
    <SectionLayout>
      <div className="w-full flex flex-col md:w-1/2 gap-5 text-left my-8">
        <TitleBlock styleType="split" heading={heading} subheading={subheading}>
          {description}
        </TitleBlock>
      </div>
      <div className="flex flex-col md:w-1/2 justify-center items-center ">
        <HeroImage variant="split" src={imageSrc} />
      </div>
    </SectionLayout>
  ) : (
    <section
      className={`w-full ${darkMode ? "bg-[#111] text-white" : "bg-white text-black "}`}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mt-40">
          <TitleBlock styleType="hero" heading={heading} subheading={subheading}>
            {description}
          </TitleBlock>
        </div>
        <div className="w-full mx-auto relative overflow-hidden rounded-4xl">
          <HeroImage variant="hero" src={imageSrc} />
        </div>
      </div>
    </section>
  );
};

export default Main;
