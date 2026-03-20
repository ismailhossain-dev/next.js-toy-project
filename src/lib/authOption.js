import { loginUser } from "@/actions/server/Auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { collections, dbConnect } from "./dbConnect";
export const authOptions = {
  //NextAuth/getting started/here/using credentials
  providers: [
    CredentialsProvider({
      name: "Credentials",
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
  //p:v:9
  //google login data user access or mongodb te rakar jorno amra jeta korbo nextAuth/configuration/options/callback
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // console.log("Aami Google boltechi ", user, account, profile, email, credentials); //clg sob kichu pabo google er

      //my own code

      //check user age teke mongodb te ase kina and google diye login ase kina and jodi google diye login take tahole amra take google diye login korthe divo and amne login form diye login korthe divo na
      const isExist = await dbConnect(collections.USERS).findOne({
        email: user.email,
        provider: account?.provider,
      });

      if (isExist) {
        return true;
      }

      //jodi user na take tahole new user create korbo google er mardome
      const newUser = {
        provider: account.provider,
        name: user.name,
        email: user.email,
        image: user.image,
        role: "user",
      };

      //send user mogodb
      const result = await dbConnect(collections.USERS).insertOne(newUser);
      return result.acknowledged;
    },
    // async redirect({ url, baseUrl }) {
    //   return baseUrl;
    // },
    // async session({ session, token, user }) {
    //   return session;
    // },
    // async jwt({ token, user, account, profile, isNewUser }) {
    //   return token;
    // },
  },
};
