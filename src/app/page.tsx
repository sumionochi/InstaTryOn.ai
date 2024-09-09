import Banner from "@/components/Banner";
import HeroHeader from "@/components/HeroHeader";
import LogoTicker from "@/components/LogoTicker";
import NavBar from "@/components/NavBar";
import Showcase from "@/components/Showcase";
import Solutions from "@/components/Solutions";
import Trail from "@/components/Trail";
//bg-gradient-to-r from-teal-200 to-teal-500
//bg-gradient-to-r from-teal-200 to-teal-500

/* 
1. Banner
2. NavBar
3. Hero Header - intro
4. Logo Ticker
5. 3 explanation section - 4 features, Video demo each, Explaination
6. Pricing
7. Testimonial
8. Frequent questions
9. Sign up for free today
10. Bottom bar 
*/

export default function Home() {
  return (
    <main className="relative">
      <Banner/>
      <div className="h-[2px] relative z-30 bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500" />
      <NavBar/>
      <HeroHeader/>
      <LogoTicker/>
      <Solutions/>
      <Showcase/>  
      
      <Trail/>
    </main>
  );
}
