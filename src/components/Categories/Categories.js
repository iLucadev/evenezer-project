import React, { useState, useContext } from "react";
import { GlobalContext } from "../../store/GlobalContext";

const Categories = () => {
  const { products } = useContext(GlobalContext);

  /* const [categories, setCategories] = useState(["All"]); */

  const categories = products.map((element) => {
    return element.category;
  });

  console.log(categories);

  return (
    <aside className="col-1 row-span-full">
      <ul className="flex flex-column">
        <li>
          <a>Videojuegos</a>
        </li>
      </ul>
    </aside>
  );
};

export default Categories;
