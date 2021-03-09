import React, { useContext } from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../store/GlobalContext";

const Card = ({ product }) => {
  return (
    <Link to={`/item/${product.id}`}>
      <div className="cardItem flex flex-col bg-gray-100 rounded-md">
        <img
          className="cardItem__img object-cover"
          src={product.image[0].url}
          alt=""
        />
        <div className="cardItem__texts flex flex-col justify-between py-2 px-4">
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
