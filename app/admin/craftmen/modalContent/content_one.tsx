import React from "react";
import {Person, UserAddFill} from "@/constants/link/icons";
import Input from "@/components/input";
import Textarea from "@/components/textarea";
import {ISelect} from "@/types/IField";
import Button from "@/components/button";
import AddImageRound from "@/components/AddImageRound";
import {useSendCraftman} from "@/hook/AdminArtisan/useSendCraftman";
import SelectCustom from "@/components/Select";
import PopupHeader from "@/components/PopupHeader";
import {selectExpertiseItem, selectGenderItem} from "@/constants/data/SelectFormValues";

type props = {
	onNext?: VoidFunction;
	onClick: VoidFunction;
};

function Content_one({onClick}: props) {
	const {register, handleSubmit, handleReset, onSubmit, errors, ImagetoShow, handleInputFile, handleFileChange} =
		useSendCraftman();

	return (
		<div className="flex flex-col w-full">
			<PopupHeader icon={<UserAddFill className="w-6 h-6" />} title="New craftsman" />
			<form className="w-full h-full flex flex-col justify-between" onSubmit={handleSubmit(onSubmit)}>
				<div className="w-full flex flex-row">
					<div className="flex flex-col w-1/2">
						<Input placeholder="Name" register={register("name")} errorMessage={errors.name} />
						<SelectCustom
							options={selectExpertiseItem}
							register={register("expertise")}
							className="input-bordered mt-2"
						/>
						<SelectCustom options={selectGenderItem} register={register("gender")} className="input-bordered mt-2" />
						<Textarea
							placeholder="About the craftman"
							className="h-48 mt-2"
							register={register("description")}
							errorMessage={errors.description}
						/>
					</div>
					<div className="flex flex-col w-1/2 items-center ">
						<AddImageRound
							handleFileChange={handleFileChange}
							handleInputFile={handleInputFile}
							ImagetoShow={ImagetoShow}
							bgIcon={<Person className="w-full h-full text-gray-400" />}
						/>
					</div>
				</div>
				<div className="flex gap-8">
					<Button type="submit" content="Save" onClick={onClick} />
					<button
						onClick={handleReset}
						type="button"
						className="w-full py-3.5 px-4 text-sm rounded-2xl flex justify-center items-center bg-bronze bg-transparent text-black  hover:bg-bronze hover:bg-opacity-50 transition-all ease-linear duration-100">
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
}

export default Content_one;
