import Image from 'next/image';
import React from 'react';

import ModelInputImage1 from '@/assets/datar/female/tryon/a2.png'
import ModelOutputImaeg1 from '@/assets/datar/female/tryon/a1.png'
import ModelInputGif1 from "@/assets/datar/female/modelvideo/trackModel.gif"
import ModelOutputGif1 from '@/assets/datar/female/video/a1.gif'
import ModelDress1 from "@/assets/datar/female/product/a1.png"
import { ArrowRight, ArrowUpRight, MousePointerClick, TextCursor } from 'lucide-react';
import { Button } from './ui/button';

type Props = {};

const HeroHeader = (props: Props) => {
  return (
   <div>
    {/* <div className="py-20 flex justify-center items-center">
      <div className="container max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
        <div className="md:w-1/2 space-y-8">
          <h2 className="text-5xl font-bold leading-tight">
            Virtual Try On
          </h2>
          <p className="text-xl leading-relaxed">
            Unlock your perfect dressing style effortlessly with our virtual try-on clothes tool.
            Upload a photo of yourself and enjoy multiple virtual clothing options before buying.
            Let our AI virtual try-on tool save your time and boost your confidence.
          </p>
          <button className="mt-6 px-8 py-4 text-blue-600 font-semibold text-lg rounded-lg shadow-md hover:bg-gray-200 transition">
            Try on Clothes for Free
          </button>
        </div>
        <div className="relative flex justify-center items-center">
          <div className="flex items-center justify-between w-full gap-4">
            <div className="relative">
              <Image
                src={ModelInputImage1}
                alt="Virtual Try On Clothes"
                width={190}
                height={300}
                className="rounded-lg shadow-lg shadow-black"
              />
            </div>

            <div className="relative">
              <Image
                src={ModelOutputImaeg1}
                alt="Virtual Try On Clothes"
                width={190}
                height={300}
                className="rounded-lg shadow-lg shadow-black"
              />
              <Image
                src={ModelDress1}
                alt="Virtual Try On Clothes"
                width={100}
                height={120}
                className="absolute bottom-0 rotate-12 left-0 transform translate-x-[-60%] translate-y-[-14%] rounded-lg shadow-lg shadow-black border-2 border-white"
              />
            </div>

            <div className="relative">
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
                width={100}
                height={120}
                className="absolute bottom-0 left-0 -rotate-12 transform translate-x-[-60%] translate-y-[-10%] rounded-lg shadow-lg shadow-black border-2 border-white"
              />
            </div>
          </div>
        </div>
      </div>
      
    </div> */}
      <div className="p-4 py-40 gap-8 flex flex-col justify-center items-center to-black relative">
       <div className='bg-gray-300/20 dark:bg-white/10 rounded-lg relative'> 
        <div className="bg-gradient-to-r relative from-teal-400 dark:from-teal-200 dark:to-teal-500 to-teal-500 bg-clip-text text-transparent [-webkit-background-clip:text]">
            <a href="#" className="flex items-center gap-2 border rounded-lg py-2 px-3">
              <span className="font-bold">
                Beta Release
              </span>
              <ArrowUpRight className='text-primary'/>
            </a>
        </div>
       </div>

        <h1 className="text-8xl font-extrabold text-center">
          Instant Try On<br /> <p className='text-8xl'>Before You Buy</p>
        </h1>

        <p className="text-center max-w-2xl text-2xl">
        Try on clothes virtually from all angles, whether on a model or on yourself, from the comfort of your home.
        </p>

        

      </div>

   </div>
  );
};

export default HeroHeader;
