"use client";

import {FlowerOne, Line, Plus} from "@/constants/link/icons";
import {IPanelWorkshop} from "@/types/IWorkshop";
import React, {useState} from "react";
import WorkshopItem from "./WorkshopItem";

const listWorkshop: IPanelWorkshop[] = [
	{
		shop_id: 1,
		shop_name: "Bouquet en vase",
		shop_icon: <FlowerOne />,
		shop_color: "bronze",
	},
	{
		shop_id: 2,
		shop_name: "Bouquet sur mousse",
		shop_icon: <FlowerOne />,
		shop_color: "green",
	},
	{
		shop_id: 3,
		shop_name: "Bouquet en vase",
		shop_icon: <FlowerOne />,
		shop_color: "blue",
	},
];

export default function FiltreWorkshop({list}: {list?: []}) {
	// *  Control the checkboxes
	const [checked, setChecked] = useState<{[key: number]: boolean}>({});
	const handleChecked = (key: number) => {
		setChecked({
			...checked,
			[key]: !checked[key],
		});
	};

	// TODO : asiana effet mba tsaratsara
	const [Show, setShow] = useState(false);
	const switchShow = () => {
		setShow(!Show);
	};

	return (
		<div className="w-52">
			<div className="flex items-center justify-between font-bold mt-7 mb-3">
				<div>List of all workshops</div>
				<div className="w-4 h-4 bg-white rounded-full cursor-pointer" onClick={switchShow}>
					{Show ? <Line style={{transform: "rotate(90deg)"}} /> : <Plus />}
				</div>
			</div>
			{Show && (
				<div className="flex flex-col gap-1">
					{listWorkshop.map((item, index) => (
						<div key={index} className="flex flex-row items-center gap-2">
							<input
								key={index}
								className="checkbox border-[#917155] checked:border-bronze [--chkbg:theme(colors.bronze)] [--chkfg:white]"
								type="checkbox"
								id={item.shop_id.toString()}
								checked={checked[item.shop_id]}
								onChange={() => handleChecked(item.shop_id)}
							/>
							<WorkshopItem workshop={item} />
						</div>
					))}
				</div>
			)}
		</div>
	);
}
