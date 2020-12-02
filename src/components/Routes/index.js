import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { history } from '../../history';

import PrivateRoute from '../PriveteRoute/PrivateRoute';
import NotFound from '../NotFound';
import SingInUp from '../../pages/SingInUp';
import Main from '../../pages/Main';
import Congratulations from '../Congratulations';

const Routes = () => (
    <BrowserRouter history={history}>
        <Switch>            
            <Route component={SingInUp} exact path="/login" />  

            <PrivateRoute component={Congratulations} exact path="/congratulations" />            
            <PrivateRoute component={Main} exact path="/" />            
                
            <Route component={NotFound} />            
      </Switch>
    </BrowserRouter>
)

export default Routes;