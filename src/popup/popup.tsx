
import { Card, CardHeader } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Holding } from './components/Holding';
import { Record } from './components/Record';
import { Signup } from './components/Signup';
import './popup.scss';

const Popup: FunctionComponent = () =>
    <Card style={{ width: '350px' }}>
        <CardHeader title='Slackjaw' />
        <HashRouter>
            <Switch>
                <Route component={Signup} path='/signup' />
                <Route component={Record} path='/record' />
                <Route component={Holding} />
            </Switch>
        </HashRouter>
    </Card>

ReactDOM.render(<Popup />, document.getElementById('root'))


