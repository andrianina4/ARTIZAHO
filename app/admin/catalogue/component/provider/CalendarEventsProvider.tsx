import React, {Context, createContext, useState} from "react";
import {CalendarEvents, IWorkShop} from "@/types/IWorkshop";
import {useQueries} from "@tanstack/react-query";
import {getWorkShopAdmin} from "@/services/admin/adminWorkshop.service";
import {getArtisan} from "@/services/artisan.service";

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
const initialWorkshopEvents = [
	{
		id: 1,
		title: "Bouquet en vase",
		textColor: "bronze",
		start: "2024-02-05T10:00:00",
		end: "2024-02-05T14:00:00",
		workshop_type: "individual",
		display: "block",
	},
	{
		id: 2,
		title: "Bouquet 2.0",
		textColor: "bronze",
		start: "2024-02-07T10:00:00",
		end: "2024-02-07T12:00:00",
		workshop_type: "company",
		display: "block",
	},
	{
		id: 3,
		title: "Bouquet 3.0",
		textColor: "bronze",
		start: "2024-02-13T08:00:00",
		end: "2024-02-13T13:00:00",
		workshop_type: "individual",
		display: "block",
	},
];

const initialCraftsmenEvents = [
	{
		id: 1,
		title: "Mahefa",
		textColor: "green",
		start: "2024-02-05",
		end: "2024-02-10",
	},
	{
		id: 2,
		title: "Mahefa 2.0",
		textColor: "green",
		start: "2024-02-12",
		end: "2024-02-17",
	},
	{
		id: 3,
		title: "Mahefa 3.0",
		textColor: "green",
		start: "2024-02-19",
		end: "2024-02-24",
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
	const results = useQueries({
		queries: [
			{queryKey: ["adminWorkshop"], queryFn: () => getWorkShopAdmin()},
			{queryKey: ["AdminCraftman"], queryFn: () => getArtisan()},
		],
	});

	console.log(results[0].data);
	console.log(results[1].data);

	const [WorkEvents, setWorkEvents] = useState<IWorkShop[] | undefined>(results[0].data);
	const [CraftEvents, setCraftEvents] = useState<CalendarEvents[]>(initialCraftsmenEvents);
	const [InitialEvents, setInitialEvents] = useState<CalendarEvents[]>([
		...initialWorkshopEvents,
		...initialCraftsmenEvents,
	]); // ! alefa ato ny azo avy ami'ny API
	const [FilteredEvents, setFilteredEvents] = useState<CalendarEvents[]>([]);
	const [BeforeEvents, setBeforeEvents] = useState<CalendarEvents[]>([]);

	// TODO : mbola sahotaka be ny zavatra ato
	// * Filtre Atelier
	const filterByWorkshop = (id: number) => {
		setBeforeEvents(FilteredEvents);
		// const temp: CalendarEvents[] = WorkEvents.filter((event) => event.id === id);
		// setFilteredEvents([...FilteredEvents, ...temp]);
	};
	const removeFilterByWorkshop = (id: number) => {
		const temp: CalendarEvents[] = InitialEvents.filter((event) => event.id === id);
		setFilteredEvents(FilteredEvents.filter((event) => !temp.includes(event)));
	};

	// * Filtre Artisan
	const filterByCraftsman = (id: number) => {
		setBeforeEvents(FilteredEvents);
		const temp: CalendarEvents[] = InitialEvents.filter((event) => event.id === id);
		setFilteredEvents([...FilteredEvents, ...temp]);
	};
	const removeFilterByCraftsman = (id: number) => {
		const temp: CalendarEvents[] = InitialEvents.filter((event) => event.id === id);
		setFilteredEvents(FilteredEvents.filter((event) => !temp.includes(event)));
	};

	// * Filtre Company
	const filterCompany = () => {
		let temp: CalendarEvents[] = [];
		if (FilteredEvents.length === 0) {
			temp = InitialEvents.filter((event) => event.workshop_type === "company");
			setBeforeEvents(InitialEvents);
		} else {
			temp = FilteredEvents.filter((event) => event.workshop_type === "company");
			setBeforeEvents(FilteredEvents);
		}
		setFilteredEvents(temp);
	};
	const removeFilterCompany = () => {
		if (BeforeEvents === InitialEvents) {
			setFilteredEvents([]);
		} else {
			setFilteredEvents(BeforeEvents);
		}
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
