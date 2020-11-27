import React from 'react'
import {Header} from '../../styles/styles'
import { useHistory } from "react-router-dom";
import {Button} from '@material-ui/core'
import {ButtonContainer, HomeFlexBox} from '../../styles/styles'
import {goToHomePage } from '../../router/Coordinator'

const PokeDexPage = () => {
  const history = useHistory();

  return(
    <div>
      <Header>
      <ButtonContainer>
              <Button variant="contained" color="secondary" onClick={()=>goToHomePage(history)} >
                Voltar para home
              </Button>
          </ButtonContainer>

          <h1>PokeDex</h1>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/770px-Pok%C3%A9_Ball_icon.svg.png" width="50px" />
      </Header>
      <HomeFlexBox>
      </HomeFlexBox>
    </div>
  )
}
export default PokeDexPage;