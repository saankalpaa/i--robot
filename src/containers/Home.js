import React,{useEffect,useState} from 'react';
import Intro from '../components/Intro';
import App from './App';
import Profile from '../components/Profile';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function Home() {

    const [robots, setRobots] = useState([])
    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/users`)
          .then(response=> response.json())
          .then(users => {setRobots(users)});
    },[])

    return !robots.length ?
    <h1 className="loading">Loading</h1> :
    (
        <Router>
            <Switch>
                <Route path='/' exact component={Intro}/>
                <Route path='/App' exact component={App}/>
                <Route path='/App/:id' component ={Profile}/>
            </Switch>
         </Router>
   
    );
    
    // return(
    //     <Router>
    //         <Switch>
    //             <Route path='/' exact component={Intro}/>
    //             <Route path='/App' exact component={App}/>
    //             <Route path='/App/:id' component ={Profile}/>
    //         </Switch>
    //     </Router>
       
    // );
}

export default Home;