import React from 'react'
import Image from 'next/image'
import foliage from '../../assets/foliage.jpg'
import bricks from '../../assets/bricks.jpg'

function FAQ() {
  return (
    <div id='FAQ' className='flex items-center justify-center mt-12'>
      <p className='w-1/2 p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <div className='relative w-1/2'>
        <Image alt='headshot' src={bricks} />
        <h1 className='absolute top-1/2 left-10 text-slate text-9xl font-thin'>FAQ</h1>
      </div>
    </div>
  )
}

export default FAQ