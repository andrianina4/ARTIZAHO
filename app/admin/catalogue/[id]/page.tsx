"use client";
import React from "react";
import {EditFill, FlowerOne, Heart, ImageAdd, LeftLine, More, Time} from "@/constants/link/icons";
import Button from "@/components/button";
import Item from "./component/Item";
import ProgressBar from "@/components/progress-bar";

const atelier = {
	id: 1,
	name: "Bouquet en vase",
	Artisan: {id: 1, name: "Mahefa", image: "/temp/vase.png"},
	localisation: "Antananarivo",
	tarifs: 15,
	heure_debut: "14:30",
	duree: "1:30",
	nb_max_participants: 10,
	image: ["/temp/vase.png", "/temp/vase.png", "/temp/vase.png"],
	desc: "Welcome to Hanta's atelier-boutique, where you can learn how to create exceptional floral arrangements. During this experience, you'll discover a variety of foliage and flowers, and learn how to use them to create beautiful bouquets.",
};

export default function page({params}: {params: {id: string}}) {
	const handleInputFile = () => {
		const inputELement = document.querySelector(".input-file-atelier") as HTMLFormElement;
		if (inputELement) {
			inputELement.click();
		}
	};
	return (
		<div className="flex flex-col w-full h-full gap-6 bg-white rounded-3xl pt-8 pl-8">
			<div className="flex items-center gap-4">
				<Button
					content=""
					isBackButton
					leftIcon={<LeftLine />}
					className="!w-6 !h-6 !bg-transparent !text-brown font-bold "
				/>
				<span className="text-2xl font-semibold text-brown-80%">Workshops List {params.id}</span>
			</div>
			<div className="flex flex-row w-full pl-12">
				<div className="flex flex-col w-3/5">
					<div className="text-brown mb-5 font-bold">Workshop information</div>
					<div className="flex flex-col gap-2">
						<Item
							label="Name"
							value={atelier.name}
							rightIcon={<EditFill className="w-6 h-6 opacity-50 ml-6" />}
						/>
						<Item label="Craftsman" value={atelier.Artisan.name} image={atelier.Artisan.image} />
						<Item label="Location" value={atelier.localisation} />
						<Item label="Prices" value={atelier.tarifs} />
						<div className="flex flex-row">
							<div className="w-1/5 flex items-center opacity-60 font-bold"></div>
							<div className="flex w-4/5 flex-row gap-20">
								<div className="w-40 h-16  bg-white-40% flex items-center px-6 rounded-2xl gap-2">
									<Time className="w-6 h-6 opacity-50" />
									{atelier.heure_debut}
								</div>
								<div className="w-auto h-16 flex gap-3">
									<div className="flex items-center">Duration</div>
									<div className="bg-white-40% w-36 flex items-center px-6 rounded-2xl">
										{atelier.heure_debut}
									</div>
								</div>
							</div>
							<div className="w-14"></div>
						</div>
						<Item label="Participants" value={atelier.nb_max_participants} />
						<Item label="Description" value={atelier.desc} desc />
						<div className="flex flex-row"></div>
					</div>
				</div>
				<div className="w-2/5 pl-7">
					<div className="text-brown mb-5 font-bold">Workshop performance</div>
					<ProgressBar color="bronze" leftIcon={<FlowerOne />} text="Bouquet en vase" number={12} />
					<div className="text-brown mb-5 font-bold">Gallery</div>
					<div className="flex flex-row flex-wrap w-2/3 gap-4">
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
				</div>
			</div>
		</div>
	);
}
