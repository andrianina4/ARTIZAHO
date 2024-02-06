"use client";
import React, {useState} from "react";
import {EditFill, FlowerOne, Heart, ImageAdd, LeftLine, More, Time} from "@/constants/link/icons";
import Button from "@/components/button";
import Item from "./component/Item";
import ProgressBar from "@/components/progress-bar";
import {useForm} from "react-hook-form";
import {FormAtelierData} from "@/app/schema/atelierSchema";

const atelier = {
	id: 1,
	atelier_name: "Bouquet en vase",
	atelier_color: "bronze",
	atelier_artisan: {id: 1, name: "Mahefa", image: "/temp/vase.png"},
	atelier_localisation: "Antananarivo",
	atelier_tarifs: 15,
	atelier_heure_debut: "14:30",
	atelier_heure_duree: "1:30",
	atelier_nb_participant: 10,
	atelier_desc:
		"Welcome to Hanta's atelier-boutique, where you can learn how to create exceptional floral arrangements. During this experience, you'll discover a variety of foliage and flowers, and learn how to use them to create beautiful bouquets.",
	image: ["/temp/vase.png", "/temp/vase.png", "/temp/vase.png"],
};

export default function page({params}: {params: {id: string}}) {
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
			<form action="" className="flex flex-row w-full pl-12">
				<div className="flex flex-col w-3/5">
					<div className="text-brown mb-5 font-bold">Workshop information</div>
					<div className="flex flex-col gap-2">
						<Item
							label="Name"
							value={atelier.atelier_name}
							readonly={readonly}
							register={register("atelier_name")}
						/>
						<Item
							label="Craftsman"
							value={atelier.atelier_artisan.name}
							image={atelier.atelier_artisan.image}
						/>
						<Item label="Location" value={atelier.atelier_localisation} />
						<Item label="Prices" value={atelier.atelier_tarifs} />
						<div className="flex flex-row">
							<div className="w-1/5 flex items-center opacity-60 font-bold"></div>
							<div className="flex w-4/5 flex-row gap-20">
								<div className="w-40 h-16  bg-white-40% flex items-center px-6 rounded-2xl gap-2">
									<Time className="w-6 h-6 opacity-50" />
									{atelier.atelier_heure_debut}
								</div>
								<div className="w-auto h-16 flex items-center gap-3">
									<div className="items-center">Duration</div>
									<div className="bg-white-40% w-36 h-full flex items-center px-6 rounded-2xl">
										{atelier.atelier_heure_duree}
									</div>
								</div>
							</div>
							<div className="flex items-center justify-center w-14 opacity-5 hover:opacity-50 cursor-pointer">
								<EditFill className="w-6 h-6 ml-6" />
							</div>
						</div>
						<Item label="Participants" value={atelier.atelier_nb_participant} />
						<Item label="Description" value={atelier.atelier_desc} desc />
					</div>
				</div>
				<div className="w-2/5 pl-7">
					<div className="text-brown mb-5 font-bold">Workshop performance</div>
					<ProgressBar
						color={atelier.atelier_color}
						leftIcon={<FlowerOne />}
						text="Bouquet en vase"
						number={4.5}
					/>
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
						{readonly && <Button className="mt-9" content="Save" />}
					</div>
				</div>
			</form>
		</div>
	);
}
