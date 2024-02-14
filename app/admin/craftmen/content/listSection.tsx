import React from 'react'
import CraftemenItem from '../craftemenItem'

function ListSection() {
  return (
    <div className='flex flex-col'>
          <div className='grid grid-cols-custom-2 ml-4 mt-10 mb-4 '>
             <span className='text-gray-60% font-bold text-sm'>Name</span>
             <span className='text-gray-60% font-bold text-sm' >Savoir-faire</span>
             <span className='text-gray-60% font-bold text-sm'>Atelier</span>
             <span className='text-gray-60% font-bold text-sm'>Total client</span>
             <span className='text-gray-60% font-bold text-sm'>Note moyenne</span>
          </div>
          <CraftemenItem img={"/temp/vase.png"}/>
      </div>
     
  )
}

export default ListSection