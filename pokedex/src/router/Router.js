import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from "../screens/HomePage";
import PokeDexPage from "../screens/PokeDexPage";
import DetailsPage from "../screens/DetailsPage";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/'   component = { HomePage } />
      <Route exact path='/pokedex' component = { PokeDexPage } />
      <Route exact path='/detalhes'  component = { DetailsPage } />
      <Route>
          <div>"Erro 404 - Este Pokemon não existe!" </div>
        </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;