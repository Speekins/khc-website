import React from 'react'

function Location() {
  return (
    <div id='Location' className='flex flex-col items-center justify-center mt-10'>
      <h1 className='text-8xl font-thin mb-6'>Location</h1>
      <iframe className="m-8 w-[800px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d757.8232221168776!2d-105.01233633700681!3d39.6135079921206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c81cad6a2824d%3A0x40aee1320dd2aef3!2s2009%20W%20Littleton%20Blvd%2C%20Littleton%2C%20CO%2080120!5e0!3m2!1sen!2sus!4v1697595046681!5m2!1sen!2sus" width="600" height="450" loading="lazy"></iframe>
    </div>
  )
}

export default Location