import React from 'react'

function Resources() {
  return (
    <div id='Resources' className='flex justify-between w-screen mb-12 min-h-[75vh]'>
      <div className='relative bg-resources bg-cover w-1/2 max-sm:w-1/4'>
        <div className='absolute top-0 bg-slate-50 w-full h-full opacity-70'></div>
        <h1 className='absolute top-8 left-8 text-8xl font-thin max-xl:text-7xl max-lg:text-6xl max-md:text-5xl max-sm:rotate-90 max-sm:top-36 max-sm:-left-10 max-[500px]:-left-20'>RESOURCES</h1>
      </div>
      <div className='w-1/2 text-sm max-md:text-xs mt-10 mb-10 max-sm:w-3/4 z-10'>
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