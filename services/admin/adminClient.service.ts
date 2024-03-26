import {axiosInstanceApiClient} from "@/app/axiosClient";
import {getCurrentToken} from "@/axios";
import {IBackendResponse} from "@/types";
import {IClient} from "@/types/IClient";

const access_token =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzExNTQwODY3LCJpYXQiOjE3MTE0NTQ0NjcsImp0aSI6IjQ4Y2JlODg3NGI5NDRlYmJhNWNhMDc4NTc0ZDc4NmI3IiwidXNlcl9pZCI6MX0.as89Ly_bT9q103KUQr9B0r6dQDdcVOC6CcndApbTyOc";

export const getClientAdmin = async () => {
	// const access_token = await getCurrentToken();
	const {
		data: {results},
	} = await axiosInstanceApiClient.get<IBackendResponse<IClient[]>>(`/v1/user/`, {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	});

	return results;
};
