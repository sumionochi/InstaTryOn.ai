import React from 'react';

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className='py-2 text-center bg-gradient-to-r from-teal-200 to-teal-500 text-black'>
      <div className='container mx-auto px-4'>
        <p className='flex items-center justify-center gap-2 text-sm font-medium'>
          <span className='bg-gray-900 text-white text-xs px-2 py-1 rounded-full'>
            New
          </span>
          <span className='hidden sm:inline whitespace-nowrap'>
            Join us at Make with Notion — a conference for tomorrow’s tools, creators, and ideas.{' '}
            <a href="#" className='font-bold hover:underline whitespace-nowrap'>
              Use code MAKE25 for 25% off
            </a>
          </span>
          <span className='inline sm:hidden'>
            Join our Waitlist for updates{' '}
            <a href="#" className=' underline hover:text-white'>
              Learn more
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Banner;
