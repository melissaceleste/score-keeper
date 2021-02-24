import React from 'react'
import styled from 'styled-components/macro'
import Button from './Button'

export default function PlayerSection({ name, score, onMinus, onPlus }) {
  const hue = Math.min(score * 10, 120)

  return (
    <PlayerWrapper>
      {name}
      <PlayerScore color={`hsl(${hue}, 50%, 50%)`}>
        <Button onClick={onMinus}>-</Button>
        <span>{score}</span>
        <Button onClick={onPlus}>+</Button>
      </PlayerScore>
    </PlayerWrapper>
  )
}

const PlayerWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const PlayerScore = styled.div`
  color: ${props =>
    props.color ||
    'black'}; // nimm props.color oder sonst schwarz ??Wieso? Wieso nicht direkt =props.color ? weil schwarz ist es ja nie?
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
`
