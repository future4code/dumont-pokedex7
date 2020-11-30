import React, { useContext, useEffect, useState } from 'react'
import { DetailsBtnContainer,PokeCardContainer} from '../../styles/styles'
import {Button} from '@material-ui/core'
import { useHistory } from "react-router-dom";
import {goToDetailsPage} from '../../router/Coordinator'
import axios from 'axios'
import GlobalStateContext from '../../Global/GlobalStateContext'

 const PokeCard = (props,isPokemon) => {
    const history = useHistory();

    //const [photo, setPhoto] = useState ([])

    const {pokemons, setPokemos, pokedex, setPokedex} = useContext(GlobalStateContext)
    
    const addToPokedex = () => {
      const pokeIndex = pokemons.findIndex(
        (item) => item.name === props.pokemon.name
      );
      const newPokemonsList = [...pokemons];
      newPokemonsList.splice(pokeIndex, 1);
      const orderedPokemons = newPokemonsList.sort((a, b) => {
        return a.id - b.id;
      });

      const newPokedexList = [...pokedex, props.pokemon];
      const orderedPokedex = newPokedexList.sort((a, b) => {
        return a.id - b.id;
      });
  
      setPokedex(orderedPokedex);
      setPokemons(orderedPokemons);
    };
  
    const removeFromPokedex = () => {
      const pokeIndex = pokedex.findIndex(
        (item) => item.name === props.pokemon.name
      );
  
      const newPokedexList = [...pokedex];
      newPokedexList.splice(pokeIndex, 1);
      const orderedPokedex = newPokedexList.sort((a, b) => {
        return a.id - b.id;
      });
  
      const newPokemonsList = [...pokemons, props.pokemon];
      const orderedPokemons = newPokemonsList.sort((a, b) => {
        return a.id - b.id;
      });
  
      setPokedex(orderedPokedex);
      setPokemons(orderedPokemons);
    };

    return(
      <React.Fragment>
          <PokeCardContainer role="div">
                <img 
                src={photo}
                alt={props.pokemon.name}/>
                <p>{props.pokemon.name}</p>    
              <DetailsBtnContainer role="div">
                  <Button onClick={isPokedex ? removeFromPokedex : addToPokedex} variant="outlined">
                    {isPokedex ? "Adicionar " : "Remover"}
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