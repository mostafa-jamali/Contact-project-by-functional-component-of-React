import React, { useState } from 'react';
import EditForm from '../Edit/EdirForm'

function Tr ({contacts, setContacts, item}) {

    const handleDelete= (id)=>{
        setContacts([...contacts.filter(item=> item.id != id)])
    }
    const [show, setShow] = useState(false);

    const handleCloseEdit = () => setShow(false);
    const handleShowEdit = () => {
        setShow(true);
        // let id = contacts.filter((item)=> item.id == id);
        // handleEdit(id)
    };

    return (
            <>
                <tr className="tr">
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.lastName}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td>
                        <button onClick={()=> handleDelete(item.id)} className="btn btn-danger mx-1"><i className='fa fa-trash'/></button>
                        <button onClick={handleShowEdit} className="btn btn-primary mx-1"><i className='fa fa-edit'/></button>
                        <EditForm contacts={contacts} setContacts={setContacts} show={show} handleShowEdit={handleShowEdit} handleCloseEdit={handleCloseEdit}/>
                    </td>
                </tr>
            </>
    )
}

export default Tr;