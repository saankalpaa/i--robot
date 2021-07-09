import React, { useState, useEffect } from 'react';
import 'react-responsive-modal/styles.css';
import SearchBox from './searchBox';
import { Modal } from 'react-responsive-modal';
import Card from './Card';
import './CardList.css';

const CardList = () => {

    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [id, setId] = useState('')
    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('')

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response=> response.json())
          .then(users => {setRobots(users)});
      },[]) 
    

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
        console.log(event.target.value)
    }
    
    const onNameChange = (event) => {
        setName(event.target.value)
    }

    const onEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const onIdChange = (event) => {
        setId(event.target.value)
    }

    const filteredRobots = robots.filter(robots=> {
        return robots.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    function handleAdd() {
        const newRobot = filteredRobots.concat({ id,name, email });
        setRobots(newRobot);
    }

    const deleteRobot = (index,e) => {
        const newrobots = filteredRobots.filter((e,i) => {
            return index !== i
        });
        setRobots(newrobots);
    }

    return (
        <div className="cardlist-container">
            <SearchBox searchChange= {onSearchChange}/>
            <div className="row">
                <div className="modal-container">
                    <button className="addBtn" onClick={onOpenModal}>Add Robot</button>
                    <Modal 
                    classNames={{
                        overlay: 'customOverlay',
                        modal: 'customModal',
                    }}
                    open={open} 
                    onClose={onCloseModal} 
                    center>
                        <h2>ADD ROBOT</h2>
                        <form>
                        
                            <label>
                                NAME:
                                <p><input type='text' placeholder='NAME' value= {name} onChange={onNameChange} required/></p><br></br>
                            </label>
                            <label>
                                EMAIL:
                                <p><input type='email' placeholder='eg: example@email.com' value= {email} onChange={onEmailChange} required/></p>
                            </label>
                            <label>
                                ID:
                                <p><input type='number' value= {id} onChange={onIdChange}/></p>
                            </label>
                            <p><button className="addRoboBtn" type="button" onClick={handleAdd}>ADD</button></p>

                        </form>
                    </Modal>
                </div>
                <div className="map-container">
                    {
                        filteredRobots.map((user,i) => {
                            return (
                                <Card 
                                key={i} 
                                id={filteredRobots[i].id} 
                                name={filteredRobots[i].name} 
                                email={filteredRobots[i].email}
                                handleDelete={()=>deleteRobot(i)}/>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default CardList;