import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import List from './../list';
import App from './../App';
const BasicRoute = () => (
    <HashRouter>
        <Switch>
        	<Route exact path="/" component={App}/>
            <Route exact path="/List" component={List}/>
        </Switch>
    </HashRouter>
);
export default BasicRoute;