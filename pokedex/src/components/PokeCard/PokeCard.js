import React from 'react'
import {PokeCardContainer } from '../PokeCard/style'
import {Button} from '@material-ui/core'

export default function PokeCard () {
  return(
    <div>
      <PokeCardContainer >
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" width="200px"/>
        <p>Bulbasaur</p>
        <Button variant="contained">Adicionar</Button>
        <Button variant="contained">Ver Detalhes</Button>
      </PokeCardContainer>
    </div>
  )
}