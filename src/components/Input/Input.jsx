import '../Input/Input.css'
import React from 'react'

export default function Input({labelText, placeholder}) {

    return ( 
        <label>
{labelText}
<input placeholder={placeholder} type="text"/>
        
       
      </label>

    )


}