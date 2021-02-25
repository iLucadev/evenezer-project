import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import DetailCarousel from "../DetailCarousel/DetailCarousel";

const ItemDetail = ({ product }) => {
  return (
    <div
      id="ItemDetail"
      className="p-10 ItemDetail flex justify-between border rounded full-width"
    >
      <DetailCarousel product={product} />

      <div className="ItemDetail__texts space-y-6 w-1/2 flex flex-col">
        <h2 className="font-semibold">{product.name}</h2>
        <p>{product.description_es}</p>

        <ItemCount product={product} stock={product.stock} />
      </div>
    </div>
  );
};

export default ItemDetail;
