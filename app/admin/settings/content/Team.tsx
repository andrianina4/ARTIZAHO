"use client";

import React, {useState} from "react";
import SettingItem from "../component/settingItem";
import Input from "@/components/input";
import Button from "@/components/button";
import {Check} from "@/constants/link/icons";
import {AddAdmin} from "@/hook/AddAdmin";

function Team() {
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const toggleForm = () => {
		setIsVisible(!isVisible);
	};

	const {register, handleSubmit, onSubmit, errors} = AddAdmin(toggleForm);

	return (
		<div className="flex flex-col h-full bg-white rounded-3xl px-20 py-10">
			<div>
				<SettingItem img={"/temp/vase.png"} />
				<SettingItem img={"/temp/vase.png"} />
				{isVisible && (
					<form className="flex items-center gap-2" onSubmit={handleSubmit(onSubmit)}>
						<Input
							placeholder="Name"
							className="w-full"
							name="admin_name"
							register={register("admin_name")}
							errorMessage={errors.admin_name}
						/>
						<Input
							placeholder="Email"
							className="w-full"
							name="admin_mail"
							register={register("admin_mail")}
							errorMessage={errors.admin_mail}
						/>
						<Button
							type="submit"
							leftIcon={<Check />}
							className="!w-14 h-14 bg-white-40% !text-green"
						/>
					</form>
				)}
				<Button
					content="Add new member"
					className="bg-white-40% !text-gray-60%"
					onClick={toggleForm}
				/>
			</div>
		</div>
	);
}

export default Team;
