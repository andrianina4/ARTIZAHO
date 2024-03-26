import {axiosInstanceApiClient} from "@/app/axiosClient";
import {getCurrentToken} from "@/axios";
import {IBackendResponse} from "@/types";
import {IClient} from "@/types/IClient";

export const getClientAdmin = async () => {
	const access_token = await getCurrentToken();
	const {
		data: {results},
	} = await axiosInstanceApiClient.get<IBackendResponse<IClient[]>>(`/v1/user/`, {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	});

	return results;
};
