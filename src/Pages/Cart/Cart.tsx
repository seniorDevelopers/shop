import React, { useEffect, useState } from "react";
import { Button, Result } from "antd";
import "./Cart.scss";
import API from "services/rootApi";
import { useDispatch, useSelector } from "react-redux";
import { actionCartCount } from "store/cartCount/action";
import { AppDispatch } from "store/store";
import Delete from "./delete/Delete";
import photo from "../../assets/Images/cardph.png";
import Info from "./info/info";
import { actionFavPoducts } from "store/favoriteProducts/action";

const Cart = () => {
  const { favPoducts } = useSelector((state: any) => state.getFavPoducts);
  const { dataBoolean } = useSelector((state: any) => state.dataBoolean);
  const dispatch: AppDispatch = useDispatch();

  const allPrice = favPoducts?.map((item: any) =>
    Number(
      item.data?.price_uz.split("").slice(0, -4).join("").split(" ").join("")
    )
  );

  useEffect(() => {
    dispatch(actionFavPoducts());
  }, [dataBoolean]);
  console.log(favPoducts, "favPoducts");

  return (
    <>
      {favPoducts.length === 0 && (
        <div className="globalContainer fav-wrapper">
          <h1 className="fav-wrapper__title">В корзине 0 товаров</h1>
          <div>
            <Result
              status="404"
              title="Вы еще не добавили ни одного товара в корзину"
              extra={<Button type="primary">Закажи прямо сейчас</Button>}
            />
          </div>
        </div>
      )}

      {favPoducts.length > 0 && (
        <section className="globalContainer fav-wrapper displayCards">
          <div className="deleteCards">
            {favPoducts.map((item: any) => (
              <Delete
                photo={item.data?.image}
                product={item.data?.model_uz}
                available={item.data?.brend}
                price={Number(
                  item.data?.price_uz
                    .split("")
                    .slice(0, -4)
                    .join("")
                    .split(" ")
                    .join("")
                ).toLocaleString()}
              />
            ))}
          </div>
          <div>
            <Info allPrice={allPrice} />
          </div>
        </section>
      )}
      
    </>
  );
};

export default Cart;
