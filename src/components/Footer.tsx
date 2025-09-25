"use client"

import React from 'react'
import Logo from './common/logo/Logo'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {

  // Added border back to match the "boxed" mobile design
  const mobileBoxClasses = 'p-4 rounded-lg w-full';

  return (
    <div className="max-w-[1280px] mx-auto p-5 lg:p-0">

      <div className='flex flex-col lg:flex-row lg:justify-between mb-10 pt-5 lg:pt-0'>

        <div className='flex flex-col w-full lg:w-auto lg:flex-col lg:justify-between gap-8 lg:gap-0'>

          <Logo/>

          <div className='w-full lg:w-[550px] flex flex-col gap-4 bg-[#cbfb45] lg:mt-14 p-4 rounded-[20px] mt-8'>
            <span className='text-gray-600 text-sm'> Join our newsletter to stay up to date. </span>


            <div className='flex flex-col sm:flex-row gap-4'>
              <input
                type="text"
                placeholder='Enter Your Mail'
                className='bg-white w-full sm:w-[390px] px-4 py-2 rounded-full text-sm text-gray-700 border border-gray-300'
              />
              <button className='text-white bg-[#171717] px-6 py-2 rounded-full text-sm'> Subscribe </button>
            </div>
            <span className='text-[11px] text-gray-600'>By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.</span>
          </div>
        </div>


        <div className='grid grid-cols-2 lg:flex lg:flex-row lg:gap-20 mt-10 lg:mt-0 gap-5'>


          <div className={`${mobileBoxClasses} lg:p-0 lg:border-none lg:rounded-none lg:min-h-0`}>
            <h4 className='font-semibold mb-6'>Quick Links</h4>
            <ul className='space-y-4 text-sm lg:text-[12px] text-gray-500'>
              <li><a href="/" className='hover:underline'>About us</a></li>
              <li><a href="/" className='hover:underline'>Services</a></li>
              <li><a href="/" className='hover:underline'>Case studies</a></li>
              <li><a href="/" className='hover:underline'>Case studies CMS</a></li>
              <li><a href="/" className='hover:underline'>Blog</a></li>
              <li><a href="/" className='hover:underline'>Blog post CMS</a></li>
              <li><a href="/" className='hover:underline'>Contact</a></li>
            </ul>
          </div>

          <div className={`${mobileBoxClasses} lg:p-0 lg:border-none lg:rounded-none lg:min-h-0`}>
            <h4 className='font-semibold mb-6'>Contact</h4>
            <ul className='space-y-4 text-sm lg:text-[12px] text-gray-500'>
              <li>012 34 567 890</li>
              <li>info@nova.agency</li>
              <li className='max-w-[200px]'>Nova Office Complex 13 Imaginary Street Manchester</li>
            </ul>
          </div>

          <div className={`${mobileBoxClasses} lg:p-0 lg:border-none lg:rounded-none lg:min-h-0 col-span-2 lg:col-span-1`}>
            <h4 className='font-semibold mb-6'>Follow us</h4>
            <ul className='space-y-4 text-sm lg:text-[12px] text-gray-500'>
              
              <li className='flex items-center gap-3'>
                <span className='bg-[#171717] p-1.5 rounded-full'>
                  <FaFacebook className='text-lg text-[#cbfb45]' />
                </span>
                <a href="/" className='hover:underline'>Facebook</a>
              </li>
              <li className='flex items-center gap-3'>
                <span className='bg-[#171717] p-1.5 rounded-full'>
                  <FaInstagram className='text-lg text-[#cbfb45]' />
                </span>
                <a href="/" className='hover:underline'>Instagram</a>
              </li>
              <li className='flex items-center gap-3'>
                <span className='bg-[#171717] p-1.5 rounded-full'>
                  <FaXTwitter className='text-lg text-[#cbfb45]' />
                </span>
                <a href="/" className='hover:underline'>X</a>
              </li>
              <li className='flex items-center gap-3'>
                <span className='bg-[#171717] p-1.5 rounded-full'>
                  <FaLinkedin className='text-lg text-[#cbfb45]' />
                </span>
                <a href="/" className='hover:underline'>LinkedIn</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Separator Line */}
      <div className=' border-t border-gray-700'/>

      {/* Copyright Section - Stacked vertically on mobile, row on tablet/desktop */}
      <div className='flex flex-col sm:flex-row justify-between items-center py-6 text-[12px] text-gray-500 gap-2 sm:gap-0'>
        <span>
          &copy; 2025 - <span className='underline'> VisionCode </span>
        </span>

        <span>
          Developed by Rohan with <span className='text-red-500'>❤</span> | All Rights Reserved
        </span>
      </div>


    </div>
  )
}

export default Footer