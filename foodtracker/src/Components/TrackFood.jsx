import React, { useContext, useState } from "react";
import { userContext } from "../App";

export const TrackFood = () => {
  const [foodResult, setFoodResult] = useState([]);
  const [foodD, setFoodD] = useState({});
  console.log(foodD.fat);
  const tokenMessage = useContext(userContext);

  function handleSearch(e) {
    // console.log(e.target.value.length !== 0);
    if (e.target.value) {
      fetch(`http://localhost:8000/food/${e.target.value}`, {
        headers: {
          Authorization: `Bearer ${tokenMessage.userData}`,
        },
      })
        .then((data) => data.json())
        .then((data) => {
          if (data.length) {
            // console.log(data);
            setFoodResult(data);
          } else {
            setFoodResult([]);
          }
        });
    } else {
      setFoodResult([]);
    }
  }

  return (
    <div className="track">
      <input
        type="text"
        onChange={handleSearch}
        placeholder="Search food item"
      />
      {foodResult.length !== 0 ? (
        <div className="food">
          {foodResult.map((food) => {
            return (
              <div key={food._id} className="food-details">
                <img src={food.img} alt="food" />
                <p
                  onClick={() => {
                    setFoodD(food);
                  }}
                >
                  {"Name: " + food.name}{" "}
                </p>
                {/* <p>{"Fat: " + food.fat}</p>
                <p>{"Calories: " + food.calories}</p>
                <p>{"Carbs: " + food.carbs}</p> */}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};
