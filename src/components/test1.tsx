import { Bars3CenterLeftIcon } from '@heroicons/react/16/solid'
import React from 'react'

function Nav() {
  return (
    <div className='fixed w-[100%] z-[100%] bg-gray-800'>
    <div className='flex items-center h-[12vh] justify-between w-[80%] mx auto'> 
    <div className='text-white text-[18px]'> 
        <span className='text-[30px] md:text-[40px] text-yellow-400'>Sara</span>
        Worrior
    </div>
    <ul className='md:flex hidden items-center space-x-10'>
        <li><a className='nav-effect' href='# text-white'> Home</a> </li>
        <li><a className='nav-effect' href='#'>About</a> </li>
        <li><a className='nav-effect' href='#'>Services</a> </li>
        <li><a className='nav-effect' href='#'>Blog</a> </li>
        <li><a className='nav-effect' href='#'>Contacts</a> </li>
    </ul>
    <Bars3CenterLeftIcon className='w-[2.3rem]  h-[2.3rem] text-white rotate-180' />

    </div>
    </div>
 
  )
}

export default Nav