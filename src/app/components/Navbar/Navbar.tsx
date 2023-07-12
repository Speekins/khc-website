import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between w-full p-3 bg-lightBlue rounded-md'>
      <ul className='flex justify-evenly w-1/2'>
        <li>About</li>
        <li>Services</li>
        <li>FAQ</li>
      </ul>
      <ul className='flex justify-evenly w-1/2'>
        <li>Contact</li>
        <li>Resources</li>
        <li>Location</li>
      </ul>
    </div>
  )
}

export default Navbar