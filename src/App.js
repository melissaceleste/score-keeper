import PlayerForm from './components/PlayerForm'
import Player from './components/Player'
//import Button from './components/Button'

import React from 'react'

import './App.css';
import Button from './components/Button/Button';

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

    </div>
  )
}


/* 
<Button /> */