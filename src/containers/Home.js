import React from 'react';
import Intro from '../components/Intro';
import App from './App';
import Profile from '../components/Profile';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function Home() {
    
    return(
        <Router>
            <Switch>
                <Route path='/' exact component={Intro}/>
                <Route path='/App' exact component={App}/>
                <Route path='/App/:id' component ={Profile}/>
            </Switch>
        </Router>
       
    );
}

export default Home;