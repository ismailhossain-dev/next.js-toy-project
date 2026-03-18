import { loginUser } from "@/actions/server/Auth";
import CredentialsProvider from "next-auth/providers/credentials";
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
  ],
};
