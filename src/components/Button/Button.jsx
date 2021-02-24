<<<<<<< HEAD
import '../Button/Button.css'
import React from 'react'

export default function Button({ text, onClick, isActive }) {
  return (
    <button
      className={isActive ? 'Button Button--active' : 'Button'}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
=======
import styled from 'styled-components/macro'

export default styled.button`
  padding: 10px;
  margin: 15px;
  border-radius: 5px;
  text-align: center;
`
>>>>>>> main
