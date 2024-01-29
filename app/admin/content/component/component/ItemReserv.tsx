import {Heart, Users} from "@/constants/link/icons";
import React, {ReactNode} from "react";

type TItem = {
	id: number;
	name: string;
	domaine: string;
	image: string;
	title: string;
	icon: ReactNode;
	nombre: number;
	type: string;
	date: string;
	paid: boolean;
};

export default function ItemReserv({item}: {item: TItem}) {
	return (
		<div className="grid grid-cols-custom text-sm w-full font-bold bg-white items-center rounded-xl h-14 pl-4 my-1 ">
			<span className="opacity-70">{item.id}</span>
			<div className="flex items-center gap-2">
				<div className="flex flex-row items-center gap-2">
					<img src={item.image} className="w-8 h-8 rounded-full bg-slate-500" />
					<div>
						<p className="text-black-default font-bold">{item.name}</p>
						<p className="text-gray-60% font-normal">{item.domaine}</p>
					</div>
				</div>
			</div>
			<div className="flex items-center gap-2">
				<div className="w-6 h-6 bg-saumon rounded-lg flex items-center justify-center">
					{item.icon}
				</div>
				<div className="opacity-50">{item.title}</div>
			</div>
			<div className="flex gap-2 items-center opacity-70">
				<Users /> {item.nombre}
			</div>
			<div className="opacity-70">{item.type}</div>
			<div className="opacity-70">{item.date}</div>
			<div className="badge bg-greenLight text-green border-0">Paid</div>
			<div className="font-bold">...</div>
		</div>
	);
}
