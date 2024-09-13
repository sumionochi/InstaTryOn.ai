import React from 'react'
import StripePricing from './StripePricing'
import { OrbitingCirclesDemo } from './Orbit'

type Props = {}

const CMS = (props: Props) => {
  return (
    <section className='relative z-10 p-4 pb-10 md:pb-40'>
      <div className="absolute blur-3xl inset-0 -z-10 overflow-hidden bubbles"></div>
      <div className="absolute blur-3xl inset-0 -z-10 overflow-hidden purple-bubbles"></div>
      <div className='flex relative z-0 justify-center gap-4 md:gap-6 items-center flex-col'>
        <h1 className="text-4xl relative z-10 md:text-7xl font-extrabold text-center">
            CMS Integration
        </h1>
        <h1 className='text-center relative z-3 max-w-2xl text-lg md:text-2xl'>
        InstaTryOn integrates with all leading CMS in the market to help you leverage the potential of Virtual Try On Shopping in seconds.
        </h1>
        <OrbitingCirclesDemo/>
      </div>
    </section>
  )
}

export default CMS