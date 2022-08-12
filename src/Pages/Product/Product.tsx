import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Product.scss";
import { Select, Slider } from "antd";
import { Option } from "antd/lib/mentions";
import API from "services/rootApi";
import { useSelector } from "react-redux";
const Product = () => {
  const params = useParams();
  const { changeLanguage } = useSelector((state: any) => state.changeLanguge);
  const [data, setData] = useState([]);
  const [sortData, setSortData] = useState([]);

  const brends = Array.from(new Set(data.map((item: any) => item.brend)));
  const price = data
    .map((item: any) =>
      !changeLanguage
        ? Number(
            item.price_uz.split("").slice(0, -4).join("").split(" ").join("")
          )
        : Number(
            item.price_ru.split("").slice(0, -5).join("").split(" ").join("")
          )
    )
    .sort((a, b) => a - b);
  const [value, setValue] = useState(price[0]);
  console.log(price);

  const range = data.filter(
    (item: any) =>
      Number(
        item.price_ru.split("").slice(0, -5).join("").split(" ").join("")
      ) >= value
  );
  console.log(range, "bu range");

  const sort = (e: any) => {
    setSortData(data.filter((item: any) => item.brend === e.target.id));
  };
  useEffect(() => {
    API.get("/products").then((res) => {
      setData(res.data.filter((item: any) => item.type === params.nameProduct));
    });
  }, []);
  return (
    <section className="productContainer globalContainer">
      <aside>
        <h3>{!changeLanguage ? "Saralash" : "Фильтр"}</h3>
        <h6>
          {!changeLanguage ? "Narx bo'yicha saralash" : "Фильтрация по цене"}
        </h6>
        <span>
          {value ? value.toLocaleString() : price[0]?.toLocaleString()}{" "}
          {!changeLanguage ? "so'm" : "рубль"}
        </span>{" "}
        -{" "}
        <span>
          {price[price.length - 1]?.toLocaleString()}{" "}
          {!changeLanguage ? "so'm" : "рубль"}
        </span>
        <Slider
          defaultValue={0}
          max={price[price.length - 1]}
          min={price[0]}
          onChange={(e) => setValue(e)}
          tooltipVisible={false}
          trackStyle={{ backgroundColor: "#1d1d1d" }}
          handleStyle={{ borderColor: "#1d1d1d" }}
          className="slider"
        />
        <h6>{!changeLanguage ? "Brendlar" : "Бренды"}</h6>
        {brends.map((item: any) => (
          <p key={item} id={item} onClick={(e) => sort(e)}>
            {item}
          </p>
        ))}
      </aside>
      <div className="productBox">
        <h6>
          {!changeLanguage ? "Bosh sahifa" : "Главная"} <b>{">"}</b> Смартфоны
        </h6>
        <div className="titleBox">
          <h3>Смартфоны</h3>

          <Select defaultValue="All solutions" style={{ width: "200px" }}>
            <Option value={"Xurshid"}>Xurshid</Option>
          </Select>
        </div>
        <div className="cardContainer">
          {sortData.length === 0
            ? !value
              ? data.map((item: any) => (
                  <div className="card" key={item.id}>
                    <img src={item.image} alt="" width={200} />
                    <p>{item.model_uz}</p>
                    <p>{item.price_uz}</p>
                    <button>KORZINU</button>
                  </div>
                ))
              : data
                  .filter(
                    (item: any) =>
                      Number(
                        item.price_ru
                          .split("")
                          .slice(0, -5)
                          .join("")
                          .split(" ")
                          .join("")
                      ) >= value
                  )
                  .map((item: any) => (
                    <div className="card" key={item.id}>
                      <img src={item.image} alt="" width={200} />
                      <p>{item.model_uz}</p>
                      <p>{item.price_uz}</p>
                      <button>KORZINU</button>
                    </div>
                  ))
            : !value
            ? sortData.map((item: any) => (
                <div className="card" key={item.id}>
                  <img src={item.image} alt="" />
                  <p>{item.model_uz}</p>
                  <p>{item.price_uz}</p>
                  <button>KORZINU</button>
                </div>
              ))
            : sortData
                .filter(
                  (item: any) =>
                    Number(
                      item.price_ru
                        .split("")
                        .slice(0, -5)
                        .join("")
                        .split(" ")
                        .join("")
                    ) >= value
                )
                .map((item: any) => (
                  <div className="card" key={item.id}>
                    <img src={item.image} alt="" />
                    <p>{item.model_uz}</p>
                    <p>{item.price_uz}</p>
                    <button>KORZINU</button>
                  </div>
                ))}
       
        </div>
      </div>
    </section>
  );
};

export default Product;
