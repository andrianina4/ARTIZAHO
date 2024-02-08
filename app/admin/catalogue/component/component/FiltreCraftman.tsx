"use client";

import {Line} from "@/constants/link/icons";
import {IPanelCraftmen} from "@/types/IWorkshop";
import React, {useState} from "react";
import CraftmanItem from "./CraftmanItem";

const listCraftmen: IPanelCraftmen[] = [
	{
		craft_id: 1,
		craft_name: "Mahefa",
		craft_image: "/temp/trainer-1.jpeg",
		craft_domain: "Floral",
	},
	{
		craft_id: 2,
		craft_name: "Florent",
		craft_image: "/temp/trainer-1.jpeg",
		craft_domain: "Floral",
	},
	{
		craft_id: 3,
		craft_name: "Lita",
		craft_image: "/temp/trainer-1.jpeg",
		craft_domain: "Floral",
	},
];

export default function FiltreCraftman({list}: {list?: []}) {
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
				<div>List of all craftmen</div>
				<div className="w-4 h-4 bg-white rounded-full cursor-pointer" onClick={switchShow}>
					<Line style={{transform: "rotate(90deg)"}} />
				</div>
			</div>
			{Show && (
				<div className="flex flex-col gap-1">
					{listCraftmen.map((item, index) => (
						<div key={index} className="flex flex-row items-center gap-2">
							<input
								key={index}
								className="checkbox border-[#917155] checked:border-bronze [--chkbg:theme(colors.bronze)] [--chkfg:white]"
								type="checkbox"
								id={item.craft_id.toString()}
								checked={checked[item.craft_id]}
								onChange={() => handleChecked(item.craft_id)}
							/>
							<CraftmanItem craftman={item} />
						</div>
					))}
				</div>
			)}
		</div>
	);
}
