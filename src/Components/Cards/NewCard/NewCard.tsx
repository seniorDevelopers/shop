import React from "react";
import { Link } from "react-router-dom";
import "./NewCard.scss";

interface Types {
  img: string;
  title: string;
  price: string;
  id: string;
}

const NewCard = ({ img, title, price, id }: Types) => {
  return (
    <Link to={`/product/${id}`}>
      <div className="card-wrapper">
        <img src={img} alt={title} />
        <div className="card-wrapper__titles">
          <p className="card-wrapper__titles__title">{title}</p>
          <span className="card-wrapper__titles__text">{price}</span>
        </div>
      </div>
    </Link>
  );
};

export default NewCard;
