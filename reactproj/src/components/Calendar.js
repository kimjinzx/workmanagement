import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import koLocale from "@fullcalendar/core/locales/ko";
import interactionPlugin from "@fullcalendar/interaction";
import "./Calendar.css";

const MyFullCalendar = ({ selectedDate, setSelectedDate }) => {
  const [prevDateEl, setPrevDateEl] = useState(null);

  const handleDateClick = (info) => {
    if (prevDateEl) {
      prevDateEl.style.backgroundColor = "";
    }

    info.dayEl.style.backgroundColor = "#59a1db";
    setPrevDateEl(info.dayEl);

    setSelectedDate(info.dateStr);
  };

  const alltodo = 10;
  const finished = 3;
  const theDay = "2023-09-01";

  const works = [
    {
      classNames: ["custom-event"],
      title: finished + " / " + alltodo,
      start: theDay,
      backgroundColor: "#FFFFFF",
      borderColor: "#FFFFFF",
      textColor: "#0054FF",
    },
  ]; 




  return (
    <div className="calendar-container">
      <h1>Calendar</h1>
      <div className="calendar-wrapper">
        <div className="full-calendar">
          <span className="seleteDay">선택한 날짜</span>
          <span> </span>
          <span className="today">현재 날짜</span>
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={works}
            locale={koLocale}
            dayNamesShort={["일", "월", "화", "수", "목", "금", "토"]}
            monthNames={[Array(12).keys()].map((i) => `${i + 1}월`)}
            dateClick={handleDateClick}
            Add this prop
   eventContent={(arg) => {
    return {
      html: `<div style="color:#FF0000">${finished}</div> / <div style="color:#0000FF">${alltodo}</div>`
    };
   }}
          />
        </div>

        <div className="selected-date">
          {selectedDate
            ? `선택된 날짜: ${selectedDate}`
            : "날짜를 선택해주세요"}
          <div> work Management </div>
        </div>
      </div>
    </div>
  );
};

export default MyFullCalendar;
