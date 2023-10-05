import Calendar from "./components/Calendar.js";
import Work from "./components/Work.js";
import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import ReactModal from "react-modal"; 
import useModalState from './stores/ModalState'


ReactModal.setAppElement("#root");

function App() {
  const [selectedDate, setSelectedDate] = useState(null);

  //날짜, 시간 상태
  const [date, setDate] = useState(new Date());

  const { 
    inputValue,
    setInputValue,
    registerTodo,
    modalIsOpen, 
    setModalIsOpen,  
    todos,
  } = useModalState();

    const handleRegisterTodo = () => {
      registerTodo(inputValue, setModalIsOpen, todos);
    };
  
  const customModalStyles = {
      overlay: {
      backgroundColor: " rgba(0, 0, 0, 0.4)",
      width: "100%",
      height: "100vh",
      zIndex: "10",
      position: "fixed",
      top: "0",
      left: "0",
    },
      content: {
      width: "500px",
      height: "200px",
      zIndex: "150",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "10px",
      boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
      backgroundColor: "white",
      justifyContent: "center",
      overflow: "auto",
    },
  };

  //모달 여는 함수
  const modalOpen = () => {
    // setInputValue("");
    setModalIsOpen(true);
  };

  //모달 닫는 함수
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="App">
      {/* <Button modalOpen={modalOpen} />
      <Calendar />
      <Work date={date} setDate={setDate} todos={todos}/> */}
      <Button modalOpen={modalOpen} setModalIsOpen={setModalIsOpen}/>
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <Work
        date={date}
        setDate={setDate}
        todos={todos}
        selectedDate={selectedDate}
      />{" "}
      {/* 선택된 날짜를 전달 */}
      {/* 클릭하면 나오는 모달창 */}
      <ReactModal isOpen={modalIsOpen} className="modal" style={customModalStyles}>
        <h3>일정 추가하기</h3>

        <div className="modal-top">
          <span>제목</span>
          <input
            type={"text"}
            placeholder={"내용을 입력해주세요."}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>

        <div className="modal-bottom">
          <button>날짜</button>
          {/* <button type="date">달력보기</button> */}
          <span>달력</span>
          <input type="date" name="달력보기" />
          {/* input태그 date 속성 */}
          <button>시간설정</button>
        </div>

        <div className="modal-btn">
          <button onClick={handleRegisterTodo}>추가</button>
          <button onClick={closeModal}>취소</button>
        </div>
      </ReactModal>
    </div>
  );
}

export default App;
