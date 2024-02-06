"use client";

import Button from "@/components/button";
import Divider from "@/components/divider";
import {Email, FlowerOne, LeftLine, PeopleFill, Phone, RoundPlace} from "@/constants/link/icons";
import React, {useState} from "react";
import CompanyItem from "./component/CompanyItem";
import CompanyCard from "./component/CompanyCard";

const listWorkshop = [
	{
		atelier_id: 1,
		atelier_name: "Bouquet en vase",
		atelier_icon: <FlowerOne />,
		atelier_color: "green",
		atelier_nb_member: 2,
		atelier_date: new Date(),
		atelier_heure_debut: "14:30",
		atelier_status: "paid",
	},
	{
		atelier_id: 1,
		atelier_name: "Bouquet en vase",
		atelier_icon: <FlowerOne />,
		atelier_color: "blue",
		atelier_nb_member: 2,
		atelier_date: new Date(),
		atelier_heure_debut: "14:30",
		atelier_status: "inprogress",
	},
	{
		atelier_id: 1,
		atelier_name: "Bouquet en vase",
		atelier_icon: <FlowerOne />,
		atelier_color: "bronze",
		atelier_nb_member: 2,
		atelier_date: new Date(),
		atelier_heure_debut: "14:30",
		atelier_status: "refunded",
	},
];

const profilInformations = [
	{
		value: "4 Members",
		icon: <PeopleFill />,
	},
	{
		value: "034 45 458 44",
		icon: <Phone />,
	},
	{
		value: "safetravel@gmail.com",
		icon: <Email />,
	},
	{
		value: "Antananarivo Madagascar",
		icon: <RoundPlace />,
	},
];

const header = [
	{label: "Workshops"},
	{label: "Members"},
	{label: "Booking date"},
	{label: "Status"},
];

export default function page({params}: {params: {id: string}}) {
	return (
		<div className="flex flex-col w-full h-full bg-white rounded-3xl px-9 py-6">
			<div className="flex items-center gap-4">
				<Button
					content=""
					isBackButton
					leftIcon={<LeftLine />}
					className="!w-6 !h-6 !bg-transparent !text-brown font-bold "
				/>
				<span className="text-2xl font-semibold text-brown-80%">
					Company {params.id} Informations
				</span>
			</div>
			<Divider />
			<form action="" className="flex flex-row w-full pl-12">
				<div className="flex flex-row w-full ">
					<div className="flex justify-center">
						<CompanyCard img={"/temp/vase.png"} name="Codeo Travel" id={99}>
							{profilInformations.map((item, index) => (
								<div
									className="flex items-center gap-2 pl-4 bg-white rounded-3xl w-56 h-10"
									key={index}>
									<span className="text-gray-60%">{item.icon}</span>
									<span className="text-sm">{item.value}</span>
								</div>
							))}
						</CompanyCard>
					</div>
					<div className="flex flex-col w-full">
						<div className="grid grid-cols-custom-6 ml-12 my-3">
							{header.map((item, index) => (
								<span className="text-sm text-gray-60% font-bold" key={index}>
									{item.label}
								</span>
							))}
						</div>
						{listWorkshop.map((item, index) => (
							<CompanyItem item={item} key={index} />
						))}
					</div>
				</div>
			</form>
		</div>
	);
}
