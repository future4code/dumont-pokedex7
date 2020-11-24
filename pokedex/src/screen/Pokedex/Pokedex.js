import React from 'react'
import styled from 'styled-components'
import PokeCard from '../../components/PokeCard/PokeCard'

const Header = styled.div`
background: blue;
`
const Body = styled.div`
display: flex;
flex-wrap: wrap;
`

export default function Pokedex () {
  return(
    <div>
      <Header>
        <button>Voltar para lista de pokemons</button>
        <h1>Pokedex</h1>
      </Header>
      <Body>
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
      </Body>
    </div>
  )
}