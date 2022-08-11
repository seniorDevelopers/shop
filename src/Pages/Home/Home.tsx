import { DeliveredProcedureOutlined } from "@ant-design/icons";
import React from "react";
import "./Home.scss";
function Home() {
  return (
    <section className="homeContainer">
      <div className="title globalContainer">
        <h3>Новый</h3>
        <h2>iPhone 13 Pro <br />Max</h2>
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
  );
}

export default Home;
