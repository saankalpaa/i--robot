import React from 'react';
import deleteImg from '../images/delete.png'
import './Card.css';;


const Card = (props) =>{

    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5' id='card-container'>
            <button className='deleteBtn' type="button" onClick={props.handleDelete}>      
                <img src={deleteImg} alt="delete" />
            </button>
            <div className='roboImg'>
                <img src={`https://robohash.org/${props.id}?200x200`} alt="robots" />  
            </div>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div> 
        </div>
    );
}

export default Card;