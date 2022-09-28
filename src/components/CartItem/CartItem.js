import React from "react";

const CartItem = (props) => {
  const { item, foods, removeItem } = props;
  const selectedItem = foods.find((food) => food.idMeal === item);
  return (
    <div className="grid grid-cols-6 my-2 bg-white rounded-lg ">
      <div className="imageDiv col-span-2 rounded-lg">
        <img
          src={selectedItem.strMealThumb}
          alt=""
          className="rounded-lg"
        ></img>
      </div>
      <div className="itemName col-span-4 flex items-center relative">
        <h1 className="text-left ml-2 font-mulish pt-2">
          {selectedItem.strMeal}
        </h1>
        <button
          className="absolute top-0 right-0"
          onClick={() => removeItem(item)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
