import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from '@material-ui/core'
import {DetailsBtnContainer} from '../GeneralButtonStyles'


const RemoveButton = () => (
  <DetailsBtnContainer>
    <Button Button variant="outlined" color="secundary">
      <Link  to=''>Remover</Link>
    </Button>
  </DetailsBtnContainer>
);

export default RemoveButton;