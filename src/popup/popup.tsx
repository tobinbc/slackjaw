
import React, { Fragment, FunctionComponent } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import ReactDOM from 'react-dom'
import './popup.scss';
import {Signup} from './components/Signup';


const getStorage= () => new Promise (resolve => chrome.storage.local.get(data => resolve(data)))

const Popup: FunctionComponent = props => {
    const getInitial = async () =>{
        let storage = await getStorage()
        switch(true){
            case Object.keys(storage).length === 0:
                return '/signup'
                
        }
        
    }
    return (
        <HashRouter>
            <Switch>
                <Route component={Signup} path='/signup' />
                {/* <Redirect to={async () => await getInitial()}/> */}
                <Redirect to='/signup'/>

            </Switch>
        </HashRouter>

    );
};
ReactDOM.render(<Popup />, document.getElementById('root'))


