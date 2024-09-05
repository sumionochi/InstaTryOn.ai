import Banner from "@/components/Banner";
import HeroHeader from "@/components/HeroHeader";
import NavBar from "@/components/NavBar";

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
