import React, { useContext } from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../store/GlobalContext";

const Card = ({ product }) => {
  return (
    <Link to={`/item/${product.id}`}>
      <div className="cardItem container flex flex-col border rounded p-2">
        <img className="cardItem__img" src={product.images[0].url} alt="" />
        <div className="cardItem__texts flex flex-col justify-between">
          <h2 className="cardItem__title">{product.name}</h2>
          <p className="cardItem__price flex justify-end">
            Price: ${product.price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
