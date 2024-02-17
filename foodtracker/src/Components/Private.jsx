import React from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../App";

export const Private = ({ Component }) => {
  const loginData = useContext(userContext);
  // console.log(loginData);
  return loginData.userData !== null ? <Component /> : <Navigate to="/login" />;
};
