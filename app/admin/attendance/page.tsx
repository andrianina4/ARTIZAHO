import Divider from "@/components/divider";
import ProgressBar from "@/components/progress-bar";
import React from "react";
import AttendanceItem from "./component/attendanceItem";
import Select from '@/components/select'
import { ISelect } from '@/types/IField'



const headerList = [
	"ID",
	"Client name",
	"Workshop",
	"Participants",
	"Client Type",
	"Reservation Date",
	"Status",
];

const selectItem:Array<ISelect>=[
	{value: "name",
	 label: "Name",
	},
	{
	  value:"participants",
	  label:"Partipants"
	}
  ]

function page() {
	return (
		<div className="flex flex-col ">
			<div className="flex justify-between items-center">
				<div className="bg-white text-brown px-2.5 py-2 rounded-lg h-10">Reservations</div>
			<div className='flex flex-row items-center w-60 gap-7'>
              <div className='font-bold w-2/3   '>Filter by</div>
              <Select values={selectItem} className="!bg-white !h-10 !rounded-xl"/>
          	</div>
			</div>
			<Divider />
			<div className=" ">
				<div className="grid grid-cols-custom ml-4">
					{headerList.map((item, index) => {
						return (
							<span className="text-gray-60% font-bold text-sm" key={index}>
								{item}
							</span>
						);
					})}
				</div>
				<div>
					<AttendanceItem />
					<AttendanceItem />
				</div>
			</div>
		</div>
	);
}

export default page;
