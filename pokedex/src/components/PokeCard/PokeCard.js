import React, { useEffect, useState } from 'react'
import {PokeCardContainer } from '../PokeCard/style'
import DetailsButton from '../../components/Buttons/GoToDetailsButton/index'
import AddButton from '../../components/Buttons/AddButton/index'
import styled from 'styled-components'
import axios from 'axios'


export default function PokeCard (props) {
  const [photo, setPhoto] = useState ([])

  const pokemonPhoto = () => {
    axios.get(props.pokemon.url).then((response) => {
      setPhoto(response.data.sprites.front_default)
    }).catch((error) => {
      console.log(error.message)
    })
  }

  useEffect(() => {
    pokemonPhoto()
  }, [])

  return(
    <div>
      <PokeCardContainer >
        <img src={photo} alt={props.pokemon.name}/>
        <p>{props.pokemon.name}</p>    
        <AddButton/>
        <DetailsButton/>
      </PokeCardContainer>
    </div>
  )
}