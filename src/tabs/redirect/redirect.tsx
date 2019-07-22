import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './redirect.scss';



type Props ={}
type State ={

}
class TabRedirect extends Component<Props,State> {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    componentDidMount = () => {
    }
    

    
    render () {
        return (
            <div>Hello from Redirect Tab</div>
    
    
        );
    }

};
ReactDOM.render(<TabRedirect />, document.getElementById('root'))


