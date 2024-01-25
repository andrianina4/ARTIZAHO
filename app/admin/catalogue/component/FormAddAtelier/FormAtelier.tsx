import Button from "@/components/button";
import Input from "@/components/input";
import Textarea from "@/components/textarea";
import {AddOutline, ImageAdd, Time, Toolbox} from "@/constants/link/icons";
import {useForm, SubmitHandler} from "react-hook-form";
import React from "react";

type FormFieldsAtelier = {
	name: string;
	artisan: string;
	localisation: string;
	tarifs: number;
	heure_debut: string;
	duree: string;
	nb_max_participants: number;
	desc: string;
};

export default function FormAtelier() {
	const handleInputFile = () => {
		const inputELement = document.querySelector(".input-file-atelier") as HTMLFormElement;
		if (inputELement) {
			inputELement.click();
		}
	};

	const {register} = useForm<FormFieldsAtelier>();

	return (
		<form>
			<div className="flex flex-col w-full">
				<div className="flex flex-row items-center text-bronze gap-6 pb-8">
					<div className="">
						<Toolbox className="w-6 h-6" />
					</div>
					<div className="text-2xl">Nouvel Atelier</div>
				</div>
				<div className="flex flex-row gap-2 ">
					<div className="flex flex-col w-[415px] ">
						<Input placeholder="Nom" />
						<Input
							placeholder="Assigner un artisan"
							leftIcon={<AddOutline className="w-5 h-5 opacity-50" />}
						/>
						<div className="flex flex-row">
							<Input placeholder="Localisation" className="!w-1/2 mr-2" />
							<Input type="number" placeholder="Tarifs" className="!w-1/2" />
						</div>
						<div className="h-[63px] flex items-center justify-between">
							<div className="w-[155px] bg-white-40% mt-1 mb-2 rounded-2xl flex items-center input input-bordered h-14 gap-2">
								<Time className="w-6 h-6 opacity-50" />
								<input
									type="time"
									className="outline-none bg-white-40% text-sm w-full opacity-50"
								/>
							</div>
							<div className="flex flex-row h-full gap-2 mt-1 mb-2 ">
								<div className="flex items-center opacity-50 h-full">Duration</div>
								<div className="w-[121px]x  bg-white-40%  rounded-2xl flex items-center input input-bordered h-14">
									<input
										type="time"
										className="outline-none bg-white-40% flex text-sm w-full opacity-50"
									/>
								</div>
							</div>
						</div>
						<Input type="number" placeholder="Nombre maximum de participants" />
						<Textarea placeholder="Description de l'atelier" />
						<Button content="AJouter" />
					</div>
					<div className="ml-14 mr-40 flex flex-col gap-4">
						<div className="text-base text-bronze font-bold">Galerie</div>
						<div
							className="w-40 h-32 gap-2 bg-white-40% rounded-2xl flex items-center input input-bordered flex-col justify-center cursor-pointer"
							onClick={() => {
								handleInputFile();
							}}>
							<input type="file" className="input-file-atelier" hidden />
							<div className="flex flex-col items-center justify-center">
								<ImageAdd className="w-9 h-9 opacity-50" />
								<div className="opacity-50">Add Pictures</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</form>
	);
}
