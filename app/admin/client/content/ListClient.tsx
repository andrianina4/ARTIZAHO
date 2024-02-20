"use client";

import React, {useContext, useEffect, useState} from "react";
import ClientItem from "../component/clientItem";
import {IClient} from "@/types/IClient";
import {SearchContext} from "../../provider/SearchProvider";

const data: Array<IClient> = [
	{
		client_name: "Antonio Hery",
		client_image: "/temp/vase.png",
		client_mail: "antonio@gmail.com",
		client_tel: "0343403434",
		client_location: "Antananarivo",
		client_created_at: new Date(),
		client_type: "company",
	},
	{
		client_name: "Nick Steven",
		client_image: "/temp/vase.png",
		client_mail: "nick@gmail.com",
		client_tel: "0343403434",
		client_location: "Antananarivo",
		client_created_at: new Date(),
		client_type: "individuals",
	},
	{
		client_name: "Onja Nirina",
		client_image: "/temp/vase.png",
		client_mail: "onja@gmail.com",
		client_tel: "0343403434",
		client_location: "Antananarivo",
		client_created_at: new Date(),
		client_type: "company",
	},
];

export default function listClient() {
	// * VALEURS PAR DEFAUT
	const [Data, setData] = useState<IClient[]>(data);

	// * FILTRE PAR SEARCH BAR
	const [FilteredData, setFilteredData] = useState<IClient[]>([]);
	const searchContext = useContext(SearchContext);
	useEffect(() => {
		const filteredValues = Data.filter((value) => {
			if (
				value.client_name?.toLocaleLowerCase().includes(searchContext.Value.toLocaleLowerCase()) ||
				value.client_mail?.toLocaleLowerCase().includes(searchContext.Value.toLocaleLowerCase()) ||
				value.client_location?.toLocaleLowerCase().includes(searchContext.Value.toLocaleLowerCase())
			) {
				return value;
			}
		});
		setFilteredData(filteredValues);
	}, [searchContext.Value]);

	return (
		<div>
			{FilteredData.map((client, index) => (
				<ClientItem key={index} client={client} />
			))}
		</div>
	);
}
