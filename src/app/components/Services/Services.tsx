import React from 'react'
import Image from 'next/image'
import foliage from '../../assets/foliage.jpg'

function Services() {
  return (
    <div id='Services' className='offset flex items-center justify-center mt-12'>
      <div className='relative w-1/2'>
        <Image alt='headshot' src={foliage} />
        <h1 className='absolute top-1/2 text-white text-9xl font-thin'>Services</h1>
      </div>
      <div className='flex flex-wrap items-center justify-center w-1/2'>
        <ul className='text-3xl font-extralight w-1/2 list-disc'>
          <li className=''>Post Partum Mothers</li>
          <li className=''>Anxiety</li>
          <li className=''>Depression</li>
          <li className=''>Grief & Loss</li>
          <li className=''>Life Transitions</li>
          <li className=''>EMDR</li>
          <li className=''>Motivational Inteviewing</li>
          <li className=''>Cognitive Behavioral Therapy</li>
        </ul>
      </div>
    </div>
  )
}

export default Services