import '../Player/Player.css'
import React from 'react'

export default function Player({name, score, onMinus, onPlus}) {

    return ( 
        <section className="Player">

      
<div>  {name} </div>
<div>        
    <button onClick={onMinus}>-</button>
          
    <span>{score}</span>
          
     <button onClick={onPlus}>+</button>
</div>
        
        
        
      
      
      </section>

    )


}