import React from 'react'
import {Header} from '../../styles/styles'
import { useHistory } from "react-router-dom";
import {Button} from '@material-ui/core'
import {ButtonContainer, HomeFlexBox} from '../../styles/styles'
import {goToHomePage} from '../../router/Coordinator'
import {PokeLogo} from '../../assets/img/PokeLogo'
import PokeCard from '../../components/PokeCard/PokeCard';
import { useContext } from 'react';
import GlobalStateContext from '../../Global/GlobalStateContext';

const PokeDexPage = () => {
  const history = useHistory();

  const {states, setters, requests} = useContext(GlobalStateContext)

  return(
    <div>
      <Header>
      <ButtonContainer>
              <Button variant="contained" color="secondary"
                    onClick={()=>goToHomePage(history)} >
                    Voltar para home
              </Button>
          </ButtonContainer>

          <h1>PokeDex</h1>
          <img src={PokeLogo} />
      </Header>
      <HomeFlexBox>
      {states.pokedex && 
          states.pokedex.map((pokemon) => {
            return (<PokeCard key={pokemon.name} pokemon={pokemon}/>)
          })
        }
      </HomeFlexBox>
    </div>
  )
}
export default PokeDexPage;