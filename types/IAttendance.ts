import {IWorkShop} from "./IWorkshop";
import {ICraftman} from "./ICraftman";

export interface IAttendance {
	id: number;
	user: number;
	number_of_participants: number;
	workshop_bookable: WorkshopBookable;
	payment_status: string;
	custom_workshop: null; // Assuming null for custom_workshop
}

interface WorkshopBookable {
	id: number;
	workshop: IWorkShop;
	artisan: ICraftman;
	start_date: string;
	end_date: string;
	time: string; // Time in format "HH:MM:SS" (string)
	duration: number; // Duration in seconds (number)
	available_places: number;
	location: string;
	is_available: boolean;
	created_at: string;
	workshop_info: number; // Assuming it references an ID (number)
}
