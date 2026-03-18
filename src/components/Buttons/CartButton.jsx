"use client";

import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

import React from "react";
import { FaCartPlus } from "react-icons/fa";

const CartButton = ({ product }) => {
  const router = useRouter();
  const path = usePathname();
  const session = useSession();

  const isLogin = true;
  const add2Cart = () => {
    if (isLogin) {
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
//V:5 10 minute complete
