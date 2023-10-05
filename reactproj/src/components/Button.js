import React from "react";
import "./Button.css";
import { useStore } from "./Store";

const Button = () => {
  const { modalOpen } = useStore();
  return (
    <button className="btn" onClick={modalOpen}>
      추가하기
    </button>
  );
};

export default Button;
