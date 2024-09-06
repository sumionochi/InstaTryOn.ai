import Banner from "@/components/Banner";
import HeroHeader from "@/components/HeroHeader";
import NavBar from "@/components/NavBar";

//bg-gradient-to-r from-teal-200 to-teal-500
//bg-gradient-to-r from-teal-200 to-teal-500

export default function Home() {
  return (
    <main className="relative">
      <Banner/>
      <div className="h-[2px] bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500" />
      <NavBar/>
      <HeroHeader/>
    </main>
  );
}
