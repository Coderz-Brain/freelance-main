"use client"

import React from 'react'
import { useTheme } from './context/ThemeContext'


const UnderDevelopment = () => {

  const { darkMode } = useTheme();

  return (
    <div className={`max-w-[1280px] mx-auto mt-24 py-16 ${darkMode ? "bg-[#111] text-white" : ""}`}>
      <div className='flex flex-col justify-center items-center text-2xl md:text-5xl font-medium gap-5'>
        <span> This secion is currently under development </span>
        <span> Please check back later!</span>
      </div>
    </div>
  )
}

export default UnderDevelopment
