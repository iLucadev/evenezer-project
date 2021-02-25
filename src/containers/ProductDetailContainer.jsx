import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail/ItemDetail";
import ItemCount from "../components/ItemCount/ItemCount";
import { GlobalContext } from "../store/GlobalContext";

const ProductDetailContainer = () => {
  const { products, loading } = useContext(GlobalContext);
  const { id } = useParams();

  if (loading) {
    return (
      <main className="container mx-auto py-12 full-width">
        <h1 className=" min-h-screen flex justify-center mx-auto full-width ">
          Loading...
        </h1>
      </main>
    );
  }

  const selectedProduct = loading
    ? null
    : products.find((element) => {
        if (element.id == id) {
          return element;
        }
      });

  return (
    <main className="container py-12  min-h-screen flex flex-col mx-auto full-width">
      <ItemDetail product={selectedProduct} param={id} />
    </main>
  );
};

export default ProductDetailContainer;
