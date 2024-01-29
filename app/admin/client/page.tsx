import React from 'react'
import Divider from '@/components/divider'
import AttendanceItem from '../attendance/component/attendanceItem'
import ClientItem from './component/clientItem'

type Props = {}

const headerList =["Nom","Email", "Phone","Location","Participants"]


function Page({}: Props) {
  return (
    <div className='flex flex-col gap-4'>
        <div className='flex justify-between'>
          <div className='bg-white text-brown px-2.5 py-2 rounded-lg'>Reservations</div>
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
        <Divider/>
        <div className='grid grid-cols-custom-3 ml-4'>
          {
            headerList.map((item, index)=>{
               return(
                <span className='text-gray-60% font-bold text-sm' key={index}>{item}</span>
               )
            })
          }
        </div>
        <div>
         <ClientItem img={"/temp/vase.png"} />
         <ClientItem img={"/temp/vase.png"} />
        </div>
    </div>
  )
}

export default Page