import React from "react";
import "./ItemList.css";
import Card from "../Card/Card";

const ItemList = ({ products }) => {
  return (
    <section
      id="ItemList"
      className="container col-2 col-span-5 grid grid-cols-4 gap-4 justify-center full-width"
    >
      {products.map((product) => {
        return <Card key={product.id} product={product} />;
      })}
    </section>
  );
};

export default ItemList;
