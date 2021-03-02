import React, { useState, useEffect, useContext } from "react";
import Checkout from "../components/Checkout/Checkout";
import { CartContext } from "../store/CartContext";

const CartContainer = () => {
  const { cart } = useContext(CartContext);

  if (cart.length > 0) {
    return (
      <main className="container mx-auto py-12 full-width flex justify-center">
        <Checkout cart={cart} />
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
