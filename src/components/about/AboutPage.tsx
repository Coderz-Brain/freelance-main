import React from "react";
import PageLayout from "../layout/PageLayout";
import Main from "../Main";

const AboutPage = () => {
  return (
    <PageLayout>
      <Main
        styleType="split"
        subheading="Welcome to <VisionCode/>"
        heading="Building Digital Solutions That Drive Your Business Forward"
        description=" As a dedicated development team, we don't just write code—we solve problems. Whether you need a stunning website, a robust web application, or a complete digital transformation, we bring technical expertise and creative thinking to every project."
        imageSrc="https://cb-assets.vercel.app/assets/freelance-main/home/office-space.webp"
      />

      {/* Future sections */}
      <div className="space-y-24">
        
      </div>
    </PageLayout>
  );
};

export default AboutPage;
