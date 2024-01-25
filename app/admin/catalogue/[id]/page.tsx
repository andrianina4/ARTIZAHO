import React from "react";
import {EditFill, LeftLine} from "@/constants/link/icons";
import Button from "@/components/button";
import Item from "./component/Item";

const atelier = {
	id: 1,
	name: "Bouquet en vase",
	Artisan: {id: 1, name: "Mahefa", image: "/temp/vase.png"},
	localisation: "Antananarivo",
	tarifs: 15,
	heure_debut: "14:30",
	duree: "1:30",
	nb_max_participants: 10,
	desc: "Welcome to Hanta's atelier-boutique, where you can learn how to create exceptional floral arrangements. During this experience, you'll discover a variety of foliage and flowers, and learn how to use them to create beautiful bouquets.",
};

export default function page({params}: {params: {id: string}}) {
	return (
		<div className="flex flex-col w-full h-full gap-6 bg-white rounded-3xl pt-8 pl-8">
			<div className="flex items-center gap-4">
				<Button
					content=""
					isBackButton
					leftIcon={<LeftLine />}
					className="!w-6 !h-6 !bg-transparent !text-brown font-bold "
				/>
				<span className="text-2xl font-semibold text-brown-80%">Workshops List {params.id}</span>
			</div>
			<div className="flex flex-row w-full pl-12">
				<div className="flex flex-col w-3/5">
					<div className="text-brown mb-5 font-bold">Workshop information</div>
					<div className="flex flex-col gap-2">
						<Item
							label="Nom"
							value={atelier.name}
							rightIcon={<EditFill className="w-6 h-6 opacity-50 ml-6" />}
						/>
						<Item label="Artisan" value={atelier.Artisan.name} image={atelier.Artisan.image} />
						<Item label="Localisation" value={atelier.localisation} />
						<Item label="Tarifs" value={atelier.tarifs} />
						<div className="flex flex-row">
							<div className="w-1/5 flex items-center opacity-60 font-bold"></div>
							<div className="w-1/5 h-16 bg-white-40% flex items-center px-6 rounded-2xl">
								{atelier.heure_debut}
							</div>
							<div className="w-1/5 h-16 flex items-center">Duration</div>
							<div className="w-1/5 h-16 bg-white-40% flex items-center px-6 rounded-2xl">
								{atelier.heure_debut}
							</div>
						</div>
						<Item label="Participants" value={atelier.nb_max_participants} />
						<Item label="Description" value={atelier.desc} desc />
						<div className="flex flex-row"></div>
					</div>
				</div>
				<div className="w-2/5 pl-7">
					<div className="text-brown mb-5 font-bold">Workshop performance</div>
				</div>
			</div>
		</div>
	);
}
