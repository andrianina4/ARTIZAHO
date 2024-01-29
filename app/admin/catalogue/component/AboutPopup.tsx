import React from "react";
import AboutItem from "./AboutItem";

export default function AboutPopup({open, onClick}: {open: boolean; onClick: VoidFunction}) {
	const modalclass = `modal ${open ? "modal-open" : ""}`;

	return (
		<div className={modalclass}>
			<div className="bg-white min-w-[307px] min-h-[412px] p-3 flex flex-col gap-2 ">
				<div className="flex items-center opacity-50">
					<div className="grow text-[12px]">24 Janvier 2024</div>
					<button
						className="btn btn-sm btn-square btn-ghost text-brown relative -top-1 -right-2"
						onClick={onClick}>
						✕
					</button>
				</div>
				<div className="min-w-[278px] min-h-[36px] pl-[15px] py-[13px] bg-saumon text-bronze text-[12px] rounded-[4px]">
					Bouquet en vase
				</div>
				<div className="text-[#030229] text-opacity-50">Artisans</div>
				<AboutItem name="Mahefa" desc="Floral" pic="" />
				<div className="text-[#030229] text-opacity-50">Participant</div>
				<AboutItem name="Safe Travel" desc="4 Membres" pic="" />
				<AboutItem name="Codeo Travel" desc="2 Membres" pic="" />
				<AboutItem name="Robert Fox" desc="" pic="" />
			</div>
		</div>
	);
}
