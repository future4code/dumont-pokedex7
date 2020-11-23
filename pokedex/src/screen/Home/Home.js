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

export default function Home () {
  return(
    <div>
      <Header>
        <button>Ir para Pokedex</button>
        <h1>Lista de Pokemons</h1>
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