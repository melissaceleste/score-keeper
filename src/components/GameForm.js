import styled from 'styled-components/macro'
import React from 'react'
import Button from './Button'
import Input from './Input'

export default function GameForm({ onCreateGame }) {
  return (
    <GameFormForm onSubmit={handleSubmit}>
      <Input
        name="nameOfGame"
        labelText="Name of game"
        placeholder="e.g. Carcassonne"
      />
      <Input
        name="playerNames"
        labelText="Player names"
        placeholder="e.g. John Doe, Jane Doe"
      />
      <CreateGameButton> Create game </CreateGameButton>
    </GameFormForm>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const { nameOfGame, playerNames } = form.elements

    onCreateGame({
      nameOfGame: nameOfGame.value,
      playerNames: playerNames.value.split(',').map(name => name.trim()),
      // hieraus wollen wir aber ein Array machen, deshalp mit split. 'Jane, John' => ['Jane', 'John'] wir splitten beim Komma
      // damit wir jetzt noch die Leerzeichen rausnehmen können, erstellen wir ein neues Array mit Map und trimmen das
    })
    form.reset()
    nameOfGame.focus()
  }
}

const GameFormForm = styled.form`
  width: 300px;
  text-align: start;
  background-color: #eee;
  box-shadow: 1px 2px #aaa;
  margin: 20px 10px;
  padding: 20px;
  border-radius: 10px;
`
const CreateGameButton = styled(Button)`
  width: 100% auto;
  height: 100% auto;
`
