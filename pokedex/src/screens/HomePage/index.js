import React, { useContext, useEffect } from 'react'
import {Header,ButtonContainer, HomeFlexBox} from '../../styles/styles'
import { useHistory } from "react-router-dom";
import {goToPokeDexPage} from '../../router/Coordinator'
import {Button} from '@material-ui/core'
import PokeCard from '../../components/PokeCard/PokeCard';
import GlobalStateContext from '../../Global/GlobalStateContext';
import {PokeLogo} from '../../assets/img/PokeLogo'

const HomePage = () => {
  const history = useHistory();

const {states, setters, requests} = useContext(GlobalStateContext)

    useEffect(()=>{
      requests.getPokemonList()
    }, [])
    const addToPokedex = (newPokemon) => {
          const pokemonInPokedex = states.pokedex.find((pokemon) => newPokemon.name === pokemon.name)
      if (!pokemonInPokedex) {
          const pokemonToAdd = states.pokemonList.find((pokemon) => newPokemon.name === pokemon.name)
          const newPokedex = [...states.pokedex, pokemonToAdd]
          setters.setPokedex(newPokedex)
      }
    }
    // const renderedPokemons = () => {
    //   pokemonList.map((pokemon) => {
    //     return (<PokeCard key={pokemon.name} photo={photo} name={pokemon.name}/>)
    //   })
    // }
    return(
          <div>
            <Header>
            <ButtonContainer>
                        <Button variant="contained" color="primary" onClick={()=>goToPokeDexPage(history)}>
                          Ver minha pokedex
                        </Button>
                  </ButtonContainer>
                  <h1>Lista de Pokemons</h1>
                  <img src={PokeLogo} />
              </Header>
              <HomeFlexBox>

        {states.pokemonList && 
          states.pokemonList.map((pokemon) => {
            return (<PokeCard key={pokemon.name} pokemon={pokemon} addToPokedex={() => addToPokedex(pokemon)}/>)
          })
        }
        </HomeFlexBox>

            </div>
      )
}
  export default HomePage;
