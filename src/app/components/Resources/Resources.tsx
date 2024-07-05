import React from 'react'
import Image from 'next/image'
import foliage from '../../assets/foliage.jpg'
import resources from '../../assets/resources2.jpg'

function Resources() {
  return (
    <div id='Resources' className='flex justify-between w-screen'>
      {/* <div className='relative w-1/2 h-full object-contain'>
        
        <div className='absolute top-0 bg-slate-50 w-full h-full opacity-70'></div>
        <h1 className='absolute top-1/3 left-2 text-8xl font-thin max-xl:text-7xl max-lg:text-6xl max-md:text-5xl'>RESOURCES</h1>
      </div> */}
      {/* <Image alt='resources' src={resources} className='object-cover w-1/2' /> */}
      <div className='relative bg-resources bg-cover w-1/2 m-0'>
        <div className='absolute top-0 bg-slate-50 w-full h-full opacity-70'></div>
        <h1 className='absolute top-1/3 left-2 text-8xl font-thin max-xl:text-7xl max-lg:text-6xl max-md:text-5xl'>RESOURCES</h1></div>
      <div className='w-1/2 text-xs max-md:text-[10px]'>
        <table className='flex-col justify-around items-center w-full'>
          <thead>
            <tr>
              <th scope="col">National Associations and Resources</th>
              <th scope="col">Suicide Prevention</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href='https://www.counseling.org/'>American Counseling Association</a></td>
              <td><a href='https://afsp.org/'>American Foundation for Suicide Prevention</a></td>
            </tr>
            <tr>
              <td><a href='https://mhanational.org/'>Mental Health America</a></td>
              <td><a href='https://save.org/'>Suicide Awareness Voices of Education</a></td>
            </tr>
            <tr>
              <td><a href='https://www.healthywomen.org/'>National Womens health Resource Center</a></td>
              <td><a href='https://coloradocrisisservices.org/'>Colorado Crisis Services</a></td>
            </tr>
            <tr>
              <td><a href='https://www.sleepfoundation.org/'>National Sleep Foundation</a></td>
              <td><a href='https://www.crisistextline.org/'>Crisis Text Line</a></td>
            </tr>
            <tr>
              <td><a href='https://www.nctsn.org/'>National Child Traumatic Stress Network</a></td>
              <td><a></a></td>
            </tr>
            <tr>
              <td><a href='https://www.nami.org/Home'>National Alliance for Mental Illness</a></td>
              <td><a></a></td>
            </tr>
            <tr>
              <td><a href='https://www.postpartum.net/'>Postpartum Support International</a></td>
              <td><a></a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Resources