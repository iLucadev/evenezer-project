import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { GlobalContext } from "../../store/GlobalContext";

const Categories = ({ productsHandler, categoryId, products }) => {
  const location = useLocation();
  const { categories } = useContext(GlobalContext);

  const productsCategories = products.map((product) => product.category);
  const filteredCategories = categories.filter((category) =>
    productsCategories.includes(category.id)
  );

  const query = new URLSearchParams(location.search);

  return (
    <aside className="col-1 row-span-full space-y-2">
      <span className="font-semibold">
        <Link to={`/category/${categoryId}`}>{categoryId}</Link>
      </span>
      <ul className="">
        {filteredCategories.map((category) => {
          return (
            <li key={category.id}>
              <button onClick={() => productsHandler(category)}>
                {category.name}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Categories;
