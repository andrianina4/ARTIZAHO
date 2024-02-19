import React from "react";
import Image from "next/image";
import {IAdmin} from "../content/Team";

function SettingItem({admin_name, admin_img, admin_mail}: IAdmin) {
	return (
		<div className="grid grid-cols-custom-5 text-sm bg-white-40% items-center rounded-lg h-14 pl-4 my-1 w-full ">
			<div className="flex items-center gap-2">
				<div className="w-[30px] h-[30px] rounded-full bg-slate-500 relative">
					<Image src={admin_img} alt="" fill className="rounded-full" />
				</div>
				<p className="font-bold">{admin_name}</p>
			</div>
			<div className="text-gray-60%">{admin_mail}</div>
			<div className="text-gray-60% font-bold">Administrator</div>
		</div>
	);
}

export default SettingItem;
