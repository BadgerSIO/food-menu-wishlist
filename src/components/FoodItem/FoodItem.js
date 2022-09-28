import { Card } from "flowbite-react";
import React from "react";

const FoodItem = (props) => {
  const { food, addtoCart } = props;
  const { strMeal, strMealThumb, idMeal } = food;

  return (
    <Card
      className="max-w-sm "
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={strMealThumb}
    >
      <h5 className="text-2xl font-semibold font-mulish tracking-tight text-gray-900 dark:text-white">
        {strMeal}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
      <div className="mx-auto">
        <button
          onClick={() => addtoCart(idMeal)}
          className="bg-orange-300 hover:bg-orange-400 py-3 px-4 rounded-lg font-mulish font-semibold drop-shadow "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 inline-block mr-1 text-black"
          >
            <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
          </svg>
          add to Wishlist
        </button>
      </div>
    </Card>
  );
};

export default FoodItem;
