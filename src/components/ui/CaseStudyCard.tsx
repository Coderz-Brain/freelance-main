import React from "react";
import Image from "next/image";

interface CaseStudyCardProps {
  title: string;
  description: React.ReactNode;
  href: string;
  imageSrc: string;
  imageAlt: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  title,
  description,
  href,
  imageSrc,
  imageAlt,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col justify-between rounded-md overflow-hidden hover:shadow-lg transition h-fit"
    >
      <div>
        <div className="px-5 pt-3 pb-2 font-mono text-md uppercase">
          {title}
        </div>
        <hr className="mt-1 mb-3" />
        <div className="mb-4 flex flex-col gap-4 px-5 text-sm">
          {description}
        </div>
      </div>

      <div className="flex items-center justify-center py-10">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={600}
          height={400}
          className="max-w-[80%] object-contain"
        />
      </div>
    </a>
  );
};

export default CaseStudyCard;
