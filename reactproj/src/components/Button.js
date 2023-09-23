// import React from "react";
// import "./Button.css";

// const Button = ({ modalOpen }) => {
//   return <button onClick={modalOpen}>추가하기</button>;
// };

// export default Button;

import React from "react";
import "./Button.css";

const Button = ({ modalOpen }) => {
  const handleClick = () => {
    modalOpen(); // 버튼 클릭 시 모달 창 열기
  };

  return <button onClick={handleClick}>추가하기</button>;
};

export default Button;
