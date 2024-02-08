import React from "react";
import Image from "next/image";
import {RoundPlace} from "@/constants/link/icons";
import {ICompany} from "@/types/ICompany";
import {formatToDMY} from "@/utils/Format";

export default function CompanyItem({company}: {company: ICompany}) {
	return (
		<div className="grid grid-cols-custom-3 text-sm font-bold bg-white items-center rounded-lg h-14 pl-4 my-1 hover:mt-1 ">
			<div className="flex items-center gap-2">
				<div className="w-[30px] h-[30px] rounded-full bg-slate-500 relative">
					<Image src={company.company_image} alt={`shopping-1`} fill className="rounded-full" />
				</div>
				<p className="text-black-default font-bold opacity-90">{company.company_name}</p>
			</div>
			<div className="opacity-90">{company.company_mail}</div>
			<div className="opacity-90">{company.company_tel}</div>
			<div className="font-normal text-gray-60% flex items-center gap-2">
				<RoundPlace /> {company.company_location}
			</div>
			<div className="flex gap-2 items-center opacity-80">
				{formatToDMY(company.company_created_at)}
			</div>
			<button>...</button>
		</div>
	);
}
