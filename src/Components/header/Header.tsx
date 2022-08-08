import {
  HeartOutlined,
  LoginOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { navigation } from "./helpers";
import uzFlag from "assets/Images/uzbFlag.jpg";
import ruFlag from "assets/Images/rusFlag.jpg";
import "./index.scss";
import { useState } from "react";

const Header = () => {
  const [changeLanguage, setChangeLanguage] = useState(true);
  const [langChange, setLangChange] = useState(true);
  const change = () =>{
    setLangChange(!langChange)
  }  
  const changeLan = () =>{
    setLangChange(!langChange)
    setChangeLanguage(!changeLanguage)
  }

  return (
    <nav className="headerContainer">
      <div className="headerWrapper globalContainer">
        <div>
          <p className="logo">
            Mac<b>Bro</b>
          </p>
        </div>
        <ul>
          {navigation.map((item) => (
            <li key={item.id}>
              <a href={item.id}>{!changeLanguage ? item.name_uz : item.name_ru}</a>
            </li>
          ))}
        </ul>
        <div className="icons">
          <div className="icon">
            <SearchOutlined />
          </div>
          <div className="icon">
            <HeartOutlined />
          </div>
          <div className="icon">
            <ShoppingCartOutlined />
          </div>
          <div className="icon">
            <LoginOutlined />
          </div>
          <div className="language">
            {!changeLanguage ? (
              <div className="uzLan" onClick={change}>
                <p>O'Z</p>
                <img src={uzFlag} alt="" />
              </div>
            ) : (
              <div className="ruLan" onClick={change}>
                <p>РУ</p>
                <img src={ruFlag} alt="" />
              </div>
            )}
            <div className="changeLanguage" hidden={langChange}>
              {changeLanguage ? (
                <div className="uzLan" onClick={changeLan}>
                  <p>O'Z</p>
                  <img src={uzFlag} alt="" />
                </div>
              ) : (
                <div className="ruLan" onClick={changeLan}>
                  <p>РУ</p>
                  <img src={ruFlag} alt="" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
