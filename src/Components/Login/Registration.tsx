import { Button, Form, Input } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useState } from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";

const Registration = ({ setTab, setOpen }: any) => {
  const { changeLanguage } = useSelector((state: any) => state.changeLanguge);

  const [username, setUsername] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const changeTab = () => {
    setTab("login");
  };

  const onSubmit = () => {
    const data = {
      username: username,
      number: number,
    };
  };

  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 16 }}
        autoComplete="off"
        className="form"
      >
        <h1 className="title">
          {!changeLanguage ? "Ro'yxatdan o'tish" : "Регистрация"}
        </h1>
        <i className="icon" onClick={() => setOpen(false)}>
          <CloseOutlined />
        </i>

        <Form.Item
          label={!changeLanguage ? "Ismingiz" : "Имя"}
          name="name"
          rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <Input onChange={(e) => setUsername(e.target.value)} />
        </Form.Item>

        <Form.Item
          label={!changeLanguage ? "Raqamingiz" : "Номер тел"}
          name="number"
          rules={[{ required: true, message: "Please enter your number!" }]}
        >
          <Input type="text" onChange={(e) => setNumber(e.target.value)} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 9, span: 10 }}>
          <Button type="primary" ghost={true} onClick={onSubmit}>
            {!changeLanguage ? "Ro'yxatdan o'tish" : "Регистрация"}
          </Button>
        </Form.Item>
      </Form>
      <p style={{ textAlign: "center" }}>
        {!changeLanguage ? "Ro'yxatdan o'tganmisiz?" : "У вас есть аккаунт?"}{" "}
        <b style={{ cursor: "pointer" }} onClick={changeTab}>
          {!changeLanguage ? "Kirish" : "Войти"}
        </b>
      </p>
    </>
  );
};

export default Registration;
