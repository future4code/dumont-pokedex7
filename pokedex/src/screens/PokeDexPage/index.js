import React from 'react'
import BackButton from '../../components/Buttons/BackButton/index'
import {Header} from '../../components/Header/index'
import {MainFlexBox} from '../../components/Main/index'
import PokeCard from '../../components/PokeCard/PokeCard';

const PokeDexPage = () => {
  return(
    <div>
      <Header>
          <BackButton/>
          <h1>PokeDex</h1>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/770px-Pok%C3%A9_Ball_icon.svg.png" width="50px" />
      </Header>
      <MainFlexBox>
        <PokeCard/>
      </MainFlexBox>
    </div>
  )
}

export default PokeDexPage;