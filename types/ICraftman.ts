import {ReactNode} from "react";
import { IImage } from "./IImage";


export type ICraftman = {
	id:number,
	name: string,
	description: string,
	expertise: string,
	gender: string,
	image: IImage,
	avalaibilities:[],
};

export type ICraftmanItem = {
	name: string;
	image: string;
	expertise: string
	score:"5"
	nbre_clients:"40"
};


// export type ICraftmanItem = {
// 	craftman_name: string;
// 	craftman_image: string;
// 	craftman_domaine: string;
// 	craftman_workshop: {
// 		name: string;
// 		icon: ReactNode;
// 		color: string;
// 	};
// 	craftman_nb_client: number;
// };

export type ISuggestCraftman = {
	craftsman_id: number;
	craftsman_name: string;
	craftsman_image: string;
	craftsman_know_how: string;
};
