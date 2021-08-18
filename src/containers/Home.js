import React,{useState,useEffect} from 'react';
import Intro from '../components/Intro';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import db from "../containers/firebase";

function Home() {

    const [robots, setRobots] = useState([])

    useEffect(()=>{
        db.collection('robot')
        .onSnapshot((snapshot) => {
            const newRobots = snapshot.docs.map((doc) => ({
                id:doc.id,
                ...doc.data()
            }))
            setRobots(newRobots)
        })
    }, [])


    return !robots.length ?
    <h1 className="loading">Loading</h1> :
    (
        <Router>
            <Switch>
                <Route path='/' exact component={Intro}/>
                <Route path='/App' exact component={App}/>
            </Switch>
         </Router>
   
    );
}

export default Home;