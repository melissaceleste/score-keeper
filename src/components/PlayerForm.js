import React from 'react'
import styled from 'styled-components/macro'

export default function PlayerForm({ onAddPlayer }) {
  return (
    <PlayerFormContainer onSubmit={handleSubmit}>
      <label>
        Add player:
        <br />
        <Input name="player" placeholder="Player name" />
      </label>
    </PlayerFormContainer>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const input = form.elements.player
    const name = input.value
    onAddPlayer(name)
    form.reset()
    input.focus()
  }
}

const PlayerFormContainer = styled.form`
  width: 300px;
  text-align: start;
  background-color: #eee;
  box-shadow: 1px 2px #aaa;
  margin: 20px 10px;
  padding: 20px;
`
const Input = styled.input`
  width: 300px;
`
