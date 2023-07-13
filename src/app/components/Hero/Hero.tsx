import React from 'react'
import Image from 'next/image'
import heroImage from '../../assets/Kimberly Haka Counseling.png'
import heroBackground from '../../assets/hero.jpg'

export function Hero() {
  return (
    <div className='pt-10 position: absolute h-screen w-full bg-hero border'>
      <Image alt='hero' src={heroImage} className='w-1/2'/>
    </div>
  )
}