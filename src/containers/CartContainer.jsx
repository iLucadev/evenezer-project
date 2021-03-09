import React, { useState, useEffect, useContext } from "react";
import Checkout from "../components/Checkout/Checkout";
import { CartContext } from "../store/CartContext";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const { cart, emptyCart, buyNow } = useContext(CartContext);
  const [buyer, setBuyer] = useState({ name: "", email: "", phone: "" });

  const handleInputChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  if (cart.length > 0) {
    return (
      <main className="container mx-auto py-12 full-width space-y-8">
        <h2 className="flex justify-center font-semibold">Cart</h2>

        <Checkout cart={cart} />

        <form action="">
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="Nombre"
            name="name"
          />
          <input
            onChange={handleInputChange}
            type="email"
            placeholder="example@email.com"
            name="email"
          />
          <input
            onChange={handleInputChange}
            type="tel"
            placeholder="555-555555"
            name="phone"
          />
        </form>

        <div className="buttons flex justify-evenly">
          <button
            onClick={() => emptyCart()}
            className="flex py-2 px-3 font-semibold rounded-lg text-white bg-green-500 hover:bg-green-700"
          >
            Clear Cart
          </button>

          <button
            onClick={() => buyNow(buyer, cart)}
            className="flex py-2 px-3 font-semibold rounded-lg text-white bg-green-500 hover:bg-green-700"
          >
            Checkout
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto py-12 full-width flex flex-col items-center justify-center">
      <h2 className="font-semibold">Checkout</h2>
      <p>El carrito está vacío</p>
    </main>
  );
};

export default CartContainer;
