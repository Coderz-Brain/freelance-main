"use client"

import React from 'react';
import ProjectCard from './ProjectCard';
import { useTheme } from '../context/ThemeContext';

const projectsData = [
  {
    imageSrc: 'https://project-assets-phi.vercel.app/assets/nextjs-portfolio/deadlock.gif',
    imageAlt: 'GlowEssence Skincare products',
    title: 'GlowEssence Skincare',
    description: 'Illuminating the Digital Presence of GlowEssence Skincare',
    tags: [
      { name: 'Facebook', color: 'bg-blue-100 text-blue-800' },
      { name: 'TikTok', color: 'bg-red-100 text-red-800' },
    ],
  },
  {
    imageSrc: 'https://project-assets-phi.vercel.app/assets/nextjs-portfolio/School/Ich-rajwada.png',
    imageAlt: 'BrewZen Coffee bags',
    title: 'BrewZen Coffee Retailer',
    description:
      'BrewZen is a boutique coffee retailer known for its unique blends .',
    tags: [
      { name: 'Instagram', color: 'bg-pink-100 text-pink-800' },
      { name: 'TikTok', color: 'bg-red-100 text-red-800' },
    ],
  },
  {
    imageSrc: 'https://project-assets-phi.vercel.app/assets/nextjs-portfolio/asc-colg/main-gate.avif',
    imageAlt: 'BurgerHaven Restaurant burgers',
    title: 'BurgerHaven Restaurant',
    description:
      'Sizzling Digital Transformation for BurgerHaven Restaurant.',
    tags: [
      { name: 'PPC', color: 'bg-orange-100 text-orange-800' },
      { name: 'SEO', color: 'bg-indigo-100 text-indigo-800' },
    ],
  },
];

const SeeOurWork: React.FC = () => {

  const { darkMode } = useTheme();

  return (
    <section className={`max-w-[1280px] mx-auto py-16  ${darkMode ? "bg-[#111] text-white": "bg-white text-black"}`}>
      <div >

        <div className="flex flex-row justify-between mb-10">
          <div className='flex flex-col gap-2'>
            <span className="w-fit bg-[#cbfb45] text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
              Case studies
            </span>
            <span className="mt-3 lg:text-5xl text-2xl">
              See our work
            </span>
            <p className="mt-2 text-sm lg:text-lg">
              Welcome to the spotlight, where Nova&apos;s magic touches down, turning the ordinary into the extraordinary.
            </p>
          </div>
          <div className='flex items-start lg:items-end'>
            <button className={`w-fit sm:mt-0 px-4 lg:px-6 py-1 lg:py-2 rounded-full bg-black text-[12px] lg:text-base text-white font-medium hover:text-[#cbfb45] transition-colors whitespace-nowrap ${darkMode ? "border border-gray-600" : ""}`}>
              View all
            </button>
          </div>
        </div>

        <div className="flex items-center gap-6 h-[500px] overflow-x-scroll snap-x snap-mandatory md:grid md:grid-cols-3 hide-scrollbar ">
          {projectsData.map((project) => (
            <div key={project.title} className="snap-center">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeeOurWork;