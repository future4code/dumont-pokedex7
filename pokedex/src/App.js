import React from 'react'
import Router from './router/Router'
<<<<<<< HEAD
import GlobalState from './global/GlobalState.js'
=======
import GlobalState from './global/GlobalState.js.js'
>>>>>>> 68fa8540ffe2fdfb2b86a40f0547e9d57bbd8087

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
