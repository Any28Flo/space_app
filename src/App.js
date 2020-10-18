import React from 'react';
import {useSelector} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import PrivateRoutes from './routes/PrivateRoutes';
import Profile from './componets/page/Profile';
import Home from './componets/page/Home'
import LauncheDetail from "./componets/page/LauncheDetail";
import Index from "./componets/page/Index";

function App() {

    const {isLogged} = useSelector(state => state.user);
    const Login = () => {
        return <h2>Login</h2>
    }

    return (
        <Switch>
            <Route path='/login'>
                <Login/>
            </Route>

            <Route path='/launche/:id'>
                <LauncheDetail/>
            </Route>
            <Route path='/'>
                <Index/>
            </Route>
            <PrivateRoutes path='/profile'>
                <Profile/>
            </PrivateRoutes>
        </Switch>
    )
}


export default App;
