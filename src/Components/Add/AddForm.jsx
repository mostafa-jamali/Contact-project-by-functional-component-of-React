import React, { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import Button from 'react-bootstrap/Button';
import { propTypes } from "react-bootstrap/esm/Image";


function AddForm({ contacts, setContacts, show, handleClose }) {

    const [newObj, setNewObj] = useState({
        name: "",
        lastName: "",
        phone: "",
        email: "",
    })
    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewObj({ ...newObj, [name]: value });
    }
    const handleAdd = (obj) => {
        let id = contacts.reduce((initial, item) => 1 + Math.max(item.id), 0);
        (obj.name.length > 0) && (obj.lastName.length > 0) && (obj.phone.length > 0) && (obj.email.length > 0)
            && setContacts([...contacts, { ...obj, id }]);
    }
    const handleClear = () => {
        setNewObj({
            name: "",
            lastName: "",
            phone: "",
            email: "",
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        handleAdd(newObj);
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit} className="d-flex flex-column">

                        <label htmlFor="name" className="mb-0 mt-0">name:</label>
                        <input type="text" placeholder="Enter name" name="name" value={newObj.name} onChange={handleChange} className="rounded border" />

                        <label htmlFor="latName" className="mb-0 mt-2">latName:</label>
                        <input type="text" placeholder="Enter lastName" name="lastName" value={newObj.lastName} onChange={handleChange} className="rounded border" />

                        <label htmlFor="phone" className="mb-0 mt-2">phone:</label>
                        <input type="phone" placeholder="Enter phone" name="phone" value={newObj.phone} onChange={handleChange} className="rounded border" />

                        <label htmlFor="email" className="mb-0 mt-2">email:</label>
                        <input type="email" placeholder="Enter email" name="email" value={newObj.email} onChange={handleChange} className="rounded border" />

                        <Modal.Footer>
                            <Button variant="danger" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="secondary" type="reset" onClick={handleClear}>
                                Clear
                            </Button>
                            <Button variant="success" type="submit">
                                Save
                            </Button>
                        </Modal.Footer>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );

}

export default AddForm;