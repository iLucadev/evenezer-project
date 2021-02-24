import React from "react";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="container mx-auto grid grid-cols-3 items-center py-6 flex justify-between h-24">
      <div className="col-1 font-bold text-xl">
        <Link to={`/`}>
          <h1>Ebenezer</h1>
        </Link>
      </div>

      <nav className="flex col-2 col-span-2 flex justify-end  items-center space-x-6 list-none font-semibold">
        <ul className="flex justify-between items-center space-x-6">
          <li>
            <Link to={`/about`}>About</Link>
          </li>
          <li>
            <Link to={`/category/all`}>Categories</Link>
          </li>
          <li className="flex justify-between items-center">
            <Link to={`/cart`}>
              <div className="flex justify-between items-center space-x-2">
                <p>Cart(0)</p>
                <Cart />
              </div>
            </Link>
          </li>
          <li>
            <a
              href=""
              className="py-2 px-3 font-semibold rounded-lg text-white bg-green-500 hover:bg-green-700"
            >
              Sign In
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
