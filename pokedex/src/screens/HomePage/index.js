import React from 'react'
import PokeCard from '../../components/PokeCard/PokeCard';
import DetailsButton from '../../components/Buttons/GoToDetailsButton/index'
import PokeDexButton from '../../components/Buttons/PokeDexButton/index'

const HomePage = () => {
  return(
    <div>
      <h1>Home</h1>
      <PokeCard />
      <DetailsButton/>
      <PokeDexButton/>
    </div>
  )
}

export default HomePage;