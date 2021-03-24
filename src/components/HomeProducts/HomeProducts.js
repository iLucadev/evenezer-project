import React, { useContext } from "react";
import { GlobalContext } from "../../store/GlobalContext";
import Card from "../Card/Card";

const HomeProducts = () => {
  const { products } = useContext(GlobalContext);

  const lastestProducts = products.slice(0, 4);

  return (
    <section className="container p-12 grid grid-cols-4 gap-4 justify-center full-width">
      {lastestProducts.map((product) => {
        return <Card key={product.id} product={product} />;
      })}
    </section>
  );
};

export default HomeProducts;
