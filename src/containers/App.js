import React from 'react';
// import Scroll from '../components/Scroll';
import CardList from '../components/CardList.jsx';
import './App.css';

function App() {
 
    return(
        <div className= 'tc'>
            <h1 className='f1'>iRobot</h1>
            {/* <Scroll> */}
                <CardList/>
            {/* </Scroll> */}
        </div>
    );
}

export default App; 

