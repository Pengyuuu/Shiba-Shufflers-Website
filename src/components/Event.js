import { React, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import '../style/event.css';
import ahod from '../logos/AHOD.png';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Event() {

    const [show, setShow] = useState(false);

    const handleShow = () => { setShow(true); };

    const handleClose = () => { setShow(false); };

    return (
        <div>
            <h1>Events</h1>
            <Button className='AHOD-tourney' onClick={() => {handleShow();}}>
                <img alt="All Hands On Decks Tournament Logo" height="250" width="250" src={ahod}/>
                <h3>All Hands On Decks</h3>
                <p>August 20, 2022</p>
            </Button>

            <Modal show={show} onHide={() => {handleClose();}}>
                <Modal.Header closeButton>
                    <Modal.Title>All Hands On Decks</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Schedule goes here
                </Modal.Body>
            </Modal>
        </div>
    );
}