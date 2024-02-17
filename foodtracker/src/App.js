import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { TrackFood } from "./Components/TrackFood";
import { createContext, useState } from "react";

import { Private } from "./Components/Private";
import { Demo } from "./Components/Demo";

export const userContext = createContext();
function App() {
  const [userData, setUserData] = useState(localStorage.getItem("nutrifyUser"));

  // console.log(userData);
  // console.log("tokenData", " ", userData);

  // useEffect(() => {
  //   if (localStorage.getItem("nutrifyUser") !== null) {
  //     setUserData();
  //   }
  // }, []);
  return (
    <div className="App">
      <userContext.Provider value={{ userData, setUserData }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/track" element={<Private Component={TrackFood} />} />
          <Route path="/demo" element={<Private Component={Demo} />} />
        </Routes>
      </userContext.Provider>
    </div>
  );
}

export default App;
