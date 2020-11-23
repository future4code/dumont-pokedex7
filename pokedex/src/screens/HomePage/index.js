import React from 'react'
import PokeCard from '../../components/PokeCard/PokeCard';
import DetailsButton from '../../components/Buttons/GoToDetailsButton/index'
import PokeDexButton from '../../components/Buttons/PokeDexButton/index'
import {Header} from '../../components/Header/index'
import {Main} from '../../components/Main/index'

const HomePage = () => {
  return(
    <div>
      <Header>
        <PokeDexButton/>
          <h1>Home</h1>
        <DetailsButton/>
      </Header>
      <Main>
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
      </Main>
    </div>
  )
}

export default HomePage;