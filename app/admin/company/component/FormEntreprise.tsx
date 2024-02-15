import {Business, HomeAdd} from "@/constants/link/icons";
import Input from "@/components/input";
import React from "react";
import Button from "@/components/button";
import AddImageRound from "@/components/AddImageRound";
import {AddCompany} from "@/hook/AddCompany";
import PopupHeader from "@/components/PopupHeader";

export default function FormEntreprise({closePopup}: {closePopup: () => void}) {
	const {register, handleSubmit, onSubmit, errors, ImagetoShow, handleInputFile, handleFileChange} =
		AddCompany(closePopup);

	return (
		<form className="flex flex-col w-full" onSubmit={handleSubmit(onSubmit)}>
			<PopupHeader icon={<HomeAdd className="w-6 h-6" />} title="New Company" />
			<div className="flex flex-row w-full gap-2 h-full">
				<div className="flex flex-col w-96 justify-between">
					<div>
						{/* NAME */}
						<Input
							placeholder="Name"
							name="name"
							register={register("name")}
							errorMessage={errors.name}
						/>
						{/* MAIL */}
						<Input
							placeholder="Email"
							name="email"
							register={register("email")}
							errorMessage={errors.email}
						/>
						{/* PHONE */}
						<Input
							placeholder="Phone number"
							name="phone_number"
							register={register("phone_number")}
							errorMessage={errors.phone_number}
						/>
						{/* NIF STAT */}
						<Input
							placeholder="Nif Stat"
							type="number"
							name="nif"
							register={register("nif")}
							errorMessage={errors.nif}
						/>
						{/* LOCATION */}
						<Input
							placeholder="Location"
							name="location"
							register={register("location")}
							errorMessage={errors.location}
						/>
					</div>
					<Button content="Add" type="submit" />
				</div>
				<AddImageRound
					bgIcon={<Business className="w-full h-full text-gray-400" />}
					ImagetoShow={ImagetoShow}
					handleInputFile={handleInputFile}
					handleFileChange={handleFileChange}
				/>
			</div>
		</form>
	);
}
