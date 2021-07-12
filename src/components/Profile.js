import React,{useState,useEffect} from 'react';
import './Profile.css';

const Profile = ({match}) => {

    const [robot, setRobot] = useState([])
    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/users/${match.params.id}`)
          .then(response=> response.json())
          .then(users => {setRobot(users)});
        console.log(match)
    },[])

    return(
        <div className="profile">
            <div className="profile-container">
                <div className="row">
                    <div className="image-container">
                        <img src={`https://robohash.org/${match.params.id}?200x200`} alt="robots" />
                    </div>
                    <div className="info-container">
                        <h1>PERSONAL INFORMATION</h1>
                        <h2>NAME:</h2> <p> {`${robot.name}`}</p> <br/>
                        <h2>USERNAME:</h2> <p> {`${robot.username}`}</p><br/>
                        <h2>PHONE NO.:</h2> <p> {`${robot.phone}`}</p><br/>
                        <h2>WEBSITE:</h2> <p> {`${robot.website}`}</p>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Profile;