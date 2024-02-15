import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  let [menu, setMenu] = useState(false);
  function handleClick() {
    setMenu(!menu);
  }
  return (
    <div>
      <nav>
        <h3>Logo</h3>
        <ul className={menu ? null : "hidden"}>
          <li>
            <Link className="navLink" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="navLink" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="navLink" to="/product">
              product
            </Link>
          </li>
          <li>
            <Link className="navLink" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <button onClick={handleClick}> Menu</button>
      </nav>
    </div>
  );
};
