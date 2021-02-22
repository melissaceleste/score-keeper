import '../HistoryEntry/HistoryEntry.css'
import React from 'react'

export default function HistoryEntry({nameofGame, players}) {

    return ( 
        <header className="Header">
         <h1> {nameofGame}</h1>
         <section> {players.name} {players.score} </section>

      </header>
     

    )


}