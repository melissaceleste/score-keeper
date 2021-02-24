import styled from 'styled-components/macro'
import React from 'react'

export default function HistoryEntry({ nameOfGame, players }) {
  return (
    <HistoryEntrySection>
      <HistoryGame> {nameOfGame} </HistoryGame>
      {players.map((player, index) => (
        <Container key={index}>
          <HistoryPlayer>{player.name}</HistoryPlayer>
          <HistoryScore>{player.score}</HistoryScore>
        </Container>
      ))}
    </HistoryEntrySection>
  )
}

const HistoryEntrySection = styled.section`
  background-color: #eee;
`
const HistoryGame = styled.div`
  text-transform: uppercase;
  text-decoration-line: underline;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

const HistoryPlayer = styled.span`
  color: teal;
  margin: 5px 20px;
`
const HistoryScore = styled.span`
  color: teal;
  margin: 5px 20px;
`
