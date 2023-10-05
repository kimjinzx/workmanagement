import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./Calendar.css";
import { useStore } from "./Store";

const MyFullCalendar = () => {
  const { setSelectedDate, prevDateEl, setPrevDateEl } = useStore();

  const handleDateClick = (info) => {
    if (prevDateEl) {
      prevDateEl.style.backgroundColor = "";
    }

    info.dayEl.style.backgroundColor = "#59a1db";
    setPrevDateEl(info.dayEl);
 
    setSelectedDate(info.dateStr);
  };

  return (
    <div className="calendar-container">
      <h1>Calendar</h1>
      <div className="calendar-wrapper">
        <div className="full-calendar">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            locale="ko-KR"
            dateClick={handleDateClick}
          />
        </div>
      </div>
    </div>
  );
};

export default MyFullCalendar;
