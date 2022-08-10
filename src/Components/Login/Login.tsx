import { Button, Form, Input, message } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { actionGetUser } from "store/users/action";
import { AppDispatch } from "store/store";

const Login = ({ setTab, setOpen }: any) => {
  const { changeLanguage } = useSelector((state: any) => state.changeLanguge);
  const { allUsers } = useSelector((state: any) => state.getUsers);

  const key = "updatable";

  const openMessage = () => {
    message.loading({
      content: !changeLanguage ? "Yuklanmoqda..." : "Загрузка...",
      key,
    });
    setTimeout(() => {
      message.success({
        content: !changeLanguage
          ? "Tizimga kirilmoqda..."
          : "Вход в систему...",
        key,
        duration: 2,
      });
    }, 1000);
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };
  const openError = () => {
    message.loading({
      content: !changeLanguage ? "Yuklanmoqda..." : "Загрузка...",
      key,
    });
    setTimeout(() => {
      message.warning({
        content: !changeLanguage
          ? "Bunday foydalanuvchi mavjud emas"
          : "Такого пользователя не существует",
        key,
        duration: 2,
      });
    }, 1000);
  };

  const changeTab = () => {
    setTab("registration");
  };

  const closeModal = () => {
    setOpen(false);
  };

  // const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const onSubmit = () => {
    const data = {
      username: username,
      email: email,
    };
    const userData = allUsers.filter(
      (item: any) =>
        item.email.toLowerCase() === email.toLocaleLowerCase() &&
        item.username.toLowerCase() === username.toLocaleLowerCase()
    );

    if (userData.length > 0) {
      localStorage.setItem("user", JSON.stringify(userData[0]));
      openMessage();
    } else {
      openError();
    }
  };
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(actionGetUser());
  }, []);
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
          {!changeLanguage ? "Xush kelibsiz" : "Добро пожаловать"}
        </h1>
        <i className="icon" onClick={closeModal}>
          <CloseOutlined />
        </i>

        <Form.Item
          label={!changeLanguage ? "Ismingiz" : "Имя"}
          name="name"
          rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <Input
            type="text"
            showCount={false}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Form.Item>

        <Form.Item
          label={!changeLanguage ? "Po'chtangiz" : "Ваша почта"}
          name="email"
          rules={[{ required: true, message: "Please enter your email!" }]}
        >
          <Input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 10, span: 10 }}>
          <Button type="primary" ghost={true} onClick={onSubmit}>
            {!changeLanguage ? "Kirish" : "Войти"}
          </Button>
        </Form.Item>
      </Form>
      <p style={{ textAlign: "center" }}>
        {!changeLanguage ? "Ro'yxatdan o'tmaganmisiz?" : "У вас нет аккаунта?"}{" "}
        <b style={{ cursor: "pointer" }} onClick={changeTab}>
          {" "}
          {!changeLanguage ? "Ro'yxatdan o'tish" : "Регистрация"}
        </b>
      </p>
    </>
  );
};

export default Login;
