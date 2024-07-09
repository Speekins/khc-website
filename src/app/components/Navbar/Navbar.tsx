"use client"
import React, { useState, useEffect } from 'react'
import useScreenWidth from '../../../Hooks/useScreenWidth'

function Navbar() {

  // window.onscroll = (event) => {
  //   const nav = document.getElementById('navbar')
  //   nav?.classList.remove('hidden')
  //   if (document.body.scrollTop === 0) {
  //     nav?.classList.add('hidden')
  //   }
  // }
  //const screenWidth = useScreenWidth()
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 720 : true)

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const hamburger =
    <div className='fixed flex justify-between w-full z-10'>
      <div id='mobile-nav' className="relative text-md p-4 rounded bg-lightBlue -translate-y-full duration-500 mt-2">
        <ul className='flex flex-col justify-between h-full'>
          <li className='navlink-mobile'><a href='#About'>About</a></li>
          <li className='navlink-mobile'><a href='#Services'>Services</a></li>
          <li className='navlink-mobile'><a href='#FAQ'>FAQ</a></li>
          <li className='navlink-mobile'><a href='#Contact'>Contact</a></li>
          <li className='navlink-mobile'><a href='#Resources'>Resources</a></li>
          <li className='navlink-mobile'><a href='#Location'>Location</a></li>
        </ul>
      </div>
      <div id='hamburger' onClick={handleClick} className="group hover:cursor-pointer duration-500 h-10 w-10 mt-2 mr-4">
        <span id='bar1' className="bar"></span>
        <span id='bar2' className="bar"></span>
        <span id='bar3' className="bar"></span>
      </div>
    </div>

  const fullNav = <div id="navbar" className='flex sticky top-0 justify-between w-[95%] mt-4 p-3 bg-lightBlue rounded-md z-10 text-xl max-lg:text-lg max-md:text-sm max-sm:text-xs'>
    <ul className='flex justify-evenly w-1/2'>
      <li className='navlink'><a href='#About'>About</a></li>
      <li className='navlink'><a href='#Services'>Services</a></li>
      <li className='navlink'><a href='#FAQ'>FAQ</a></li>
    </ul>
    <ul className='flex justify-evenly w-1/2'>
      <li className='navlink'><a href='#Contact'>Contact</a></li>
      <li className='navlink'><a href='#Resources'>Resources</a></li>
      <li className='navlink'><a href='#Location'>Location</a></li>
    </ul>
  </div>

  function handleClick() {
    document.getElementById('hamburger')?.classList.toggle('hamburger-active')
    document.getElementById('mobile-nav')?.classList.toggle('-translate-y-full')
  }

  return (
    <>
      {isMobile ? hamburger : fullNav}
    </>
  )
}

export default Navbar