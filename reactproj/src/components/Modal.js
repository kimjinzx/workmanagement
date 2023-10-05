import React from "react";
import ReactModal from "react-modal";
import { useStore } from "./Store";

ReactModal.setAppElement("#root");

const Modal = () => {
  const {
    inputValue,
    setInputValue,
    selectedDate,
    setSelectedDate,
    registerTodo,
    closeModal,
  } = useStore();

  return (
    <ReactModal
      isOpen={true}
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
        <button>날짜</button>
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
  );
};

export default Modal;
