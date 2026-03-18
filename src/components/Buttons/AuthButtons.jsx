//Ei button tar mardome user dekabo
import { useSession } from "next-auth/react";
import React from "react";

const AuthButtons = () => {
  const session = useSession();
  return <div>{session.status === "authenticated"}</div>;
};

export default AuthButtons;
//P:1 v:6 14minute 44 second complete
