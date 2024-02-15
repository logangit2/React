import React, { useState } from "react";
import { createContext } from "react";
import { Contact } from "./Contact";
import { Product } from "./Product";
export const TheContext = createContext();
export const Home = () => {
  let [value, setValue] = useState("ReactJS");

  return (
    <div>
      Home
      <TheContext.Provider value={value}>
        <Contact />
      </TheContext.Provider>
    </div>
  );
};
