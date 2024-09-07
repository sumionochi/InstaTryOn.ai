import React from 'react';

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className='py-2 z-50 relative text-center bg-gradient-to-r from-teal-200 to-teal-500 text-black'>
      <div className='container mx-auto px-4'>
        <p className='flex items-center justify-center gap-2 text-sm font-medium'>
          <span className='bg-gray-900 text-white text-xs px-2 py-1 rounded-full'>
            New
          </span>
          <span className='hidden sm:inline whitespace-nowrap'>
            Join our waitlist & receive daily newsletters - {''}
            <a href="#" className='font-bold hover:underline whitespace-nowrap'>
              Use code MAKE25 for 25% off
            </a>
          </span>
          <span className='inline sm:hidden'>
            Join our Newsletter & waitlist {''}
            <a href="#" className='font-bold hover:underline whitespace-nowrap'>
              Learn More
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Banner;
