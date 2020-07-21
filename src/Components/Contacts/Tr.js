import React, { useState } from 'react';

function Tr (props) {

    const handleDelete= (id)=>{
        props.setContacts([...props.contacts.filter(item=> item.id != id)])
    }

    return (
            <>
                <tr className="tr">
                    <td>{props.item.id}</td>
                    <td>{props.item.name}</td>
                    <td>{props.item.lastName}</td>
                    <td>{props.item.phone}</td>
                    <td>{props.item.email}</td>
                    <td>{props.item.address}</td>
                    <td>{props.item.birthday}</td>
                    <td>{props.item.details}</td>
                    <td>
                        <button onClick={()=> handleDelete(props.item.id)} className="btn btn-danger mx-1"><i className='fa fa-trash'/></button>
                        <button onClick={props.handleShow} className="btn btn-primary mx-1"><i className='fa fa-edit'/></button>
                    </td>
                </tr>
            </>
    )
}

export default Tr;