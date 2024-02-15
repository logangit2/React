import React from "react";
import "./Login.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../App";

export const Login = () => {
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState({
    type: "",
    message: "",
  });

  const context = useContext(userContext);
  const navigate = useNavigate();

  function handleForm(e) {
    setLoginUser((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });

    // console.log(user);
  }
  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:8000/login", {
      method: "POST",
      body: JSON.stringify(loginUser),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => {
        console.log(data);
        if (data.status === 404) {
          setMessage({ type: "wrong", message: "Incorrect email or password" });
        } else if (data.status === 200) {
          setMessage({ type: "success", message: "login" });
          localStorage.setItem("logindata", JSON.stringify(data.status));
          context.setLoggedUser(JSON.parse(localStorage.getItem("logindata")));
          navigate("/home");
        }
        return data.json();
      })
      .then((data) => {
        console.log(data);
        console.log(context.loggedUser);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>LOGIN</h2>
        <input
          type="email"
          required
          placeholder="Enter your Email"
          name="email"
          className="inp"
          onChange={handleForm}
        />

        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          className="inp"
          required
          onChange={handleForm}
        />

        <div className="login-bottom">
          <button>Login</button>
          <p>
            Dont have an account ? <Link to="/register">Register</Link>
          </p>
        </div>
        <p className={message.type}>{message.message}</p>
      </form>
    </div>
  );
};
