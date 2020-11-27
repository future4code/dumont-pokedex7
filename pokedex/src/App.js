import React from 'react'
import Router from './router/Router'
import GlobalState from './Global/GlobalState.js'

const App = () => {
  return (
    <div className="App">
         <GlobalState>
            <Router />
      </GlobalState>
    </div>
  );
}

export default App;
