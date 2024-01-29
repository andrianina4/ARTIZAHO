"use client";

import React, {useState} from "react";
import SettingItem from "../component/settingItem";
import Input from "@/components/input";
import Button from "@/components/button";
import {Check} from "@/constants/link/icons";
import {useForm} from "react-hook-form";
import {FormSettingsData} from "../../../schema/settingsSchema";
import ModalLayout from "@/components/modal";
import TeamForm from "./component/TeamForm";

function Team() {
	const {register, handleSubmit, reset} = useForm<FormSettingsData>();
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const [popup, setPopup] = useState<boolean>(false);

	const showForm = () => {
		setIsVisible(true);
	};

	const hideForm = () => {
		setIsVisible(false);
	};

	const switchPopup = () => {
		setPopup(popup ? false : true);
	};

	return (
		<div className="flex flex-col h-full bg-white rounded-3xl px-20 py-10">
			<form action="">
				<SettingItem img={"/temp/vase.png"} />
				<SettingItem img={"/temp/vase.png"} />
				{isVisible && (
					<div className="flex items-center gap-2  ">
						<Input placeholder="Name" className="w-1/2" register={register("admin_name")} />
						<Input placeholder="Email" className="w-1/2" register={register("admin_email")} />
						<Button
							leftIcon={<Check />}
							className="!w-14 h-14 bg-white-40% !text-green"
							onClick={hideForm}
						/>
					</div>
				)}
				<Button
					content="Add new member"
					className="bg-white-40% !text-gray-60%"
					onClick={showForm}
				/>
				{popup && (
					<ModalLayout open={popup} onClick={switchPopup} className="w-auto h-auto">
						<TeamForm />
					</ModalLayout>
				)}
			</form>
		</div>
	);
}

export default Team;
