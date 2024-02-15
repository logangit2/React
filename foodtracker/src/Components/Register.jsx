import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Register = () => {
  let [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
  });
  let [message, setMessage] = useState("");
  let [loginPage, setLoginPage] = useState("Already have an account? Login");
  function handleForm(e) {
    setUser((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(user);

    fetch("http://localhost:8000/register", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => {
      if (data.status === 201) {
        setMessage("Register successfull");
        setLoginPage("");

        //timeout
        setTimeout(() => {
          setUser({
            name: "",
            email: "",
            age: "",
            password: "",
          });
          setMessage("");
          setLoginPage("Registered succesfully login now");
        }, 3000); //timeout ends
      } else {
        setMessage("");
      }
    });
  }
  return (
    <div>
      Register
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter your name"
          name="name"
          value={user.name}
          onChange={handleForm}
        />
        <input
          type="email"
          placeholder="enter your email"
          name="email"
          value={user.email}
          onChange={handleForm}
        />
        <input
          type="password"
          placeholder="enter your password"
          name="password"
          value={user.password}
          onChange={handleForm}
        />
        <input
          type="number"
          placeholder="enter your age"
          name="age"
          value={user.age}
          onChange={handleForm}
        />
        <button>Register</button>
        <p>{message}</p>
        <p>
          <Link to="/login">{loginPage}</Link>
        </p>
      </form>
    </div>
  );
};
