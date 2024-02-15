import { useState } from "react";
import "./App.css";
import Card from "./Card";
import { Data } from "./data";

function App() {
  return (
    <div className="App">
      {Data.map((data, index) => (
        <Card key={index} name={data.name} job={data.job} skills={data.skil} />
      ))}
    </div>
  );
}

export default App;
