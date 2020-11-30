import React, { useContext, useEffect, useState } from 'react'
import { DetailsBtnContainer,PokeCardContainer} from '../../styles/styles'
import {Button} from '@material-ui/core'
import { useHistory } from "react-router-dom";
import {goToDetailsPage} from '../../router/Coordinator'
import axios from 'axios'
import GlobalStateContext from '../../global/GlobalStateContext';

 const PokeCard = (props) => {
    const history = useHistory();

    const [photo, setPhoto] = useState ([])
    const {states, setters, requests} = useContext(GlobalStateContext)

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

    const addToPokedex = () => {
      const pokeIndex = states.pokemonList.findIndex((item) => item.name === props.pokemon.name)
      const newPokemonList = [...states.pokemonList]
      newPokemonList.splice(pokeIndex, 1)

      const newPokedexList = [...states.pokedex, props.pokemon]
      const orderedList = newPokedexList.sort((a, b) => {
        return Number(a.url.slice(34,a.url.length-1)) - Number(b.url.slice(34,b.url.length-1))
      })

      setters.setPokedex(orderedList)
      setters.setPokemonList(newPokemonList)
    }

    const removeFromPokedex = () => {
      const pokeIndex = states.pokedex.findIndex((item) => item.name === props.pokemon.name)
      const newPokedexList = [...states.pokedex]
      newPokedexList.splice(pokeIndex, 1)

      const newPokemonList = [...states.pokemonList, props.pokemon]
      const orderedList = newPokemonList.sort((a, b) => {
        return Number(a.url.slice(34,a.url.length-1)) - Number(b.url.slice(34,b.url.length-1))
      })

      setters.setPokedex(newPokedexList)
      setters.setPokemonList(orderedList)
    }

    return(
      <React.Fragment>
          <PokeCardContainer role="div">
                <img 
                src={photo}
                alt={props.pokemon.name}/>
                <p>{props.pokemon.name}</p>    
              <DetailsBtnContainer role="div">
                  <Button roles="button" variant="outlined" 
                    onClick={props.isPokedex ? removeFromPokedex : addToPokedex}>
                    {props.isPokedex ? "Remover" : "Adicionar"}
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