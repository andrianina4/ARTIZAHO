import {ReactNode} from "react";

export type IPanelWorkshop = {
	shop_id: number;
	shop_name: string;
	shop_color: string;
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
