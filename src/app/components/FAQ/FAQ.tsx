import React from 'react'

function FAQ() {
  return (
    <div id='FAQ' className='flex items-center justify-center h-96'>
      <p className='w-1/2 p-2 max-sm:w-3/4 mt-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <div className='flex justify-end bg-faq bg-cover w-1/2 h-full max-sm:w-1/4 max-sm:items-start'>
        <h1 className='m-10 text-slate text-9xl font-thin max-xl:text-8xl max-lg:text-7xl max-md:text-6xl max-sm:rotate-90 max-sm:left-0'>FAQ</h1>
      </div>
    </div>
  )
}

export default FAQ