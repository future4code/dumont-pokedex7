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
    <div>
   < Header>
            {/** Botao para voltar pra homepage*/}
                <ButtonContainer>
                      <Button variant="contained" color="secondary"
                          onClick={()=>goBack(history)} >
                          Voltar para home
                      </Button>
                  </ButtonContainer>
              <h1>Nome do Pokemon</h1>

              {/*Botoes add e remover pokemon*/ }
              <BtnContainer >
                  <DetailsBtnContainer>
                        <Button Button variant="outlined">Adicionar</Button>
                  </DetailsBtnContainer>

                  <DetailsBtnContainer>
                      <Button Button variant="outlined" color="secundary">Remover</Button>
                </DetailsBtnContainer>
              </BtnContainer >
          </Header>
          <div>
              <DetailsCard pokemon={pathParams}/>
          </div>
    </div>
  )
}
export default DetailsPage;