import styled from 'styled-components/macro'
import React from 'react'

export default function Header({ text }) {
  return (
    <HeaderStyle>
      <h1> {text}</h1>
    </HeaderStyle>
  )
}

const HeaderStyle = styled.header`
  width: 100% auto;
  background-color: #999;
  color: white;
  padding: 5px;
  margin: 20px auto;
  text-transform: uppercase;
`
