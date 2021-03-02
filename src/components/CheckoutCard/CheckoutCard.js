import React, { useEffect, useContext } from "react";
import { GlobalContext } from "../../store/GlobalContext";

const CheckoutCard = ({ cartItem }) => {
  const { loading, products } = useContext(GlobalContext);

  if (loading) {
    return (
      <h1 className=" min-h-screen flex justify-center mx-auto full-width ">
        Loading...
      </h1>
    );
  }

  const checkoutElement = products.find((element) => element.id == cartItem.id);
  console.log(checkoutElement);

  return (
    <div className="flex space-x-5" key={checkoutElement.id}>
      <h3>{checkoutElement.name}</h3>
      <p>x{cartItem.quantity}</p>
      <p>Price: ${checkoutElement.price * cartItem.quantity}</p>
    </div>
  );
};

export default CheckoutCard;
