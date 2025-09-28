import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import Main from "@/components/Main";
import Brands from "@/components/Brands";
import Services from "@/components/Services";
import SeeOurWork from "./SeeOurWork";
import CompanySnapshot from "./CompanySnapshot";

const ServiceRoutePage = () => {
  return (
    <PageLayout>
      <Main
        styleType="split"
        subheading="Our Services"
        heading="We are a Website Development Firm"
        description="At VisionCode, we're not just about creating content; we're about crafting
            a digital experience that resonates with your audience and drives
            tangible results. Our team of expert developers employs cutting-edge
            strategies and creative prowess to enhance your online presence,
            engage your community, and convert followers into loyal customers."
        imageSrc="https://cb-assets.vercel.app/assets/freelance-main/home/Services-right.png"
      />

      {/* Each section gets consistent spacing */}
      <div className="space-y-24">
        <Brands />
        <Services />
        <SeeOurWork />
        <CompanySnapshot />
      </div>
    </PageLayout>
  );
};

export default ServiceRoutePage;
