"use client";

import React, {useContext, useEffect, useState} from "react";
import ClientItem from "../component/clientItem";
import {IClient} from "@/types/IClient";
import {SearchContext} from "../../provider/SearchProvider";
import {useQuery} from "@tanstack/react-query";
import {getClientAdmin} from "@/services/admin/adminClient.service";
import LoadingComponent from "@/app/_global/loading";
import ErrorComponent from "@/app/_global/error";

export default function ListClient() {
	// * VALEURS PAR DEFAUT
	const {data, isLoading, isError} = useQuery({
		queryKey: ["adminClient"],
		queryFn: () => getClientAdmin(),
	});

	// * FILTRE PAR SEARCH BAR
	const [FilteredData, setFilteredData] = useState<IClient[]>([]);
	const searchContext = useContext(SearchContext);
	useEffect(() => {
		if (!isLoading) {
			const filteredValues = data!.filter((value) => {
				if (
					value.first_name?.toLocaleLowerCase().includes(searchContext.Value.toLocaleLowerCase()) ||
					value.last_name?.toLocaleLowerCase().includes(searchContext.Value.toLocaleLowerCase()) ||
					value.email?.toLocaleLowerCase().includes(searchContext.Value.toLocaleLowerCase()) ||
					value.username?.toLocaleLowerCase().includes(searchContext.Value.toLocaleLowerCase())
				) {
					return value;
				}
			});
			setFilteredData(filteredValues);
		}
	}, [searchContext.Value, isLoading, data]);

	if (isLoading) return <LoadingComponent />;

	if (isError) return <ErrorComponent />;

	return (
		<div>
			{FilteredData.map((client: IClient, index) => {
				if (!client.is_super_admin) {
					return <ClientItem key={index} client={client} />;
				}
			})}
		</div>
	);
}
