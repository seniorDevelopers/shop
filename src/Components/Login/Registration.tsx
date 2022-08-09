import { Button, Form, Input } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useState } from "react";
import "./index.scss";
import { useSelector } from "react-redux";

const Registration = ({ setTab, setOpen }: any) => {
  const language = useSelector((state: any) => state.change.changeLanguage);
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const changeTab = () => {
    setTab("login");
  };

  const onSubmit = () => {
    const data = {
      password: password,
      email: email,
    };
    console.log(data)
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
          {!language ? "Ro'yxatdan o'tish" : "Регистрация"}
        </h1>
        <i className="icon" onClick={() => setOpen(false)}>
          <CloseOutlined />
        </i>

        <Form.Item
          label={!language ? "Ismingiz" : "Имя"}
          name="name"
          rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <Input onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>

        <Form.Item
          label={!language ? "Raqamingiz" : "Номер тел"}
          name="number"
          rules={[{ required: true, message: "Please enter your number!" }]}
        >
          <Input type="text" onChange={(e) => setPassword(e.target.value)} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 9, span: 10 }}>
          <Button type="primary" ghost={true} onClick={onSubmit}>
          {!language ? "Ro'yxatdan o'tish" : "Регистрация"}
          </Button>
        </Form.Item>
      </Form>
      <p style={{ textAlign: "center" }}>
        {!language ? "Ro'yxatdan o'tganmisiz?" : "У вас есть аккаунт?"} <b style={{ cursor: "pointer" }} onClick={changeTab}>{!language ? "Kirish" : "Войти"}</b>
      </p>
    </>
  );
};

export default Registration;
