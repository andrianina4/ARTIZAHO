import React from "react";
import {FlowerOne, PeopleFill} from "@/constants/link/icons";
import StarScore from "@/components/star-score";
import Image from "next/image";
import {ICraftman} from "@/types/ICraftman";
import {colorBackground, colorText} from "@/types/IColor";
import useDeleteCraftman from "@/hook/AdminArtisan/useDeleteCraftman";
import Link from "next/link";

function CraftemenItem({craftman}: {craftman: ICraftman}) {
	// const bg: string = colorBackground[craftman.craftman_workshop.color];
	// const txt: string = colorText[craftman.craftman_workshop.color];
	const bg = "bg-bronze";
	const txt = "text-bronze";

	const {handleDelete} = useDeleteCraftman(craftman.id);
	return (
		<div className="grid grid-cols-custom-2 text-sm font-bold bg-white items-center rounded-lg h-14 pl-4 my-1">
			{/* NOM et IMAGE */}
			<div className="flex items-center gap-2">
				{craftman.images.length > 0 ? (
					<div className="relative w-11 h-11 rounded-full bg-slate-500">
						<Image
							src={craftman.images[0]?.base_url}
							className="w-11 h-11 rounded-full bg-slate-500"
							alt="acc_image"
							fill
						/>
					</div>
				) : (
					<div className="w-11 h-11 flex items-center justify-center bg-neutral text-neutral-content rounded-full">
						<span className="text-lg uppercase">{craftman.name[0]}</span>
					</div>
				)}
				{/* <div className="w-[30px] h-[30px] rounded-full bg-slate-500 relative">
					
					<div className="bg-neutral text-neutral-content rounded-full w-[45px]">
						<span className="text-lg uppercase">{craftman.name[0]}</span>
					</div>
				</div> */}
				<div className="flex flex-col">
					<div className="font-bold">
						<Link href={`/admin/craftman/${craftman.id}`}>{craftman.name}</Link>
					</div>
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
			<button onClick={handleDelete}>...</button>
		</div>
	);
}

export default CraftemenItem;
