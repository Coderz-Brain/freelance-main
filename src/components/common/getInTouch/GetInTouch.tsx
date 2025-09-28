import React from "react";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";

const GetInTouch = () => {
  return (
    <div className="group">
      <Link
        href="/"
        className={`sm:block hidden px-4 py-2 rounded-full bg-black text-white hover:text-[#cbfb45] transition-colors duration-300 `}
      >
        <div className="group flex flex-row gap-2 justify-center items-center">
          <span> Get in touch </span>
          <span className=" transition-colors duration-300">
            <LuArrowUpRight className="group-hover:rotate-45" />
          </span>
        </div>
      </Link>
    </div>
  );
};

export default GetInTouch;
