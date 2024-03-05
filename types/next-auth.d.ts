import NextAuth from "next-auth/next";
import { ICurrentUser } from "./user/ICurrentUser";
import { IRequestToken } from "./user/IRequestToken";

declare module "next-auth" {
  interface Session {
    user: ICurrentUser & IRequestToken;
  }
}
