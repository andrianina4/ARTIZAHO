import {IImage} from "./IImage";

//export type Gender = "M" | "F" | "O";
export type ICraftman = {
	id: number;
	images: IImage[];
	availabilities: [];
	name: string;
	description: string;
	expertise: string;
	gender: string;
};

export type ICraftmanUpdate = {
	name: string;
	expertise: string;
	description: string;
};
