import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from '@material-ui/core'
import {ButtonContainer} from '../GeneralButtonStyles'


const DetailsButton = () => (
  <ButtonContainer >
    <Button variant="contained" color="primary">
      <Link  to='pagina de detalhes'>Ir para pagína de detalhes</Link>
    </Button>
  </ButtonContainer>
);

export default DetailsButton;