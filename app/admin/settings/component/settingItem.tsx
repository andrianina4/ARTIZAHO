import React from "react";
import Image from "next/image";

type Props = {
	img: string;
};

function SettingItem(props: Props) {
	const {img} = props;

	return (
		<div className="grid grid-cols-custom-5 text-sm font-bold bg-white-40% items-center rounded-lg h-14 pl-4 my-1 w-full ">
			<div className="flex items-center gap-2">
				<div className="w-[30px] h-[30px] rounded-full bg-slate-500 relative">
					<Image src={img} alt={`shopping-1`} fill className="rounded-full" />
				</div>
				<div className="flex flex-col items-center ">
					<p className="text-black-default font-bold ">Mahefa</p>
					<p className="text-gray-60% font-normal"> Floral</p>
				</div>
			</div>
			<div className="text-gray-60% font-normal">email@gmail.com</div>
			<div className="text-gray-60% font-normal">Admin</div>
		</div>
	);
}

export default SettingItem;
