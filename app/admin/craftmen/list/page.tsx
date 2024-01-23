import Button from '@/components/button'
import Divider from '@/components/divider'
import { ArrowLeft } from '@/constants/link/icons'
import React from 'react'
import InputContainer from './component/InputContainer'
import Input from '@/components/input'

type Props = {

}

function Page(props: Props) {
  return (
    <div className='bg-white h-full rounded-3xl px-9 py-6'>
        <div className='flex items-center gap-4'>
            <Button content='' isBackButton leftIcon={<ArrowLeft/>}  className='!w-6 !h-6 !bg-transparent !text-brown font-bold '/>
            <span className='text-2xl font-semibold text-brown-80%'>List of craftman</span>
        </div>
        <Divider/>
        <div className='text-brown font-semibold ml-12'>
            <span>About the craftman</span>
        </div>
        <div className=' flex bg-slate-400 mx-12 gap-2'>
            <div className='bg-red-300 w-3/5'>
                <InputContainer title='Nom'>
                    <Input placeholder='Mahefa'/>
                </InputContainer>
                <InputContainer title='Nom'>
                    <Input placeholder='Mahefa'/>
                </InputContainer>
                <InputContainer title='Nom'>
                    <Input placeholder='Mahefa'/>
                </InputContainer>
            </div>
            <div className='bg-green w-2/5'>b</div>
        </div>
    </div>
  )
}

export default Page