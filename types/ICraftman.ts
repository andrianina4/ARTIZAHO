import {ReactNode} from "react";

export type Gender="M"|"F"|"O"
export type ICraftman = {
	name: string;
	description: string;
	expertise: "Floral";
	gender: Gender
};


export type ICraftmanItem = {
	craftman_name: string;
	craftman_image: string;
	craftman_domaine: string;
	craftman_workshop: {
		name: string;
		icon: ReactNode;
		color: string;
	};
	craftman_nb_client: number;
};

export type ISuggestCraftman = {
	craftsman_id: number;
	craftsman_name: string;
	craftsman_image: string;
	craftsman_know_how: string;
};
