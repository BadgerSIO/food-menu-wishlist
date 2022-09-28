import React from "react";
import CartItem from "../CartItem/CartItem";

const Cart = (props) => {
  const { items, foods } = props;
  console.log(items);
  const removeItem = (id) => {
    const index = items.indexOf(id);
    console.log(index);
    if (index > -1) {
      // remove item
      items.splice(index, 1);
    }
    return items;
  };
  console.log(items);
  return (
    <div className="p-5 rounded-xl">
      <h1 className="text-xl uppercase text-left font-semibold font-mulish ">
        Wishlist
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 inline-block ml-1 text-orange-500 text-2xl "
        >
          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
        </svg>
      </h1>
      <div className="py-4">
        {items.map((item) => (
          <CartItem
            item={item}
            foods={foods}
            removeItem={removeItem}
          ></CartItem>
        ))}
      </div>
    </div>
  );
};

export default Cart;
