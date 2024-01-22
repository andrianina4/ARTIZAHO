'use client'

import Link from 'next/link'
import React from 'react'
import Button from './button'
import { Dashboard, EventCheck, Logout, Money, Users } from '@/constants/link/icons'
import { usePathname } from 'next/navigation'


const links =[
    {name: 'Tableau de bord', href:'/admin', icon: Dashboard },
    {name: 'Teams',href:'/admin/teams', icon: Users },
    {name: 'Paiements', href:'/admin/paiements', icon: Money },
    {name: 'Attendance', href:'/admin/attendance', icon: EventCheck},
    // {name: 'Settings', href:'admin/',icon: Heart},

]

function Sidebar() {
    const pathname= usePathname()
  return (
    <div className=' flex flex-col justify-around w-full h-full rounded-3xl bg-gradient-to-t from-brown to-brown-60%' >
        <div className='flex flex-col items-center gap-2'>
            <div className=' flex justify-center items-center w-[128px] h-[128px] rounded-full bg-white'>
                com
            </div>
            <div className='text-white text-center'>
                Safe Travels
            </div>
            <div className='text-white text-sm'>
                safetravels@gmail.com
            </div>
        </div>
        <div className='flex flex-col gap-2'>
            {links.map((link)=>{
                const LinkIcon= link.icon
                return(
                <Link key={link.name}
                        href={link.href} className={`pl-5 gap-5 font-semibold  ${pathname ===link.href ? 'active': 'noactive'}`} >
                    <LinkIcon/> {link.name}
                </Link>
                )
            })}
            
         </div>
        <div className=' flex justify-center'>
            <button className=' flex flex-row justify-center items-center font-semibold  bg-white px-4 py-3.5 w-3/4 rounded-2xl gap-x-2 text-brown  '>
                <Logout/>
                <p> Logout</p>
            </button>
        </div>
         

    </div>
  )
}

export default Sidebar

// <Link className='active' href={link.admin}>
//                 <Heart/> Tableau de bord
//             </Link>
//             <Link className='  href={link.teams}>
//                 <Heart/> Teams
//             </Link>
//             <Link className=' text-white flex flex-row items-center h-14' href={link.paiements}>
//                 <Heart/> Paiements
//             </Link>
//             <Link className=' text-white flex flex-row items-center h-14' href={link.admin}>
//                 <Heart/> Tableau de bord
//             </Link>