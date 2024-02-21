"use client";

import React, {useState} from "react";
import {LeftLine} from "@/constants/link/icons";
import Button from "@/components/button";
import AboutWorkshop from "./component/AboutWorkshop";
import ListWorkshop from "./component/ListWorkshop";

export default function page({params}: {params: {id: string; content: string}}) {
	const [Content, setContent] = useState<string>((params.content = "info"));
	const switchContent = () => {
		setContent(Content === "info" ? "participant" : "info");
	};

	return (
		<div className="flex flex-col w-full h-full gap-4 bg-white rounded-3xl pt-8 px-8">
			{/* HEADER AVEC RETOUR */}
			<div className="flex items-center gap-4">
				<Button
					content=""
					isBackButton
					leftIcon={<LeftLine />}
					className="!w-6 !h-6 !bg-transparent !text-brown font-bold "
				/>
				<span className="text-2xl font-semibold text-brown-80%">Workshop {params.id} informations</span>
			</div>
			{/* CHOIX CONTENU */}
			<div className="border-b-2 border-bronze flex gap-3 w-full font-semibold opacity-80">
				{Content === "info" && (
					<>
						<div className="px-3 py-3 border-b-4 border-bronze text-brown">Workshop informations</div>
						<div className="px-3 py-3 cursor-pointer" onClick={switchContent}>
							Participants
						</div>
					</>
				)}
				{Content === "participant" && (
					<>
						<div className="px-3 py-3 cursor-pointer" onClick={switchContent}>
							Workshop informations
						</div>
						<div className="px-3 py-3 border-b-4 border-bronze text-brown font-semibold">Participants</div>
					</>
				)}
			</div>
			{/* CONTENU ADAPTATIF */}
			{Content === "info" && <AboutWorkshop />}
			{Content === "participant" && <ListWorkshop />}
		</div>
	);
}
