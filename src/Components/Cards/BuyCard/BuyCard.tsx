import { HeartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./BuyCard.scss";

interface Types {
  img: string;
  title: string;
  price: string;
  id: string;
  trueFunc: any;
  addFavorite: any;
}

const BuyCard = ({ img, title, price, id, trueFunc, addFavorite }: Types) => {
  const addProduct = () =>{
    addFavorite(id)
  }
  const removProduct = () =>{
    alert(`Xali "dalete" function yoq`)
  }
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
          onClick={trueFunc(id) ? removProduct : addProduct }
        >
          {trueFunc(id) ? "Savatdan o'chirish" : "Sotib olish"}
        </button>
        <HeartOutlined style={{ fontSize: "20px" }} />
      </div>
    </div>
 
  );
};

export default BuyCard;
