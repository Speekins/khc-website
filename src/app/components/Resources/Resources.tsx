import React from 'react'
import Image from 'next/image'
import foliage from '../../assets/foliage.jpg'
import resources from '../../assets/resources.jpg'

function Resources() {
  return (
    <div id='Resources' className='flex items-center justify-center mt-12'>
      <table className='flex-col justify-around'>
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
      <Image alt='resources' src={resources} className='w-1/2 p-2' />
    </div>
  )
}

export default Resources