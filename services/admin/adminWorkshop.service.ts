import {axiosInstanceApiClient} from "@/app/axiosClient";
import {getCurrentToken} from "@/axios";
import {IBackendResponse} from "@/types";
import {IWorkShop, WorkshopDataToSend} from "@/types/IWorkshop";

const access_token =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEwNTY5MTQ0LCJpYXQiOjE3MTA0ODI3NDQsImp0aSI6IjFlNTJmNGIxNWFlZTQxMzM4NzRjNDEwZDE4OTgyMjA4IiwidXNlcl9pZCI6MX0.binctLVuDFrREZXRYkZR2QmEV7boaOXLjDszBLip4L8";

// const access_token = await getCurrentToken();

export const getWorkShopAdmin = async () => {
	const {
		data: {results},
	} = await axiosInstanceApiClient.get<IBackendResponse<IWorkShop[]>>(`/v1/workshop/`);

	return results;
};

export const postWorkShop = async (data: WorkshopDataToSend) => {
	return await axiosInstanceApiClient.post<IWorkShop>(`/v1/workshop/`, data, {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	});
};

export const deleteWorkShop = async (id: number) => {
	return await axiosInstanceApiClient.delete<IWorkShop>(`/v1/workshop/${id}`, {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	});
};

export const patchWorkShop = async (id: number, data: any) => {
	return await axiosInstanceApiClient.patch<IWorkShop>(`/v1/workshop/${id}/`, data, {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	});
};
