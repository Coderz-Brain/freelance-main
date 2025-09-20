"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "../components/context/ThemeContext";
import Logo from "./common/logo/Logo";
import { LuSun, LuMoon, LuX, LuMenu, LuArrowUpRight  } from "react-icons/lu";
import GetInTouch from "./common/getInTouch/GetInTouch";

type NavItem = {
  name: string;
  href: string;
  subItems?: NavItem[];
};

const Navbar: React.FC = () => {
  const { darkMode, toggleDark } = useTheme();

  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>("Works");

  const toggleNav = (): void => setNavOpen(!navOpen);

  const navItems: NavItem[] = [
    {
      name: "About",
      href: "/about-us",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "Case Studies",
      href: "/case-studies",
    },
    {
      name: "Blog",
      href: "/blog",
    },
  ];

  return (
    <header className="fixed top-5 z-50 w-full px-2">
      <div className="lg:flex lg:flex-row lg:justify-around max-w-full">
        <div>
          <div
            className={`w-full lg:w-7xl mx-auto flex items-center justify-between text-base px-2 py-1 rounded-full shadow-lg backdrop-blur-lg border border-gray-600 ${
              darkMode ? "bg-black/50 text-white" : "bg-white/50 text-black"
            } transition-colors duration-300`}
          >
            {/* Logo */}
            <Logo />

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-6 ">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setActiveLink(item.name)}
                  className={`relative px-3 py-1 text-[14px] rounded-md transition hover:bg-[#cbfb45] hover:text-black ${
                    activeLink === item.name
                      ? "bg-[#cbfb45] shadow-inner text-black"
                      : "bg-transparent"
                  }`}
                >
                  {item.name}
                  {activeLink === item.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center justify-end space-x-3">
              <button
                onClick={toggleDark}
                className={`text-base border border-slate-700 rounded-lg p-2 ${
                  darkMode ? "bg-black text-white" : "bg-white/70 text-black"
                }`}
              >
                {darkMode ? <LuSun size={14} /> : <LuMoon size={14} />}
              </button>

              <button className="md:hidden text-2xl" onClick={toggleNav}>
                {navOpen ? <LuX size={24} /> : <LuMenu size={24} />}
              </button>

              {/* Get in touch button */}
              <GetInTouch />
            </div>
          </div>

          <div className="w-full [font-family:var(--font-ubuntu)]">
            {/* Mobile Menu */}
            {navOpen && (
              <div
                className={`md:hidden text-base mt-2 mx-auto max-w-6xl backdrop-blur-lg border border-gray-600 ${
                  darkMode
                    ? "bg-gray-900/50 text-white"
                    : "bg-white/50 text-black"
                } rounded-xl shadow-md p-4 space-y-2`}
              >
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => {
                      setActiveLink(item.name);
                      setNavOpen(false);
                    }}
                    className={`block w-full text-center px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${
                      activeLink === item.name ? "font-semibold" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}

                <Link
                  href="/"
                  className="w-full flex flex-col gap-2 mt-5 text-base items-center space-x-3 rounded-full backdrop-blur-lg px-4 py-1 bg-black/50 text-white border border-gray-600 hover:text-[#cbfb45] transition-colors duration-300"
                >
                  <div className="group flex flex-row gap-3 justify-center items-center">
                    <span> Get in touch </span>
                    <span>
                      <LuArrowUpRight className="group-hover:rotate-45"/>
                    </span>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
