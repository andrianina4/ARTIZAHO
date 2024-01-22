"use client"

import Button from '@/components/button'
import { UserAdd } from '@/constants/link/icons'
import React, { useState } from 'react'
import TeamsItem from './component/TeamsItem'

function Page() {

  return (
    <div className='h-full'>
       <div className='flex flex-row justify-between'>
          <div className='w-64'>
          <Button leftIcon={<UserAdd/>} content="New member" />
          </div>
          {/* Modal */}

          {/* Dropdown  */}
          <div className='flex flex-row items-center gap-7'>
            <p className='font-bold'>Filter by</p>
            <details className="dropdown">
              <summary className="m-1  ">Nom</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-white rounded-box w-52">
                  <li><a>Item 1</a></li>
                  <li><a>Item 2</a></li>
                </ul>
            </details>
          </div>
       </div>

       <div className='text-white-40% mt-3 grid grid-cols-6 ml-10'>
         <span>Name</span>
         <span>Email</span>
         <span>Tel</span>
         <span>Location</span>
         <span>Roles</span>
       </div>
      <TeamsItem/>
    </div>
  )
}

export default Page