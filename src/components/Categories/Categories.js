import React from "react";

const Categories = () => {
  /*  const [categories, setCategories] = useState(["All"]);

  useEffect(() => {
    const categories = products.map((element) => {
      return element.category;
    });
  }, []); */
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
