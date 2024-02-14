"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import Textarea from "@/components/textarea";
import {AddOutline, CalendarIcon, ImageAdd, Place, Toolbox} from "@/constants/link/icons";
import {useForm, SubmitHandler, Controller} from "react-hook-form";
import React, {useState} from "react";
import {FormAtelierData} from "@/app/schema/atelierSchema";
import {FileData} from "@/app/schema/fileschema";
import {CraftsmenWhenAdd} from "@/types/IWorkshop";
import Image from "next/image";

const Craftsmen: Array<CraftsmenWhenAdd> = [
	{craft_id: 1, craft_name: "Mahefa", craft_img: "/temp/trainer-1.jpeg"},
	{craft_id: 0, craft_name: "Ma Hefa", craft_img: "/temp/trainer-1.jpeg"},
	{craft_id: 0, craft_name: "Ma Hefa", craft_img: "/temp/trainer-1.jpeg"},
	{craft_id: 0, craft_name: "Ma Hefa", craft_img: "/temp/trainer-1.jpeg"},
	{craft_id: 0, craft_name: "Ma Hefa", craft_img: "/temp/trainer-1.jpeg"},
];

export default function FormWorkshop() {
	// controler pour le select artisans
	const [SelectCraftsman, setSelectCraftsman] = useState<boolean>(false);
	const switchSelectCraftsman = () => {
		setSelectCraftsman(!SelectCraftsman);
	};
	const [Craftsman, setCraftsman] = useState<CraftsmenWhenAdd | undefined>();
	const assignCraftman = (craftman: CraftsmenWhenAdd) => {
		setCraftsman(craftman);
		switchSelectCraftsman();
		console.log(Craftsman);
	};

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
		<div className="flex flex-col">
			<div className="flex flex-row items-center text-bronze gap-6 pb-8">
				<div className="">
					<Toolbox className="w-6 h-6" />
				</div>
				<div className="text-2xl">New Workshop</div>
			</div>
			<form className="flex flex-row w-full gap-2 h-full" onSubmit={handleSubmit(onSubmit)}>
				<div className="flex flex-col justify-between w-96 ">
					<div>
						<Input placeholder="Name" register={register("atelier_name")} />
						{/* INPUT CRAFTSMAN */}
						<div
							className="bg-white-40% mt-1 mb-2 py-5 px-6 rounded-2xl gap-2 flex items-center input input-bordered h-14 font-manrope text-sm outline-none flex-1 w-full relative cursor-pointer"
							onClick={switchSelectCraftsman}>
							<div className="text-brown text-xl mr-2">
								<AddOutline className="w-5 h-5 opacity-50" />
							</div>
							<div className="opacity-50">Assigning a craftsman</div>
							{/* MODAL ARTISAN */}
							{SelectCraftsman && (
								<div className="absolute top-14 bg-white-40% border-2 border-white w-4/5 z-50 rounded-xl gap-1 flex flex-col shadow-sm transition-all duration-100">
									{Craftsmen.map((item, index) => (
										<div
											key={item.craft_id}
											className="flex flex-raw items-center gap-2 px-5 py-3 hover:bg-white rounded-xl cursor-pointer"
											onClick={() => {
												assignCraftman(item);
											}}>
											<div className="w-8 h-8 relative rounded-full bg-slate-500">
												<Image src={item.craft_img} alt="" fill className="rounded-full" />
											</div>
											<div className="flex flex-col items-center ">
												<p className="text-black-default font-bold">{item.craft_name}</p>
											</div>
										</div>
									))}
								</div>
							)}
						</div>
						<div className="mt-1 mb-2 flex items-center justify-between">
							<Input
								className="w-40 !mt-0 !mb-0"
								type="number"
								placeholder="Prices"
								register={register("atelier_tarifs")}
							/>
							<div className="flex items-center opacity-50 h-full">Duration</div>
							<div className="w-[121px] bg-white-40% py-5 px-6 rounded-2xl flex input input-bordered h-14">
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
						<Input
							className="appearance-none"
							type="Date"
							placeholder="Date"
							leftIcon={<CalendarIcon className="w-5 h-5 opacity-50" />}
							register={register("atelier_artisan")}
						/>
						<Input
							placeholder="Location"
							leftIcon={<Place className="w-5 h-5 opacity-50" />}
							register={register("atelier_artisan")}
						/>
					</div>
					<Button content="Add" type="submit" className="" />
				</div>
				<div className="ml-14 flex flex-col w-96 gap-4">
					<div className="text-base text-bronze font-bold">Galery</div>
					<div className={`max-h-64 overflow-y-scroll flex flex-row flex-wrap gap-2`}>
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
						className="h-1/3 max-w-xs"
						placeholder="Workshop description"
						register={register("atelier_desc")}
					/>
				</div>
			</form>
		</div>
	);
}
