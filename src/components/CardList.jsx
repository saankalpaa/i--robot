import React, { useState, useEffect } from 'react';
import 'react-responsive-modal/styles.css';
import SearchBox from './searchBox';
import { Modal } from 'react-responsive-modal';
import Card from './Card';
import './CardList.css';
import db from "../containers/firebase";

const CardList = () => {

    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const [userName, setUserName] = useState('')
    const [name, setName] = useState('')
    const [website, setWebsite] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [robots, setRobots] = useState([])
    const [id, setId] =useState('')
    const [searchfield, setSearchfield] = useState('')
    
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

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
        console.log(event.target.value)
    }
    
    const onNameChange = (event) => {
        setName(event.target.value)
    }

    const onIdChange = (event) => {
        setId(event.target.value)
    }


    const onEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const onUserNameChange = (event) => {
        setUserName(event.target.value)
    }
    const onAddressChange = (event) => {
        setAddress(event.target.value)
    }
    const onPhoneChange = (event) => {
        setPhone(event.target.value)
    }
    const onWebsiteChange = (event) => {
        setWebsite(event.target.value)
    }

    const filteredRobots = robots.filter(robots=> {
        return robots.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    function handleAdd() {
        db.collection("robot")
        .doc(id)
        .set({
          name: name,
          email: email,
          username: userName,
          phone: phone,
          website: website,
          address: address,
        })
        .then(() => {
          console.log('successfully added'+ `${name}` + ' to the robots')
        })
        .catch((error) => {
          console.error("",error)
        })
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
                        <form >
                            <label>
                                ID:
                                <p><input type='number' value= {id} onChange={onIdChange} required/></p>
                            </label>
                        
                            <label>
                                NAME:
                                <p><input type='text' placeholder='NAME' value= {name} onChange={onNameChange} required/></p><br></br>
                            </label>
                            <label>
                                USER NAME:
                                <p><input type='text' placeholder='USER NAME' value= {userName} onChange={onUserNameChange} required/></p><br></br>
                            </label>
                            <label>
                                EMAIL:
                                <p><input type='email' placeholder='EG: example@email.com' value= {email} onChange={onEmailChange} required/></p>
                            </label>
                            <label>
                                PHONE NO.:
                                <p><input type='number' value= {phone} onChange={onPhoneChange} required/></p>
                            </label>
                            <label>
                                ADDRESS:
                                <p><input type='text' placeholder='ADDRESS' value= {address} onChange={onAddressChange} required/></p><br></br>
                            </label>
                            <label>
                                WEBSITE:
                                <p><input type='text' placeholder='EG: WEBSITE.COM' value= {website} onChange={onWebsiteChange} required/></p><br></br>
                            </label>
                            <p><button className="addRoboBtn" type="button" onClick={()=>handleAdd()}>ADD</button></p>

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