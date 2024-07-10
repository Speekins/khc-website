import React from 'react'

function Services() {
  return (
    <div id='Services' className='flex items-center justify-between w-screen mt-12 h-screen'>
      <div className='flex bg-services bg-cover w-1/2 h-full max-sm:w-1/4 justify-center'>
        <h1 className='h-4 mt-10 text-white text-9xl font-thin max-xl:text-8xl max-lg:text-7xl max-md:text-6xl max-sm:text-5xl max-sm:rotate-90 max-sm:translate-y-40'>Services</h1>
      </div>
      <div className='flex items-center justify-evenly w-1/2 h-3/4 max-sm:w-3/4 max-[500px]:w-2/3'>
        <div className='flex flex-col h-full w-1/3'>
          <label htmlFor='treated-diagnoses' className='text-2xl'>Treated Diagnoses</label>
          <ul id='treated-diagnoses' className='flex flex-col justify-evenly text-xl font-extralight list-disc h-full max-xl:text-lg max-md:text-md'>
            <li className=''>Post Partum Mothers</li>
            <li className=''>Anxiety</li>
            <li className=''>Depression</li>
            <li className=''>Grief & Loss</li>
            <li className=''>Life Transitions</li>
          </ul>
        </div>
        <div className='flex flex-col h-full w-1/3'>
        <label htmlFor='modalities' className='text-2xl'>Modalities</label>
          <ul id='modalities'className='flex flex-col justify-evenly text-xl font-extralight list-disc h-full max-xl:text-lg max-md:text-md'>
            <li className=''>EMDR</li>
            <li className=''>Cognitive Behavioral Therapy</li>
            <li className=''>Internal Family Systems</li>
            <li className=''>Motivational Inteviewing</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Services