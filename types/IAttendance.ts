import {ReactNode} from "react";

export type IAttendance = {
	att_id: number;
	att_image: string;
	att_name: string;
	att_workshop: {
		workshop_icon: ReactNode;
		workshop_name: string;
		workshop_color: string;
	};
	att_nb_part: number;
	att_type: "company" | "individuals";
	att_date_reservation: Date;
	att_status: "inprogress" | "paid" | "refunded";
};
