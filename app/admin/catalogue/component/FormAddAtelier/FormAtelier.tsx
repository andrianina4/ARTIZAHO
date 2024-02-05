"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import Textarea from "@/components/textarea";
import {AddOutline, ImageAdd, Toolbox} from "@/constants/link/icons";
import {useForm, SubmitHandler, Controller} from "react-hook-form";
import React, {useState} from "react";
import {FormAtelierData} from "@/app/schema/atelierSchema";
import {FileData} from "@/app/schema/fileschema";

export default function FormAtelier() {
	const [imagePreview, setImagePreview] = useState<string[]>([]);
	const {register, handleSubmit, reset} = useForm<FormAtelierData>();
	// const {
	// 	register: fileRegister,
	// 	handleSubmit: fileSubmit,
	// 	control,
	// 	reset: fileReset,
	// } = useForm<FileData>();

	const handleInputFile = () => {
		setImagePreview([]);
		const inputELement = document.querySelector("#input-file-atelier") as HTMLFormElement;
		if (inputELement) {
			inputELement.click();
		}
	};

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const arrayFile = e.target.files;
		let tempTab: string[] = [];
		if (arrayFile) {
			for (let i = 0; i < arrayFile.length; i++) {
				const file = arrayFile[i];
				const imageUrl = URL.createObjectURL(file);
				tempTab = [...tempTab, imageUrl];
			}
			setImagePreview(tempTab);
		}
	};

	const onSubmit: SubmitHandler<FormAtelierData> = (data) => {
		console.log(data);
	};

	const onSubmitFile: SubmitHandler<FormAtelierData> = (data) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full">
			<div className="flex flex-row items-center text-bronze gap-6 pb-8">
				<div className="">
					<Toolbox className="w-6 h-6" />
				</div>
				<div className="text-2xl">New Workshop</div>
			</div>
			<div className="flex flex-row w-full gap-2 h-full">
				<div className="flex flex-col w-96">
					<div className="grow">
						<Input placeholder="Name" register={register("atelier_name")} />
						<Input
							placeholder="Assigning a craftsman"
							leftIcon={<AddOutline className="w-5 h-5 opacity-50" />}
							register={register("atelier_artisan")}
						/>
						<div className="h-[63px] flex items-center gap-4 mb-1">
							<Input
								className="w-40"
								type="number"
								placeholder="Prices"
								register={register("atelier_tarifs")}
							/>
							<div className="flex items-center opacity-50 h-full">Duration</div>
							<div className="w-[121px] bg-white-40% mt-1 mb-2 py-5 px-6 rounded-2xl flex input input-bordered h-14">
								<input
									type="time"
									{...register("atelier_heure_duree")}
									className="bg-white-40% text-sm w-full opacity-50"
								/>
							</div>
						</div>
						<Input
							type="number"
							placeholder="Maximum number of participants"
							register={register("atelier_nb_participant")}
						/>
					</div>
					<Button content="Add" type="submit" className="" />
				</div>
				<div className="ml-14 flex flex-col w-96 gap-4">
					<div className="text-base text-bronze font-bold">Galery</div>
					<div className="flex flex-row flex-wrap gap-2">
						{imagePreview.map((item) => (
							<div>
								<img className="w-40 h-32 rounded-2xl" src={item} alt="Aperçu de l'image" />
							</div>
						))}
						<div
							className="w-40 h-32 gap-2 bg-white-40% rounded-2xl flex items-center input input-bordered flex-col justify-center cursor-pointer"
							onClick={() => {
								handleInputFile();
							}}>
							<div className="flex flex-col items-center justify-center">
								<ImageAdd className="w-9 h-9 opacity-50" />
								<div className="opacity-50">Add Pictures</div>
							</div>
							<input
								type="file"
								id="input-file-atelier"
								multiple
								hidden
								onChange={(e) => {
									handleFileChange(e);
								}}
							/>
						</div>
					</div>
					<Textarea
						className="h-1/3"
						placeholder="Workshop description"
						register={register("atelier_desc")}
					/>
				</div>
			</div>
		</form>
	);
}
