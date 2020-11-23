import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from '@material-ui/core'
import {ButtonContainer} from '../GeneralButtonStyles'

const BackButton = () => (
  <ButtonContainer>
    <Button variant="contained" color="secondary">
      <Link  to='/'>Voltar para home</Link>

    </Button>
  </ButtonContainer>
);

export default BackButton;