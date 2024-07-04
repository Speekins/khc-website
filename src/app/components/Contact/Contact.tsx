import React from 'react'
import ContactForm from '../ContactForm/ContactForm'

function Contact() {
  return (
    <div id='Contact' className='flex flex-col items-center justify-start mt-10'>
      <h1 className='text-8xl font-thin mb-6 max-xl:text-8xl max-lg:text-7xl max-md:text-6xl'>Contact</h1>
      <ContactForm/>
    </div>
  )
}

export default Contact