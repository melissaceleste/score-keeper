import styled from 'styled-components/macro'
import React from 'react'

import HistoryEntry from './HistoryEntry'

export default function HistoryPage({ history }) {
  return (
    <div>
      <HistoryContainer>
        {history.map(({ nameOfGame, players, id }) => (
          <HistoryEntry key={id} nameOfGame={nameOfGame} players={players} />
        ))}
      </HistoryContainer>
    </div>
  )
}
const HistoryContainer = styled.div`
  display: grid;
  gap: 5px;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
`
