import logo from "./logo.svg";
import Calendar from "./components/Calendar.js";
import Work from "./components/Work.js";
import React, { useState } from "react"; 
import "./App.css";
import Button from "./components/Button";
import ReactModal from 'react-modal';


 

ReactModal.setAppElement('#root')

function App() {
  const [selectedDate, setSelectedDate] = useState(null);


  //날짜, 시간 상태
  const [date, setDate] = useState(new Date())

  //모달 관리 상태
  const [modalIsOpen, setModalIsOpen] = useState(false)

  //모달창 input값으로 입력받은 할일을 관리하는 상태
  const [inputValue, setInputValue] = useState("")


  //입력받은 할일을 관리하는 배열 상태
  const [todos, setTodos] = useState([])



  //추가 버튼을 누르면 배열에 input을 통해 입력받은 값을 저장하는 함수
  const registerTodo = () => {
    if (inputValue) {
      setTodos([...todos, inputValue])
      setModalIsOpen(false)
      console.log(todos) //삭제할 내용
    } else {
      console.log("할일이 입력되지 않았습니다.")
    }
  }

  //모달 여는 함수
  const modalOpen = () => {
    setInputValue("")
    setModalIsOpen(true)
  }

  //모달 닫는 함수
  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <div className="App">
      {/* <Button modalOpen={modalOpen} />
      <Calendar />
      <Work date={date} setDate={setDate} todos={todos}/> */}
      <Button modalOpen={modalOpen} />
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <Work date={date} setDate={setDate} todos={todos} selectedDate={selectedDate} /> {/* 선택된 날짜를 전달 */}
      
      {/* 클릭하면 나오는 모달창 */}
      <ReactModal isOpen={modalIsOpen} className="modal">

        <h3>일정 추가하기</h3>

        <div className="modal-top">
          <span>제목</span>
          <input 
            type={'text'} 
            placeholder={'내용을 입력해주세요.'} 
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}/>
        </div>

        <div className="modal-bottom">
          <button>날짜</button>
          {/* <button type="date">달력보기</button> */}
         <span>달력</span>
          <input type="date" name="달력보기"/> 
          {/* input태그 date 속성 */}
          <button>시간설정</button>
        </div>

        <div className="modal-btn">
          <button onClick={registerTodo}>추가</button>
          <button onClick={closeModal}>취소</button>
        </div>

      </ReactModal>

    </div>
  );
}

export default App;