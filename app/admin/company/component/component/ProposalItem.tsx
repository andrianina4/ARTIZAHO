import {IProposalCompany} from "@/types/ICompany";
import React from "react";
import {formatToDMY} from "@/utils/Format";
import Image from "next/image";
import {colorBackground, colorText} from "@/types/IColor";
import {PeopleFill} from "@/constants/link/icons";
import ActionsButtons from "@/components/ActionsButtons";

export default function ProposalItem({company}: {company: IProposalCompany}) {
	const bg: string = colorBackground[company.company_workshop.color];
	const txt: string = colorText[company.company_workshop.color];

	return (
		<div className="grid grid-cols-custom-8 text-sm font-bold bg-white items-center rounded-lg h-14 pl-4 my-1 ">
			{/* NOM et IMAGE */}
			<div className="flex items-center gap-2">
				<div className="w-[30px] h-[30px] relative rounded-full bg-slate-500">
					<Image src={company.company_image} alt="" fill className="rounded-full" />
				</div>
				<div className="flex flex-col items-center ">
					<p className="text-black-default font-bold">{company.company_name}</p>
				</div>
			</div>
			{/* DATE PROPOSED */}
			<div className="opacity-70">{formatToDMY(company.company_date_proposed)}</div>
			{/* TIME PROPOSED */}
			<div className="opacity-70">{company.company_time_proposed}</div>
			{/* WORKSHOP */}
			<div className="flex items-center gap-2">
				<div
					className={`w-7 h-7 flex items-center justify-center ${txt} ${bg} bg-opacity-30 rounded-lg`}>
					{company.company_workshop.icon}
				</div>
				<p className="opacity-50">{company.company_workshop.name}</p>
			</div>
			{/* NB PARTICIPANT */}
			<div className="flex gap-3 items-center">
				<PeopleFill className="opacity-50" />
				<div className="opacity-60">{company.company_participants}</div>
			</div>
			{/* ACTION BUTTON */}
			<div className="flex gap-2">
				<ActionsButtons />
			</div>
		</div>
	);
}
