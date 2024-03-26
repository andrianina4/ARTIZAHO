import {StringDate} from ".";
import {IImage} from "./IImage";

export interface IClient {
	id: number;
	images: IImage[]; // Array of image URLs (strings)
	first_name: string;
	last_name: string;
	is_active: boolean;
	date_joined: StringDate; // Date in ISO 8601 format (string)
	username: string;
	email: string;
	account_type: string; // Single character code (string)
	gender: string; // Single character code (string)
	dob: string; // Date of birth in YYYY-MM-DD format (string)
	nif: string;
	phone_number: string;
	is_super_admin: boolean;
}
