import React from 'react'
import Header from './Header'
import PlayerSection from './Player'
import Button from './Button'
export default function PlayPage({
  handleMinus,
  handlePlus,
  nameOfGame,
  players,
  resetScore,
  endGame,
}) {
  return (
    <>
      <Header> {nameOfGame} </Header>

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

      <Button onClick={resetScore}>Reset scores</Button>

      <Button onClick={endGame}>End game </Button>
    </>
  )
}
