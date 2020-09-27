import React from 'react';
import {useSelector} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import PrivateRoutes from "./routes/PrivateRoutes";

function App() {
  const {isLogged} = useSelector( state => state.user);
  const Login = () =>{
      return <h2>Login</h2>
  }
  return (
      <Switch>
          <Route path='/login'>
              <Login/>
          </Route>

          <PrivateRoutes path='/profile'>

          </PrivateRoutes>
      </Switch>
  )
}


export default App;
