import axios, {AxiosResponse} from "axios";

// ! Change if needed
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL_JSON_SERVER;

export const getAll = (endpoint: string): Promise<AxiosResponse<any>> => {
	// let params = 0;
	return axios.get(`${BASE_URL}${endpoint}`);
};

// ? OHATRA
// async function getAllbyNick<T>({url}: {url: string}) {
// 	const urlBase = `${BASE_URL}/api/${url}`;
// 	const resultat = new Promise<
// 		| IResponse<T>
// 		| T
// 		| {
// 				message: string;
// 		  }
// 	>((resolve, reject) => {
// 		fetch(urlBase, {
// 			method: "GET",
// 			headers: {
// 				"Access-Control-Allow-Origin": "*",
// 			},
// 		})
// 			.then((response) => {
// 				response.json().then((finalResponse) => {
// 					if (finalResponse.items) {
// 						resolve(finalResponse as IResponse<T>);
// 					}
// 					resolve(finalResponse as T);
// 				});
// 			})
// 			.catch((err) => {
// 				console.log(JSON.stringify(err));
// 				reject({message: err.message} as {
// 					message: string;
// 				});
// 			});
// 	});

// 	return resultat;
// }

// export const getAllbyDylan = (
//   endpoint: string,
//   limit?: number,
//   offset?: number,
//   filter?: any
// ): Promise<AxiosResponse<{ count: number; results: any[] }>> => {
//   let params = {
//     limit: limit || 10,
//     offset: offset || 0,
//   };
//   if (filter) {
//     params = { ...filter };
//   }
//   return axios.get(${API_HREF}${endpoint}/, {
//     params,
//     headers: {
//       Authorization: Bearer ${localStorage.getItem("token")},
//     },
//   });
// };