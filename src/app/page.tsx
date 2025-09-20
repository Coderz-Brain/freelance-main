import Main from "@/components/Main";
import Brands from "@/components/Brands";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4 max-w-full max-h-full">
      <Main />
      
      <Brands />
    </div>
  );
}
