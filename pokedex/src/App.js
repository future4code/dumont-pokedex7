import React from 'react'
import Router from '../src/router/Router'
import GlobalState from './Global/GlobalState';

function App() {
  return (
    <div className="App">
      <GlobalState>
        <Router />
      </GlobalState>
    </div>
  );
}

export default App;
