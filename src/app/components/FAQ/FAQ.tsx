import React from 'react'

function FAQ() {
  return (
    <div id='FAQ' className='flex items-center justify-center h-screen'>
      <p className='w-1/2 p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <div className='relative bg-faq bg-cover w-1/2 h-full'>
        <h1 className='absolute top-1/2 left-10 text-slate text-9xl font-thin max-xl:text-8xl max-lg:text-7xl max-md:text-6xl'>FAQ</h1>
      </div>
    </div>
  )
}

export default FAQ