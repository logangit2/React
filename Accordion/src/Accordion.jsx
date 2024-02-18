import React, { useState } from "react";

export const Accordion = () => {
  const [acc, setAcc] = useState(false);
  console.log(acc);
  function accToggle() {
    setAcc(!acc);
  }

  return (
    <div className="container">
      <div className="acc" onClick={accToggle}>
        <h1>Heading</h1>
        <p className={`faq ${acc ? "active" : ""}`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
          voluptate? Autem culpa non eaque quos dolores, nulla, nobis numquam,
          iste ipsam eveniet unde velit quae illum ut delectus molestiae
          possimus.
        </p>
        <i class={`fa-solid fa-arrow-${acc ? "up" : "down"}`}></i>
      </div>
    </div>
  );
};
