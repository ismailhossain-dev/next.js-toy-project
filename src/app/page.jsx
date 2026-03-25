import Banner from "@/components/home/Banner";
import Products from "@/components/home/Products";
import UserAccess from "@/components/UserAccess";
import { authOptions } from "@/lib/authOption";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="space-y-20">
      <p>{JSON.stringify(session)}</p>
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
