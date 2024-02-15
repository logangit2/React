import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img src="1.jpg" alt="img" />
      <h2>{props.name}</h2>
      <h2>{props.job}</h2>
      <button>Follow</button>
      <button>Profile</button>
      <ul>
        {props.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
