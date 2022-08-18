<<<<<<< HEAD
import HomeHeader from 'Components/homeHeader/HomeHeader'
import React from 'react'

=======
import { DeliveredProcedureOutlined } from "@ant-design/icons";
import NewCard from "components/Cards/NewCard/NewCard";
import ProductCard from "components/Cards/ProductCard/ProductCard";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionGetProducts } from "store/products/action";
import { AppDispatch } from "store/store";
import "./Home.scss";
>>>>>>> 13b2689ab2c9cdd1e19818c914c43024de8c0aec
function Home() {
  const { allPoducts } = useSelector((state: any) => state.getProducts);
  const { changeLanguage } = useSelector((state: any) => state.changeLanguge);

  console.log(allPoducts, "allPoducts");

  const dispatch: AppDispatch = useDispatch();

  const newProduct = allPoducts?.reverse().filter((_: any, index: any) => index < 4);
 
    const allTypes =  Array.from(new Set(allPoducts?.filter((item: any) => item.type === "phone").map((item: any) => item.brend)))
    const samsung = allPoducts?.filter((item: any) => item.type === "phone" && item.brend === "samsung")[0];
    const apple = allPoducts?.filter((item: any) => item.type === "phone" && item.brend === "apple")[2];
    const xiaomi = allPoducts?.filter((item: any) => item.type === "phone" && item.brend === "xiaomi")[0];
    const nokia = allPoducts?.filter((item: any) => item.type === "phone" && item.brend === "nokia")[0];

 

  useEffect(() => {
    dispatch(actionGetProducts());
  }, []);

  return (
<<<<<<< HEAD
    <div><HomeHeader/></div>
  )
=======
    <>
      <section className="homeContainer">
        <div className="title globalContainer">
          <h3>{!changeLanguage ? "Yangi" : "Новый"}</h3>
          <h2>
            iPhone 13 Pro <br />
            Max
          </h2>
          <h4>{!changeLanguage ? "Juda ham ajoyib" : "Просто. Нереально."}</h4>
          <button>Купить</button>
        </div>
        <div>
          <div className="remoteVideo">
            <video width="100%" height="100%" autoPlay loop muted>
              <source
                src="https://cdn.macbro.uz/macbro/409f0ed5-5ff0-41c0-b2ce-cfaa4fa34138"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </section>

      <section className="newCard globalContainer">
        <h6>Новинки</h6>
        <div className="newCards">
          {newProduct?.map((item: any) => (
            <NewCard
              img={item.image}
              price={item.price_uz}
              title={item.model_uz}
              id={item.type}
              key={item.id}
            />
          ))}
        </div>
      </section>

      <section className="phone globalContainer" id="phone">
        <h6>Телефоны</h6>
        <div className="phonesCards">
          <ProductCard img={samsung?.image} title={"Samsung"} id={samsung?.type}/>
          <ProductCard img={apple?.image} title={"iPhone"} id={apple?.type}/>
          <ProductCard img={xiaomi?.image} title={"Xiaomi"} id={xiaomi?.type}/>
          <ProductCard img={nokia?.image} title={"Nokia"} id={nokia?.type}/>
        </div>
      </section>
    </>
  );
>>>>>>> 13b2689ab2c9cdd1e19818c914c43024de8c0aec
}

export default Home;
