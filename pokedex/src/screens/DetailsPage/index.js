import React from 'react'
import BackButton from '../../components/Buttons/BackButton/index'
import PokeDexButton from '../../components/Buttons/PokeDexButton/index'
import {Header} from '../../components/Header/index'
import {MainGrid} from '../../components/Main/index'
import DetailsCard from '../../components/DetailsCard/index'

const DetailsPage = () => {
  return(
    <div>
      <Header>
        < BackButton/>
          <h1>Nome do Pokemon</h1>
          <PokeDexButton/>
      </Header>
      <MainGrid>
        <DetailsCard/>
        <DetailsCard/>
        <DetailsCard/>
        <DetailsCard/>
        <DetailsCard/>
      </MainGrid>
    </div>
  )
}

export default DetailsPage;