"use client";

import Button from "@/components/button";
import {LeftLine} from "@/constants/link/icons";
import Link from "next/link";
import {usePathname} from "next/navigation";
import React from "react";

const InfoLayout = ({id}: {id: string}) => {
	return (
		<>
			<div className="px-3 py-3 border-b-4 border-bronze text-brown font-semibold">Craftsman informations</div>
			<Link href={`/admin/craftmen/${id}/availability`} passHref>
				<div className="px-3 py-3 cursor-pointer">Availability</div>
			</Link>
		</>
	);
};

const AvailabilityLayout = ({id}: {id: string}) => {
	return (
		<>
			<Link href={`/admin/craftmen/${id}/about`} passHref>
				<div className="px-3 py-3 cursor-pointer">Craftsman informations</div>
			</Link>
			<div className="px-3 py-3 border-b-4 border-bronze text-brown font-semibold">Availability</div>
		</>
	);
};

export default function layout({params, children}: {params: {id: string}; children: React.ReactNode}) {
	let content: number = 0;
	const pathname = usePathname();
	if (pathname.endsWith("/about")) {
		content = 1;
	} else if (pathname.endsWith("/availability")) {
		content = 2;
	}

	return (
		<div className="flex flex-col w-full h-full gap-4 bg-white rounded-3xl pt-8 px-8">
			{/* HEADER AVEC RETOUR */}
			<div className="flex items-center gap-4">
				<Button
					content=""
					isBackButton
					leftIcon={<LeftLine />}
					className="!w-6 !h-6 !bg-transparent !text-brown font-bold "
				/>
				<span className="text-2xl font-semibold text-brown-80%">Craftsman informations</span>
			</div>
			{/* CHOIX CONTENU */}
			<div className="border-b-2 border-bronze flex gap-3 w-full font-semibold opacity-80">
				{content === 1 && <InfoLayout id={params.id} />}
				{content === 2 && <AvailabilityLayout id={params.id} />}
			</div>
			{children}
		</div>
	);
}
