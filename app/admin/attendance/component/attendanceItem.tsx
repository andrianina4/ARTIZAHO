import React from 'react'


function AttendanceItem() {
  return (
    <div className='grid grid-cols-8 text-sm bg-white items-center rounded-lg h-14 clas'>
        <span className=''>001</span>
        <div>Mahefa</div>
        <span> Bouquet</span>
        <div>Nmbr: 2</div>
        <div>Entreprise</div>
        <div>Date de reservation</div>
        <div>Paye</div>
        <div className='font-bold'>...</div>
    </div>
  )
}

export default AttendanceItem