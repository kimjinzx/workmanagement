import React from "react";
import "./Button.css";

const Button = ({ modalOpen }) => {
  return (
    <button className="btn" onClick={modalOpen}>
      추가하기
    </button>
  );
};

export default Button;
