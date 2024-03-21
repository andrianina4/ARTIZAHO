import {IImage} from "./IImage";

//export type Gender = "M" | "F" | "O";
export type ICraftman = {
	id: number;
	images: IImage[];
	availabilities: IAvailability[];
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

export interface IAvailabilityToSend {
	start_date: string;
	end_date: string;
	hours: DailyHours[];
}

interface DailyHours {
	start_time: string;
	end_time: string;
}

export interface IAvailability {
	id: number;
	hours: IHour[];
	start_date: string;
	end_date: string;
	artisan: number;
}

export interface IHour {
	id: number;
	start_time: string;
	end_time: string;
}
