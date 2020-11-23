import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from "../screens/HomePage";
import PokeDexPage from "../screens/PokeDexPage";
import DetailsPage from "../screens/DetailsPage";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/'   component = { HomePage } />
      <Route path='/pokedex' component = { PokeDexPage } />
      <Route path='/pagina de detalhes'  component = { DetailsPage } />
    </Switch>
  </BrowserRouter>
);

export default Router;