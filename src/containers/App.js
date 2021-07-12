import React, {useState, useEffect} from 'react';
import CardList from '../components/CardList.jsx';
import './App.css';

function App() {
    
    const [robots, setRobots] = useState([])
    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/users`)
          .then(response=> response.json())
          .then(users => {setRobots(users)});
    },[])

    return !robots.length ?
    <h1 className="loading">Loading</h1> :
    (
      <div className='tc'>
        <h1 className='f1'>iRobot</h1>
        <CardList/>
      </div>
    );
}

export default App; 

