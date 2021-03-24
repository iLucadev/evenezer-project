import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail/ItemDetail";
import ItemCount from "../components/ItemCount/ItemCount";
import { GlobalContext } from "../store/GlobalContext";

const ProductDetailContainer = () => {
  const { products, loading } = useContext(GlobalContext);
  const { itemId } = useParams();

  if (loading) {
    return (
      <main className="container mx-auto full-width">
        <h1 className="min-h-screen flex justify-center mx-auto full-width ">
          Loading...
        </h1>
      </main>
    );
  }

  const selectedProduct = loading
    ? null
    : products.find((element) => {
        if (element.id == itemId) {
          return element;
        }
      });

  const sizes = selectedProduct.size.map((element) => {
    return element;
  });

  return (
    <main className="container flex flex-col mx-auto full-width">
      <ItemDetail product={selectedProduct} param={itemId} sizes={sizes} />
    </main>
  );
};

export default ProductDetailContainer;
