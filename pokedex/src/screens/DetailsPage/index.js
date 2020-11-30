import React from 'react'
import {Header, BtnContainer,ButtonContainer, DetailsBtnContainer} from '../../styles/styles'
import DetailsCard from '../../components/DetailsCard/index'
import { useHistory, useParams } from "react-router-dom";
import {goBack} from '../../router/Coordinator'
import {Button} from '@material-ui/core'
import {PokeLogo} from '../../assets/img/PokeLogo'

const DetailsPage = () => {
  const history = useHistory();
  const pathParams = useParams();

  return(
    <React.Fragment>
   < Header role="header">
            {/** Botao para voltar pra homepage*/}
                <ButtonContainer role="div">
                      <Button role="button" variant="contained" color="secondary"
                          onClick={()=>goBack(history)} >
                          Voltar
                      </Button>
                  </ButtonContainer>
              <h1>Nome do Pokemon</h1>

              
              <img role="img" src={PokeLogo} />
          </Header>
          <React.Fragment>
              <DetailsCard role="div" pokemon={pathParams}/>
          </React.Fragment>
    </React.Fragment>
  )
}
export default DetailsPage;