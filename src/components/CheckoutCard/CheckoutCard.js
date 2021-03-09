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

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div
      className="p-2 max-w-md flex items-center space-x-6"
      key={checkoutElement.id}
    >
      <div className="flex items-center">
        <img
          height="56px"
          width="56px"
          src={checkoutElement.image[0].url}
          alt=""
        />
      </div>
      <div className="flex-col justify-center w">
        <h3 className="text-lg font-semibold text-black">
          {checkoutElement.name}
        </h3>
        <p className="w-56 text-sm text-gray-500">
          {checkoutElement.description}
        </p>
      </div>
      <div className="flex justify-between items-center space-x-6">
        <span className="text-md text-gray-500">X{cartItem.quantity}</span>
        <span className="text-md font-semibold text-black">
          {formatter.format(checkoutElement.price * cartItem.quantity)}
        </span>
      </div>
    </div>
  );
};

export default CheckoutCard;
