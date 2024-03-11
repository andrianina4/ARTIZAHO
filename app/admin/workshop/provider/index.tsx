"use client";

import {getWorkShop} from "@/services/workshop.service";
import {IWorkShop} from "@/types/IWorkshop";
import {useQuery} from "@tanstack/react-query";
import React, {Context, createContext, useState} from "react";

type TWorkshopContext = {
	WorshopItems: any;
	isLoading: boolean;
	isError: boolean;
	addWorkshop: (data: IWorkShop) => void;
};

export const WorkshopContext: Context<any> = createContext<TWorkshopContext>({
	WorshopItems: [],
	isLoading: false,
	isError: false,
	addWorkshop: (data: IWorkShop) => {},
});

export default function WorkshopProvider({children}: {children: React.ReactNode}) {
	const {data, isLoading, isError} = useQuery({
		queryFn: () => getWorkShop(),
		queryKey: ["workshop"],
		retryOnMount: false,
	});

	const [Workshops, setWorkshops] = useState<IWorkShop[]>(data ? data : []);
	const addWorkshop = (data: IWorkShop) => {
		setWorkshops([...Workshops, data]);
	};

	// value
	const value: TWorkshopContext = {
		WorshopItems: data,
		isLoading: isLoading,
		isError: isError,
		addWorkshop: addWorkshop,
	};
	return <WorkshopContext.Provider value={value}>{children}</WorkshopContext.Provider>;
}
