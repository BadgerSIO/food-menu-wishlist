import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import FoodItem from "../FoodItem/FoodItem";
const Foodmenu = () => {
  const [foods, setFood] = useState([]);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=b`)
      .then((res) => res.json())
      .then((data) => setFood(data.meals));
  }, []);
  const addtoCart = (idmeal) => {
    setItems([idmeal, ...items]);
  };
  return (
    <div className="container text-center">
      <h1 className="mb-5 text-2xl font-mulish font-bold uppercase inline-block bg-orange-300 p-3">
        Food Menu
      </h1>
      <div className="foods grid md:grid-cols-3 xl:grid-cols-4 gap-5 ">
        {foods.map((foodSingle) => (
          <FoodItem
            food={foodSingle}
            key={foodSingle.idMeal}
            addtoCart={addtoCart}
          ></FoodItem>
        ))}
      </div>
      <div className="w-72 max-h-96 overflow-y-scroll bg-white/80 backdrop-blur-xl drop-shadow-sm fixed bottom-0 left-0 rounded-xl">
        <Cart items={items} foods={foods} className="rounded-xl"></Cart>
      </div>
    </div>
  );
};

export default Foodmenu;
