import React from 'react'
import Router from './router/Router'
import GlobalState from './global/GlobalState.js'

const App = () => {
  return (
    <React.Fragment>
         <GlobalState>
            <Router />
         </GlobalState>
    </React.Fragment>
  );
}

export default App;
