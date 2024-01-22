import React, { ReactNode } from 'react'

type ModalProps = {
    children:ReactNode,
    open: boolean,
    onClick: VoidFunction
}

function ModalLayout(props: ModalProps) {
 const{children, open, onClick} = props
 const modalclass = ` modal modal-middle  sm:modal-middle ${open ? 'modal-open' : ''}`
  return (
    <div className={modalclass}>
        <div className='bg-white h-[550px] w-[830px] rounded-3xl p-10 flex flex-row relative'>
        <button className="btn btn-sm btn-square btn-ghost bg-bronze text-white absolute right-4 top-4" onClick={onClick} >✕</button>
            {children}
        </div>

    </div>
  )
}

export default ModalLayout