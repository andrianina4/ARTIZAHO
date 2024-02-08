import {ReactNode} from "react";

export type ICompany = {
	company_name: string;
	company_image: string;
	company_mail: string;
	company_tel: string;
	company_location: string;
	company_created_at: Date;
	company_type: string;
};

export type IProposalCompany = {
	company_id: number;
	company_name: string;
	company_image: string;
	company_date_proposed: Date;
	company_time_proposed: string;
	company_workshop: {name: string; icon: ReactNode; color: string};
	company_participants: number;
};
