import React from 'react'
import Image from 'next/image'
import heroImage from '../../assets/Kimberly Haka Counseling.png'
import foliageImage from '../../assets/foliage.jpg'

export function Hero() {
  return (
    <div className='pt-10 w-full bg-hero bg-cover bg-no-repeat bg-center bg-fixed'>
      <Image alt='hero' src={heroImage} className='w-1/2'/>
    </div>
  )
}