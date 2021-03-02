import React from "react";

const Checkout = ({ cart }) => {
  return (
    <div>
      <h2 className="font-semibold">Checkout</h2>
      <section>
        {cart.map((cartItem) => {
          return (
            <div key={cartItem.id}>
              <h3>{cartItem.name}</h3>
              <p>{cartItem.price}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Checkout;
