import React from "react";
import HomeProducts from "../components/HomeProducts/HomeProducts";

const HomeContainer = () => {
  return (
    <main className="container mx-auto py-12 full-width">
      <h1 className="flex justify-center font-semibold">Lastest products</h1>
      <HomeProducts />
    </main>
  );
};

export default HomeContainer;
