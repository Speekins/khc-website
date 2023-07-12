import React from 'react'
import Image from 'next/image'
import heroImage from '../../assets/Kimberly Haka Counseling.png'
import heroBackground from '../../assets/hero.jpg'

export function Hero() {
  return (
    <div className='h-screen w-full bg-hero bg-cover bg-no-repeat'>
      <Image alt='hero' src={heroImage} className='w-1/2'/>
    </div>
  )
}