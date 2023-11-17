import React from 'react'
import Image from 'next/image'
import foliage from '../../assets/foliage.jpg'

function Location() {
  return (
    <div id='Location' className='flex items-center justify-center mt-12'>
      <iframe className="m-8"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d757.8232221168776!2d-105.01233633700681!3d39.6135079921206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c81cad6a2824d%3A0x40aee1320dd2aef3!2s2009%20W%20Littleton%20Blvd%2C%20Littleton%2C%20CO%2080120!5e0!3m2!1sen!2sus!4v1697595046681!5m2!1sen!2sus" width="600" height="450" loading="lazy"></iframe>
      <p className='w-1/2 p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  )
}

export default Location