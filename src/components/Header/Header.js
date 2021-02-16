import React from "react";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="container mx-auto grid grid-cols-3 items-center py-6 flex justify-between h-24">
      <ul className="flex col-1 flex items-center justify-start space-x-6 list-none font-semibold">
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/about`}>About</Link>
        </li>
        <li>
          <Link to={`/categories`}>Categories</Link>
          {/* <Link to={`/categories`}>
            <button
              type="button"
              class="font-semibold text-gray-500 flex items-center font-medium hover:text-gray-900"
            >
              <span>Categories</span>

              <svg
                class="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </Link> */}
        </li>
      </ul>

      <a
        href=""
        className="col-2 flex justify-center text-lg text-black font-bold text-xl"
      >
        <h1>Eben-Ezer</h1>
      </a>

      <ul className="col-3 flex flex items-center justify-end space-x-6 list-none">
        <li>
          <form className="search-box flex">
            <input
              className="w-24 outline-none"
              type="text"
              name=""
              id="search-box"
              placeholder="Search"
            />
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18px"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </a>
          </form>
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
    </header>
  );
};

export default Header;
