import { DeliveredProcedureOutlined } from "@ant-design/icons";
import NewCard from "components/Cards/NewCard/NewCard";
import ProductCard from "components/Cards/ProductCard/ProductCard";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionGetProducts } from "store/products/action";
import { AppDispatch } from "store/store";
import "./Home.scss";
function Home() {
  const { allPoducts } = useSelector((state: any) => state.getProducts);
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
    <>
      <section className="homeContainer">
        <div className="title globalContainer">
          <h3>Новый</h3>
          <h2>
            iPhone 13 Pro <br />
            Max
          </h2>
          <h4>Просто. Нереально.</h4>
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
              key={item.id}
            />
          ))}
        </div>
      </section>

      <section className="phone globalContainer" id="phone">
        <h6>Phones</h6>
        <div className="phonesCards">
          <ProductCard img={samsung?.image} title={"Samsung"} id={samsung?.type}/>
          <ProductCard img={apple?.image} title={"iPhone"} id={apple?.type}/>
          <ProductCard img={xiaomi?.image} title={"Xiaomi"} id={xiaomi?.type}/>
          <ProductCard img={nokia?.image} title={"Nokia"} id={nokia?.type}/>
        </div>
      </section>
    </>
  );
}

export default Home;
