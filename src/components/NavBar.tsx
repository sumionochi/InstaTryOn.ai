import React from 'react'
import logoImage from '@/assets/images/logosaas.png'
import MenuIcon from '@/assets/icons/menu.svg'
import Image from 'next/image'
import { Themetoggle } from './ui/Themetoggle'
type Props = {}

const NavBar = (props: Props) => {
  return (
    <div className='1rem'>
        {/* <Image src={logoImage} alt="InstaTryOn.ai"/> */}
        <div className='py-4 px-3'>
            <p className='h-12 w-12'>InstaTryOn.ai</p>
            <MenuIcon/>
            <Themetoggle/>
        </div>
    </div>
  )
}

export default NavBar