"use client"
import React from 'react'
import useScrollPosition from '../../../utils/useScrollPosition'

function Navbar() {

  window.onscroll = (event) => {
    const nav = document.getElementById('navbar')
    nav?.classList.remove('hidden')
    // if (document.body.scrollTop === 0) {
    //   nav?.classList.add('hidden')
    // }
  }

  return (
    <div id="navbar" className='flex position: sticky top-0 justify-between w-[95%] mt-4 p-3 bg-lightBlue rounded-md z-10'>
      <ul className='flex justify-evenly w-1/2'>
        <li className='navlink font-sans font-extralight text-2xl'><a href='#About'>About</a></li>
        <li className='navlink font-sans font-extralight text-2xl'><a href='#Services'>Services</a></li>
        <li className='navlink font-sans font-extralight text-2xl'><a href='#FAQ'>FAQ</a></li>
      </ul>
      <ul className='flex justify-evenly w-1/2'>
        <li className='navlink font-sans font-extralight text-2xl'><a href='#Contact'>Contact</a></li>
        <li className='navlink font-sans font-extralight text-2xl'><a href='#Resources'>Resources</a></li>
        <li className='navlink font-sans font-extralight text-2xl'><a href='#Location'>Location</a></li>
      </ul>
    </div>
  )
}

export default Navbar