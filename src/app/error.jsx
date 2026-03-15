//ei error page ta dekabe jokon amr website crash ba amr website kichu bul takbe tokon ei error page ta use ke dekabe
"use client";
import Link from "next/link";
import React from "react";
import { TbError404Off } from "react-icons/tb";
const Error404 = () => {
  return (
    <div className="flex min-h-screen flex-col justify-center items-center">
      <TbError404Off size={200} className="text-primary animate-bounce" />
      <h2 className="text-4xl font-bold">Something went wrong</h2>
      <Link href={"/"} className="btn btn-primary my-3">
        Go to Home
      </Link>
    </div>
  );
};

export default Error404;
