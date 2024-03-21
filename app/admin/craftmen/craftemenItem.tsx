import React from "react";
import {FlowerOne, PeopleFill} from "@/constants/link/icons";
import StarScore from "@/components/star-score";
import Image from "next/image";
import {ICraftman} from "@/types/ICraftman";
import {colorBackground, colorText} from "@/types/IColor";
import useDeleteCraftman from "@/hook/AdminArtisan/useDeleteCraftman";
import Link from "next/link";
import {getImgUrl} from "@/services/index.service";

function CraftemenItem({craftman}: {craftman: ICraftman}) {
	// const bg: string = colorBackground[craftman.craftman_workshop.color];
	// const txt: string = colorText[craftman.craftman_workshop.color];
	const bg = "bg-bronze";
	const txt = "text-bronze";

	const {handleDelete} = useDeleteCraftman(craftman.id);

	return (
		<div className="grid grid-cols-custom-2 text-sm font-bold hover:bg-white items-center rounded-lg h-14 pl-4 my-1">
			{/* NOM et IMAGE */}
			<div className="flex items-center gap-2">
				<div className="relative w-8 h-8 rounded-full bg-neutral flex items-center justify-center text-neutral-content">
					{craftman?.images?.length > 0 ? (
						<Image src={getImgUrl(craftman?.images)} className="rounded-full" alt="acc_image" fill />
					) : (
						<span className="text-lg uppercase">{craftman.name[0]}</span>
					)}
				</div>
				<div className="flex flex-col">
					<div className="font-bold">{craftman.name}</div>
					<p className="font-normal opacity-50">{craftman.expertise}</p>
				</div>
			</div>
			{/* DOMAINE */}
			<div>{craftman.expertise}</div>
			{/* WORKSHOP */}
			<div className="flex items-center gap-2">
				<div className={`w-7 h-7 flex items-center justify-center ${txt} ${bg} bg-opacity-30 rounded-lg`}>
					<FlowerOne />
				</div>
				<p className="opacity-50">Bouquet en vase</p>
			</div>
			{/* NB CLIENT */}
			<div className="flex gap-2 items-center">
				<PeopleFill className="opacity-70" />
				<div className="opacity-70">20</div>
			</div>
			{/* STAR */}
			<StarScore />
			{/* DON'T KNOW */}
			<details className="dropdown">
				<summary className="btn bg-transparent border-none shadow-none hover:bg-transparent">...</summary>
				<ul className="p-2 shadow menu dropdown-content z-[1] right-0 bg-base-100 rounded-box w-52">
					<li>
						<Link href={`/admin/craftmen/${craftman.id}/about`}>See more</Link>
					</li>
					<li onClick={handleDelete}>
						<a>Delete</a>
					</li>
				</ul>
			</details>
		</div>
	);
}

export default CraftemenItem;
