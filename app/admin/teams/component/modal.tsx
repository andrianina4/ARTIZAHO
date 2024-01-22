import Button from '@/components/button'
import Input from '@/components/input'
import { UserAdd } from '@/constants/link/icons'
import React from 'react'

type ModalProps={
  onClick?: VoidFunction

}

function ModalTeam(props:ModalProps) {
  const{onClick}= props

  return (
    <div className=' modal h-[550px] w-[830px] bg-white rounded-3xl p-10 flex flex-row relative'>
       <div className='modal-box'>
        <div className=' flex flex-col  justify-between w-3/5'>
              <div className='flex items-center text-bronze text-2xl font-semibold gap-4 '> <span><UserAdd/></span> New member</div>
            
              <div>
                <Input placeholder='Name'/>
                <Input placeholder='Email'/>
                <Input placeholder='Phone'/>
                <Input placeholder='Location'/>
              </div>
              <Button content="Add new member" />
          </div>
          <div className='bg-red-300 w-2/5'>b</div>
       </div>
    </div>
  )
}

export default ModalTeam