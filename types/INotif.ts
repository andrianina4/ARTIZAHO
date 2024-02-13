import {ReactNode} from "react";

export type INotif = {
	notif_id: number;
	notif_company: {
		name: string;
		image: string;
	};
	notif_workshop: {name: string; icon: ReactNode; color: string};
	notif_date_proposed: Date;
	notif_time_proposed: string;
	notif_duration: string;
	notif_location: string;
	notif_nb_participant: number;
	notif_request: string;
};
