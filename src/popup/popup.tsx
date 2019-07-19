
import React, { Fragment, FunctionComponent, useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import ReactDOM from 'react-dom'
import './popup.scss';
import {Signup} from './components/Signup';
import { Card } from '@material-ui/core';
const useStyles = makeStyles(
    createStyles({
      card: {
        width: 300,
      }
    }),
  );

const getStorage= () => new Promise (resolve => chrome.storage.local.get(data => resolve(data)))

const Popup: FunctionComponent = props => {
    const classes = useStyles({});
    const [initial,setIniital] = useState('holding')
    const getInitial = async () =>{
        let storage = await getStorage()
        switch(true){
            case Object.keys(storage).length === 0:
                return '/signup'
                
        }
        
    }
    return (
        <Card className={classes.card}>
 <HashRouter>
            <Switch>
                <Route component={Signup} path='/signup' />

                <Redirect to={async () => await getInitial()}/>
                {/* <Redirect to='/signup'/> */}

            </Switch>
        </HashRouter>
       
      </Card>
       

    );
};
ReactDOM.render(<Popup />, document.getElementById('root'))


