import React from 'react'
import './Button.css'

const Button = ({ modalOpen }) => {
  return (
    <button onClick={modalOpen}>추가하기</button>
  )
}

export default Button