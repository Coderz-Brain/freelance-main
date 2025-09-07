import React from 'react'
import Link from 'next/link'

const Logo = () => {
  return (
    <div>
      <Link
        href="/"
        className="flex items-center space-x-2 rounded-full"
      >
        <div className={`px-4 py-2 rounded-full bg-black text-[#cbfb45] `}>
          <span> &lt;Coder&apos;s Brain/&gt; </span>
        </div>
      </Link>
    </div>
  )
}

export default Logo
