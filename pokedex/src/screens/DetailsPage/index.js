import React from 'react'
import {Header, BtnContainer,ButtonContainer, DetailsBtnContainer} from '../../styles/styles'
import DetailsCard from '../../components/DetailsCard/index'
import { useHistory, useParams } from "react-router-dom";
import {goBack} from '../../router/Coordinator'
import {Button} from '@material-ui/core'

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
                          Voltar para home
                      </Button>
                  </ButtonContainer>
              <h1>Nome do Pokemon</h1>

              {/*Botoes add e remover pokemon*/ }
              <BtnContainer  role="div">
                  <DetailsBtnContainer roles="div">
                        <Button role="button" variant="outlined">Adicionar</Button>
                  </DetailsBtnContainer>

                  <DetailsBtnContainer role="div">
                      <Button role="button" variant="outlined" color="secundary">Remover</Button>
                </DetailsBtnContainer>
              </BtnContainer >
          </Header>
          <React.Fragment>
              <DetailsCard role="div" pokemon={pathParams}/>
          </React.Fragment>
    </React.Fragment>
  )
}
export default DetailsPage;