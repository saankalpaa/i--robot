import React from 'react';
import { Link } from 'react-router-dom';
import './Intro.css';
import roboImg from '../images/roboHi.gif'
import arrow from '../images/arrow.png'

function Intro (){
    return(
        <div className="intro">
            <div className='intro-container'>
                <h1 className='intro-title' >iROBOT</h1>
                <div className='intro-content'>
                    <div className='intro-column'>
                        <p className='intro-description'>
                            Hey! Want to see how would you look like if you <br />
                            were a robot and meet some robo friends?</p>
                        <Link to='/App'>
                            <button className='exploreBtn'>EXPLORE <img className="arrow" src={arrow} alt="arrow" /></button>
                        </Link>
                    </div>
                    <img className='intro-robo' src={roboImg} alt="hi" />
                </div>
            </div>
        </div>
    
    ); 
}

export default Intro;