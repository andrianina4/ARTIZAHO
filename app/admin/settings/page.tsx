import Link from 'next/link'
import React from 'react'
import Compte from './Content/compte'
import Team from './Content/team'


type Props = {}

function Page({}: Props) {
  return (
    <div className=' flex flex-col h-full w-[95%] gap-4' >
      <div className='flex gap-2 items-center '>
          <span className='text-brown bg-white py-3 px-6 rounded-xl'> Compte</span>
          <span className='py-3 px-6' > Team</span>
      </div>
      <Team/>
    </div>
  )
}

export default Page