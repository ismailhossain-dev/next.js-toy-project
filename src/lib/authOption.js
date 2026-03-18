import { loginUser } from "@/actions/server/Auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  //NextAuth/getting started/here/using credentials
  providers: [
    CredentialsProvider({
      name: "Credentials",

      // credentials: {
      //   username: { label: "Username", type: "text", placeholder: "jsmith" },
      //   password: { label: "Password", type: "password" },
      // },
      async authorize(credentials, req) {
        //console.log("ami authOption teke credentials bolsi ", credentials); //right
        const user = await loginUser(credentials);
        if (user) {
          return user;
        }
        return null;
      },
    }),

    //google provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
};
