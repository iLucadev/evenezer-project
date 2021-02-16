import React, { useEffect, useState } from "react";
import ItemList from "../components/ItemList/ItemList";
import Categories from "../components/Categories/Categories";

const ProductsContainer = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://ecommercegaminghub.herokuapp.com/products/")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.results);
        setLoading(false);
        console.log(res.results);
      });
  }, []);

  /* useEffect(() => {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(productsList), 2000);
    });
    myPromise.then((result) => setProducts(result));
  }, []); */

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
