import React, { useEffect, useState } from 'react'
import { DetailsBtnContainer,PokeCardContainer} from '../../styles/styles'
import {Button} from '@material-ui/core'
import { useHistory } from "react-router-dom";
import {goToDetailsPage} from '../../router/Coordinator'
import axios from 'axios'

 const PokeCard = (props) => {
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
      <React.Fragment>
          <PokeCardContainer role="div">
                <img 
                src={photo}
                alt={props.pokemon.name}/>
                <p>{props.pokemon.name}</p>    
              <DetailsBtnContainer role="div">
                  <Button roles="button" variant="outlined">
                    Adicionar
                  </Button>
            </DetailsBtnContainer >

            <DetailsBtnContainer role="div">
                  <Button  role="button" variant="outlined"
                      onClick={()=>goToDetailsPage(history, props.pokemon.name)}>
                      Ver detalhes
                    </Button>
              </DetailsBtnContainer>
            </PokeCardContainer>
        </ React.Fragment>
    )
} 
export default PokeCard;