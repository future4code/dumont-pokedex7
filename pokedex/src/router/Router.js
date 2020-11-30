import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from "../screens/HomePage/index";
import PokeDexPage from "../screens/PokeDexPage/index";
import DetailsPage from "../screens/DetailsPage/index";

const Router = () => (
  <BrowserRouter>
    <Switch>
          <Route exact path='/'   component = { HomePage } />
          <Route exact path='/pokedex' component = { PokeDexPage } />
          <Route exact path='/detalhes/:pokemon'  component = { DetailsPage } />
          <Route>
              <div>"Erro 404 - Este Pokemon não existe!" </div>
            </Route>
    </Switch>
  </BrowserRouter>
);
export default Router;