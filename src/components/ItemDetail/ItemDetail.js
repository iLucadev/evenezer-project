import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ products, contador, stock, onAdd, onSubstract }) => {
  return (
    <div
      id="ItemDetail"
      className="container p-10 ItemDetail flex justify-between border rounded full-width"
    >
      <div className="ItemDetail__images w-1/2">
        <img className="ItemDetail__img" src={products.images[0].url} alt="" />
      </div>
      <div className="ItemDetail__texts space-y-4 w-1/2 flex flex-col">
        <div>
          <h2 className="font-semibold">{products.name}</h2>
          <p>{products.description_es}</p>
        </div>

        <ItemCount
          stock={12}
          contador={contador}
          onAdd={onAdd}
          onSubstract={onSubstract}
        />
      </div>
    </div>
  );
};

export default ItemDetail;
