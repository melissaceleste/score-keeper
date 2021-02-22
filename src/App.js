import PlayerForm from './components/PlayerForm'
import Player from './components/Player'
import Button from './components/Button'
import GameForm from './components/GameForm'
import Navigation from './components/Navigation'
import Header from './components/Header'

import React from 'react'

import './App.css';
import HistoryEntry from './components/HistoryEntry/HistoryEntry'


export default function App() {
  return (
    <div className="App">
      <header className="App-header">
     </header>

     <PlayerForm onAddPlayer={() => console.log('onAddPlayer')} />
<Player 
name= 'Jane Doe'
score= '30'
onMinus= {()=>console.log('minuuuuus')}
onPlus= {()=>console.log('pluuuuus')}
/> 

<Player 
name= 'John Doe'
score= '20'
onMinus= {()=>console.log('minuuuuus')}
onPlus= {()=>console.log('pluuuuus')}
/> 

<Button 
onClick= {() => console.log('reset scoooores')}
text="Reset scores"
/>

<Button 
onClick= {() => console.log('reset alllll')}
text="Reset all"
/>

<GameForm

labelText= {["Name of game", "Names of Players"]}
placeholderText= {["e.g. Carcassone", "e.g. John Doe, Jane Doe"]}
addPlayerNames= {() => console.log('show gameForm')}
addNameOfGame= {() => console.log('show gameForm')}
/>

<Navigation 
onNavigate= {index => console.log(index)}
activeIndex={0}
pages={['Play', 'History']}
/>

<Header 
text="Carcassone"
/>

<Button 
onClick= {() => console.log('end gaaaame')}
text="End game"
/>

<HistoryEntry 

/>

    </div>
  )
}


/* 
<Button /> */