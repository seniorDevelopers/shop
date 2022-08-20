import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "services/rootApi";
import "./About.scss"

const About = () => {
  const params = useParams();
  const [data,setData] = useState<any>({})
  console.log(data, "Abdulaziz")
  useEffect(() => {
    API.get(`/products/${params.id}`).then((res) => {
        setData(res.data)
        console.log(data,"bu data");
        
    });
  }, []);
  return (
  // <div>{data.model_uz}</div>
  <div className="aboutProduct">
    <div className="aboutProduct__img"><img src={data.image} alt="product image"/></div>
    <div className="aboutProduct__details">
      <p className="aboutProduct__model">{data.model_uz}</p>
      <p className="aboutProduct__price">{data.price_uz}</p>
    </div>
  </div>
  )
};

export default About;