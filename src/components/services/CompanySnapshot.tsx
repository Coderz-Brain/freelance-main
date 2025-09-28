"use client";
import React from 'react'
import { useTheme } from '../context/ThemeContext'

const snapshotArray = [
  {
    id: 1,
    value: "98%",
    heading: "Satisfaction rate",
    description: "Nova boasts an impressive client satisfaction rate of 98%, reflecting our commitment to excellence and the effectiveness of our strategies in meeting client objectives."
  },
  {
    id: 2,
    value: "236+",
    heading: "Happy clients",
    description: "We've had the privilege of partnering with a diverse range of businesses, from startups to established enterprises, each with their unique challenges and aspirations."
  },
  {
    id: 3,
    value: "100%",
    heading: "Hard work",
    description: "We will 100% produce hard work no matter what. In an industry where dedication and results speak volumes, Nova SMMA stands out by delivering an unprecedented 100% hard work rate."
  },
  {
    id: 4,
    value: "10+",
    heading: "10 years of experience",
    description: "Celebrating a decade of excellence, Nova SMMA has been at the forefront of the social media marketing industry. Our extensive experience and innovative strategies have established us as leaders and trusted partners for brands looking to make an impact online."
  },
  {
    id: 5,
    value: "21",
    heading: "Countries with clients spread across",
    description: "With clients spread across 50+ countries, Nova SMMA combines global reach with local expertise. This unique approach enables us to tailor campaigns that resonate on a global scale while maintaining relevance to specific local markets.."
  },
  {
    id: 6,
    value: "24/7",
    heading: "Support from our team",
    description: "Our commitment to our clients extends beyond regular business hours. Nova SMMA offers 24/7 customer support to ensure that our clients always have access to the assistance and guidance they need, whenever they need it."
  },
]

const CompanySnapshot = () => {

  const { darkMode } = useTheme();

  return (
    <section className={`w-full mx-auto py-16  ${darkMode ? "bg-[#111] text-white": "bg-white text-black"}`}>

      <div className="flex flex-row justify-between mb-10">
        <div className='flex flex-col gap-2'>
          <span className="w-fit bg-[#cbfb45] text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
            Some stats
          </span>
          <span className="mt-3 lg:text-5xl text-2xl">
            Our Company Snapshot
          </span>
          <p className="w-5/6 mt-2 text-sm lg:text-lg">
            Founded in Pune August 2025, Nova is a cutting-edge social media marketing agency that empowers brands with tailored strategies, driving unparalleled engagement and growth in the digital realm.
          </p>
        </div>
        <div className='flex items-start lg:items-end'>
          <button className={`w-fit sm:mt-0 px-4 lg:px-6 py-1 lg:py-2 rounded-full bg-black text-[12px] lg:text-base text-white font-medium hover:text-[#cbfb45] transition-colors whitespace-nowrap ${darkMode ? "border border-gray-600" : ""}`}>
            View all
          </button>
        </div>
      </div>

      {/* Corrected Grid Structure */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
        {snapshotArray.map((snapshot) => (
          <div
            key={snapshot.id}
            className={`px-6 py-6 rounded-[20px] ${snapshot.id % 2 === 0 ? "bg-[#cbfb45] text-[#171717] " : "bg-[#171717] text-white border border-gray-600"}`}
          >
            <span className='text-3xl lg:text-7xl font-semibold'>{snapshot.value}</span>
            <h3 className='text-xl mt-16'>{snapshot.heading}</h3>
            <p className='text-sm mt-2'>{snapshot.description}</p>
          </div>
        ))}
      </div>

    </section>
  )
}

export default CompanySnapshot
