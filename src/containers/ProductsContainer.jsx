import React, { useContext, useEffect, useState } from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";
import ItemList from "../components/ItemList/ItemList";
import Categories from "../components/Categories/Categories";
import { GlobalContext } from "../store/GlobalContext";

const ProductsContainer = () => {
  const { products, loading, categories } = useContext(GlobalContext);
  const { categoryId } = useParams();
  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search);

  const categorizedProducts = products.filter((product) => {
    if (product.for == categoryId) return product;
  });

  const [showedProducts, setShowedProducts] = useState(categorizedProducts);

  useEffect(() => {
    if (query.toString() == "") {
      setShowedProducts(categorizedProducts);
    } else {
      const filter = query.get("filter");

      const filterID = categories.find((category) => {
        if (category.name == filter) return category.id;
      });

      const newShowedProducts = categorizedProducts.filter((product) => {
        if (product.category == filterID.id) return product;
      });

      setShowedProducts(newShowedProducts);
    }
  }, [loading, location]);

  const productsHandler = (productFilter) => {
    const filterName = productFilter.name;

    query.set("filter", filterName);

    history.push({ search: query.toString() });
  };

  if (loading)
    return (
      <main className="container mx-auto full-width">
        <h1 className="flex justify-center mx-auto full-width ">Loading...</h1>
      </main>
    );

  return (
    <main className="container mx-auto grid grid-cols-6">
      <Categories
        productsHandler={productsHandler}
        categoryId={categoryId}
        products={categorizedProducts}
      />

      <ItemList products={showedProducts} />
    </main>
  );
};

export default ProductsContainer;
