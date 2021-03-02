import React, { useContext, useEffect, useState } from "react";
import ItemList from "../components/ItemList/ItemList";
import Categories from "../components/Categories/Categories";
import { GlobalContext } from "../store/GlobalContext";

const ProductsContainer = () => {
  const { products, loading } = useContext(GlobalContext);

  if (loading)
    return (
      <main className="container mx-auto py-12 full-width">
        <h1 className=" min-h-screen flex justify-center mx-auto full-width ">
          Loading...
        </h1>
      </main>
    );

  return (
    <main className="container mx-auto py-12 grid grid-cols-6">
      <Categories />

      <ItemList products={products} />
    </main>
  );
};

export default ProductsContainer;
