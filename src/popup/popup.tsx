
import React, { Fragment, FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom'

import './popup.scss';
import Signup from './components/Signup';


const Popup: FunctionComponent = props => {

    return (
        <HashRouter>
            <Switch>
                <Route component={Signup} path='/signup' />
            </Switch>
        </HashRouter>

    );
};
ReactDOM.render(<Popup />, document.getElementById('root'))


