import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { history } from '../../history';

import PrivateRoute from '../PriveteRoute/PrivateRoute';
import SingInUp from '../../pages/SingInUp';

//<PrivateRoute component={Home} exact path="/" />

const Routes = () => (
    <BrowserRouter history={history}>
        <Switch>            
            <Route component={SingInUp} exact path="/" />            
      </Switch>
    </BrowserRouter>
)

export default Routes;