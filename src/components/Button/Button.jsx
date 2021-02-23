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
