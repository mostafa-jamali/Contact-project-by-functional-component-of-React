import React, { useState } from 'react';
import EditForm from '../Edit/EditForm'

function Tr({ contacts, setContacts, item }) {

    const [show, setShow] = useState(false);
    const [editObj, setEditObj] = useState({
        name: "",
        lastName: "",
        phone: "",
        email: ""
    })
    const handleDelete = (id) => {
        setContacts([...contacts.filter(item => item.id != id)])
    }

    const handleCloseEdit = () => setShow(false);

    const handleShowEdit = () => {
        setShow(true);
        handleEdit(item.id);
    };
    const handleEdit = (id) => {
        const trContact = contacts.filter((contact) => contact.id == id);
        (trContact[0].name.length > 0) && (trContact[0].lastName.length > 0) && (trContact[0].phone.length > 0) && (trContact[0].email.length > 0)
        && setEditObj(trContact[0]);
    }
    
    return (
        <>
            <tr className="tr">
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.lastName}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>
                    <button onClick={() => handleDelete(item.id)} className="btn btn-danger mx-1"><i className='fa fa-trash' /></button>
                    <button onClick={() => handleShowEdit(item.id)} className="btn btn-primary mx-1"><i className='fa fa-edit' /></button>
                    <EditForm
                        contacts={contacts}
                        setContacts={setContacts}
                        show={show}
                        handleCloseEdit={handleCloseEdit}
                        editObj={editObj}
                        setEditObj={setEditObj}
                        />
                </td>
            </tr>
        </>
    )
}

export default Tr;