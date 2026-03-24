"use client";

// import { handleCart } from "@/actions/server/cart";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { toast } from "react-toastify";
// import Swal from "sweetalert2";

const CartButton = ({ product }) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  console.log(session);
  const path = usePathname();
  const isLogin = status === "authenticated";

  const add2Cart = async () => {
    if (isLogin) {
      toast.success(product._id);
      //src/action/server/cart.js
      // const result = await handleCart({ product, inc: true });
      // //success ta pabo cart.js teke
      // if (result.success) {
      //   Swal.fire("success", "Added to Cart", product.title, "success");
      // } else {
      //   Swal.fire("error", "Something wrong happen");
      // }
      //
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
