"use client";
import Image from "next/image";

import ModelInputImage1 from "@/assets/datar/female/tryon/a2.png";
import ModelOutputImage1 from "@/assets/datar/female/tryon/a1.png";
import ModelInputGif1 from "@/assets/datar/female/modelvideo/trackModel.gif";
import ModelOutputGif1 from "@/assets/datar/female/video/a1.gif";
import ModelDress1 from "@/assets/datar/female/product/a1.png";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";

const HeroHeader = () => {
  return (
    <div className="relative pb-10">
      <div className="p-4 relative pt-6 md:pt-10 gap-4 md:gap-6 flex flex-col justify-center items-center to-black">
        <div className="bg-gray-300/20 dark:bg-white/10 rounded-lg relative z-10">
          <div className="bg-gradient-to-r relative from-teal-400 dark:from-teal-200 dark:to-teal-500 to-teal-500 bg-clip-text text-transparent [-webkit-background-clip:text]">
            <a href="#" className="flex items-center gap-2 border rounded-lg py-2 px-3">
              <span className="font-bold text-[12px] md:text-base">Beta Release</span>
              <ArrowUpRight className="text-primary w-4 md:w-6" />
            </a>
          </div>
        </div>

        <h1 className="text-4xl md:text-7xl z-10 font-extrabold text-center">
          Instant Try On
        </h1>

        <div className="flex justify-center items-center">
          <div className="flex items-center justify-between w-full gap-4">
            <div className="relative z-10">
              <Image
                src={ModelInputImage1}
                alt="Virtual Try On Clothes"
                width={190}
                height={300}
                className="rounded-lg shadow-lg shadow-black"
              />
            </div>

            <div className="relative z-10">
              <Image
                src={ModelOutputImage1}
                alt="Virtual Try On Clothes"
                width={190}
                height={300}
                className="rounded-lg shadow-lg shadow-black"
              />
              <Image
                src={ModelDress1}
                alt="Virtual Try On Clothes"
                width={120}
                height={120}
                className="absolute w-20 md:w-32 bottom-0 rotate-12 left-0 transform translate-x-[-60%] translate-y-[-14%] rounded-lg shadow-lg shadow-black border-2 border-white"
              />
            </div>

            <div className="relative z-10">
              <Image
                src={ModelOutputGif1}
                alt="Virtual Try On Clothes"
                width={193}
                height={300}
                className="rounded-lg shadow-lg shadow-black"
              />
              <Image
                src={ModelInputGif1}
                alt="Virtual Try On Clothes"
                width={120}
                height={120}
                className="absolute w-20 md:w-32 bottom-0 left-0 -rotate-12 transform translate-x-[-60%] translate-y-[-10%] rounded-lg shadow-lg shadow-black border-2 border-white"
              />
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-7xl z-10 font-extrabold text-center">
          Before You Buy
        </h1>

        <p className="text-center z-10 max-w-3xl text-lg md:text-2xl">
          Discover, Shop & Try on clothes virtually from all angles, whether on a model or on yourself, from the comfort of your home.
        </p>

        <div className="text-center z-10">
          <Button className="relative h-12 md:h-16 px-12 md:px-8 rounded-lg border text-xl transition-all">
            <span className="relative z-10 font-bold text-sm md:text-base">START FOR FREE</span>
          </Button>
          <p className="md:mt-2 text-[12px] md:text-sm text-gray-400">
            Try for free. No credit card required.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
