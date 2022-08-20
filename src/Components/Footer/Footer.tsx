import React from "react";
import "./index.scss";
import { dataBought, dataCompony, dataInformation, dataContact } from "./help";
import { AmazonOutlined, FacebookOutlined, InstagramOutlined, TwitterOutlined, YoutubeOutlined } from "@ant-design/icons";
import { Layout } from "antd";
const { Footer } = Layout;

const FooterContainer = () => {
  return (
    <>
      <Layout style={{marginTop: "7rem"}}>
        <Footer className="container globalContainer">
          <div className="salesProduct ">
            {dataBought.map((item) => (
              <div key={item.name_ru} className="box">
                <p className="headText">{item.head_ru}</p>
                <p className="mainText">{item.name_ru}</p>
              </div>
            ))}
          </div>
          <div className="aboutCompany">
            {dataCompony.map((item) => (
              <div key={item.name_ru} className="box">
                <p className="headText">{item.head_ru}</p>
                <p className="mainText">{item.name_ru}</p>
              </div>
            ))}
          </div>
          <div className="information">
            {dataInformation.map((item) => (
              <div key={item.name_ru} className="box">
                <p className="headText">{item.head_ru}</p>
                <p className="mainText">{item.name_ru}</p>
              </div>
            ))}
          </div>
          <div className="contactWithUs">
            {dataContact.map((item) => (
              <div key={item.head_ru} className="box">
                <p className="headText">{item.head_ru}</p>
                <div className="iconBox">
                <FacebookOutlined className="icon" />
                <InstagramOutlined className="icon" />
                <TwitterOutlined className="icon" />
                <YoutubeOutlined className="icon" />
                <AmazonOutlined className="icon" />
                </div>
                <p className="mainText">+998 78 777 20 20</p>
              </div>
            ))}
          </div>
        </Footer>
      </Layout>
    </>
  );
};

export default FooterContainer;
