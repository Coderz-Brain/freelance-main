"use client"

import React from 'react'
import Image from 'next/image'
import { useTheme } from './context/ThemeContext'

const Main = () => {

  const { darkMode } = useTheme();

  return (
    <section className={`py-16 md:py-24 ${darkMode? "bg-[#111] text-white" : "bg-white text-black"}`}>
      <div className="container mx-auto lg:mt-18 px-4 sm:px-6 lg:px-8 ">
        <div className="flex flex-col items-center text-center">
          <p className="px-4 py-1 mb-6 text-sm text-gray-600 bg-[#cbfb45] rounded-full">
            Welcome to &lt;Coder&apos;s Brain/&gt;
          </p>


          <h1 className={`text-2xl md:text-3xl lg:text-6xl leading-tight mb-6 max-w-4xl ${darkMode? " text-gray-100" : "bg-white text-black"}`}>
            Building Digital Solutions That Drive Your Business Forward
          </h1>


          <p className={`text-base lg:text-lg  mb-8 max-w-3xl ${darkMode? " text-gray-400" : "text-gray-600k"}`}>
            As a dedicated development team, we don&apos;t just write code—we solve problems. Whether you need a stunning website, a robust web application, or a complete digital transformation, we bring technical expertise and creative thinking to every project.
          </p>


          <div className="flex flex-row gap-5 mb-16">
            <button className={`px-6 py-2 text-base font-medium text-white hover:text-[#cbfb45] bg-[#000] rounded-full hover:bg-gray-800 transition duration-300 ${darkMode? "bg-[#000] border rouded-full text-gray-400" : "text-gray-600k"} `}>
              Get in touch
            </button>
            <button className="px-6 py-2 text-base font-medium text-gray-600 bg-white border border-gray-800 rounded-full hover:bg-[#000] hover:text-white transition duration-300">
              Book a call
            </button>
          </div>
        </div>


        <div className="relative w-full lg:w-7xl h-[600px] mx-auto overflow-hidden rounded-3xl ">
          <Image
            src="https://cb-assets.vercel.app/assets/freelance-main/home/office-space.webp"
            width={1024}
            height={1024}
            alt="An office space with people working"
            className="w-full h-full object-cover rounded-4xl border"
          />
        </div>
      </div>
    </section>
  )
}

export default Main
