import {ReactNode} from "react";

export type IPanelWorkshop = {
	shop_id: number;
	shop_name: string;
	shop_icon: ReactNode;
	shop_color: string;
};
export type IPanelCraftmen = {
	craft_id: number;
	craft_name: string;
	craft_image: string;
	craft_domain: string;
};

export type IParticipantWorkshop = {
	part_id: number;
	part_name: string;
	part_image: string;
	part_workshop: {
		icon: ReactNode;
		color: string;
		name: string;
	};
	part_nb_part: number;
	part_type: string | "individual" | "company";
	part_date: Date;
};

export type CraftsmenWhenAdd = {
	craft_id: number;
	craft_name: string;
	craft_img: string;
};

export type CalendarEvents = {
	id: number;
	title: string;
	textColor: string;
	start: string;
	end: string;
	workshop_type?: string | "individual" | "company";
	display?: string;
};

export type IWrokshopItem = {
	shop_id: number;
	shop_name: string;
	shop_color: string;
	shop_icon: ReactNode;
	shop_know_how: string;
	shop_craftsman: {name: string; image: string};
	shop_nb_participants: number;
	shop_duration: string;
};

export type ISuggestWorkshop = {
	workshop_id: number;
	workshop_name: string;
	workshop_know_how: string;
};

export type IPlanningItem = {
	id: number;
	date: string;
	time_start: string;
	time_end: string;
	craftsman: {name: string; img: string};
	location: string;
	price: number;
};
