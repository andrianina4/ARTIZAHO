"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import Textarea from "@/components/textarea";
import {AddOutline, CalendarIcon, ImageAdd, Place, Toolbox} from "@/constants/link/icons";
import {useForm, SubmitHandler, Controller} from "react-hook-form";
import React, {useEffect, useState} from "react";
import {FormAtelierData} from "@/app/schema/atelierSchema";
import {FileData} from "@/app/schema/fileschema";
import Image from "next/image";
import {ISuggestCraftman} from "@/types/ICraftman";
import {ISuggestWorkshop} from "@/types/IWorkshop";
import {useAutocompletionForCraftsman} from "@/hook/useAutocompletionForCraftsman";
import {useAutocompletionNameWorkshop} from "@/hook/useAutocompletionNameWorkshop";

// FAKE
const ListCraftsmen: ISuggestCraftman[] = [
	{
		craftsman_id: 1,
		craftsman_name: "John Doe",
		craftsman_image: "/temp/trainer-1.jpeg",
		craftsman_know_how: "Woodworking",
	},
	{
		craftsman_id: 2,
		craftsman_name: "Jane Smith",
		craftsman_image: "/temp/trainer-1.jpeg",
		craftsman_know_how: "Metalworking",
	},
	{
		craftsman_id: 3,
		craftsman_name: "Alice Johnson",
		craftsman_image: "/temp/trainer-1.jpeg",
		craftsman_know_how: "Pottery",
	},
	{
		craftsman_id: 4,
		craftsman_name: "Bob Brown",
		craftsman_image: "/temp/trainer-1.jpeg",
		craftsman_know_how: "Glassblowing",
	},
	{
		craftsman_id: 5,
		craftsman_name: "Emily Davis",
		craftsman_image: "/temp/trainer-1.jpeg",
		craftsman_know_how: "Jewelry Making",
	},
];

const ListWorkshops: ISuggestWorkshop[] = [
	{
		workshop_id: 1,
		workshop_name: "Bouquet en vase",
		workshop_know_how: "Unleash the power of the dark side in your code",
	},
	{
		workshop_id: 2,
		workshop_name: "Bouquet tsy vase",
		workshop_know_how: "Master the art of hacking and cyber mischief",
	},
	{
		workshop_id: 3,
		workshop_name: "Papier tsy tadidiko",
		workshop_know_how: "Bend the rules of programming to your wicked will",
	},
	// Add more wicked workshops here
];

export default function FormWorkshop() {
	// * Traitement du nom d'atelier
	const {
		setBaseValues,
		SelectedValue,
		InputValue,
		handleChange,
		SuggestedValues,
		handleSelectValue,
	} = useAutocompletionNameWorkshop(ListWorkshops);

	// * Traitement de l'artisan
	const {
		SelectedCraftsman,
		handleChangeResetCraftsman,
		InputCraftsman,
		handleChangeCraftsman,
		SuggestedCraftsmen,
		handleSelectCraftsman,
	} = useAutocompletionForCraftsman(ListCraftsmen);

	// * Traitement des images
	const [imagePreview, setImagePreview] = useState<string[]>([]);
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

	// * react hook form
	const {register, handleSubmit, reset} = useForm<FormAtelierData>();
	// const {
	// 	register: fileRegister,
	// 	handleSubmit: fileSubmit,
	// 	control,
	// 	reset: fileReset,
	// } = useForm<FileData>();

	// * SUBMIT
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
						{/* INPUT NAME */}
						<div className="bg-white-40% mt-1 mb-2 py-5 px-6 rounded-2xl gap-2 flex items-center input input-bordered h-14 font-manrope text-sm flex-1 w-full relative">
							<input
								className="w-full bg-white-40% outline-none"
								placeholder="Assigning a craftsman"
								value={InputValue}
								onChange={handleChange}
							/>
							{/* MODAL NAME */}
							{SuggestedValues && (
								<div className="absolute top-14 bg-white-40% border-2 border-white w-4/5 z-50 rounded-xl gap-1 flex flex-col shadow-sm">
									{SuggestedValues.map((item) => (
										<div
											key={item.workshop_id}
											className="flex flex-raw items-center px-5 py-3 rounded-xl hover:bg-white transition-all duration-100 cursor-pointer"
											onClick={() => {
												handleSelectValue(item);
											}}>
											{item.workshop_name}
										</div>
									))}
								</div>
							)}
							{/* <Input placeholder="Name" register={register("atelier_name")} /> */}
						</div>
						{/* INPUT CRAFTSMAN */}
						<div className="bg-white-40% mt-1 mb-2 py-5 px-6 rounded-2xl gap-2 flex items-center input input-bordered h-14 font-manrope text-sm flex-1 w-full relative">
							{SelectedCraftsman ? (
								<div className="flex gap-2 items-center w-full">
									<div
										className="text-brown text-xl mr-2 cursor-pointer"
										onClick={handleChangeResetCraftsman}>
										<AddOutline className="w-5 h-5 opacity-50 rotate-45" />
									</div>
									<div className="w-8 h-8 relative rounded-full bg-slate-500 ">
										<Image
											src={SelectedCraftsman.craftsman_image}
											alt=""
											fill
											className="rounded-full"
										/>
									</div>
									<div className="flex flex-col font-bold grow">
										{SelectedCraftsman.craftsman_name}
									</div>
								</div>
							) : (
								<>
									<div className="text-brown text-xl mr-2">
										<AddOutline className="w-5 h-5 opacity-50" />
									</div>
									<input
										className="w-full bg-white-40% outline-none"
										placeholder="Assigning a craftsman"
										value={InputCraftsman}
										onChange={handleChangeCraftsman}
									/>
								</>
							)}
							{/* MODAL CRAFTSMAN */}
							{SuggestedCraftsmen && (
								<div className="absolute top-14 bg-white-40% border-2 border-white w-4/5 z-50 rounded-xl gap-1 flex flex-col shadow-sm transition-all duration-100">
									{SuggestedCraftsmen.map((item, index) => (
										<div
											key={item.craftsman_id}
											className="flex flex-raw items-center gap-2 px-5 py-3 hover:bg-white rounded-xl cursor-pointer"
											onClick={() => {
												handleSelectCraftsman(item);
											}}>
											<div className="w-8 h-8 relative rounded-full bg-slate-500">
												<Image src={item.craftsman_image} alt="" fill className="rounded-full" />
											</div>
											<div className="flex flex-col items-center ">
												<p className="text-black-default font-bold">{item.craftsman_name}</p>
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
							<div className="w-[121px] bg-white-40% py-5 rounded-2xl flex input input-bordered h-14">
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
					<div className={`max-h-72 overflow-y-scroll flex flex-row flex-wrap gap-2`}>
						{imagePreview.map((item, index) => (
							<div key={index} className="w-40 h-32 relative rounded-2xl">
								<Image src={item} alt="Image" fill className="rounded-2xl" />
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
