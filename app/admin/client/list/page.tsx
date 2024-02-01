import React from 'react'
import Divider from '@/components/divider'
import Button from '@/components/button'
import { Email, LeftLine, Phone, RoundPlace, Send, Users } from '@/constants/link/icons'
import ClientItem from '../component/clientItem'
import BookingItem from './component/bookingItem'
import ProfileCard from '@/components/ProfileCard'

type Props = {}

function page({}: Props) {
  return (
    <div className='bg-white h-full rounded-3xl px-9 py-6'>
        <div className='flex items-center gap-4'>
            <Button content='' isBackButton leftIcon={<LeftLine/>}  className='!w-6 !h-6 !bg-transparent !text-brown font-bold '/>
            <span className='text-2xl font-semibold text-brown-80%'>List of clients</span>
        </div>
        <Divider/>
        <div className='text-brown text-lg font-bold ml-12'>
            <span>Booking list</span>
        </div>
        <div className='flex flex-row w-full '>
            <div className='flex flex-col w-2/3'>
                <div className='grid grid-cols-custom-4 ml-12 my-3'>
                    <span className='text-sm text-gray-60% font-bold'>Craftmen</span>
                    <span className='text-sm text-gray-60% font-bold'>Workshops</span>
                    <span className='text-sm text-gray-60% font-bold'>Booking date</span>
                    <span className='text-sm text-gray-60% font-bold'>Status</span> 
                </div>
                <BookingItem img={"/temp/vase.png"} />
                <BookingItem img={"/temp/vase.png"} />
            </div>
            <div className='w-1/3 flex justify-center '>
            < ProfileCard img={"/temp/vase.png"} >
                <div className='flex items-center gap-2 pl-4 bg-white   rounded-3xl w-56 h-10  '>
                    <span className='text-gray-60%'><Users/></span>
                    <span className='text-sm'> Total Client</span>
                </div>
                <div className='flex items-center gap-2 pl-4 bg-white  rounded-3xl w-56 h-10  '>
                    <span className='text-gray-60%'><Phone/></span>
                    <span className='text-sm'>034 45 458 44</span>
                </div>
                <div className='flex items-center gap-2 pl-4 bg-white  rounded-3xl w-56 h-10  '>
                    <span className='text-gray-60%'><Email/></span>
                    <span className='text-sm'>safetravel@gmail.com</span>
                </div>
                <div className='flex items-center gap-2 pl-4 bg-white  rounded-3xl w-56 h-10  '>
                    <span className='text-gray-60%'><RoundPlace/></span>
                    <span className='text-sm'>Antananarivo Madagascar</span>
                </div>
            </ProfileCard>
            </div>
        </div>
    </div>
  )
}

export default page