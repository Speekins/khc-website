import React from 'react'

function Navbar() {
  return (
    <div className='flex position: sticky top-0 justify-between w-[95%] m-4 p-3 bg-lightBlue rounded-md z-10'>
      <ul className='flex justify-evenly w-1/2'>
        <li className='navlink'>About</li>
        <li className='navlink'>Services</li>
        <li className='navlink'>FAQ</li>
      </ul>
      <ul className='flex justify-evenly w-1/2'>
        <li className='navlink'>Contact</li>
        <li className='navlink'>Resources</li>
        <li className='navlink'>Location</li>
      </ul>
    </div>
  )
}

export default Navbar