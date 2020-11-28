import React, { useContext, useEffect } from 'react'
import {Header,ButtonContainer, HomeFlexBox} from '../../styles/styles'
import { useHistory } from "react-router-dom";
import {goToPokeDexPage} from '../../router/Coordinator'
import {Button} from '@material-ui/core'
import PokeCard from '../../components/PokeCard/PokeCard';
import GlobalStateContext from '../../global/GlobalStateContext';
import {PokeLogo} from '../../assets/img/PokeLogo'

const HomePage = () => {
  const history = useHistory();

const {states, setters, requests} = useContext(GlobalStateContext)

    useEffect(()=>{
      requests.getPokemonList()
    }, [])
    // const addToPokedex = (newPokemon) => {
    //       console.log("entrei")
    //       const pokemonInPokedex = states.pokedex.find((pokemon) => newPokemon.name === pokemon.name)
    //   if (!pokemonInPokedex) {
    //       const pokemonToAdd = states.pokemonList.find((pokemon) => newPokemon.name === pokemon.name)
    //       const newPokedex = [...states.pokedex, pokemonToAdd]
    //       setters.setPokedex(newPokedex)
    //   }
    // }
    // const addPokemonToPokedex = (pokemon) => {
    //   pokemon.renderHome = false
    //   let newPokedex = [...states.pokedex];
    //   let alreadyExists = false;
    //   newPokedex.map((pokedexPokemon) => {
    //     if (pokedexPokemon.name === pokemon.name) {
    //       alert(`${pokemon.name} já está na pokedex!`);
    //       alreadyExists = true;
    //     }
    //   });
    //   if (alreadyExists === false) {
    //     newPokedex.push(pokemon);
    //     setters.setPokedex(newPokedex);
    //     alert(`${pokemon.name} foi adiciona a sua pokedex`);
    //     console.log(states.pokedex);
    //   } else {
    //     alreadyExists = false;
    //   }
    // };
    // console.log("pokemons", states.pokemon)
    // const renderPokemons =
    //   states.pokemons &&
    //   states.pokemons.map((pokemon) => {
    //     if(pokemon.renderHome===true){
    // console.log(states.pokedex)

    // const renderedPokemons = () => {
    //   pokemonList.map((pokemon) => {
      //     return (<PokeCard key={pokemon.name} photo={photo} name={pokemon.name}/>)
      //   })
    // }
    return(
      <React.Fragment>
              <Header role="header">
                        <ButtonContainer role="header">
                                <Button role="button" variant="contained" color="primary"
                                    onClick={()=>goToPokeDexPage(history)}>
                                    Ver minha pokedex
                                </Button>
                          </ButtonContainer>
                          <h1 role="h1">Lista de Pokemons</h1>
                          <img role="img" src={PokeLogo} />
                </Header>
                <HomeFlexBox role="main">
                        {states.pokemonList && 
                        states.pokemonList.map((pokemon) => {
                        return (
                        <PokeCard role="div"
                                  key={pokemon.name}
                                  pokemon={pokemon}
                        />)
                                })
                            }                              
          </HomeFlexBox>
      </React.Fragment>
      )
}
  export default HomePage;
