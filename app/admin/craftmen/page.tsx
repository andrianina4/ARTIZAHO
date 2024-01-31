'use client'

import Button from '@/components/button'
import { AddImage, CalendarIcon, UserAdd } from '@/constants/link/icons'
import React, {useState} from 'react'
import CraftemenItem from './craftemenItem'
import StarScore from '@/components/star-score'
import ModalLayout from '@/components/modal'
import Input from '@/components/input'
import Textarea from '@/components/textarea'
import Image from 'next/image'
import ImageCustom from '@/components/imageCustom'
import CraftmanCalendar from './component/calendar'
import CalendarSection from './content/calendarSection'
import ListSection from './content/listSection'
import Select from '@/components/select'
import { ISelect } from '@/types/IField'

type Props = {}

const selectItem:Array<ISelect>=[
	{value: "name",
	 label: "Name",
	},
	{
	  value:"participants",
	  label:"Partipants",
	}
  ]

function Page({}: Props) {

  const[open, setOpen] = useState(false)
  const[content, setContent]= useState(true)

  const handleToogle=()=>{
    setOpen(!open)
  }
  const switchContent=()=>{
    setContent(!content)
  }

  return (
    <div className=' h-full  flex flex-col  '>
      <div className='flex flex-row justify-between items-center'>
         <div className='w-64'> <Button leftIcon={<UserAdd/> } content="New craftman" className='w-64' onClick={handleToogle}/></div>
         <div className='flex flex-row items-center w-auto gap-7'>
              <div className='font-bold w-2/3 '>Filter by</div>
              <Select values={selectItem} className="!bg-white !h-10 !rounded-xl"/>
              <Button content="Calendar" leftIcon={<CalendarIcon/>} className={`!w-40 ${content ?'!bg-white !text-gray-60% ':''}`} onClick={switchContent}/>
          </div>
        
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
               <ImageCustom icon={<AddImage/>} className='bg-bronze text-white'/>
               <Input placeholder='Atelier'/>
               <button className='text-sm hover:bg-white-40% hover:bg-opacity-60 py-4 px-10 rounded-2xl'>+Ajouter plus d'atelier</button>
              </div>
          </ModalLayout>
      </div>
     
      <div className='h-[90%]'>
        { content ? <ListSection/>: <CalendarSection/> }
      </div>
    </div>
  )
}

export default Page