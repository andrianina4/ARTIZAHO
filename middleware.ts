export {default} from "next-auth/middleware";

export const config = {
	matcher: ["/user/edit-profil", "/admin"],
};
