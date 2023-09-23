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

  const allToDo = 10;
  const finished = 10;
  const count = allToDo - finished;
  const theDay = "2023-09-01";

  const works = [
    { 
      classNames: ["custom-event"],
      title: count,
      date: theDay,
      backgroundColor: "#FFFFFF",
    },
  ];

  return (
    <div className="calendar-container">
      <h1>Calendar</h1>
      <div className="calendar-wrapper">
        <div className="full-calendar">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={works}
            locale={koLocale}
            dateClick={handleDateClick}
            Add
            this
            prop
            eventContent={(arg) => {
              if (count === 0) {
                return {
                  html: `<span style="color:#4374D9">✓</span>`,
                };
              } else {
                return {
                  html: `<span style="color:#4374D9">${count}</span>`,
                };
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MyFullCalendar;
