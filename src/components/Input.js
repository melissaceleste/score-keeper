import styled from 'styled-components/macro'
import React from 'react'

export default function Input({ labelText, placeholder, name }) {
  return (
    <LabelStyle className="Input">
      {labelText}
      <InputStyle name={name} placeholder={placeholder} type="text" />
    </LabelStyle>
  )
}

const InputStyle = styled.input`
  width: 300px;
  border: 1px solid pink;
  height: 20px;
  margin: 7px;
  border-radius: 5px;
`
const LabelStyle = styled.label`
  font-size: 16px;
`
