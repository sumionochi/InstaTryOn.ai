"use client";
import Image from "next/image";
import React from "react";
import ModelFlow from "@/assets/datar/female/flow/AnimateDiff_00058.gif";
import ModelClothInput from "@/assets/datar/female/product/a3.png";
import ModelInput from "@/assets/datar/female/model/a.png";

const Explain = () => {
  return (
    <div className="relative overflow-hidden z-10 p-4 pb-10 md:pb-40">
      <div className="flex max-w-7xl mx-auto relative z-0 justify-center gap-4 md:gap-6 items-center flex-col">
        <h1 className="text-4xl relative z-10 md:text-7xl font-extrabold text-center">
          Empower your shoppers
          <span className="hidden md:inline"><br /></span>
          to better project into your collection & the garments
          <span className="hidden md:inline"><br /></span>
          they buy online
        </h1>
        <h1 className="text-center relative z-3 max-w-2xl text-lg md:text-2xl">
          Don't spend a ton of time and money on finding the right model for your brand. Tailor your model to suit your target audience and boost engagement.
        </h1>
        <Image src={ModelInput} alt=""/>
      </div>
    </div>
  );
};

export default Explain;
