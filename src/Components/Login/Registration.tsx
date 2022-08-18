import { Button, Form, Input, message } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import API from "services/rootApi";
import { AppDispatch } from "store/store";
import { actionGetUser } from "store/users/action";

const Registration = ({ setTab, setOpen }: any) => {
  const { changeLanguage } = useSelector((state: any) => state.changeLanguge);
  const { allUsers } = useSelector((state: any) => state.getUsers);
  console.log(allUsers, "Hamma userlar");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const key = "updatable";

  const openMessage = () => {
    message.loading({
      content: !changeLanguage ? "Yuklanmoqda..." : "Загрузка...",
      key,
    });
    setTimeout(() => {
      message.success({
        content: !changeLanguage
          ? "Siz muvofiqiyatli ro'yxatdan o'tdingiz"
          : "Вы успешно зарегистрировались",
        key,
        duration: 2,
      });
    }, 1000);
  };
  const openError = () => {
    message.loading({
      content: !changeLanguage ? "Yuklanmoqda..." : "Загрузка...",
      key,
    });
    setTimeout(() => {
      message.warning({
        content: !changeLanguage
          ? "Bunday foydalanuvchi mavjud"
          : "Такой пользователь существует",
        key,
        duration: 2,
      });
    }, 1000);
  };

  const changeTab = () => {
    setTab("login");
  };

  const onSubmit = () => {
    const data = {
      username: username,
      email: email,
    };
    const filter = allUsers.filter(
      (item: any) => item.email.toLowerCase() === email.toLocaleLowerCase()
    );
    if (filter.length === 0) {
      API.post("/user", data).then((res) => {
        if (res.status === 201) {
          openMessage();
          setTab("login");
        }
      });
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
          label={!changeLanguage ? "Po'chtangiz" : "Ваша почта"}
          name="email"
          rules={[{ required: true, message: "Please enter your email!" }]}
        >
          <Input type="email" onChange={(e) => setEmail(e.target.value)} />
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
