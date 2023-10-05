import Calendar from "./components/Calendar.js";
import Work from "./components/Work.js";
import "./App.css";
import Button from "./components/Button";
import ReactModal from "react-modal";
import { useStore } from "./components/Store";

ReactModal.setAppElement("#root");

function App() {
  const {
    selectedDate,
    setSelectedDate,
    date,
    setDate,
    modalIsOpen,
    setModalIsOpen,
    inputValue,
    setInputValue,
    todos,
    registerTodo,
    modalOpen,
    closeModal,
  } = useStore();

  return (
    <div className="App">
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <Button modalOpen={modalOpen} />
      <Work
        date={date}
        setDate={setDate}
        todos={todos}
        selectedDate={selectedDate}
      />{" "}
      <ReactModal
        isOpen={modalIsOpen}
        className="modal"
        overlayClassName="modal-overlay"
        shouldCloseOnOverlayClick={false}
        onRequestClose={closeModal} // 모달 외부 클릭시 닫힘 기능 추가
      >
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
          {/* <button>날짜</button> */}
          <span>달력</span>
          <input
            type="date"
            name="달력보기"
            onChange={(e) => setSelectedDate(e.target.value)}
          />
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
