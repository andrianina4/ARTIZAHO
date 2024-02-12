"use client";

import React, {Context, createContext, useState} from "react";
import {CalendarEvents} from "@/types/IWorkshop";

type CalendarEventsContextType = {
	InitialEvents: Array<CalendarEvents> | null;
	FilteredEvents: Array<CalendarEvents> | null;
	filterByWorkshop: (id: number) => void;
	removeFilterByWorkshop: (id: number) => void;
	filterByCraftsman: (id: number) => void;
	removeFilterByCraftsman: (id: number) => void;
	filterCompany: () => void;
	removeFilterCompany: () => void;
};

// FAKE DATA
const initialValues = [
	{
		id: 1,
		title: "Bouquet en vase",
		textColor: "blue",
		start: "2024-02-04",
		end: "2024-02-04",
		workshop_type: "individual",
	},
	{
		id: 2,
		title: "Bouquet 2.0",
		textColor: "bronze",
		start: "2024-02-05",
		end: "2024-02-05",
		workshop_type: "company",
	},
	{
		id: 3,
		title: "Bouquet 3.0",
		textColor: "green",
		start: "2024-02-06",
		end: "2024-02-07",
		workshop_type: "individual",
	},
];

export const CalendarEventsContext: Context<any> = createContext<CalendarEventsContextType>({
	InitialEvents: null,
	FilteredEvents: null,
	filterByWorkshop: (id) => {},
	removeFilterByWorkshop: (id) => {},
	filterByCraftsman: (id) => {},
	removeFilterByCraftsman: (id) => {},
	filterCompany: () => {},
	removeFilterCompany: () => {},
});

export default function CalendarEventsProvider({children}: {children: React.ReactNode}) {
	const [InitialEvents, setInitialEvents] = useState<CalendarEvents[]>(initialValues); // ! alefa ato ny azo avy ami'ny API
	const [FilteredEvents, setFilteredEvents] = useState<CalendarEvents[]>([]);

	// * Filtre Atelier
	const filterByWorkshop = (id: number) => {
		const temp: CalendarEvents[] = InitialEvents.filter((event) => event.id === id);
		setFilteredEvents([...FilteredEvents, ...temp]);
	};
	const removeFilterByWorkshop = (id: number) => {
		const temp: CalendarEvents[] = InitialEvents.filter((event) => event.id === id);
		setFilteredEvents(FilteredEvents.filter((event) => !temp.includes(event)));
	};

	// * Filtre Artisan
	const filterByCraftsman = (id: number) => {
		const temp: CalendarEvents[] = InitialEvents.filter((event) => event.id === id);
		setFilteredEvents([...FilteredEvents, ...temp]);
	};
	const removeFilterByCraftsman = (id: number) => {
		const temp: CalendarEvents[] = InitialEvents.filter((event) => event.id === id);
		setFilteredEvents(FilteredEvents.filter((event) => !temp.includes(event)));
	};

	// * Filtre Company
	const filterCompany = () => {
		const temp: CalendarEvents[] = InitialEvents.filter(
			(event) => event.workshop_type === "company"
		);
		setFilteredEvents([...FilteredEvents, ...temp]);
	};
	const removeFilterCompany = () => {
		const temp: CalendarEvents[] = InitialEvents.filter(
			(event) => event.workshop_type === "company"
		);
		setFilteredEvents(FilteredEvents.filter((event) => !temp.includes(event)));
	};

	const value: CalendarEventsContextType = {
		InitialEvents: InitialEvents,
		FilteredEvents: FilteredEvents,
		filterByWorkshop: filterByWorkshop,
		removeFilterByWorkshop: removeFilterByWorkshop,
		filterByCraftsman: filterByCraftsman,
		removeFilterByCraftsman: removeFilterByCraftsman,
		filterCompany: filterCompany,
		removeFilterCompany: removeFilterCompany,
	};

	return <CalendarEventsContext.Provider value={value}>{children}</CalendarEventsContext.Provider>;
}
