import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import Button from 'react-bootstrap/Button';


function Editform(props) {

    const handleSubmit = (event) => {
        event.preventDefault();
    }


    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add/Edit contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={() => handleSubmit} className="d-flex flex-column">
                        <label htmlFor="name" className="mb-0">name:</label>
                        <input type="text" placeholder="name" name="name" className="rounded border"/>

                        <label htmlFor="latName" className="mb-0 mt-3">latName:</label>
                        <input type="text" placeholder="lastName" name="lastName" className="rounded border"/>

                        <label htmlFor="phone" className="mb-0 mt-3">phone:</label>
                        <input type="phone" placeholder="phone" name="phone" className="rounded border"/>

                        <label htmlFor="email" className="mb-0 mt-3">email:</label>
                        <input type="email" placeholder="email" name="email" className="rounded border"/>

                        <label htmlFor="address" className="mb-0 mt-3">address:</label>
                        <input type="address" placeholder="address" name="address" className="rounded border"/>

                        <label htmlFor="birthday" className="mb-0 mt-3">birthday:</label>
                        <input type="datetime-local" placeholder="birthday" name="birthday" className="rounded border"/>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="secondary" type="reset">
                        Clear
                    </Button>
                    <Button variant="primary" onClick={props.handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}

export default Editform;