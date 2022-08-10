import React, { useState } from "react";
// import { useParams } from "react-router-dom";
import "./Product.scss";
import { Select, Slider, Switch } from "antd";
import { Option } from "antd/lib/mentions";
const Product = () => {
  // const params = useParams();
  const [value, setValue] = useState(500000);
  return (
    <section className="productContainer globalContainer">
      <aside>
        <h3>Фильтр</h3>
        <h6>Фильтрация по цене</h6>
        <span>{value.toLocaleString()} so'm</span> - <span>1 680 000 so'm</span>
        <Slider
          defaultValue={0}
          max={1680000}
          min={1000000}
          onChange={(e) => setValue(e)}
          tooltipVisible={false}
          trackStyle={{ backgroundColor: "#1d1d1d" }}
          handleStyle={{ borderColor: "#1d1d1d" }}
          className="slider"
        />
        <h6>Бренды</h6>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
      </aside>
      <div className="productBox">
        <h6>
          Главная <b>{">"}</b> Смартфоны
        </h6>
        <div className="titleBox">
          <h3>Смартфоны</h3>

          <Select defaultValue="All solutions" style={{ width: "200px" }}>
            <Option value={"Xurshid"}>Xurshid</Option>
          </Select>
        </div>
        <div className="cardContainer">
          <div className="card">
            <img
              src="https://cdn.goodzone.uz/goodzone/fd461b3a-c937-4ff0-be5e-4dd21af1d473-copy"
              alt=""
              width={200}
            />
            <p>Смартфон Xiaomi Mi 11 Lite 5G NE 8/256</p>
            <p>4 600 000 сум</p>
            <button>KORZINU</button>
          </div>
          <div className="card">
            <img
              src="https://cdn.goodzone.uz/goodzone/fd461b3a-c937-4ff0-be5e-4dd21af1d473-copy"
              alt=""
              width={200}
            />
            <p>Смартфон Xiaomi Mi 11 Lite 5G NE 8/256</p>
            <p>4 600 000 сум</p>
            <button>KORZINU</button>
          </div>
          <div className="card">
            <img
              src="https://cdn.goodzone.uz/goodzone/fd461b3a-c937-4ff0-be5e-4dd21af1d473-copy"
              alt=""
              width={200}
            />
            <p>Смартфон Xiaomi Mi 11 Lite 5G NE 8/256</p>
            <p>4 600 000 сум</p>
            <button>KORZINU</button>
          </div>
          <div className="card">
            <img
              src="https://cdn.goodzone.uz/goodzone/fd461b3a-c937-4ff0-be5e-4dd21af1d473-copy"
              alt=""
              width={200}
            />
            <p>Смартфон Xiaomi Mi 11 Lite 5G NE 8/256</p>
            <p>4 600 000 сум</p>
            <button>KORZINU</button>
          </div>
          <div className="card">
            <img
              src="https://cdn.goodzone.uz/goodzone/fd461b3a-c937-4ff0-be5e-4dd21af1d473-copy"
              alt=""
              width={200}
            />
            <p>Смартфон Xiaomi Mi 11 Lite 5G NE 8/256</p>
            <p>4 600 000 сум</p>
            <button>KORZINU</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
