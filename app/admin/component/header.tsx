import Input from '@/components/input'
import { SearchIcon } from '@/constants/link/icons'
import React from 'react'


type HeaderProps = {
  BigTitle: string,  
  LittleTitle: string
}

function Header(props: HeaderProps) {
    const {BigTitle, LittleTitle} = props

  return (
    <div className='flex flex-row justify-between items-center'>
        <div >
            <p className='text-sm'>{LittleTitle}</p>
            <p className='text-brown text-2xl font-semibold '>{BigTitle}</p>
        </div>
        <div>
            <Input type='text' placeholder='Search'/>
        </div>
    </div>
  )
}

export default Header

