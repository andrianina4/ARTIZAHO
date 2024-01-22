import { Date } from '@/constants/link/icons'
import React, { ReactNode } from 'react'

type BlocProps = {
    icon: ReactNode
    textTop: string
    textBottom: string
}

function Bloc(props: BlocProps) {
    const {icon, textTop, textBottom}= props
  return (
    <div className="flex flex-row bg-white flex-1 h-full gap-7 rounded-3xl px-10 py-7 ">
          <div className="bg-white-40% w-14 h-14 rounded-full flex justify-center items-center text-4xl text-brown ">
              {icon}
          </div>
          <div>
            <p className="text-gray-60%">{textTop}</p>
            <p className="text-brown-80% font-bold"> {textBottom}</p>
          </div>
    </div>
  )
}

export default Bloc