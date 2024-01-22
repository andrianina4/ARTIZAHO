import React from 'react'

function TeamsItem() {
  return (
    <div className='bg-white my-4 grid grid-cols-6 pl-10 h-14 rounded-2xl items-center'>
        <div className='flex flex-row items-center gap-2'>
            <div className='h-[30px] w-[30px] rounded-full bg-slate-400'></div>
            <span className='text-xs'> Name</span>
        </div>
            <span className='text-xs font-bold'>Email</span>
            <span className='text-xs font-bold'>Tel</span>
            <span className='text-xs font-bold'>Location</span>
            <div className='text-xs font-bold '>Roles</div>
        <div className='flex justify-end mr-10'> <span className='text-xs font-bold '>...</span></div>
  </div>
  )
}

export default TeamsItem