// components/SectionLayout.tsx
"use client";
import React from "react";

interface SectionLayoutProps {
  id?: string;
  children: React.ReactNode;
}

const SectionLayout = ({ id, children }: SectionLayoutProps) => {
  return (
    <div
      id={id}
      className=" mx-auto my-8 md:my-12 md:py-16 rounded-[45px]"
    >
      <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default SectionLayout;
