import Banner from "@/components/home/Banner";
import Products from "@/components/home/Products";
import UserAccess from "@/components/UserAccess";
import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function Home() {
  // const session = await getServerSession();
  // console.log(session); //null value
  return (
    <div className="space-y-20">
      {/* <p>{JSON.stringify(session)}</p> */}
      {/* client access user */}
      <UserAccess />
      <section>
        <Banner />
      </section>
      <section>
        <Products />
      </section>
    </div>
  );
}
