import {
  getCurrentUserConnected,
  requestUserToken,
} from "@/services/user.service";
import { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (credentials) {
          const resquestToken = await requestUserToken({
            password: credentials.password,
            username: credentials.username,
          });

          const currentUser = await getCurrentUserConnected(
            resquestToken.access_token
          );

          return { ...resquestToken, ...currentUser } as any;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ token, session }) {
      session.user = token as any;
      return session;
    },
  },
};
