import Input from "@/components/input";
import Textarea from "@/components/textarea";
import {AddOutline, Time, Toolbox} from "@/constants/link/icons";
import React from "react";

export default function FormAtelier() {
	return (
		<div className="flex flex-col w-full">
			<div className="flex flex-row items-center text-bronze gap-6 pb-8">
				<div className="">
					<Toolbox className="w-6 h-6" />
				</div>
				<div className="text-2xl">Nouvel Atelier</div>
			</div>
			<div className="flex flex-row gap-2">
				<div className="flex flex-col">
					<Input placeholder="Nom" />
					<Input placeholder="Assigner un artisan" leftIcon={<AddOutline />} />
					<div className="flex flex-row">
						<Input placeholder="Localisation" />
						<Input placeholder="Tarifs" />
					</div>
					<div className="flex flex-row">
						<Input placeholder="DUREE" leftIcon={<Time />} />
						<Input placeholder="DUREE" />
					</div>
					<Input placeholder="Nombre maximum de participants" />
					<Textarea placeholder="Description de l'atelier" />
					{/* <div className="flex flex-col gap-2">
					<div className="w-[415px] h-[63px] flex items-center bg-white-40% px-6 rounded-xl">
						<input
							type="text"
							placeholder="Nom"
							className="outline-none bg-white-40% text-sm w-full"
						/>
					</div>
					<div className="w-[415px] h-[63px] flex flex-row gap-2 items-center bg-white-40% px-6 rounded-xl">
						<AddOutline className="w-4 h-4 opacity-50" />
						<input
							type="text"
							placeholder="Assigner un artisan"
							className="outline-none bg-white-40% text-sm w-full"
						/>
					</div>
					<div className="h-[63px] flex gap-2">
						<div className="w-[240px] flex items-center bg-white-40% px-6 rounded-xl">
							<input
								type="text"
								placeholder="Localisation"
								className="outline-none bg-white-40% text-sm w-full"
							/>
						</div>
						<div className="w-[165px] flex items-center bg-white-40% px-6 rounded-xl">
							<input
								type="text"
								placeholder="Tarifs"
								className="outline-none bg-white-40% text-sm w-full"
							/>
						</div>
					</div>
					<div className="h-[63px] flex items-center justify-between">
						<div className="w-[155px] h-full flex items-center gap-2 bg-white-40% px-6 rounded-xl">
							<Time className="opacity-50" />
							<input type="time" className="outline-none bg-white-40% text-sm w-full opacity-50" />
						</div>
						<div className="flex flex-row h-full gap-2">
							<div className="flex items-center opacity-50">Durée</div>
							<div className="w-[121px] flex h-full items-center bg-white-40% px-6 rounded-xl">
								<input
									type="time"
									className="outline-none bg-white-40% flex text-sm w-full opacity-50"
								/>
							</div>
						</div>
					</div>
					<div className="w-[415px] h-[63px] flex items-center bg-white-40% px-6 rounded-xl">
						<input
							type="number"
							placeholder="Nombre maximum de participants"
							className="outline-none bg-white-40% text-sm w-full"
						/>
					</div>
					<div className="w-[415px] h-[183px] flex items-center bg-white-40% px-6 rounded-xl">
						<input
							type="text"
							placeholder="Description de l'atelier"
							className="outline-none bg-white-40% text-sm w-full"
						/>
					</div>
				</div> */}
				</div>
				<div>Galerie</div>
			</div>
		</div>
	);
}
