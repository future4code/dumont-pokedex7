import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from '@material-ui/core'
import {DetailsBtnContainer} from '../GeneralButtonStyles'


const DetailsButton = () => (
  <DetailsBtnContainer>
    <Button Button variant="outlined">
      <Link  to='pagina de detalhes'>Ver detalhes</Link>
    </Button>
  </DetailsBtnContainer>
);

export default DetailsButton;