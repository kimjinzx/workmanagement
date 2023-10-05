import React, { useEffect } from "react";
import Todo from "./Todo";
import "./Work.css";
import { useStore } from "./Store";

const Work = () => {
  const { date, setDate, todos, selectedDate } = useStore();

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 6000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const filteredTodos = todos.filter(
    (todo) =>
      new Date(todo.date).toDateString() ===
      new Date(selectedDate).toDateString()
  );

  return (
    <div className="work">
      <div className="date">
        <div className="day">
          {selectedDate ? `${selectedDate}` : "날짜를 선택해주세요"}
        </div>
      </div>

      <div className="time">
        {date.getHours() < 12 ? "오전" : "오후"} {date.getHours() % 12 || 12}시
        : {date.getMinutes()}분
      </div>

      <div className="todo-box">
        <ul>
          {/* filteredTodos 배열을 사용하여 해당 날짜의 할 일만 표시합니다. */}
          {filteredTodos.map((todo, index) => (
            <Todo key={index} todo={todo.todoContent} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Work;
