import React from 'react'
import Link from 'next/link'
import { useTheme } from '@/components/context/ThemeContext'
import { LuArrowUpRight } from 'react-icons/lu'

const GetInTouch = () => {

  const { darkMode } = useTheme()

  return (
    <div className='group'>
      <Link href="/" className={`sm:block hidden px-4 py-2 rounded-full bg-black text-white hover:text-[#cbfb45] transition-colors duration-300 ${darkMode ? " border border-gray-600" : ""}`}>
        <div className="group flex flex-row gap-3 justify-center items-center">
          <span> Get in touch </span>
          <span className='border-1 p-1 rounded-full transition-colors duration-900'>
            <LuArrowUpRight className="group-hover:rotate-45"/>
          </span>
        </div>
      </Link>
    </div>
  )
}

export default GetInTouch
