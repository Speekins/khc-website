"use client"
import React from 'react'

function Navbar() {

  // window.onscroll = (event) => {
  //   const nav = document.getElementById('navbar')
  //   nav?.classList.remove('hidden')
  //   if (document.body.scrollTop === 0) {
  //     nav?.classList.add('hidden')
  //   }
  // }

  return (
    <div className='position: absolute w-full'>
      <div id="navbar" className='flex position: sticky top-0 justify-between w-[95%] m-4 p-3 bg-lightBlue rounded-md z-10'>
        <ul className='flex justify-evenly w-1/2'>
          <li className='navlink'><a href='#About'>About</a></li>
          <li className='navlink'>Services</li>
          <li className='navlink'>FAQ</li>
        </ul>
        <ul className='flex justify-evenly w-1/2'>
          <li className='navlink'>Contact</li>
          <li className='navlink'>Resources</li>
          <li className='navlink'>Location</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar