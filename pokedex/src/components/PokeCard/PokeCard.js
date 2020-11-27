import React, { useEffect, useState } from 'react'
import { DetailsBtnContainer,PokeCardContainer} from '../../styles/styles'
import {Button} from '@material-ui/core'
import { useHistory } from "react-router-dom";
import {goToDetailsPage} from '../../router/Coordinator'
import axios from 'axios'

export default function PokeCard (props) {
  const history = useHistory();

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
          <img 
          src={photo}
           alt={props.pokemon.name}/>
          <p>{props.pokemon.name}</p>    
        <DetailsBtnContainer>
            <Button Button variant="outlined">
              Adicionar
            </Button>
      </DetailsBtnContainer>

      <DetailsBtnContainer>
            <Button  variant="outlined"
                onClick={()=>goToDetailsPage(history)}>
                Ver detalhes
               </Button>
      </DetailsBtnContainer>
      </PokeCardContainer>
      </ div>
  )
} 
