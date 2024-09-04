import React from 'react'

type Props = {}

const Banner = (props: Props) => {
  return (
    <div className='py-3 text-center text-gray-600 bg-base1'>
        <div className='1rem'>
            <p className='font-medium'>
                <span className='hidden sm:inline'>✨ Join the Waitlist & receive daily newsletters - <a href="#" className='underline underline-offset-4 font-medium'>
                    Explore the demo
                </a> ✨ </span>
                
            </p>
        </div>
    </div>
  )
}

export default Banner