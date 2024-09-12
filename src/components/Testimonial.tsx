"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';
import { StaticImageData } from 'next/image';

import avatar1 from '@/assets/images/path-to-avatar1.jpg';
import avatar2 from '@/assets/images/path-to-avatar2.jpg';
import avatar3 from '@/assets/images/path-to-avatar3.jpg';
import avatar4 from '@/assets/images/path-to-avatar4.jpg';
import avatar5 from '@/assets/images/path-to-avatar5.jpg';
import avatar6 from '@/assets/images/path-to-avatar6.jpg';
import avatar7 from '@/assets/images/path-to-avatar7.jpg';
import avatar8 from '@/assets/images/path-to-avatar8.jpg';
import avatar9 from '@/assets/images/path-to-avatar9.jpg';
import avatar10 from '@/assets/images/path-to-avatar10.jpg';
import avatar11 from '@/assets/images/path-to-avatar11.jpg';
import avatar12 from '@/assets/images/path-to-avatar12.jpg';
import avatar13 from '@/assets/images/path-to-avatar13.jpg';
import avatar14 from '@/assets/images/path-to-avatar14.jpg';
import avatar15 from '@/assets/images/path-to-avatar15.jpg';

type Props = {};

interface Testimonial {
  name: string;
  username: string;
  message: string;
  avatar: string | StaticImageData;
}

const testimonials: Testimonial[] = [
    {
      name: 'Jamie Rivera',
      username: '@jamietechguru00',
      message: 'The AI-powered Try-On has revolutionized how I shop online. The increase in conversion rates after implementing this feature was astounding – our revenue jumped by 77%!',
      avatar: avatar1,
    },
    {
      name: 'Casey Jordan',
      username: '@caseyj',
      message: 'We saw an incredible uplift in average order value, up by 22%. The ability to see exactly how outfits look before purchase has led to more confident buying decisions.',
      avatar: avatar2,
    },
    {
      name: 'Jordan Patels',
      username: '@jpateldesign',
      message: 'Since adopting this AI-driven Try-On solution, customer engagement in our Mix&Match Styling Experience has skyrocketed, resulting in more outfits created and greater brand loyalty.',
      avatar: avatar3,
    },
    {
      name: 'Josh Smith',
      username: '@jsmith',
      message: 'The seamless integration of this AI Try-On system led to an instant boost in sales and a reduction in returns. Customers love being able to visualize the perfect fit.',
      avatar: avatar4,
    },
    {
      name: 'Taylor Kim',
      username: '@taylorkimms',
      message: 'Our conversion rates have jumped by 77% since we introduced the AI Try-On feature. It’s clear that customers feel more confident in their purchases when they can visualize outfits accurately.',
      avatar: avatar5,
    },
    {
      name: 'Sam Dawson',
      username: '@ideasntechtips',
      message: 'The real-time AI Try-On is a game-changer. We’ve seen an uplift in average order value of 22%, and customer feedback has been overwhelmingly positive.',
      avatar: avatar6,
    },
    {
      name: 'Morgan Lee',
      username: '@morgberhowitz',
      message: 'The AI Try-On system has drastically reduced return rates while boosting sales. The uplift in conversion has been impressive, with significant improvements in customer satisfaction.',
      avatar: avatar7,
    },
    {
      name: 'Riley Smith',
      username: '@rileysmithnet',
      message: 'Shoppers love the Mix&Match Styling Experience. The fact that customers can create millions of outfit combinations has been a strong driver of engagement and repeat purchases.',
      avatar: avatar8,
    },
    {
      name: 'Casey Harper',
      username: '@casey09',
      message: 'The implementation of AI-powered Try-On not only led to an uplift in average order value but also significantly enhanced customer trust and reduced cart abandonment rates.',
      avatar: avatar9,
    },
    {
      name: 'Avery Gonzalez',
      username: '@averygonzalez',
      message: 'The AI Try-On system allowed us to improve the customer experience, leading to a 22% increase in average basket size. Customers are more willing to experiment with new styles!',
      avatar: avatar10,
    },
    {
      name: 'Hunter Mitchell',
      username: '@huntermitchell',
      message: 'What impressed us the most was the boost in engagement. Customers spend more time creating and trying on different outfits, leading to higher conversion rates and bigger orders.',
      avatar: avatar11,
    },
    {
      name: 'Mason Reed',
      username: '@masonreedfashion',
      message: 'The AI Try-On feature reduced return rates significantly. Customers now have a more accurate understanding of how the clothes fit before purchasing, which also increased repeat buyers.',
      avatar: avatar12,
    },
    {
      name: 'Harper Parker',
      username: '@harperparker',
      message: 'Thanks to the AI-powered Try-On, we saw a 77% uplift in conversion rates. It’s an incredible tool for enhancing customer confidence and driving sales.',
      avatar: avatar13,
    },
    {
      name: 'Charlie Edwards',
      username: '@charliedwardsstyle',
      message: 'The AI-driven styling feature has allowed us to create personalized experiences for our shoppers, increasing customer engagement by over 50%. It’s a true game-changer for e-commerce.',
      avatar: avatar14,
    },
    {
      name: 'Quinn Taylor',
      username: '@quinntaylorfashion',
      message: 'The Mix&Match experience has been a hit with our customers, resulting in millions of outfits created and a significant boost in customer retention and lifetime value.',
      avatar: avatar15,
    },
  ];

