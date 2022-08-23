import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Product.scss";
import { Select, Slider } from "antd";
import { Option } from "antd/lib/mentions";
import API from "services/rootApi";
import { useDispatch, useSelector } from "react-redux";
import BuyCard from "components/Cards/BuyCard/BuyCard";
import { actionBoolean } from "store/boolean/action";
import { AppDispatch } from "store/store";
import { message } from "antd";
import Progress from "components/Progress/Progress";

const Product = () => {
  const params = useParams();
  const dispatch: AppDispatch = useDispatch();
  const { changeLanguage } = useSelector((state: any) => state.changeLanguge);
  const { dataBoolean } = useSelector((state: any) => state.dataBoolean);
  const [data, setData] = useState([]);
  const [favData, setFavData] = useState([]);
  const [sortData, setSortData] = useState([]);
  const [render, setRender] = useState(false);
  const name = data.map((item: any) =>
    !changeLanguage ? item.name_uz : item.name_ru
  )[0];

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

  const range = data.filter((item: any) =>
    !changeLanguage
      ? Number(
          item.price_uz.split("").slice(0, -4).join("").split(" ").join("")
        ) >= value
      : Number(
          item.price_ru.split("").slice(0, -5).join("").split(" ").join("")
        ) >= value
  );

  const sort = (e: any) => {
    setSortData(data.filter((item: any) => item.brend === e.target.id));
  };

  const local: any = localStorage.getItem("user");
  const userId = JSON.parse(local);

  const key = "updatable";
  const openMessage = () => {
    message.loading({
      content: !changeLanguage ? "Yuklanmoqda..." : "Загрузка...",
      key,
    });
    setTimeout(() => {
      message.success({
        content: !changeLanguage
          ? "Mahsulot qo'shildi..."
          : "Товар добавлен...",
        key,
        duration: 2,
      });
    }, 1000);
  };

  const addFavorite = (id: string): any => {
    if (userId === null) {
      alert("Iltimos tizimga kiring...!!");
    }

    API.get(`/products/${id}`).then((res) => {
      if (res.status === 200) {
        const dataa = {
          user_id: userId.id,
          data: res.data,
        };
        openMessage();
        API.post("/favorite", dataa).then((res) => {
          if (res.status === 201) {
            setRender(!render);
            dispatch(actionBoolean(!dataBoolean));
          }
        });
      }
    });
  };
  const trueFunc = (id: string): any => {
    return favData?.filter((item: any) => item.data.id === id).length > 0;
  };

  useEffect(() => {
    API.get("/products").then((res) => {
      setData(res.data.filter((item: any) => item.type === params.nameProduct));
    });
    API.get("/favorite").then((res) => {
      setFavData(res.data.filter((item:any) => item.user_id === userId.id));
    });
  }, [render]);

  return (
    <section className="productContainer globalContainer">
      {data.length > 0 ? (
        <>
          <aside>
            <h3>{!changeLanguage ? "Saralash" : "Фильтр"}</h3>
            <h6>
              {!changeLanguage
                ? "Narx bo'yicha saralash"
                : "Фильтрация по цене"}
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
            {brends?.map((item: any) => (
              <p key={item} id={item} onClick={(e) => sort(e)}>
                {item}
              </p>
            ))}
          </aside>
          <div className="productBox">
            <h6>
              {!changeLanguage ? "Bosh sahifa" : "Главная"} <b>{">"}</b> {name}
            </h6>
            <div className="titleBox">
              <h3>{name}</h3>

              <Select defaultValue="All solutions" style={{ width: "200px" }}>
                <Option value={"Xurshid"}>Xurshid</Option>
              </Select>
            </div>
            <div className="cardContainer">
              {sortData.length === 0
                ? !value
                  ? data?.map((item: any) => (
                      <BuyCard
                        img={item.image}
                        title={!changeLanguage ? item.model_uz : item.model_ru}
                        price={!changeLanguage ? item.price_uz : item.price_ru}
                        id={item.id}
                        key={item.id}
                        trueFunc={trueFunc}
                        addFavorite={addFavorite}
                      />
                    ))
                  : data
                      ?.filter((item: any) =>
                        !changeLanguage
                          ? Number(
                              item.price_uz
                                .split("")
                                .slice(0, -4)
                                .join("")
                                .split(" ")
                                .join("")
                            ) >= value
                          : Number(
                              item.price_ru
                                .split("")
                                .slice(0, -5)
                                .join("")
                                .split(" ")
                                .join("")
                            ) >= value
                      )
                      ?.map((item: any) => (
                        <BuyCard
                          img={item.image}
                          title={
                            !changeLanguage ? item.model_uz : item.model_ru
                          }
                          price={
                            !changeLanguage ? item.price_uz : item.price_ru
                          }
                          id={item.id}
                          key={item.id}
                          trueFunc={trueFunc}
                          addFavorite={addFavorite}
                        />
                      ))
                : !value
                ? sortData?.map((item: any) => (
                    <BuyCard
                      img={item.image}
                      title={!changeLanguage ? item.model_uz : item.model_ru}
                      price={!changeLanguage ? item.price_uz : item.price_ru}
                      id={item.id}
                      key={item.id}
                      addFavorite={addFavorite}
                      trueFunc={trueFunc}
                    />
                  ))
                : sortData
                    ?.filter((item: any) =>
                      !changeLanguage
                        ? Number(
                            item.price_uz
                              .split("")
                              .slice(0, -4)
                              .join("")
                              .split(" ")
                              .join("")
                          ) >= value
                        : Number(
                            item.price_ru
                              .split("")
                              .slice(0, -5)
                              .join("")
                              .split(" ")
                              .join("")
                          ) >= value
                    )
                    ?.map((item: any) => (
                      <BuyCard
                        img={item.image}
                        title={!changeLanguage ? item.model_uz : item.model_ru}
                        price={!changeLanguage ? item.price_uz : item.price_ru}
                        id={item.id}
                        key={item.id}
                        trueFunc={trueFunc}
                        addFavorite={addFavorite}
                      />
                    ))}
            </div>
          </div>
        </>
      ) : (
        <Progress/>
      )}
    </section>
  );
};

export default Product;
