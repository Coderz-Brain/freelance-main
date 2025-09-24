"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LuArrowUpRight } from 'react-icons/lu';



interface ProjectCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  tags: {name:string} [];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  tags,
}) => {
  return (
    <div className="w-[340px] bg-[#f8f8f8] rounded-[20px] overflow-x-auto flex-shrink-0 sm:w-auto p-4 hover:border hover:border-black">
      <div className="relative h-[250px] w-full ">
        <Image
          src={imageSrc}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
          className="rounded-[20px]"
        />
      </div>
      <div className="py-6 px-2">
        <span className="text-xl mb-2 text-[#333]">{title}</span>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag.name}
              className="text-xs text-gray-700 font-semibold px-3 py-1 rounded-full bg-[#cbfb45]"
            >
              {tag.name}
            </span>
          ))}
        </div>
        <Link href="/" className="flex items-center gap-2 text-[13px] text-black">
          View project
          <LuArrowUpRight size={16} className='border rounded-full p-0.5 text-gray-500'/>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;