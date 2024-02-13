export type INotif = {
	notif_id: number;
	notif_company: {
		name: string;
		image: string;
	};
	notif_workshop: string;
	notif_date_proposed: Date;
	notif_time_proposed: string;
	notif_duration?: string;
	notif_location?: string;
	notif_nb_particiant?: number;
	notif_request?: string;
};
