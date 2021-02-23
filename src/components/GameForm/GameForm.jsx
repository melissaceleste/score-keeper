import '../GameForm/GameForm.css'
import React from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'

export default function GameForm({ onCreateGame}) {

  function handleSubmit (event) {
    event.preventDefault()
    const form=event.target
    // get data from input
    //const input=form.elements.player
    //const name=input.value 
    //addNameOfGame(name)
    //addPlayerNames(name)
    }
 
    return ( 
        <form className="GameForm" onSubmit={handleSubmit}>

<Input labelText="Name of game" placeholder= "e.g. Carcasonne" />
<Input labelText="Player names" placeholder= "e.g. John Die Jane Doe" />
<Button text="Create game" />


       
 </ form>

    )}


  