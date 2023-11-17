import React from 'react'
import Image from 'next/image'
import heroImage from '../../assets/Kimberly Haka Counseling.png'


export function Hero() {
  return (
    <div className='pt-10 h-screen w-full bg-hero bg-cover bg-no-repeat bg-center bg-fixed'>
      <Image alt='hero' src={heroImage} className='w-1/2'/>
    </div>
  )
}