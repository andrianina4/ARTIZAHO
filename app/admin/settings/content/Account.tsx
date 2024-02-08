"use client";

import React from "react";
import InputContainer from "../../craftmen/information/component/InputContainer";
import Input from "@/components/input";
import Button from "@/components/button";
import ProfileCard from "@/components/ProfileCard";
import { Vase } from "@/constants/link/images";
import { AddImage } from "@/constants/link/icons";

type Props = {};

function Account({}: Props) {
	return (
		<div className=" flex h-full bg-white rounded-3xl px-20 py-10 ">
			<div className=" flex flex-col w-3/5">
				<div className="text-brown text-lg font-bold ml-12">
					<span>About your account</span>
				</div>
				<div className="flex flex-col mt-10 grow gap-5">
					<InputContainer title="Fullname">
						<Input placeholder="Fullname..." className="w-full" />
					</InputContainer>
					<InputContainer title="Email">
						<Input placeholder="Email..." className="w-full" />
					</InputContainer>
					<InputContainer title="Phone">
						<Input placeholder="Phone..." className="w-full" />
					</InputContainer>
					<InputContainer title="New password">
						<Input type="password" placeholder="New Password..." className="w-full" />
					</InputContainer>
				</div>
				<div className="flex gap-8 ">
					<Button content="Save" />
					<Button content="Cancel" className="bg-transparent !text-black hover:bg-white-40%" />
				</div>
			</div>
			<div className="w-2/5 flex justify-end">
				<ProfileCard img={Vase} icon={<AddImage/>} styleIcon="bg-bronze text-white" className="!w-64 h-80 mt-10 mr-10"></ProfileCard>
			</div>
		</div>
	);
}

export default Account;
