import React from "react";
import CheckoutCard from "../CheckoutCard/CheckoutCard";

const Checkout = ({ cart }) => {
  return (
    <section className="container flex flex-column h-4/5">
      {cart.map((cartItem) => {
        return <CheckoutCard key={cartItem.id} cartItem={cartItem} />;
      })}
    </section>
  );
};

export default Checkout;
