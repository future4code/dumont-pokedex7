import React from 'react'
import BackButton from '../../components/Buttons/BackButton/index'
import RemoveButton  from '../../components/Buttons/RemoveButton/index'
import AddButton from '../../components/Buttons/AddButton/index'
import {Header} from '../../components/Header/index'
import {DetailsFlexBox} from '../../components/Main/index'
import {Box1, Box2, Box3} from '../../components/DetailsCard/styled'
import ImageCard from '../../components/DetailsCard/ImageCard/index'
import TypeCard from '../../components/DetailsCard/TypeCard/index'
import StatsCard from '../../components/DetailsCard/StatsCard/index'
import MovesCard from '../../components/DetailsCard/MovesCard/index'
import {BtnContainer}  from '../DetailsPage/styled'
const DetailsPage = () => {
  return(
    <div>
      <Header>
        < BackButton/>
          <h1>Nome do Pokemon</h1>
          <BtnContainer >
            <AddButton/>
            <RemoveButton/> 
          </BtnContainer >
      </Header>
      <DetailsFlexBox>
        <Box1>
          <ImageCard/>
          <ImageCard/>
        </Box1>
        <Box2>
          <StatsCard/>
        </Box2>
        <Box3>
          <TypeCard/>
          <MovesCard/>
        </Box3>
      </DetailsFlexBox>
    </div>
  )
}

export default DetailsPage;