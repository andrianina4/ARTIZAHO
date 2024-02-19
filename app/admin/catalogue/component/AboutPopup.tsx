"use client";

import React, {useState} from "react";
import AboutItem from "./AboutItem";
import {EditFill, Place, Time} from "@/constants/link/icons";
import Link from "next/link";
import {colorBackground, colorText} from "@/types/IColor";
import {formatToDMY} from "@/utils/Format";

export default function AboutPopup({
	open,
	onClick,
	item,
}: {
	open: boolean;
	onClick: VoidFunction;
	item: any;
}) {
	const bg: string = colorBackground[item.textColor];
	const txt: string = colorText[item.textColor];

	const modalclass = `modal ${open ? "modal-open" : ""}`;

	const [artisan, setArtisan] = useState({
		artisan_name: "Mahefa",
		description: "Floral",
		artisan_image: "/temp/trainer-1.jpeg",
	});

	const [participants, setParticipants] = useState([
		{
			name: "Safe Travel",
			nb_member: 3,
			participant_image: "/temp/vase.png",
		},
		{
			name: "Codeo Travel",
			nb_member: 2,
			participant_image: "/temp/vase.png",
		},
		{
			name: "Robert Fox",
			nb_member: 0,
			participant_image: "/temp/vase.png",
		},
	]);

	return (
		<div className={modalclass}>
			<div className="bg-white w-[307px] p-3 flex flex-col gap-2 ">
				<div className="flex items-center opacity-50">
					<div className="grow">{formatToDMY(item.start)}</div>
					<Link href={`/admin/catalogue/${item.id}`}>
						<div className="flex items-center justify-center w-14 opacity-60 cursor-pointer">
							<EditFill className="w-6 h-6 ml-6" />
						</div>
					</Link>
					<button
						className="btn btn-sm btn-square btn-ghost text-brown relative -top-1 -right-2"
						onClick={onClick}>
						✕
					</button>
				</div>
				<div
					className={`min-w-[278px] min-h-[36px] px-4 py-4 flex ${txt} font-bold ${bg} bg-opacity-30 rounded-md`}>
					<div className="grow">{item.title}</div>
					<div>15 €</div>
				</div>
				<div className="flex flex-col gap-2">
					<div className="text-[#030229] text-opacity-50">Craftsman</div>
					<AboutItem
						name={artisan.artisan_name}
						desc={artisan.description}
						pic={artisan.artisan_image}
					/>
				</div>
				<div className="text-brown text-xs flex gap-3 mt-12">
					<div className="flex flex-row gap-1 items-center">
						<Time className="" />
						1:30
					</div>
					<div className="flex flex-row gap-1">
						<Place className="" />
						Antananarivo
					</div>
				</div>
			</div>
		</div>
	);
}
