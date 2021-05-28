import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/main';
import Edit from './pages/edit';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/new' component={Edit} />
            <Route path='/edit/:key' component={Edit}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;