import React from "react";
import CartItem from "../CartItem/CartItem";

const Cart = (props) => {
  const { items, foods } = props;
  return (
    <div className="p-5 rounded-xl">
      <h1 className="text-2xl text-left font-semibold font-mulish ">
        Wishlist
      </h1>
      <div className="py-4">
        {items.map((item) => (
          <CartItem item={item} foods={foods}></CartItem>
        ))}
      </div>
    </div>
  );
};

export default Cart;
