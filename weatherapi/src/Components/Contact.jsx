import React from "react";
import { useContext } from "react";
import { TheContext } from "./Home";

export const Contact = () => {
  const c = useContext(TheContext);
  return (
    <div>
      Contact
      <h2>{c}</h2>
    </div>
  );
};
