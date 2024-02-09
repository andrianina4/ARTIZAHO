"use client";

import React, {useState} from "react";
import {EditFill, FlowerOne, ImageAdd, More, Time} from "@/constants/link/icons";
import Button from "@/components/button";
import Item from "./Item";
import ProgressBar from "@/components/progress-bar";
import {useForm} from "react-hook-form";
import {FormAtelierData} from "@/app/schema/atelierSchema";
import Textarea from "@/components/textarea";

const atelier = {
	id: 1,
	workshop_name: "Bouquet en vase",
	workshop_color: "bronze",
	workshop_icon: "bronze",
	workshop_artisan: {id: 1, name: "Mahefa", image: "/temp/vase.png"},
	workshop_localisation: "Antananarivo",
	workshop_tarifs: 15,
	workshop_heure_debut: "14:30",
	workshop_heure_duree: "1:30",
	workshop_nb_participant: 10,
	workshop_desc:
		"Welcome to Hanta's atelier-boutique, where you can learn how to create exceptional floral arrangements. During this experience, you'll discover a variety of foliage and flowers, and learn how to use them to create beautiful bouquets.",
	image: ["/temp/vase.png", "/temp/vase.png", "/temp/vase.png"],
};

export default function AboutWorkshop() {
	const {register, handleSubmit, reset} = useForm<FormAtelierData>({mode: "onChange"});
	const [readonly, setUpdate] = useState<boolean>(false);
	const switchUpdateState = () => {
		setUpdate(readonly ? false : true);
	};

	const handleInputFile = () => {
		const inputELement = document.querySelector(".input-file-atelier") as HTMLFormElement;
		if (inputELement) {
			inputELement.click();
		}
	};

	return (
		<form action="" className="flex flex-row w-full h-full px-12">
			<div className="flex flex-col w-1/2">
				<div className="flex flex-col h-full justify-between">
					<div>
						<Item
							label="Name"
							value={atelier.workshop_name}
							readonly={readonly}
							// register={register("workshop_name")}
						/>
						<Item
							label="Craftsman"
							value={atelier.workshop_artisan.name}
							image={atelier.workshop_artisan.image}
						/>
						<Item label="Location" value={atelier.workshop_localisation} />
						<Item label="Prices" value={atelier.workshop_tarifs} />
						<div className="flex flex-row">
							<div className="w-1/5 flex items-center opacity-60 font-bold"></div>
							<div className="flex w-4/5 flex-row gap-20">
								<div className="w-40 h-16  bg-white-40% mt-1 mb-2 flex items-center px-6 rounded-2xl input input-bordered gap-2">
									<Time className="w-6 h-6 opacity-50" />
									{atelier.workshop_heure_debut}
								</div>
								<div className="w-auto h-16 flex items-center mt-1 mb-2 gap-3">
									<div className="items-center">Duration</div>
									<div className="bg-white-40% w-36 h-full flex items-center px-6 rounded-2xl input input-bordered">
										{atelier.workshop_heure_duree}
									</div>
								</div>
							</div>
						</div>
						<Item label="Participants" value={atelier.workshop_nb_participant} />
					</div>
					<div className="flex mb-8 gap-4">
						<Button className="" content="Save" />
						<Button className="bg-transparent !text-black" content="Cancel" />
					</div>
				</div>
			</div>
			<div className="flex justify-center w-14 pt-5 pl-5 ">
				<EditFill className="w-6 h-6 opacity-5 hover:opacity-50 cursor-pointer" />
			</div>
			<div className="w-2/5 pl-7">
				<div className="text-brown mb-5 font-bold">Gallery</div>
				<div className="flex flex-row flex-wrap gap-4">
					{atelier.image.map((image, index) => (
						<div key={index} className="w-36 h-32 bg-white-40% relative">
							<img src={image} className="w-full h-full rounded-3xl object-cover" />
							<div className="bg-bronze shrink-0 w-auto h-auto rounded-full absolute top-3 right-3 cursor-pointer">
								<More className="w-4 h-4 text-white" />
							</div>
						</div>
					))}
					<div
						className="w-40 h-32 gap-2 bg-white-40% rounded-2xl flex items-center input input-bordered flex-col justify-center cursor-pointer"
						onClick={() => {
							handleInputFile();
						}}>
						<input type="file" className="input-file-atelier" hidden />
						<div className="flex flex-col items-center justify-center">
							<ImageAdd className="w-9 h-9 opacity-50" />
							<div className="opacity-50">Add Pictures</div>
						</div>
					</div>
				</div>
				<div>
					<div>Description</div>
					<Textarea placeholder="Description" />
				</div>
			</div>
		</form>
	);
}
