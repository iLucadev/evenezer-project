import React, { useState, useEffect, useContext } from "react";
import Checkout from "../components/Checkout/Checkout";
import { CartContext } from "../store/CartContext";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const { cart, emptyCart } = useContext(CartContext);

  if (cart.length > 0) {
    return (
      <main className="container mx-auto py-12 full-width space-y-8">
        <h2 className="flex justify-center font-semibold">Cart</h2>

        <Checkout cart={cart} />

        <div className="buttons flex justify-evenly">
          <button
            onClick={() => emptyCart()}
            className="flex py-2 px-3 font-semibold rounded-lg text-white bg-green-500 hover:bg-green-700"
          >
            Clear Cart
          </button>
          <Link to={`/checkout`}>
            <button className="flex py-2 px-3 font-semibold rounded-lg text-white bg-green-500 hover:bg-green-700">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto py-12 full-width flex justify-center">
      <h2 className="font-semibold">Checkout</h2>
      <p>El carrito está vacío</p>
    </main>
  );
};

export default CartContainer;
