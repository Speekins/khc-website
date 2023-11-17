import React from 'react'
import Image from 'next/image'
import foliage from '../../assets/foliage.jpg'

function Contact() {
  return (
    <div id='Contact' className='flex items-center justify-center mt-12'>
      <Image alt='headshot' src={foliage} className='w-1/2 p-2' />
      <p className='w-1/2 p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  )
}

export default Contact