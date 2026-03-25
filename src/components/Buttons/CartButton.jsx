"use client";

import { handleCart } from "@/actions/server/cart";
// import { handleCart } from "@/actions/server/cart";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";

import Swal from "sweetalert2";
// import Swal from "sweetalert2";

const CartButton = ({ product }) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  console.log(session);
  //loading ta add cart button set kore disi
  const [isLoading, setIsLoading] = useState(false);
  const path = usePathname();
  const isLogin = status === "authenticated";

  const add2Cart = async () => {
    //static vabe login kortechi
    setIsLoading(true);
    if (isLogin) {
      if (isLogin) {
        //src/action/server/cart.js teke function ta astese
        const result = await handleCart({ product, inc: true });
        //cart.js teke success ta asbe
        if (result.success) {
          Swal.fire("Added to Cart", product?.title, "success");
        } else {
          Swal.fire("Added to Cart", "Something Wrong Happen", "error");
        }
      }
      setIsLoading(false);
      //
    } else {
      router.push(`/login?callbackUrl=${path}`);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button
        disabled={session.status === "loading" || isLoading}
        onClick={add2Cart}
        className="btn btn-primary w-full flex gap-2"
      >
        <FaCartPlus />
        Add to Cart
      </button>
    </div>
  );
};

export default CartButton;
