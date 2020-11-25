import React from 'react'
import {PokeCardContainer } from '../PokeCard/style'
import DetailsButton from '../../components/Buttons/GoToDetailsButton/index'
import AddButton from '../../components/Buttons/AddButton/index'


export default function PokeCard () {
  return(
    <div>
      <PokeCardContainer >
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" width="200px"/>
        <p>Bulbasaur</p>
        
        <AddButton/>
        <DetailsButton/>
      </PokeCardContainer>
    </div>
  )
}