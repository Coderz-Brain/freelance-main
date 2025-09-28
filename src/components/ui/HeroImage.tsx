import Image from "next/image";

interface HeroImageProps {
  variant?: "split" | "hero";
  src?: string;
}

const HeroImage = ({ variant = "split", src }: HeroImageProps) => {
  return (
    <Image
      src={
        src ||
        "https://cb-assets.vercel.app/assets/freelance-main/home/office-space.webp"
      }
      width={800}
      height={800}
      alt="Visual"
      className={`rounded-4xl border object-cover ${
        variant === "hero" ? "w-full h-[600px]" : "w-[800px] h-full aspect-square"
      }`}
    />
  );
};

export default HeroImage;
