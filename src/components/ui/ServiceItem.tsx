import React from "react";
import Image from "next/image";
import { LuPlus } from "react-icons/lu";

interface Service {
  name: string;
  image: string;
  description: string;
}

interface ServiceItemProps {
  service: Service;
  isExpanded: boolean;
  onToggle: () => void;
  darkMode: boolean;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  service,
  isExpanded,
  onToggle,
  darkMode,
}) => {
  return (
    <div
      className="px-4 py-4 border border-gray-600 rounded-4xl cursor-pointer transition-all duration-300"
    >
      <div className="flex justify-between items-center" onClick={onToggle}>
        <h3 className="text-lg lg:text-xl ">{service.name}</h3>
        <button
          className={`h-8 w-8 bg-[#cbfb45] text-black rounded-full flex items-center justify-center transition-transform duration-300 transform ${
            isExpanded ? "rotate-45" : ""} ${darkMode ? "border border-gray-600" : ""}`}
          aria-expanded={isExpanded}
        >
          <LuPlus size={20} />
        </button>
      </div>

      {isExpanded && (
        <div className="pt-6">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="w-full lg:w-1/2 rounded-xl overflow-hidden">
              <Image
                src={service.image}
                width={600}
                height={400}
                alt={service.name}
                className="w-full h-auto object-cover rounded-4xl border"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h4 className="text-3xl mb-4">{service.name}</h4>
              <p className="text-base lg:text-lg mb-6">{service.description}</p>
              <button className="bg-[#171717] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                Learn more
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceItem;
