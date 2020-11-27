import React from 'react'
import {Header} from '../../styles/styles'
import { useHistory } from "react-router-dom";
import {Button} from '@material-ui/core'
import {ButtonContainer, HomeFlexBox} from '../../styles/styles'
import {goToHomePage } from '../../router/Coordinator'
import {PokeLogo} from '../../assets/img/PokeLogo'

const PokeDexPage = () => {
  const history = useHistory();

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
      </HomeFlexBox>
    </div>
  )
}
export default PokeDexPage;