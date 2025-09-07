
'use client'

import React from 'react'
import { useTheme } from './context/ThemeContext'

const Brands = () => {

  const { darkMode } = useTheme();

  return (
    <div className={`max-w-[1154px] mx-auto py-6 px-2 ${darkMode ? "bg-[#111] text-white" : "bg-white text-black"} `}>
      <div className='flex flex-col justify-center items-center gap-4'>
        <h1 className={`text-lg ${darkMode ? "text-white" : " text-black"}`}> Brands we work with </h1>

        <div className='flex flex-row gap-5'>

          <div className='w-48 flex flex-row gap-2 justify-center items-center p-4 border rounded-2xl'>
            <span> Image </span>
            <span> Brand Name </span>
          </div>

          <div className='w-48 flex flex-row gap-2 justify-center items-center p-4 border rounded-2xl'>
            <span> Image </span>
            <span> Brand Name </span>
          </div>

          <div className='w-48 flex flex-row gap-2 justify-center items-center  p-4 border rounded-2xl'>
            <span> Image </span>
            <span> Brand Name </span>
          </div>

          <div className='w-48 flex flex-row gap-2 justify-center items-center p-4 border rounded-2xl'>
            <span> Image </span>
            <span> Brand Name </span>
          </div>

          <div className='w-48 flex flex-row gap-2 justify-center items-center p-4 border rounded-2xl'>
            <span> Image </span>
            <span> Brand Name </span>
          </div>

          <div className='w-48 flex flex-row gap-2 justify-center items-center p-4 border rounded-2xl'>
            <span> Image </span>
            <span> Brand Name </span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Brands
