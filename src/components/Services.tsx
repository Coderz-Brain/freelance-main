"use client";

import React, { useState } from "react";
import { useTheme } from "./context/ThemeContext";
import ServiceItem from "./ui/ServiceItem";

const Services = () => {
  const { darkMode } = useTheme();
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const handleToggle = (serviceName: string) => {
    setExpandedService(expandedService === serviceName ? null : serviceName);
  };

  const servicesData = [
    {
      name: "Social Media Marketing",
      image: "/images/social-media-marketing.jpg",
      description:
        "Craft a compelling story designed to enthral your audience. We understand the science and art behind viral campaigns. With our finger on the pulse of the latest trends, we create strategies that spark conversations and build communities.",
    },
    {
      name: "Digital Advertising",
      image: "/images/digital-advertising.jpg",
      description:
        "Stand out in a crowded digital space. Our targeted advertising approach ensures visibility to the right people, at the right time, with the right message. Say goodbye to ad spends that don’t convert – we’re all about maximising ROI.",
    },
    {
      name: "Engagement Growth",
      image: "/images/engagement-growth.jpg",
      description:
        "Customer interaction is the heartbeat of online presence. Our innovative techniques foster an environment that keeps your audience talking and engaging with your brand. We’re in the business of building relationships, not just follower counts.",
    },
  ];

  return (
    <div
      id="services"
      className={`max-w-[1280px] w-full mx-auto my-8 py-8 px-4 md:my-16 md:py-16 md:px-6 rounded-[45px] ${
        darkMode ? "bg-[#222] text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="flex flex-col gap-4 text-left">
        <span className="w-fit bg-[#cbfb45] px-3 py-1 text-xs md:px-4 md:py-1 md:text-sm text-gray-600 rounded-full">
          What we do
        </span>
        <span className="text-3xl lg:text-5xl">Our services</span>
        <span className="text-base md:text-lg max-w-3xl">
          Propel Your Presence With Proven Expertise
        </span>
      </div>

      <div className="mt-6 md:mt-8 flex flex-col gap-3 md:gap-4">
        {servicesData.map((service) => (
          <ServiceItem
            key={service.name}
            service={service}
            isExpanded={expandedService === service.name}
            onToggle={() => handleToggle(service.name)}
            darkMode={darkMode}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;