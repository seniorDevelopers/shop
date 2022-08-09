import { Button, Form, Input } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./index.scss";
import { useSelector } from "react-redux";
// type Inputs = {
//   password: string;
//   email: string;
// };

const Login = ({ setTab, setOpen }: any) => {
  const language = useSelector((state: any) => state.change.changeLanguage);
  const changeTab = () => {
    setTab("registration");
  };

  const closeModal = () => {
    setOpen(false);
  };

  // const navigate = useNavigate();
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  // const data: Inputs = {
  //   password: password,
  //   email: email,
  // };

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
          {!language ? "Xush kelibsiz" : "Добро пожаловать"}
        </h1>
        <i className="icon" onClick={closeModal}>
          <CloseOutlined />
        </i>

        <Form.Item
          label={!language ? "Ismingiz" : "Имя"}
          name="name"
          rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <Input
            type="text"
            showCount={false}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Item>

        <Form.Item
          label={!language ? "Raqamingiz" : "Номер тел"}
          name="number"
          rules={[{ required: true, message: "Please enter your number!" }]}
        >
          <Input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 10, span: 10 }}>
          <Button type="primary" ghost={true} onClick={onSubmit}>
            {!language ? "Kirish" : "Войти"}
          </Button>
        </Form.Item>
      </Form>
      <p style={{ textAlign: "center" }}>
        {!language ? "Ro'yxatdan o'tmaganmisiz?" : "У вас нет аккаунта?"}{" "}
        <b style={{ cursor: "pointer" }} onClick={changeTab}>
          {" "}
          {!language ? "Ro'yxatdan o'tish" : "Регистрация"}
        </b>
      </p>
    </>
  );
};

export default Login;
