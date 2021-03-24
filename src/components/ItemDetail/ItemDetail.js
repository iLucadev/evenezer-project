import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import DetailCarousel from "../DetailCarousel/DetailCarousel";

const ItemDetail = ({ product, param, sizes }) => {
  return (
    <section
      id="ItemDetail"
      className="ItemDetail flex justify-between h-5/6 full-width"
    >
      <DetailCarousel product={product} />

      <div className="ItemDetail__texts w-1/2 py-6">
        <h2 className="font-semibold">{product.name}</h2>
        <p className="">{product.description}</p>
        <ItemCount product={product} sizes={sizes} />
      </div>
    </section>
  );
};

export default ItemDetail;
