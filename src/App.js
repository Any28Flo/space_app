import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from "./componets/page/Home"
function App() {
  return (
      <Switch>
          <Route path ="/home"> <Home/></Route>
      </Switch>
  );
}


export default App;
