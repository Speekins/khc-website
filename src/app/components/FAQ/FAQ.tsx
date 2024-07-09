import React from 'react'
import FAQ_Accordion from '../FAQ_Accordion/FAQ_Accordion'

function FAQ() {
  return (
    <div id='FAQ' className='flex items-center justify-between h-[75vh] w-screen'>
      <FAQ_Accordion/>
      <div className='flex justify-end bg-faq bg-cover w-1/2 h-full max-sm:w-1/4 max-sm:items-center'>
        <h1 className='m-10 text-slate text-9xl font-thin max-xl:text-8xl max-lg:text-7xl max-md:text-6xl max-sm:rotate-90 max-[500px]:m-0'>FAQ</h1>
      </div>
    </div>
  )
}

export default FAQ