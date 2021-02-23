import '../GameForm/GameForm.css'
import React from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'

export default function GameForm({ onCreateGame }) {
  return (
    <form className="GameForm" onSubmit={handleSubmit}>
      <Input labelText="Name of game" placeholder="e.g. Carcassonne" />
      <Input labelText="Player names" placeholder="e.g. John Doe, Jane Doe" />
      <Button text="Create game" />
    </form>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    // get data from input
    const { nameOfGame, playerNames } = form.elements
    onCreateGame({
      nameOfGame: nameOfGame.value,
      playerNames: playerNames.value.split(',').map(name => name.trim()),

      // hieraus wollen wir aber ein Array machen, deshalp mit split. 'Jane, John' => ['Jane', 'John'] wir splitten beim Komma
      // damit wir jetzt noch die Leerzeichen rausnehmen können, erstellen wir ein neues Array mit Map und trimmen das
    })
    form.reset()
  }
}
