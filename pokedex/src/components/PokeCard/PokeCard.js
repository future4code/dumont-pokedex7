import React, { useContext, useEffect, useState } from 'react'
import { DetailsBtnContainer,PokeCardContainer} from '../../styles/styles'
import {Button} from '@material-ui/core'
import { useHistory } from "react-router-dom";
import {goToDetailsPage} from '../../router/Coordinator'
import axios from 'axios'
import GlobalStateContext from '../../Global/GlobalStateContext';

export default function PokeCard (props) {
  const history = useHistory();

  const [photo, setPhoto] = useState ([])

  const {states, setters, requests} = useContext(GlobalStateContext)

  const removePokeFromPokedex = (poke) => {
    const index = states.pokedex.findIndex((pokemon) => poke.name === pokemon.name)
    const newPokedex = states.pokedex.splice(index, 1)
    console.log(newPokedex)
  }

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
          <img 
          src={photo}
           alt={props.pokemon.name}/>
          <p>{props.pokemon.name}</p>    
        <DetailsBtnContainer>
            <Button Button variant="outlined"
              onCLick={() => removePokeFromPokedex(props.pokemon)}>
              Adicionar
            </Button>
      </DetailsBtnContainer>

      <DetailsBtnContainer>
            <Button  variant="outlined"
                onClick={()=>goToDetailsPage(history, props.pokemon.name)}>
                Ver detalhes
               </Button>
      </DetailsBtnContainer>
      </PokeCardContainer>
      </ div>
  )
} 
