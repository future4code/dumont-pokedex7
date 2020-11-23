import React from 'react'
import styled from 'styled-components'

export default function PokeCard () {
  return(
    <div>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" width="200px"/>
      <p>Bulbasaur</p>
      <button>Adicionar</button>
      <button>Ver Detalhes</button>
    </div>
  )
}