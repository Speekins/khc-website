import React from 'react'
import Image from 'next/image'
import khc from '../../assets/khc_headshot.jpeg'

function About() {
  return (
    <div id='About' className='flex items-center justify-evenly mt-12 max-md:flex-col'>
      <Image alt='headshot' src={khc} className='w-1/4 m-2 rounded-lg max-xl:w-1/3 max-md:w-1/2'/>
      <div className='w-1/2 border-4 p-4 rounded-lg bg-lightBlue text-slate font-light text-lg max-lg:text-md max-md:w-5/6 max-sm:text-xs'>
        <p className='p-2'>Kimberly Haka is a Licensed Professional Counselor, Certified Addiction Counselor, and a National Board Certified Counselor. Kimberly is also EMDR trained. Kimberly&apos;s professional experience includes working with anxiety, depression, grief and loss, life transitions. She also enjoys working with postpartum mothers.</p>
        <p className='p-2'>Kimberly enjoys a strength based approach building on what one has to offer to live without limiting pressures. Kimberly approaches every client knowing everyone is different, utilizing a variety of modalities such as EMDR, motivational interviewing, and cognitive Behavioral Therapy.</p>
        <p className='p-2'>Kimberly is warm, compassionate, fun-loving, and believes that every person has the innate potential to achieve personal growth. Her laid back and easy-to-talk-to style goes a long way in helping every client feel &quot;at home&quot; when building a therapeutic relationship.</p>
      </div>
    </div>
  )
}

export default About