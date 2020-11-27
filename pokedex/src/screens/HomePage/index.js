import React, { useContext, useEffect } from 'react'
import {Header,ButtonContainer, HomeFlexBox} from '../../styles/styles'
import { useHistory } from "react-router-dom";
import {goToPokeDexPage} from '../../router/Coordinator'
import {Button} from '@material-ui/core'
import PokeCard from '../../components/PokeCard/PokeCard';
import GlobalStateContext from '../../Global/GlobalStateContext';

const HomePage = () => {
  const history = useHistory();

const {states, setters, requests} = useContext(GlobalStateContext)

    useEffect(()=>{
      requests.getPokemonList()
    }, [])
    const addToPokedex = (newPokemon) => {
          console.log("entrei")
          const pokemonInPokedex = states.pokedex.find((pokemon) => newPokemon.name === pokemon.name)
      if (!pokemonInPokedex) {
          const pokemonToAdd = states.pokemonList.find((pokemon) => newPokemon.name === pokemon.name)
          const newPokedex = [...states.pokedex, pokemonToAdd]
          setters.setPokedex(newPokedex)
      }
    }
    console.log(states.pokedex)
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
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/770px-Pok%C3%A9_Ball_icon.svg.png" width="50px" />
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
