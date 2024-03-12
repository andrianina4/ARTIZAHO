import {axiosInstanceApiClient} from "@/app/axiosClient";
import {getCurrentToken} from "@/axios";
import {IWorkShop, WorkshopDataToSend} from "@/types/IWorkshop";

export const postWorkShop = async (data: WorkshopDataToSend) => {
	const access_token = await getCurrentToken();

	return await axiosInstanceApiClient.post<IWorkShop>(`/v1/workshop/`, data, {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	});
};
