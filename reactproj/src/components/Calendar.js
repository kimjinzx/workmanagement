import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import koLocale from "@fullcalendar/core/locales/ko";
import interactionPlugin from "@fullcalendar/interaction";
import "./Calendar.css";

const MyFullCalendar = () => {
  // useState 훅을 사용해 선택된 셀(prevDateEl)을 저장한다.
  const [selectedDate, setSelectedDate] = useState(null);
  // selectedDate는 사용자가 선택한 날짜를 저장한다.
  const [prevDateEl, setPrevDateEl] = useState(null);
  // prevDateEl은 이전에 선택된 셀의 DOM 요소를 저장한다.

  /* handleDateClick 함수는 사용자가 달력의 특정 날짜를 클릭했을 때 호출되는 함수이다.  */
  const handleDateClick = (info) => {
    // 이전에 선택한 날짜 셀이 있는 경우 배경색을 재설정한다.
    if (prevDateEl) {
      prevDateEl.style.backgroundColor = "";
    }

    // 선택한 날짜 셀의 배경색을 변경하고 저장한다.
    info.dayEl.style.backgroundColor = "#59a1db";
    setPrevDateEl(info.dayEl);

    setSelectedDate(info.dateStr);
    // alert("Selected date: " + info.dateStr); // 날짜 클릭시 경고창 뜨게 하는 코드
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
            plugins={[dayGridPlugin, interactionPlugin]} // plugins는 사용할 플러그인들을 배열로 전달받는다.
            initialView="dayGridMonth" // initialView는 달력이 처음 로드될 때 보여줄 뷰 타입을 지정한다.
            events={works} // events: 달력에 표시할 이벤트들을 객체 배열로 전달받는다.
            locale={koLocale} // locale는 달력의 언어 설정이다.
            dayNamesShort={["일", "월", "화", "수", "목", "금", "토"]} // dayNamesShort / monthNames: 요일과 월 이름 설정이다.
            monthNames={[Array(12).keys()].map((i) => `${i + 1}월`)}
            dateClick={handleDateClick} // dateClick는 날짜 클릭 시 실행할 핸들러 함수이다.
          />
        </div>

        <div className="selected-date">
          {selectedDate
            ? `선택된 날짜: ${selectedDate}`
            : "날짜를 선택해주세요"}
          <div> work Management </div>{" "}
          {/* 해당 날짜 클릭시 우측에 할일이 표시되도록 추후 코드 변경 예정 */}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
