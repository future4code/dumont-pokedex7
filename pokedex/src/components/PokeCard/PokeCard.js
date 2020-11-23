import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
border: 2px solid black;
width: 250px;
`

export default function PokeCard () {
  return(
    <CardContainer>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" width="200px"/>
      <p>Bulbasaur</p>
      <button>Adicionar</button>
      <button>Ver Detalhes</button>
    </CardContainer>
  )
}