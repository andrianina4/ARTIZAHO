"use client";

import React, {useState} from "react";
import AboutItem from "./AboutItem";

export default function AboutPopup({
	open,
	onClick,
	item,
}: {
	open: boolean;
	onClick: VoidFunction;
	item: any;
}) {
	const modalclass = `modal ${open ? "modal-open" : ""}`;

	const [artisan, setArtisan] = useState({
		artisan_name: "Mahefa",
		description: "Floral",
		artisan_image: "/temp/trainer-1.jpeg",
	});

	const [participant, setParticipant] = useState([
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

	const formattedDate: string = new Intl.DateTimeFormat("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
		// hour: "numeric",
		// minute: "numeric",
		// second: "numeric",
	}).format(item.start);

	return (
		<div className={modalclass}>
			<div className="bg-white min-w-[307px] min-h-[412px] p-3 flex flex-col gap-2 ">
				<div className="flex items-center opacity-50">
					<div className="grow">{formattedDate}</div>
					<button
						className="btn btn-sm btn-square btn-ghost text-brown relative -top-1 -right-2"
						onClick={onClick}>
						✕
					</button>
				</div>
				<div className="min-w-[278px] min-h-[36px] pl-[15px] py-[13px] bg-saumon text-bronze font-bold text-[12px] rounded-[4px]">
					{item.title}
				</div>
				<div className="text-[#030229] text-opacity-50">Craftsman</div>
				<AboutItem
					name={artisan.artisan_name}
					desc={artisan.description}
					pic={artisan.artisan_image}
				/>
				<div className="text-[#030229] text-opacity-50">Participants</div>
				{participant.map((item, index) => (
					<AboutItem
						key={index}
						name={item.name}
						desc={item.nb_member}
						pic={item.participant_image}
					/>
				))}
			</div>
		</div>
	);
}
