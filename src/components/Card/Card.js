import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  return (
    <Link to={`/item/:id`}>
      <div className="cardItem container flex flex-col justify-between rounded-md">
        <img className="cardItem__img" src={product.images[0].url} alt="" />
        <div className="cardItem__texts flex flex-col justify-between p-3">
          <h2 className="cardItem__title">{product.name}</h2>
          <p className="cardItem__price flex justify-end">${product.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
