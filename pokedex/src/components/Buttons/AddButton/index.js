import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from '@material-ui/core'
import {DetailsBtnContainer} from '../GeneralButtonStyles'


const AddButton = () => (
  <DetailsBtnContainer>
    <Button Button variant="outlined">
      Adicionar
    </Button>
  </DetailsBtnContainer>
);

export default AddButton;