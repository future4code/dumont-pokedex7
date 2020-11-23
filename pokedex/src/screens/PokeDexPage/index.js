import React from 'react'
import BackButton from '../../components/Buttons/BackButton/index'
import DetailsButton from '../../components/Buttons/GoToDetailsButton/index'
import {Header} from '../../components/Header/index'
import {Main} from '../../components/Main/index'

const PokeDexPage = () => {
  return(
    <div>
      <Header>
          <BackButton/>
          <h1>PokeDex</h1>
          <DetailsButton/>
      </Header>
      <Main>
        <h2>Conteudo principal</h2>
      </Main>
    </div>
  )
}

export default PokeDexPage;