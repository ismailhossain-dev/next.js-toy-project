"use client";

import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

import React from "react";
import { FaCartPlus } from "react-icons/fa";

const CartButton = ({ product }) => {
  const router = useRouter();
  const path = usePathname();

  const { data: session, status } = useSession();

  const add2Cart = () => {
    if (status === "authenticated") {
      alert(product._id);
    } else {
      router.push(`/login?callbackUrl=${path}`);
    }
  };

  return (
    <div>
      <button onClick={add2Cart} className="btn btn-primary w-full flex gap-2">
        <FaCartPlus />
        Add to Cart
      </button>
    </div>
  );
};

export default CartButton;
