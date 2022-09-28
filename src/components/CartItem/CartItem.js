import React from "react";

const CartItem = (props) => {
  const { item, foods } = props;
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
      <div className="itemName col-span-4 flex items-center">
        <h1 className="text-left ml-2 font-mulish pt-2">
          {selectedItem.strMeal}
        </h1>
      </div>
    </div>
  );
};

export default CartItem;
