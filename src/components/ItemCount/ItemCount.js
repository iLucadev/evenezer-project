import React, { useReducer, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../store/CartContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;
  }

  return state;
};

const ItemCount = ({ product, stock }) => {
  const [counter, dispatch] = useReducer(reducer, 1);
  const { addToCart } = useContext(CartContext);

  return (
    <div className="container flex flex-col items-center space-y-4">
      <div className="flex justify-between items-center  w-full">
        <div className="flex flex-col justify-center w-1/2">
          <p>Quantity</p>
          <p>stock: {stock}</p>
        </div>

        <div className="container grid grid-cols-3 gap-4 py-3 px-6">
          {counter > 1 ? (
            <button
              onClick={() => dispatch({ type: "decrement" })}
              className="substract col-start-1 flex justify-center items-center font-black text-2xl"
              type=""
            >
              −
            </button>
          ) : null}

          <b className="contador col-start-2 flex justify-center items-center">
            {counter}
          </b>

          {counter < stock ? (
            <button
              onClick={() => dispatch({ type: "increment" })}
              className="addition col-start-3 flex justify-center items-center font-black text-2xl"
              type=""
            >
              +
            </button>
          ) : null}
        </div>
      </div>

      <Link to="/cart">
        <button
          onClick={() => addToCart(product, counter)}
          className="py-2 px-4 font-semibold rounded-lg text-white bg-green-500 hover:bg-green-700"
          type=""
        >
          Add to cart
        </button>
      </Link>
    </div>
  );
};

export default ItemCount;
