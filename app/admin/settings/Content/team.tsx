'use client'

import React, { useState } from 'react'
import SettingItem from '../component/settingItem'
import Input from '@/components/input'
import Button from '@/components/button'
import { Check } from '@/constants/link/icons'

type Props = {}


function Team({}: Props) {

  const[isVisible, setIsVisible] =useState<boolean>(false)

  const showForm =()=>{
    setIsVisible(true)
  }

  const hideForm =()=>{
    setIsVisible(false)
  }

  return (
    <div className='flex flex-col h-full bg-white rounded-3xl px-20 py-10'>
       <form action="">
        <SettingItem img={"/temp/vase.png"} />
        <SettingItem img={"/temp/vase.png"} />
        {isVisible && <div className='flex items-center gap-2  '>
            <Input placeholder='Name' className='w-1/2'/>
            <Input placeholder='Email' className='w-1/2' />
            <Button leftIcon={<Check/>} className='!w-14 h-14 bg-white-40% !text-green'  onClick={hideForm} />
        </div>}
        <Button content="Add new member" className='bg-white-40% !text-gray-60%' onClick={showForm}/>
       </form>
    </div>
  )
}

export default Team