import {
  CloseOutlined,
  HeartOutlined,
  LoginOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { AnyAction } from "redux";
import {navigation} from "./helpers"
import uzFlag from "../../assets/Images/uzbFlag.jpg";
import ruFlag from "../../assets/Images/rusFlag.jpg";
import "./index.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionChangeLanguge } from "store/changeLanguage/action";
import { AppDispatch } from "store/store";
import Modal from "components/Modal/Modal";
import Login from "components/Login/Login";
import Registration from "components/Login/Registration";

interface Dispatch {
  action: any;
  payload: boolean;
}
const Header = () => {
  const { changeLanguage } = useSelector((state: any) => state.changeLanguge);
  const [langChange, setLangChange] = useState(true);
  const [searchHidden, setSearchHidden] = useState(false);
  const [open, setOpen] = useState<boolean>(false);
  const [tab, setTab] = useState<string>("login");
  const dispatch: AppDispatch = useDispatch();
  const change = () => {
    setLangChange(!langChange);
  };
  const changeLan = () => {
    setLangChange(!langChange);
    dispatch(actionChangeLanguge(!changeLanguage));
  };

  const user: any = localStorage.getItem("user");
  const userObj = JSON.parse(user);
  return (
    <nav className="headerContainer">
      <div className="headerWrapper globalContainer">
        <div>
          <p className="logo">
            Mac<b>Bro</b>
          </p>
        </div>
        <ul hidden={searchHidden}>
          {navigation.map((item) => (
            <li key={item.name_uz}>
              <a href={item.id}>
                {!changeLanguage ? item.name_uz : item.name_ru}
              </a>
            </li>
          ))}
        </ul>
        <div className="icons">
          <div
            className="icon"

            // onMouseLeave={() => setSearchHidden(!searchHidden)}
          >
            {!searchHidden ? (
              <SearchOutlined onClick={() =>setSearchHidden(!searchHidden)} />
            ) : (
              <div className="searchInput">
                <SearchOutlined />
                <input type="text" />
                <CloseOutlined
                  color="#fff"
                  style={{ fontSize: "15px" }}
                  onClick={() => setSearchHidden(!searchHidden)}
                />
              </div>
            )}
          </div>
          <div className="icon">
            <HeartOutlined />
          </div>
          <div className="icon">
            <ShoppingCartOutlined />
          </div>
          {user === null ? (
            <div className="icon">
              <LoginOutlined onClick={() => setOpen(true)} />
            </div>
          ) : (
            <div className="userData">
              <img src="https://cdn-icons-png.flaticon.com/512/64/64572.png?w=360" alt="" />
            </div>
          )}
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

      {open && tab === "login" ? (
        <Modal children={<Login setTab={setTab} setOpen={setOpen} />} />
      ) : open && tab === "registration" ? (
        <Modal
          children={<Registration setTab={setTab} setOpen={setOpen} />}
          visable={tab}
        />
      ) : null}
    </nav>
  );
};

export default Header;
