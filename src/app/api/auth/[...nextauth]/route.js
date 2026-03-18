import { authOptions } from "@/lib/authOption";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);

//nexAuth/getting started/Initialization teke eta asche
export { handler as GET, handler as POST };
