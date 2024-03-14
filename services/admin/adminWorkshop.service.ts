import {axiosInstanceApiClient} from "@/app/axiosClient";
import {getCurrentToken} from "@/axios";
import {IWorkShop, WorkshopDataToSend} from "@/types/IWorkshop";

const access_token =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEwNDgwNjgwLCJpYXQiOjE3MTAzOTQyODAsImp0aSI6IjIyODllNmU4MWI2ODRlMzJiMTFhNjgwODMzYjgwMzU0IiwidXNlcl9pZCI6MX0.0BRlNVM9PwVTzXAIdYPilS5sKP-j60T4l_GWZQq5cgU";

// const access_token = await getCurrentToken();

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
