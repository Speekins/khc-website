"use client"
import React, { useState } from 'react'
import useScreenWidth from '../../../utils/useScreenWidth'

function Navbar() {

  // window.onscroll = (event) => {
  //   const nav = document.getElementById('navbar')
  //   nav?.classList.remove('hidden')
  //   if (document.body.scrollTop === 0) {
  //     nav?.classList.add('hidden')
  //   }
  // }
  const [click, setClick] = useState(false)
  const screenWidth = useScreenWidth()

  const hamburger =
    <div className='fixed flex justify-between w-full mt-2 mr-4'>
      <div className='flex flex-col text-xs bg-lightBlue inset-x-full'>
        <ul className=''>
          <li className=''><a href='#About'>About</a></li>
          <li className=''><a href='#Services'>Services</a></li>
          <li className=''><a href='#FAQ'>FAQ</a></li>
          <li className=''><a href='#Contact'>Contact</a></li>
          <li className=''><a href='#Resources'>Resources</a></li>
          <li className=''><a href='#Location'>Location</a></li>
        </ul>
      </div>
      <div className="hamburger group hover:cursor-pointer z-1000">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
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

  function conditionalNav() {
    return screenWidth.width < 650 ? hamburger : fullNav
  }

  function handleClick() {
    click === false ? setClick(true) : setClick(false)
  }

  return (
    conditionalNav()
  )
}

export default Navbar