const firstColumn = testimonials.slice(0, 5).concat(testimonials.slice(0, 5));
const secondColumn = testimonials.slice(5, 10).concat(testimonials.slice(5, 10));
const thirdColumn = testimonials.slice(10, 15).concat(testimonials.slice(10, 15));

const columnAnimation = (height: number, speed: number) => ({
  y: [0, -height],
  transition: {
    repeat: Infinity,
    duration: speed,
    ease: "linear",
  },
});

const Testimonial = (props: Props) => {
  const firstColumnRef = useRef<HTMLDivElement>(null);
  const secondColumnRef = useRef<HTMLDivElement>(null);
  const thirdColumnRef = useRef<HTMLDivElement>(null);

  const [firstColumnHeight, setFirstColumnHeight] = useState(0);
  const [secondColumnHeight, setSecondColumnHeight] = useState(0);
  const [thirdColumnHeight, setThirdColumnHeight] = useState(0);

  useEffect(() => {
    if (firstColumnRef.current) {
      setFirstColumnHeight(firstColumnRef.current.scrollHeight / 2);
    }
    if (secondColumnRef.current) {
      setSecondColumnHeight(secondColumnRef.current.scrollHeight / 2);
    }
    if (thirdColumnRef.current) {
      setThirdColumnHeight(thirdColumnRef.current.scrollHeight / 2);
    }
  }, []);

  return (
    <section className="relative z-10 p-4 pb-10 md:pb-40">
      <div className="flex relative z-0 justify-center gap-4 md:gap-6 items-center flex-col">
        <h1 className="text-4xl relative z-10 md:text-7xl font-extrabold text-center">
          What our users say
        </h1>
        <h1 className="text-center relative z-3 max-w-2xl text-lg md:text-2xl">
          InstaTryOn has been successfully helping major brands &amp; designers engage their shoppers
          with Virtual Try On Shopping Experiences since 2023
        </h1>
      </div>

      <div
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black, black, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black, black, transparent)',
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 max-w-7xl mx-auto px-4 space-y-10 h-[60rem] overflow-hidden"
      >
        <motion.div
          className="space-y-6"
          animate={columnAnimation(firstColumnHeight, 40)}
          ref={firstColumnRef}
        >
          {firstColumn.map((testimonial, index) => (
            <motion.div
              whileHover={{ y: -8 }}
              key={index}
              className="bg-white dark:bg-background rounded-xl shadow-lg p-6 mb-6 break-inside-avoid flex flex-col justify-between border"
            >
              <p className="text-gray-600 dark:text-gray-300 mb-4">{testimonial.message}</p>
              <div className="flex items-center space-x-4 mt-auto">
                <Image
                  src={testimonial.avatar}
                  alt={`${testimonial.name}'s avatar`}
                  className="w-10 h-10 rounded-full"
                />
                <div className="text-left flex justify-center items-start flex-col">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {testimonial.username}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="space-y-6"
          animate={columnAnimation(secondColumnHeight, 30)}
          ref={secondColumnRef}
        >
          {secondColumn.map((testimonial, index) => (
            <motion.div
              whileHover={{ y: -8 }}
              key={index}
              className="bg-white dark:bg-background rounded-xl shadow-lg p-6 mb-6 break-inside-avoid flex flex-col justify-between border"
            >
              <p className="text-gray-600 dark:text-gray-300 mb-4">{testimonial.message}</p>
              <div className="flex items-center space-x-4 mt-auto">
                <Image
                  src={testimonial.avatar}
                  alt={`${testimonial.name}'s avatar`}
                  className="w-10 h-10 rounded-full"
                />
                <div className="text-left flex justify-center items-start flex-col">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {testimonial.username}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="space-y-6"
          animate={columnAnimation(thirdColumnHeight, 20)}
          ref={thirdColumnRef}
        >
          {thirdColumn.map((testimonial, index) => (
            <motion.div
              whileHover={{ y: -8 }}
              key={index}
              className="bg-white dark:bg-background rounded-xl shadow-lg p-6 mb-6 break-inside-avoid flex flex-col justify-between border"
            >
              <p className="text-gray-600 dark:text-gray-300 mb-4">{testimonial.message}</p>
              <div className="flex items-center space-x-4 mt-auto">
                <Image
                  src={testimonial.avatar}
                  alt={`${testimonial.name}'s avatar`}
                  className="w-10 h-10 rounded-full"
                />
                <div className="text-left flex justify-center items-start flex-col">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {testimonial.username}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
