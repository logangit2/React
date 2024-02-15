import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../App";
import { useContext } from "react";

export const Login = () => {
  const tokenData = useContext(userContext);
  const navigate = useNavigate();
  let [message, setMessage] = useState({
    type: "invisble",
    messsage: "",
  });
  let [userCred, setUserCred] = useState({
    email: "",
    password: "",
  });
  function handleLogin(e) {
    setUserCred((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  }

  function handleLoginSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:8000/login", {
      method: "POST",
      body: JSON.stringify(userCred),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => {
        if (data.status === 404) {
          setMessage({
            type: "wrong",
            messsage: "Incorrect Password",
          });
        } else if (data.status === 400) {
          setMessage({
            type: "error",
            messsage: "Email doesn't exist",
          });
        }
        console.log(data);
        data.json(data).then((data) => {
          console.log(data.message);

          if (data.token !== undefined) {
            localStorage.setItem("nutrifyUser", JSON.stringify(data));
            tokenData.setUserData(data);

            navigate("/track");
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      Login
      <form onSubmit={handleLoginSubmit}>
        <input
          type="email"
          placeholder="enter your email"
          name="email"
          required
          onChange={handleLogin}
        />
        <input
          type="password"
          placeholder="enter your password"
          name="password"
          onChange={handleLogin}
        />

        <button>Login</button>
        <p className={message.type}>{message.messsage}</p>
        <p>
          Don't have an account ? <Link to="/register">Register</Link>{" "}
        </p>
      </form>
    </div>
  );
};
