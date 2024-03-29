import React from "react";
import Cart from "../Cart/Cart";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="container mx-auto grid grid-cols-3 items-center py-6 flex justify-between h-24">
      <div className="col-1 font-semibold text-xl">
        <Link to={`/`}>
          <h1>Ebenezer</h1>
        </Link>
      </div>

      <nav className="flex col-2 col-span-2 flex justify-end  items-center space-x-6 list-none">
        <ul className="flex justify-between items-center space-x-6">
          <li>
            <NavLink
              to={`/category/men`}
              className="hover:underline"
              activeClassName="underline font-semibold"
            >
              Men
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/category/women`}
              className="hover:underline"
              activeClassName="underline font-semibold"
            >
              Women
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/category/kids`}
              className="hover:underline"
              activeClassName="underline font-semibold"
            >
              Kids
            </NavLink>
          </li>
          <li className="flex justify-between items-center">
            <Link to={`/cart`}>
              <div className="flex justify-between items-center space-x-2">
                <Cart />
              </div>
            </Link>
          </li>
          <li>
            <a
              href=""
              className="py-2 px-4 font-semibold rounded-lg text-white bg-blue-500 hover:bg-blue-600"
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
