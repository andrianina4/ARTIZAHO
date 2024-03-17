import ErrorComponent from "@/app/_global/error";
import LoadingComponent from "@/app/_global/loading";
import PopupHeader from "@/components/PopupHeader";
import Button from "@/components/button";
import Input from "@/components/input";
import {Add, AddOutline} from "@/constants/link/icons";
import {AddScheduleWorkshop} from "@/hook/AdminWorkshop/AddScheduleWorkshop";
import {useAutocompletionForCraftsman} from "@/hook/useAutocompletionForCraftsman";
import {getArtisans} from "@/services/admin/adminWorkshop.service";
import {useQuery} from "@tanstack/react-query";
import Image from "next/image";
import React, {useEffect} from "react";

export default function FormPlanning({id, close}: {id: number; close: () => void}) {
	const {data, isLoading, isError} = useQuery({
		queryKey: ["adminWorkshopArtisan"],
		queryFn: () => getArtisans(),
	});

	const {
		setBaseCraftsman,
		SelectedCraftsman,
		handleChangeResetCraftsman,
		InputCraftsman,
		handleChangeCraftsman,
		SuggestedCraftsmen,
		handleSelectCraftsman,
	} = useAutocompletionForCraftsman();

	// * Traitement de l'artisan
	useEffect(() => {
		if (data) {
			setBaseCraftsman(data);
		}
	}, [data]);

	const {register, handleSubmit, onSubmit, errors} = AddScheduleWorkshop(id, SelectedCraftsman, close);

	if (isLoading) {
		return <LoadingComponent />;
	} else if (isError) {
		return <ErrorComponent />;
	}

	return (
		<form className="flex flex-col w-full" onSubmit={handleSubmit(onSubmit)}>
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
									<Image src={SelectedCraftsman?.images[0]?.base_url} alt="" fill className="rounded-full" />
								</div>
								<div className="flex flex-col font-bold grow">{SelectedCraftsman.name}</div>
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
										key={item.id}
										className="flex flex-raw items-center gap-2 px-5 py-3 hover:bg-white rounded-xl cursor-pointer"
										onClick={() => {
											handleSelectCraftsman(item);
										}}>
										<div className="w-8 h-8 relative rounded-full bg-slate-500">
											<Image src={item.images[0]?.base_url} alt="" fill className="rounded-full" />
										</div>
										<div className="flex flex-col items-center ">
											<p className="text-black-default font-bold">{item.name}</p>
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
								register={register("location")}
								errorMessage={errors.location}
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
								type="date"
								register={register("date")}
								errorMessage={errors.date}
							/>
							<Input
								placeholder="Time"
								name="time"
								type="time"
								register={register("time")}
								errorMessage={errors.time}
							/>
						</div>
					</div>
				</div>
				<Button content="Save" type="submit" />
			</div>
		</form>
	);
}
