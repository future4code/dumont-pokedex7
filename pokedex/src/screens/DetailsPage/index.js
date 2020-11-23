import React from 'react'
import BackButton from '../../components/Buttons/BackButton/index'
import PokeDexButton from '../../components/Buttons/PokeDexButton/index'
import {Header} from '../../components/Header/index'
import {Main} from '../../components/Main/index'

const DetailsPage = () => {
  return(
    <div>
      <Header>
        < BackButton/>
          <h1>Pagina de detalhes</h1>
          <PokeDexButton/>
      </Header>
      <Main>
        <h2>Conteudo principal</h2>
      </Main>
    </div>
  )
}

export default DetailsPage;