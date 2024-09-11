import React from 'react';

type Props = {};

const Banner = (props: Props) => {
  return (
    <a href="/subscribe-newsletter" className='block'>
      <div className='py-2 z-50 relative text-center bg-gradient-to-r text-white to-pink-600 from-purple-300'>
        <div className='container mx-auto px-4'>
          <p className='flex items-center justify-center gap-2 text-sm font-medium'>
            <span className='bg-gray-900 hidden md:inline text-white text-xs px-2 py-1 rounded-full'>
              New
            </span>
            <span className='hidden sm:inline whitespace-nowrap'>
              Subscribe to our newsletter for daily personalized outfits with links to the best prices, stores, and reviews.{' '}
              <span className='font-bold hover:underline whitespace-nowrap'>
              ✨ Join Now ✨
              </span>
            </span>
            <span className='inline sm:hidden'>
            <span className='bg-gray-900 text-white text-xs px-2 py-1 rounded-full'>
              New
            </span> Get daily personalized outfits sent to your inbox {''}
              <span className='font-bold hover:underline whitespace-nowrap'>
              ✨ Click Here! ✨
              </span>
            </span>
          </p>
        </div>
      </div>
    </a>
  );
};

export default Banner;
