import React from 'react'
import Image from 'next/image'
import heroImage from '../../assets/Kimberly Haka Counseling.png'


export function Hero() {
  return (
    <div className='pt-10 w-full bg-hero bg-cover bg-fixed bg-no-repeat bg-bottom max-lg:bg-scroll'>
      <Image alt='hero' src={heroImage} className='w-1/2'/>
    </div>
  )
}