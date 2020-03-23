import React from 'react';
import {BrowserRouter as Router,  Switch, Route} from 'react-router-dom'
import Index from '../Replica/views/index'
import Caro from '../Replica/views/test'
import './styles/app.css'
import AccountLogin from './views/accountLogin';
import Register from './views/register';
import Dashboard from './views/dashboard';
import African_Presence from './views/african_presence';
import About from './views/about';

class Eco extends React.Component{
    render(){
        return(
            <>
            <Router >
            <Switch>
            <Route path="/" exact component ={Index} />
            <Route path="/account_login" exact component ={AccountLogin} />
            <Route path="/account_register" exact component ={Register} />
            <Route path="/account" exact component ={Dashboard} />
            <Route path="/african_presence" exact component ={African_Presence} />
            <Route path="/about" exact component ={About} />
         
            </Switch>
            </Router>
                </>
            

        )
     
    }
    
}
export default Eco;
