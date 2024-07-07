"use client"
import React, { useState, useEffect } from 'react'
import useScreenWidth from '../../../utils/useScreenWidth'

function Navbar() {

  // window.onscroll = (event) => {
  //   const nav = document.getElementById('navbar')
  //   nav?.classList.remove('hidden')
  //   if (document.body.scrollTop === 0) {
  //     nav?.classList.add('hidden')
  //   }
  // }
  //const screenWidth = useScreenWidth()
  const [isMobile, setIsMobile] = useState(window.innerWidth < 720)

  //choose the screen size 
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize)
  }, [])

  const hamburger =
    <div className='fixed flex justify-between w-full mt-2 mr-4'>
      <div id='mobile-nav' className="relative flex flex-col text-xs bg-lightBlue left-2 duration-300">
        <ul className=''>
          <li className=''><a href='#About'>About</a></li>
          <li className=''><a href='#Services'>Services</a></li>
          <li className=''><a href='#FAQ'>FAQ</a></li>
          <li className=''><a href='#Contact'>Contact</a></li>
          <li className=''><a href='#Resources'>Resources</a></li>
          <li className=''><a href='#Location'>Location</a></li>
        </ul>
      </div>
      <div id='hamburger' onClick={handleClick} className="group hover:cursor-pointer duration-500 h-10 w-10">
        <span id='bar1' className="bar"></span>
        <span id='bar2' className="bar"></span>
        <span id='bar3' className="bar"></span>
      </div>
    </div>

  const fullNav = <div id="navbar" className='flex position: sticky top-0 justify-between w-[95%] mt-4 p-3 bg-lightBlue rounded-md z-10 text-xl max-lg:text-lg max-md:text-sm max-sm:text-xs'>
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
    document.getElementById('mobile-nav')?.classList.replace('left-2','right-10')
  }

  return (
    <>
      {isMobile ? hamburger : fullNav}
    </>
  )
}

export default Navbar