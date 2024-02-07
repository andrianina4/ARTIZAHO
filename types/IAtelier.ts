import {ReactNode} from "react";

export type IParticipantAtelier = {
	part_id: number;
	part_name: string;
	part_image: string;
	part_workshop: {
		workshop_icon: ReactNode;
		workshop_color: string;
		workshop_name: string;
	};
	part_nb_part: number;
	part_type: string | "individual" | "company";
	part_date: Date;
};
