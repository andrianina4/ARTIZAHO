import { ICraftman } from '@/types/ICraftman'
import React, { Children, ReactNode } from 'react'

type AdminItemProps = {
	craftman: ICraftman
	className: ReactNode
	children: ReactNode
}

function AdminItem(props: AdminItemProps) {
	const {craftman, className, children}= props
	const {craftman_name, craftman_email,craftman_location,craftman_nbr}= craftman

  return (
    <div className={`flex flex-row  items-center  bg-white w-full h-36  p-10 ${className}`}>
		<div className="flex flex-row  flex-1  items-center gap-3.5 ">
			<div className="w-[56px] h-[56px] rounded-full bg-slate-500 "></div>
				<div>
					<p className="font-semibold">{craftman_name}</p>
					<p>{craftman_email}</p>
				</div>
		</div>
		<div className="flex flex-1 font-semibold">{ craftman_location}</div>
		<div className="flex flex-1 font-semibold"> {craftman_nbr}</div>
		{children}
	</div>
  )
}

export default AdminItem