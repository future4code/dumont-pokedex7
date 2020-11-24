import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from '@material-ui/core'
import {ButtonContainer} from '../GeneralButtonStyles'

const PokeDexButton = () => (
  <ButtonContainer>
    <Button variant="contained" color="primary">
      <Link  to='pokedex'>Ver minha pokedex</Link>

    </Button>
  </ButtonContainer>
);

export default PokeDexButton;