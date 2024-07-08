import React from 'react'

function Services() {
  return (
    <div id='Services' className='flex items-center justify-between w-screen mt-12 h-96'>
      <div className='flex bg-services bg-cover w-1/2 h-full max-sm:w-1/4 max-sm:justify-end'>
        <h1 className='m-10 text-white text-9xl font-thin max-xl:text-8xl max-lg:text-7xl max-md:text-6xl max-sm:rotate-90'>Services</h1>
      </div>
      <div className='flex items-center justify-center w-1/2 max-sm:w-3/4'>
        <ul className='text-3xl font-extralight list-disc max-xl:text-2xl max-lg:text-xl max-md:text-lg max-sm:text-md'>
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