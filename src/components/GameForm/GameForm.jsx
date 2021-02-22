import '../GameForm/GameForm.css'
import React from 'react'

export default function GameForm({ addPlayerNames, addNameOfGame, placeholderText, labelText}) {

  function handleSubmit (event) {
    event.preventDefault()
    const form=event.target
    const input=form.elements.player
    const name=input.value 
    addNameOfGame(name)
    addPlayerNames(name)
    }
 
    return ( 
        <form className="GameForm" onSubmit={handleSubmit}>

{/* {GameForms.map(GameForm => (
  <label> 
  {labelText} <br />
  <input name="Game" placeholder={placeholderText} />
  </label>))}

 */}
  <label> 
{labelText} <br />
<input name="Game" placeholder={placeholderText} />
</label>
<br />
<label> 
{labelText}  <br />
<input name="Player" placeholder={placeholderText}/>
</label>
       
       
 </ form>

    )}