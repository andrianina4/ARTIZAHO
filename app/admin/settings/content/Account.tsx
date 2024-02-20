"use client";

import React from "react";
import InputContainer from "../../craftmen/information/component/InputContainer";
import Input from "@/components/input";
import Button from "@/components/button";
import ProfileCard from "@/components/ProfileCard";
import {Vase} from "@/constants/link/images";
import {AddImage, Person} from "@/constants/link/icons";
import {UpdateAdmin} from "@/hook/UpdateAdmin";
import AddImageRound from "@/components/AddImageRound";

type Props = {};

function Account({}: Props) {
	const {register, handleSubmit, onSubmit, errors, ImagetoShow, handleInputFile, handleFileChange} =
		UpdateAdmin();

	return (
		<div className=" flex h-full bg-white rounded-3xl px-20 py-10 ">
			<form className=" flex flex-col w-3/5" onSubmit={handleSubmit(onSubmit)}>
				<div className="text-brown text-lg font-bold ml-12">
					<span>About your account</span>
				</div>
				<div className="flex flex-col mt-10 grow gap-5">
					<InputContainer title="Fullname">
						<Input
							placeholder="Fullname..."
							className="w-full"
							name="fullname"
							register={register("fullname")}
							errorMessage={errors.fullname}
						/>
					</InputContainer>
					<InputContainer title="Email">
						<Input
							placeholder="Email..."
							className="w-full"
							name="email"
							register={register("email")}
							errorMessage={errors.email}
						/>
					</InputContainer>
					<InputContainer title="Phone">
						<Input
							placeholder="Phone..."
							className="w-full"
							name="phone_number"
							register={register("phone_number")}
							errorMessage={errors.phone_number}
						/>
					</InputContainer>
					<InputContainer title="New password">
						<Input
							type="password"
							placeholder="New Password..."
							className="w-full"
							name="password"
							register={register("password")}
							errorMessage={errors.password}
						/>
					</InputContainer>
				</div>
				<div className="flex gap-8 ">
					<Button content="Save" type="submit" />
					<Button content="Cancel" className="bg-transparent !text-black hover:bg-white-40%" />
				</div>
			</form>
			<div className="w-2/5 flex justify-end">
				<ProfileCard
					adminName="Maheefa"
					className="!w-64 h-80 mt-10 mr-10"
					ImagetoShow={ImagetoShow}
					handleInputFile={handleInputFile}
					handleFileChange={handleFileChange}
				/>
			</div>
		</div>
	);
}

export default Account;
