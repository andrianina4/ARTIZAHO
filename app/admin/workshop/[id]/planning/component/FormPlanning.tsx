import PopupHeader from "@/components/PopupHeader";
import Button from "@/components/button";
import Input from "@/components/input";
import {Add, AddOutline} from "@/constants/link/icons";
import {useAutocompletionForCraftsman} from "@/hook/useAutocompletionForCraftsman";
import {ISuggestCraftman} from "@/types/ICraftman";
import Image from "next/image";
import React from "react";

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

export default function FormPlanning() {
	// * Traitement de l'artisan
	const {
		SelectedCraftsman,
		handleChangeResetCraftsman,
		InputCraftsman,
		handleChangeCraftsman,
		SuggestedCraftsmen,
		handleSelectCraftsman,
	} = useAutocompletionForCraftsman(ListCraftsmen);

	return (
		<form className="flex flex-col w-full">
			<PopupHeader icon={<Add className="w-6 h-6" />} title="New Workshop" />
			<div className="h-full flex flex-col w-full justify-between">
				<div className="flex flex-col gap-4">
					{/* INPUT CRAFTSMAN */}
					<div className="h-16 bg-white-40% mt-1 mb-2 py-5 px-6 rounded-2xl gap-2 flex items-center input input-bordered font-manrope text-sm w-full relative">
						{SelectedCraftsman ? (
							<div className="flex gap-2 items-center w-full">
								<div className="text-brown text-xl mr-2 cursor-pointer" onClick={handleChangeResetCraftsman}>
									<AddOutline className="w-5 h-5 opacity-80 rotate-45" />
								</div>
								<div className="w-10 h-10 relative rounded-full bg-slate-500 ">
									<Image src={SelectedCraftsman.craftsman_image} alt="" fill className="rounded-full" />
								</div>
								<div className="flex flex-col font-bold grow">{SelectedCraftsman.craftsman_name}</div>
							</div>
						) : (
							<>
								<div className="text-brown text-xl mr-2">
									<AddOutline className="w-5 h-5 opacity-80" />
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
							<div className=" w-full bg-white-40%  z-50 rounded-xl gap-1 flex flex-col  transition-all duration-100 absolute left-0 top-14">
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
					{/* LOCATION AND PRICE*/}
					<div className="flex flex-col gap-1">
						<div className="px-6 text-brown">Location and pricing</div>
						<div className="flex flex-row gap-2">
							<Input
								placeholder="Location"
								name="location"
								// register={register("location")}
								// errorMessage={errors.location}
							/>
							<Input
								placeholder="Price"
								name="price"
								// register={register("location")}
								// errorMessage={errors.location}
							/>
						</div>
					</div>
					{/* DATE AND TIME*/}
					<div className="flex flex-col gap-1">
						<div className="px-6 text-brown">Date and Time</div>
						<div className="flex flex-row gap-2">
							<Input
								placeholder="Date"
								name="date"
								// register={register("location")}
								// errorMessage={errors.location}
							/>
							<Input
								placeholder="Time"
								name="time"
								// register={register("location")}
								// errorMessage={errors.location}
							/>
						</div>
					</div>
				</div>
				<Button content="Save" type="submit" />
			</div>
		</form>
	);
}
