"use client"

import Button from '@/components/button'
import { UserAdd } from '@/constants/link/icons'
import React, { useState } from 'react'
import TeamsItem from './component/TeamsItem'
import ModalLayout from '@/components/modal'
import Input from '@/components/input'
import Image from 'next/image'

function Page() {

  const[open, setOpen] = useState(false)
  const handleToogle=()=>{
    setOpen(!open)
  }

  return (
    <div className='h-full'>
       <div className='flex flex-row justify-between'>
          <div className='w-64'>
            <Button leftIcon={<UserAdd/>} content="New member" onClick={handleToogle} />
          </div>
          <ModalLayout open={open} onClick={handleToogle} className=' h-[550px] w-[830px]'>
            <div className=' flex flex-col  justify-between w-3/5'>
                <div className='flex items-center text-bronze text-2xl font-semibold gap-4 '> 
                  <span><UserAdd/></span> New member
                </div>
              
                <div>
                  <Input placeholder='Name'/>
                  <Input placeholder='Email'/>
                  <Input placeholder='Phone'/>
                  <Input placeholder='Location'/>
                </div>
                <Button content="Add new member" />
            </div>
            <div className=' w-2/5 flex justify-center '>
               <div className=' relative w-[168px] h-[168px] mt-10 '>
               <Image 
                 src={"/temp/vase.png"} 
                 alt={`shopping-1`}
                 fill
                  className="rounded-full"
                  />
               </div>
            </div>
          </ModalLayout>

          {/* Dropdown  */}
          <div className='flex flex-row items-center gap-7'>
            <p className='font-bold'>Filter by</p>
            <details className="dropdown dropdown-end">
              <summary className="m-1  ">Nom</summary>
                <ul className="p-2 shadow menu dropdown-content  z-[1] bg-white rounded-box w-52 ">
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