"use client";
import React, { useMemo, useState } from "react";
import CartItems from "../Cards/CartItems";

const ClientCart = ({ cartItem = [] }) => {
  const [item, setItem] = useState(cartItem);
  console.log(item);
  //total koyta order ache seta dekane ek email diye
  //reduce use kore calculation korar jorno
  const totalItems = useMemo(() => item.reduce((acm, item) => acm + item.quantity, 0), [item]);

  //delete cart data
  //filter diye jodi ui teke delete kore dei tahole reload deya chara data delete hobe
  const removeItem = (id) => {
    setItem((prevItems) => prevItems.filter((item) => item._id != id));
  };
  return (
    <div>
      <div className="">
        <h2 className="text-4xl py-4 font-bold border-l-8 border-primary pl-8">My Cart</h2>
        <div className="flex justify-between items-center">
          <p className="py-3">
            <span className="text-primary font-bold"> {item.length}</span> Items in Found in the
            Cart
          </p>

          <h3>Total Orders {totalItems}</h3>
        </div>
      </div>
      {/* 2 section */}
      <div>
        <div>
          {item.map((cartItem) => (
            <CartItems
              key={cartItem._id}
              cartItem={{ ...cartItem, _id: cartItem._id.toString() }}
              removeItem={removeItem}
            ></CartItems>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientCart;
