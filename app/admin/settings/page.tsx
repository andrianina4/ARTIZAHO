"use client";

import React, {useState} from "react";
import Account from "./content/Account";
import Team from "./content/Team";

type Props = {};

function Page({}: Props) {
	const [content, setContent] = useState("account");
	const switchContent = () => {
		setContent(content === "account" ? "team" : "account");
	};
	return (
		<div className="flex flex-col h-full w-[95%] gap-4">
			<div className="flex gap-2 items-center">
				{content == "account" ? (
					<span className="text-brown bg-white py-2 px-3 rounded-md cursor-default">Account</span>
				) : (
					<span className="opacity-50 py-2 px-3 cursor-pointer" onClick={switchContent}>
						Account
					</span>
				)}
				{content == "team" ? (
					<span className="text-brown bg-white py-2 px-3 rounded-md cursor-default">Team</span>
				) : (
					<span className="opacity-50 py-2 px-3 cursor-pointer" onClick={switchContent}>
						Team
					</span>
				)}
			</div>
			<div className="w-full h-full">
				{content == "account" && <Account />}
				{content == "team" && <Team />}
			</div>
		</div>
	);
}

export default Page;
