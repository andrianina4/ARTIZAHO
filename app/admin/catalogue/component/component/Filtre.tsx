"use client";

import {Line} from "@/constants/link/icons";
import {IPanelWorkshop} from "@/types/IWorkshop";
import React, {useState} from "react";
import WorkshopItem from "../WorkshopItem";

const listWorkshop: IPanelWorkshop[] = [
	{
		shop_id: 1,
		shop_name: "Bouquet en vase",
		shop_color: "bronze",
	},
	{
		shop_id: 2,
		shop_name: "Bouquet sur mousse",
		shop_color: "green",
	},
	{
		shop_id: 3,
		shop_name: "Bouquet en vase",
		shop_color: "blue",
	},
];

export default function Filtre({title, list}: {title?: string; list?: []}) {
	// TODO : checkbox filtre
	const [checked, setChecked] = useState(false);
	const handleChecked = () => {
		setChecked(!checked);
	};

	// TODO : btn show list
	const [Show, setShow] = useState(false);
	const switchShow = () => {
		setShow(!Show);
	};

	return (
		<div>
			<div className="flex items-center gap-5 font-bold mt-7 mb-3">
				<div className="">{title}</div>
				<div className="w-4 h-4 bg-white rounded-full cursor-pointer" onClick={switchShow}>
					<Line style={{transform: "rotate(90deg)"}} />
				</div>
			</div>
			{Show && (
				<div className="flex flex-col gap-1">
					{listWorkshop.map((workshop, index) => (
						<div key={index} className="flex flex-row items-center gap-2">
							<input
								key={index}
								className="checkbox border-[#917155] checked:border-bronze [--chkbg:theme(colors.bronze)] [--chkfg:white]"
								type="checkbox"
								checked={checked}
								onChange={handleChecked}
							/>
							<WorkshopItem workshop={workshop} />
						</div>
					))}
				</div>
			)}
		</div>
	);
}
