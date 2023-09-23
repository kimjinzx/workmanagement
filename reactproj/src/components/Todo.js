import React from "react";

const Todo = ({ todo }) => {
  return (
    <li>
      <input type={"checkbox"} />
      <span>{todo}</span>
      ...
    </li>
  );
};

export default Todo;
