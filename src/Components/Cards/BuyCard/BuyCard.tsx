import React, { useEffect, useState } from "react";
import { HeartOutlined } from "@ant-design/icons";
import "./BuyCard.scss";
import API from "services/rootApi";

interface Types {
  img: string;
  title: string;
  price: string;
  id: string;
  trueFunc: any;
  addFavorite: any;
}

const BuyCard = ({ img, title, price, id, trueFunc, addFavorite }: Types) => {
  return (
    <div className="buy-card-wrapper">
      <img style={{ maxWidth: "100%" }} src={img} alt={title} />
      <div className="buy-card-wrapper__titles">
        <p className="buy-card-wrapper__titles__title">{title}</p>
        <b className="buy-card-wrapper__titles__text">{price}</b>
      </div>
      <div className="buy-card-wrapper__icons">
        <button
          className={trueFunc(id) ? "btn2" : "buy-card-wrapper__icons__btn"}
          onClick={() => addFavorite(id)}
        >
          {trueFunc(id) ? "Savatdan o'chirish" : "Sotib olish"}
        </button>
        <HeartOutlined style={{ fontSize: "20px" }} />
      </div>
    </div>
  );
};

export default BuyCard;
