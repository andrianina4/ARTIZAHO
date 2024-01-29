"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import Textarea from "@/components/textarea";
import {AddOutline, ImageAdd, Time, Toolbox} from "@/constants/link/icons";
import {useForm, SubmitHandler, Controller} from "react-hook-form";
import React, {useState} from "react";
import {FormAtelierData} from "@/app/schema/atelierSchema";

export default function FormAtelier() {
	const [imagePreview, setImagePreview] = useState<string[]>([]);

	const handleInputFile = () => {
		const inputELement = document.querySelector(".input-file-atelier") as HTMLFormElement;
		if (inputELement) {
			inputELement.click();
		}
	};

	const {register, handleSubmit, control, reset} = useForm<FormAtelierData>();

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		console.log(file);
		if (file) {
			const imageUrl = URL.createObjectURL(file);
			console.log(typeof imageUrl);

			const tempTab = [...imagePreview, imageUrl];
			setImagePreview(tempTab);
		}
	};

	const onSubmit: SubmitHandler<FormAtelierData> = (data) => {
		console.log(data);
	};

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full">
				<div className="flex flex-row items-center text-bronze gap-6 pb-8">
					<div className="">
						<Toolbox className="w-6 h-6" />
					</div>
					<div className="text-2xl">Nouvel Atelier</div>
				</div>
				<div className="flex flex-row gap-2 ">
					<div className="flex flex-col w-[415px] ">
						<Input placeholder="Name" register={register("atelier_name")} />
						<Input
							placeholder="Assigning a craftsman"
							leftIcon={<AddOutline className="w-5 h-5 opacity-50" />}
							register={register("atelier_artisan")}
						/>
						<div className="flex flex-row">
							<Input
								placeholder="Location"
								className="!w-1/2 mr-2"
								register={register("atelier_localisation")}
							/>
							<Input
								type="number"
								placeholder="Prices"
								className="!w-1/2"
								register={register("atelier_tarifs")}
							/>
						</div>
						<div className="h-[63px] flex items-center justify-between">
							<div className="w-[155px] bg-white-40% mt-1 mb-2 rounded-2xl flex items-center input input-bordered h-14 gap-2">
								<Time className="w-6 h-6 opacity-50" />
								<input
									type="time"
									{...register("atelier_heure_debut")}
									className="outline-none bg-white-40% text-sm w-full opacity-50"
								/>
							</div>
							<div className="flex flex-row h-full gap-2 mt-1 mb-2 ">
								<div className="flex items-center opacity-50 h-full">Duration</div>
								<div className="w-[121px]x  bg-white-40%  rounded-2xl flex items-center input input-bordered h-14">
									<input
										type="time"
										{...register("atelier_heure_duree")}
										className="outline-none bg-white-40% flex text-sm w-full opacity-50"
									/>
								</div>
							</div>
						</div>
						<Input
							type="number"
							placeholder="Maximum number of participants"
							register={register("atelier_nb_participant")}
						/>

						<Textarea placeholder="Workshop description" register={register("atelier_desc")} />
						<Button content="Add" type="submit" />
					</div>
					<div className="ml-14 mr-40 flex flex-col gap-4">
						<div className="text-base text-bronze font-bold">Galery</div>
						<div>
							{imagePreview.map((item) => (
								<div>
									<p>Aperçu de l'image :</p>
									<img
										src={item}
										alt="Aperçu de l'image"
										style={{maxWidth: "100%", maxHeight: "200px"}}
									/>
								</div>
							))}
						</div>
						<div
							className="w-40 h-32 gap-2 bg-white-40% rounded-2xl flex items-center input input-bordered flex-col justify-center cursor-pointer"
							onClick={() => {
								handleInputFile();
							}}>
							<Controller
								name="atelier_file"
								control={control}
								defaultValue={[]}
								render={({field}) => (
									<input
										type="file"
										multiple
										className="input-file-atelier"
										onChange={(e) => {
											field.onChange(e);
											handleFileChange(e);
										}}
									/>
								)}
							/>
							<div className="flex flex-col items-center justify-center">
								<ImageAdd className="w-9 h-9 opacity-50" />
								<div className="opacity-50">Add Pictures</div>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}
