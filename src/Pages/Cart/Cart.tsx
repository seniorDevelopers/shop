import React, { useEffect, useState } from "react";
import { Button, Result } from "antd";
import "./Cart.scss";
import API from "services/rootApi";
import { useDispatch } from "react-redux";
import { actionCartCount } from "store/cartCount/action";
import { AppDispatch } from "store/store";
import Delete from "./delete/Delete";
import photo from "../../assets/Images/cardph.png"
import Info from "./info/info";

const Cart = () => {
  const [favData, setFavData] = useState([]);
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    // API.get("/favorite").then((res) => {
    //   if (res.status === 200) {
    //     setFavData(res.data);
    //     dispatch(actionCartCount(res.data.length));
    //   }
    // });
  }, []);

  return (
    // <div className="globalContainer fav-wrapper">
    //   <h1 className="fav-wrapper__title">В корзине 0 товаров</h1>
    //   <div>
    //     <Result
    //       status="404"
    //       title="Вы еще не добавили ни одного товара в корзину"
    //       extra={<Button type="primary">Закажи прямо сейчас</Button>}
    //     />
    //   </div>
    // </div>
    <section className="globalContainer fav-wrapper displayCards">
      <div className='deleteCards'>
      <Delete photo={photo} Product={"Product Name"} available={"available"}  price={"18 000 000 uzs"}/>
      <Delete photo={photo} Product={"Product Name"} available={"available"}  price={"18 000 000 uzs"}/>
      <Delete photo={photo} Product={"Product Name"} available={"available"}  price={"18 000 000 uzs"}/>
      </div>
      <div>
      <Info/>
      </div>
    </section>
  );
};

export default Cart;
