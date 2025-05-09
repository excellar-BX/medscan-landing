"use client"
import Image from 'next/image'
import React, {useState, } from 'react'
import Button from './Button'
import {Link as ScrollLink} from 'react-scroll'
import { BiArrowBack, BiMenuAltRight, BiX, } from 'react-icons/bi'

const Header = () => {
  const [open, setOpen] = useState<boolean>(false)

  const nav = [
    {name:'Home', route:'hero'},
    {name:'Features', route:'features'},
    {name:'How It Works', route:'works'},
    {name:'Integration', route:'integration'},
    {name:'Support', route:'banner'},
  ]
  return (
    <div className='bg-white mt-5 md:mt-20 w-[90%] sm:w-[80%] relative rounded-full mx-auto px-5 py-3 flex flex-row justify-between items-center ' >
      <div className=" w-[200px] " ><Image src="/assets/Logo.png" width={1000} height={1000} className='xl:w-[200px] max-sm:w-[150px] h-full ' alt="logo" /></div>

    <div className="xl:hidden text-3xl text-primary " >
      {
        open? (<BiX onClick={()=> setOpen(!open)} />) : <BiMenuAltRight onClick={()=> setOpen(!open)} />
      }
  
    </div>

      <nav className={`flex max-xl:absolute top-0 trasition-all ease-in-out  max-md:right-0 max-xl:right-20 z-[9999] max-xl:top-20 ${open? 'flex' : 'max-xl:hidden' } max-xl:max-w-[600px] max-sm:rounded-none max-xl:rounded-xl max-xl:w-full max-xl:bg-primary max-xl:px-5   max-xl:text-white flex-1 flex-col xl:flex-row justify-evenly `} >
        <ul className='flex flex-col xl:flex-row items-center ' >
          {nav.map((data, index) => (
      <ScrollLink to={data.route} className='mx-5 max-xl:border max-xl:border-white max-xl:rounded-full max-xl:w-full max-xl:py-4 max-xl:text-center max-xl:m-3  text-xl font-bold cursor-pointer '  activeClass="active"
              smooth={true}
              spy={true}
              key={data.name}
              offset={-150}>
              {data.name}
           </ScrollLink>
              ))}
        </ul>
      <div><Button text='Book A Demo' icon={<BiArrowBack className='rotate-180 ' /> } className='max-xl:bg-white mx-auto max-xl:my-3 max-xl:text-primary' /></div>
      </nav>
    </div>
  )
}

export default Header
