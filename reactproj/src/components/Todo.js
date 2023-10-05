import React from "react";

const Todo = ({ key, todo }) => {
  return (
    <li key={key}>
      <input type={"checkbox"} />
      <span>{todo}</span>
      ...
    </li>
  );
};

export default Todo;
