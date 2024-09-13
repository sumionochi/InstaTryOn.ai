import { OrbitingCirclesComponent } from '@/lib/Orbit'
import React from 'react'
import StripePricing from './StripePricing'

type Props = {}

const CMS = (props: Props) => {
  return (
    <section className='relative z-10 p-4 pb-10 md:pb-40'>
      <div className="absolute blur-3xl inset-0 -z-10 overflow-hidden bubbles"></div>
      <div className="absolute blur-3xl inset-0 -z-10 overflow-hidden purple-bubbles"></div>
      <div className='flex relative z-0 justify-center gap-4 md:gap-6 items-center flex-col'>
        <h1 className="text-4xl relative z-10 md:text-7xl font-extrabold text-center">
            CMS
        </h1>
        <h1 className='text-center relative z-3 max-w-2xl text-lg md:text-2xl'>
          Pay only for the Try-On you generate and use, <br className='hidden md:inline' /> without subscription lock-in.
        </h1>
      </div>
    </section>
  )
}

export default CMS