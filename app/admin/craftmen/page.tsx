'use client'

import Button from '@/components/button'
import { UserAdd } from '@/constants/link/icons'
import React, {useState} from 'react'
import CraftemenItem from './craftemenItem'
import StarScore from '@/components/star-score'
import ModalLayout from '@/components/modal'
import Input from '@/components/input'
import Textarea from '@/components/textarea'
import Image from 'next/image'

type Props = {}

function Page({}: Props) {

  const[open, setOpen] = useState(false)
  const handleToogle=()=>{
    setOpen(!open)
  }

  return (
    <div className=' h-full  flex flex-col gap-10 '>
      <div className='flex flex-row'>
         <div className='w-64'> <Button leftIcon={<UserAdd/> } content="New craftman" className='w-64' onClick={handleToogle}/></div>
         {/* Modal crafmen */}
          <ModalLayout open={open} onClick={handleToogle} className='w-[h-[550px] w-[830px]'>
              <div className=' flex flex-col  justify-between w-3/5'>
                    <div className='flex items-center text-bronze text-2xl font-semibold gap-4 '> 
                      <span><UserAdd/></span> New craftman
                    </div>
                  
                    <div>
                      <Input placeholder='Name'/>
                      <Input placeholder='Email'/>
                      <Textarea placeholder='About the craftman ' className='h-48'/>
                    </div>
                    <Button content="Add new craftman" />
              </div>
              <div className=' w-2/5 flex flex-col items-center gap-2 '>
               <div className=' relative w-[168px] h-[168px] mt-10 '>
                <Image 
                  src={"/temp/vase.png"} 
                  alt={`shopping-1`}
                  fill
                    className="rounded-full"
                    />
               </div>
               <Input placeholder='Atelier'/>
               <button className='text-sm hover:bg-white-40% hover:bg-opacity-60 py-4 px-10 rounded-2xl'>+Ajouter plus d'atelier</button>
              </div>
          </ModalLayout>
      </div>
      <div className='flex flex-col'>
          <div className='grid grid-cols-custom-2 ml-4'>
             <span className='text-gray-60% font-bold text-sm'>Name</span>
             <span className='text-gray-60% font-bold text-sm' >Savoir-faire</span>
             <span className='text-gray-60% font-bold text-sm'>Atelier</span>
             <span className='text-gray-60% font-bold text-sm'>Total client</span>
             <span className='text-gray-60% font-bold text-sm'>Note moyenne</span>
          </div>
          <CraftemenItem img={"/temp/vase.png"}/>
      </div>
     
    </div>
  )
}

export default Page