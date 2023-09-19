import React, { useEffect } from "react";
import Todo from "./Todo";
import './Work.css';

const Work = ({ date, setDate, todos, selectedDate }) => {  
  useEffect(() => {
    const timer = setInterval(() => {
        setDate(new Date());
    }, 6000);

    return () => {
        clearInterval(timer);
    };
  }, []);

  return (
    <div className="work">
      <div className="date">
        <div className="day">
          {selectedDate ? `선택된 날짜: ${selectedDate}` : "날짜를 선택해주세요"}
        </div>
        <div className="time">
          {date.getHours() < 12 ? '오전' : '오후'} {date.getHours() % 12 || 12}시 : {date.getMinutes()}분
        </div>
      </div>

      <div className="todo-box"> 
        <ul>
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Work;
