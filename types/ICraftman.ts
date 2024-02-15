import {ReactNode} from "react";

export type ICraftman = {
	craftman_name: string;
	craftman_email: string;
	craftman_location: string;
	craftman_nbr: number;
};

export type ICraftman2 = {
	craftman_name: string;
	craftman_image: string;
	craftman_domaine: string;
	craftman_color: string;
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
