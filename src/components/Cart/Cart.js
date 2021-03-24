import React, { useContext } from "react";
import { GlobalContext } from "../../store/GlobalContext";
import "./Cart.css";
const Cart = () => {
  const { cartLength } = useContext(GlobalContext);

  return (
    <div className="relative">
      <a href="#" className="shopCart relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          height="24px"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </a>
      <span className="absolute bottom-3 left-4 bg-red-600 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
        {cartLength}
      </span>
    </div>
  );
};

export default Cart;
