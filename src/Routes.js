import React from 'react'; 
import { Route, Switch } from 'react-router-dom'; 

import Home from './Home'; 
import Companies from './Companies';
import Company from './Company';
import Jobs from './Jobs';
import Signup from './Signup';
import Login from './Login'; 
import Profile from './Profile';
import NotFound from './NotFound';

const Routes = ({ login, signup, setCurrUser }) => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/companies">
                <Companies />
            </Route>
            <Route exact path="/companies/:handle">
                <Company />
            </Route>
            <Route exact path="/jobs">
                <Jobs />
            </Route>
            <Route exact path="/signup">
                <Signup signup={signup} />
            </Route> 
            <Route exact path="/login">
                <Login login={login} />
            </Route>
            <Route exact path="/profile">
                <Profile setCurrUser={setCurrUser} />
            </Route>
            <Route>
                <NotFound />
            </Route> 
        </Switch>
    )
}

export default Routes;