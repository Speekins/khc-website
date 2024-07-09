import React from 'react'

function Services() {
  return (
    <div id='Services' className='flex items-center justify-between w-screen mt-12 h-screen'>
      <div className='flex bg-services bg-cover w-1/2 h-full max-sm:w-1/4 max-sm:justify-end'>
        <h1 className='p-10 text-white text-9xl font-thin max-xl:text-8xl max-lg:text-7xl max-md:text-6xl max-sm:rotate-90 max-sm:mr-20'>Services</h1>
      </div>
      <div className='flex items-center justify-evenly w-1/2 h-3/4 max-sm:w-3/4 max-[500px]:w-2/3'>
        <ul className='flex flex-col justify-evenly text-3xl font-extralight list-disc h-full max-xl:text-2xl max-md:text-xl max-sm:text-lg max-[500px]:text-md'>
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