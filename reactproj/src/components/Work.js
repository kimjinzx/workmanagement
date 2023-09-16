import React, { useEffect } from "react";
import Button from "./Button";
import Todo from "./Todo";
import './Work.css'

const Work = ({ date, setDate, todos }) => {  
  //1분마다 시간 업데이트 
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
          {date.getFullYear()}년 {date.getMonth() + 1}월 {date.getDate()}일,
        </div>
        <div className="time">
          {date.getHours() < 12 ? '오전' : '오후'} {date.getHours() % 12 || 12}시 : {date.getMinutes()}분
        </div>
      </div>

      <div className="todo-box"> 
        <ul>
          {todos.map(todo => {
            return (
              <Todo todo={todo} />
            )
          })}
        </ul>
      </div>
    </div>
  );
};

export default Work;
