import React from 'react'
import Link from 'next/link'
import { useTheme } from '@/components/context/ThemeContext'

const Logo = () => {

  const { darkMode } = useTheme()

  return (
    <div>
      <Link
        href="/"
        className="flex items-center space-x-2 rounded-full"
      >
        <div className={`px-4 py-2 rounded-full bg-black text-[#cbfb45] sm:text-sm ${darkMode ? " border border-gray-600" : ""} `}>
          <span> &lt;VisionCode/&gt; </span>
        </div>
      </Link>
    </div>
  )
}

export default Logo
