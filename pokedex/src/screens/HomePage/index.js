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

  const {states} = useContext(GlobalStateContext)
    
    return(
      <React.Fragment>
              <Header role="header">
                        <ButtonContainer role="header">
                                <Button role="button" variant="contained" color="primary"
                                    onClick={()=>goToPokeDexPage(history)}>
                                    Ver pokedex
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
                                isPokedex={false}/>)
                    })
                  }                              
          </HomeFlexBox>
      </React.Fragment>
      )
}
  export default HomePage;
