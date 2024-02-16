import axios from "axios";

const BASE_URL = process.env.BASEURL;

export const get = async (url: string, token: string) => {
	const response = await axios.get(`${BASE_URL}`);
	return response.data;
};

// ! TSY IZY TY
// async function BLAAAAAAAA<T>({ url }: { url: string }) {
//   const urlBase = ${BASE_URL}/api/${url};
//   const resultat = new Promise<
//     | IResponse<T>
//     | T
//     | {
//         message: string;
//       }
//   >((resolve, reject) => {
//     fetch(urlBase, {
//       method: "GET",
//       headers: {
//         "Access-Control-Allow-Origin": "*",
//       },
//     })
//       .then((response) => {
//         response.json().then((finalResponse) => {
//           if (finalResponse.items) {
//             resolve(finalResponse as IResponse<T>);
//           }
//           resolve(finalResponse as T);
//         });
//       })
//       .catch((err) => {
//         console.log(JSON.stringify(err));
//         reject({ message: err.message } as {
//           message: string;
//         });
//       });
//   });

//   return resultat;
// }
