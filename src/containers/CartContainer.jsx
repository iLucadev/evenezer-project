import React, { useState, useEffect, useContext } from "react";
import Checkout from "../components/Checkout/Checkout";
import { CartContext } from "../store/CartContext";
import { Link } from "react-router-dom";
import CheckoutForm from "../components/CheckoutForm/CheckoutForm";

const CartContainer = () => {
  const { cart, emptyCart, buyNow } = useContext(CartContext);

  console.log(cart);

  if (cart.length > 0) {
    return (
      <main className="container mx-auto py-12 full-width space-y-8 grid grid-cols-2 grid-rows-6">
        <h2 className="flex justify-center font-semibold col-span-2 row-span-1">
          Cart
        </h2>

        <Checkout cart={cart} />

        <CheckoutForm buyNow={buyNow} cart={cart} />
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
