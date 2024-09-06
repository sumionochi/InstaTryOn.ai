"use client"
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

import ModelInputImage1 from '@/assets/datar/female/tryon/a2.png';
import ModelOutputImage1 from '@/assets/datar/female/tryon/a1.png';
import ModelInputGif1 from "@/assets/datar/female/modelvideo/trackModel.gif";
import ModelOutputGif1 from '@/assets/datar/female/video/a1.gif';
import ModelDress1 from "@/assets/datar/female/product/a1.png";
import { Button } from './ui/button';
import { ArrowUpRight } from 'lucide-react';

const images = [ModelInputImage1, ModelOutputImage1, ModelInputGif1, ModelOutputGif1, ModelDress1];

const HeroHeader = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const lastPosition = useRef({ x: 0, y: 0 });

  const distanceThreshold = 100; 
  const trailLength = 5; 

  // Function to calculate the distance between two points
  const getDistance = (x1: number, y1: number, x2: number, y2: number) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  };

  // Function to handle the mousemove event
  const handleMouseMove = (e: MouseEvent) => {
    const distance = getDistance(lastPosition.current.x, lastPosition.current.y, e.clientX, e.clientY);
    if (distance > distanceThreshold) {
      lastPosition.current = { x: e.clientX, y: e.clientY };
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  // Event listener for mouse movement
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
   <div className="relative">
     {/* The first div (main content) */}
     <div className="p-4 z-10 relative py-40 pt-6 md:pt-10 gap-4 md:gap-6 flex flex-col justify-center items-center to-black">
       <div className='bg-gray-300/20 dark:bg-white/10 rounded-lg relative z-10'> 
        <div className="bg-gradient-to-r relative from-teal-400 dark:from-teal-200 dark:to-teal-500 to-teal-500 bg-clip-text text-transparent [-webkit-background-clip:text]">
            <a href="#" className="flex items-center gap-2 border rounded-lg py-2 px-3">
              <span className="font-bold text-[12px] md:text-base">
                Beta Release
              </span>
              <ArrowUpRight className='text-primary w-4 md:w-6'/>
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

        <p className="text-center z-10 max-w-2xl text-lg md:text-2xl">
        Try on clothes virtually from all angles, whether on a model or on yourself, from the comfort of your home.
        </p>

        <div className="text-center z-10">
          <Button className="relative h-10 md:h-16 px-12 md:px-8 rounded-lg border text-xl transition-all">
            <span className="relative z-10 font-bold text-sm md:text-base">START FOR FREE</span>
          </Button>
          <p className=" md:mt-2 text-[12px] md:text-sm text-gray-400">
            Try for free. No credit card required.
          </p>
        </div>
      </div>

      {/* The second div (image trail) */}
      {images.map((imageSrc, index) => (
        <Image
          key={index}
          src={imageSrc}
          alt={`Trail Image ${index}`}
          width={150}
          height={150}
          className={`absolute z-0 shadow-lg transition-opacity duration-200 ease-in-out transform ${
            activeIndex === index ? 'opacity-100 scale-110' : 'opacity-0'
          }`}
          style={{
            left: `${lastPosition.current.x}px`,
            top: `${lastPosition.current.y}px`,
          }}
        />
      ))}
   </div>
  );
};

export default HeroHeader;

