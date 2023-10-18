import React from 'react'
import Image from 'next/image'
import foliage from '../../assets/foliage.jpg'

function About() {
  return (
    <div id='About' className='flex items-center justify-center translate-x-12'>
      <div className='w-1/2 p-2'>
        <p className='flex items-center justify-center w-1/2 p-2 text-4xl fadeIn'>Here for you.</p>
      </div>
      <Image alt='headshot' src={foliage} className='w-1/2 p-2' />
    </div>
  )
}

export default About