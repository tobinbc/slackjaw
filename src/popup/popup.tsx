
import React, {Fragment, FunctionComponent} from 'react';
import {MDCRipple} from '@material/ripple/index';
import ReactDOM from 'react-dom';

let buttons = document.getElementsByClassName('mdc-button');
for (var i in buttons) {
    new MDCRipple(buttons.item(+i));
}
import './popup.scss';


const Popup: FunctionComponent = props => {

    return (
        <Fragment>
        <span>hello </span>
        </Fragment>
    );
};
const wrapper = document.getElementById('root');
wrapper ? ReactDOM.render(<Popup />, wrapper) : false;

