import '../Button/Button.css'
import React from 'react'

export default function Button({text, onClick}) {

    return ( 
        <section>

        <button
        className="Button"
        onClick={onClick}
        > 
        
        {text} 
        
        </button>
       
      </section>

    )


}