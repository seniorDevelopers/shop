import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.scss";

interface Types {
  title: string;
  img: string;
  id: string;
}

const ProductCard = ({ title, img, id }: Types) => {
  return (
    <Link to={`/product/${id}`}>
      <div className="c-wrapper">
        <p className="c-wrapper__title">{title}</p>
        <img src={img} alt={title} />
      </div>
    </Link>
  );
};

export default ProductCard;
