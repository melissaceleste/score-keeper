import PlayerForm from './PlayerForm'
import PlayerSection from './Player'
import Button from './Button'
import GameForm from './GameForm'
import Navigation from './Navigation'
import Header from './Header'
import HistoryEntry from './HistoryEntry'
import { useState } from 'react'
import React from 'react'
import styled from 'styled-components/macro'

export default function App() {
  const [players, setPlayers] = useState([])

  return (
    <div className="App">
      <PlayerForm onAddPlayer={handleAddPlayer} />
      {players.map(({ name, score }, index) => (
        <PlayerSection
          key={name}
          name={name}
          score={score}
          onPlus={() => handlePlus(index)}
          onMinus={() => handleMinus(index)}
        />
        // React.createElement(Player, {name, score, onPlus: () => handlePlus(index)})
      ))}
      {/*  <Button onClick={resetScore}>Reset scores </Button>
      <Button onClick={resetAll}>Reset all</Button> */}
      <ButtonGrid>
        <Button onClick={resetScore}>Reset scores</Button>
        <DangerButton onClick={resetAll}>Reset all</DangerButton>
      </ButtonGrid>

      <GameForm onCreateGame={data => console.log('onCreateGame', data)} />
      <Navigation
        activeIndex={0}
        onNavigate={index => console.log('onNavigate', index)}
      />
      <Header text="Carcassonne" />
      <HistoryEntry
        nameOfGame="Carcassonne"
        players={[
          { name: 'John Doe', score: 10 },
          { name: 'Jane Doe', score: 20 },
        ]}
      />
    </div>
  )

  function handleAddPlayer(name) {
    setPlayers(oldPlayers => [...oldPlayers, { name, score: 0 }])
  }

  function resetAll() {
    setPlayers([])
  }

  function resetScore() {
    setPlayers(players.map(player => ({ ...player, score: 0 })))
  }

  function handlePlus(index) {
    const currentPlayer = players[index]
    setPlayers([
      ...players.slice(0, index),
      { ...currentPlayer, score: currentPlayer.score + 1 },
      ...players.slice(index + 1),
    ])
  }

  function handleMinus(index) {
    const currentPlayer = players[index]
    setPlayers([
      ...players.slice(0, index),
      { ...currentPlayer, score: currentPlayer.score - 1 },
      ...players.slice(index + 1),
    ])
  }
}
const DangerButton = styled(Button)`
  background-color: mistyrose;
  border: 1px solid red;
`
const ButtonGrid = styled.div`
  display: grid;
  gap: 5px;
  grid-template-columns: 1fr 1fr;
`
