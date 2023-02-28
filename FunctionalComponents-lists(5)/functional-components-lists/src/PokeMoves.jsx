import React from 'react'
import { moves } from './data'
import PokeMoveCard from './PokeMoveCard'

const PokeMoves = () => {
  return (
    <div>
      <h1>Pokemoves</h1>

      <ul>
        {moves.map(item => (
          <PokeMoveCard key={item.id} {...item}/>
        ))}
      </ul>
    </div>
  )
}

export default PokeMoves
