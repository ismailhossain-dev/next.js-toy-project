"use client";
import { useSession } from "next-auth/react";
import React from "react";
//authOption ke user session e dekanor jorno kaj koresi
const UserAccess = () => {
  const { data, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h3>User Session Data:</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default UserAccess;
