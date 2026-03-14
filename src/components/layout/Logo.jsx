import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link className="flex gap-2 items-center" href="/">
      <Image src="/assets/logo.png" alt="ToyBazaar-logo" width={50} height={40}></Image>
      <h2 className="text-xl font-bold">ToyBazaar</h2>
    </Link>
  );
};

export default Logo;
