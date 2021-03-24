import React from "react";
import CheckoutCard from "../CheckoutCard/CheckoutCard";

const Checkout = ({ cart }) => {
  const buyTotal = cart.reduce((acc, cur) => {
    return acc.price * acc.quantity + cur.price * cur.quantity;
  });

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  console.log(cart);

  return (
    <section className="container flex-column row-span-5 grid grid-flow-row auto-rows-max">
      {cart.map((cartItem) => {
        return <CheckoutCard key={cartItem.id} cartItem={cartItem} />;
      })}
      <div className="row-end-auto font-semibold flex justify-end w-4/5">
        Total: <span>{formatter.format(buyTotal)}</span>
      </div>
    </section>
  );
};

export default Checkout;
