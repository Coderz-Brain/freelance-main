import Main from "@/components/Main";
import Brands from "@/components/Brands";
import Services from "@/components/Services";
import OurTeam from "@/components/OurTeam";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-w-screen max-h-full mx-auto lg:px-28 py-8 lg:py-16 px-4">
      <Main 
        styleType="hero"
        heading="Welcome to VisionCode"
        subheading="Your Partner in Digital Transformation"
        description={
          <p className="text-base lg:text-lg max-w-3xl text-gray-600">
            At VisionCode, we specialize in creating innovative digital solutions that drive business growth.
            Our team of experts is dedicated to delivering high-quality services tailored to your unique needs.
          </p>
        }
        imageSrc="https://cb-assets.vercel.app/assets/freelance-main/home/office-space.webp"
      />
      <Brands />
      <Services/>
      <OurTeam/>
      <Footer/>
    </div>
  );
}
