import React from 'react'
import PokeCard from '../../components/PokeCard/PokeCard';
import PokeDexButton from '../../components/Buttons/PokeDexButton/index'
import {Header} from '../../components/Header/index'
import {MainFlexBox} from '../../components/Main/index'

const HomePage = () => {
  return(
    <div>
      <Header>
        <PokeDexButton/>
          <h1>Lista de pokemons</h1>
          
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/770px-Pok%C3%A9_Ball_icon.svg.png" width="50px" />
      </Header>
      <MainFlexBox>
          <PokeCard />
          <PokeCard />
          <PokeCard />
          <PokeCard />
          <PokeCard />
          <PokeCard />
          <PokeCard />
          <PokeCard />
          <PokeCard />
          <PokeCard />
          <PokeCard />
          <PokeCard />
          <PokeCard />
          <PokeCard />
          <PokeCard />
          <PokeCard />
      </MainFlexBox>
    </div>
  )
}

export default HomePage;