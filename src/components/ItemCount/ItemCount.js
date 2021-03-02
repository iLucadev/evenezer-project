import React, { useState, useEffect, useReducer, useContext } from "react";
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

const ItemCount = ({ product, sizes }) => {
  const [counter, dispatch] = useReducer(reducer, 1);
  const [sizeValue, setSizeValue] = useState(sizes[0].valor);
  const [stock, setStock] = useState(sizes[0].stock);
  const { addToCart } = useContext(CartContext);

  const selectedSize = (e) => {
    const newSize = sizes.find((element) => element.valor == e.target.value);
    setSizeValue(newSize.valor);
  };

  useEffect(() => {
    const selectedElement = sizes.find((element) => element.valor == sizeValue);
    setStock(selectedElement.stock);
  }, [sizeValue]);

  return (
    <div className="container flex flex-col items-center space-y-4">
      <div className="flex justify-between items-center  w-full">
        <div className="flex flex-col justify-center w-1/2">
          <div>
            <label>Talle</label>
            <select onChange={selectedSize}>
              {sizes.map((size, index) => {
                return <option key={index}>{size.valor}</option>;
              })}
            </select>
          </div>
          <p>Stock: {stock}</p>
          <p>Quantity</p>
          <p>Price: ${product.price}</p>
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
