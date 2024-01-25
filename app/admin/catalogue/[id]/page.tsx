import React from "react";
import {EditFill, LeftLine} from "@/constants/link/icons";
import Button from "@/components/button";
import Item from "./component/Item";

const atelier = {
	id: 1,
	name: "Bouquet en vase",
	Artisan: {id: 1, name: "Mahefa", image: "/aze.png"},
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
				<span className="text-2xl font-semibold text-brown-80%">Workshops List{params.id}</span>
			</div>
			<div className="flex flex-row w-full pl-12">
				<div className="flex flex-col w-3/5">
					<div className="text-brown mb-5 font-bold">Workshop information</div>
					<div className="flex flex-col gap-2">
						<Item
							label="Nom"
							name={atelier.name}
							rightIcon={<EditFill className="w-6 h-6 opacity-50 ml-6" />}
						/>
						<Item label="Artisan" name={atelier.Artisan.name} image={atelier.Artisan.image} />
						<div className="flex flex-row"></div>
					</div>
				</div>
				<div className="w-2/5 pl-7">
					<div className="text-brown mb-5 font-bold">workshop performance</div>
				</div>
			</div>
		</div>
	);
}
