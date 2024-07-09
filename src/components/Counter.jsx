/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Counter = ({ title, number }) => {
  return (
    <div className="counter">
      <p className="counter-number">{number}</p>
      <h3 className="counter-text">{title}</h3>
    </div>
  );
};

export default Counter;
