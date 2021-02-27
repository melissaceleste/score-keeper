import Navigation from './Navigation'
import PlayPage from './PlayPage'
import GamePage from './GamePage'
import HistoryPage from './HistoryPage'
import { useState } from 'react'
import React from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

export default function App() {
  const [players, setPlayers] = useState([])
  const [nameOfGame, setNameOfGame] = useState('')
  const [history, setHistory] = useState([])
  const { push } = useHistory()

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <PlayPage createGame={createGame} />
        </Route>

        <Route path="/game">
          <GamePage
            nameOfGame={nameOfGame}
            players={players}
            handleMinus={handleMinus}
            handlePlus={handlePlus}
            resetScores={resetScore}
            endGame={endGame}
          />
        </Route>

        <Route path="/history">
          <HistoryPage history={history} />
        </Route>
      </Switch>

      <Route exact path={['/', '/history']}>
        <Navigation />
      </Route>
    </div>
  )

  function createGame({ nameOfGame, playerNames }) {
    setNameOfGame(nameOfGame)
    setPlayers(playerNames.map(name => ({ name, score: 0 })))
    // statt : setCurrentPage('game') kommt jetzt:
    push('/game')
  }

  function endGame() {
    setHistory([{ players, nameOfGame, id: uuidv4() }, ...history])
    setPlayers([])
    setNameOfGame('')
    // statt: setCurrentPage('play') kommt jetzt:
    push('/history')
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
