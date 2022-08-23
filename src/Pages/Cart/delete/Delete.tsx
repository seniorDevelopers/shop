import React, { useState } from "react";
import remove from "../../../assets/Images/delete.png";
import "./deletestyle.scss";

interface Type {
  photo: any;
  product: string;
  available: string;
  price: any;
}
function Delete({ photo, product, available, price }: Type) {
  const [count, setCount] = useState(1);
  return (
    <>
      <div className="deleteCard">
        <div className="photo">
          <img src={photo} alt="product" height={70} />
        </div>
        <div className="productName">
          <h5>{product}</h5>
          <p>{available}</p>
        </div>
        <div className="addRemove">
          <div
            className="num"
            onClick={() => setCount(count > 1 ? count - 1 : 1)}
          >
            -
          </div>
          <div className="num numb">{count}</div>
          <div className="num" onClick={() => setCount(count + 1)}>
            +
          </div>
        </div>
        <div className="price">
          <h5>{price + " " + "so'm"}</h5>
        </div>
        <div className="remove">
          <img src={remove} alt="Delete" />
        </div>
      </div>
    </>
  );
}

export default Delete;
