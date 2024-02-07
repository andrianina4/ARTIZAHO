export type INotif = {
	notif_id: number;
	notif_company: {
		name: string;
		image: string;
	};
	notif_date_proposed: Date;
	notif_heure_proposed: string;
	notif_workshop: string;
};
