"use client";

import React, {useState} from "react";
import SettingItem from "../component/settingItem";
import Input from "@/components/input";
import Button from "@/components/button";
import {Add, Check} from "@/constants/link/icons";
import {AddAdmin} from "@/hook/AddAdmin";
import {getClientAdmin} from "@/services/admin/adminClient.service";
import {useQuery} from "@tanstack/react-query";
import ErrorComponent from "@/app/_global/error";
import LoadingComponent from "@/app/_global/loading";
import {IClient} from "@/types/IClient";

function Team() {
	// * VALEURS PAR DEFAUT
	const {data, isLoading, isError} = useQuery({
		queryKey: ["adminClient"],
		queryFn: () => getClientAdmin(),
	});

	const [isVisible, setIsVisible] = useState<boolean>(false);
	const toggleForm = () => {
		setIsVisible(!isVisible);
	};

	const {register, handleSubmit, onSubmit, errors} = AddAdmin(toggleForm);

	if (isLoading) return <LoadingComponent />;

	if (isError) return <ErrorComponent />;

	return (
		<div className="flex flex-col h-full bg-white rounded-3xl px-20 py-10">
			<div>
				{data?.map((item: IClient, index) => {
					if (item.is_active && item.is_super_admin) {
						return <SettingItem key={index} client={item} />;
					}
				})}
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
						<Button type="submit" leftIcon={<Check />} className="!w-14 h-14 bg-white-40% !text-green" />
					</form>
				)}
				<Button
					leftIcon={<Add />}
					content="Add new member"
					className="bg-white-40% !text-gray-60%"
					onClick={toggleForm}
				/>
			</div>
		</div>
	);
}

export default Team;
