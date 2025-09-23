import Main from "@/components/Main";
import Brands from "@/components/Brands";
import Services from "@/components/Services";
import OurTeam from "@/components/OurTeam";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4 px-4 max-w-full max-h-full">
      <Main />
      <Brands />
      <Services/>
      <OurTeam/>
    </div>
  );
}
