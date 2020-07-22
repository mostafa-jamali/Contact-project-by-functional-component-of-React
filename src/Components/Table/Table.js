import React, { useState, useEffect } from 'react';
import Tr from '../Contacts/Tr';
import Editform from '../Edit/Editform';
import '../Table/table.css';

function Table (props) {

    const [contacts, setContacts] = useState([
        {id:1, name:"ali", lastName:"komijani", phone:"09014356218", email:"ali@gmail.com", address:"komijan", birthday:"1375", details:"-", action:""},
        {id:2, name:"mohammad", lastName:"khorrami", phone:"09114356218", email:"mohammad@gmail.com", address:"arak", birthday:"1346", details:"-", action:""},
        {id:3, name:"reza", lastName:"hatami", phone:"09124356218", email:"reza@gmail.com", address:"tehran", birthday:"1345", details:"-", action:""},
        {id:4, name:"mahdi", lastName:"sadeghi", phone:"09134356218", email:"sadeghi@gmail.com", address:"esfahan", birthday:"1388", details:"-", action:""},
        {id:5, name:"hasan", lastName:"mohammadi", phone:"09224356218", email:"hasan@gmail.com", address:"kerman", birthday:"1366", details:"-", action:""},
        {id:6, name:"amir", lastName:"sharifi", phone:"09354356218", email:"sharifi@gmail.com", address:"azna", birthday:"1359", details:"-", action:""},
        {id:7, name:"amirali", lastName:"ansari", phone:"09356356218", email:"ansari@gmail.com", address:"karaj", birthday:"1374", details:"-", action:""},
        {id:8, name:"mehran", lastName:"mansoori", phone:"09164356218", email:"mehran@gmail.com", address:"shiraz", birthday:"1375", details:"-", action:""},

    ]);
    const [search, setSearch]= useState("");

    const chengeHandler= (e)=>{
        setSearch(e.target.value)
    }
    let newTr = contacts.filter(item=> (
        item.name.toLowerCase().startsWith(search.toLowerCase()) ||
        item.phone.startsWith(search)
    ))

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)

    

    return (
        <>
            <div className="tableContainer">
                <div className="col-12 row justify-content-around pl-5">
                    <div className="col-6 row align-items-center justify-content-center bg-info rounded-lg py-2 my-2 ml-5">
                        <label className="mb-0">search:</label>
                        <input className="rounded border-0 mx-2 input" name={'search'} onChange={chengeHandler} value={search} placeholder="       search contact"/>
                        <i className='fa fa-search'/>
                    </div>
                    <button className="btn btn-info my-3" onClick={handleShow}><i className='fa fa-plus'/></button>
                    <Editform contacts={contacts} setContacts={setContacts} show={show} setShow={setShow} handleShow={handleShow} handleClose={handleClose}/>
                </div>
                <table className="table table-responsive col-12 table-striped table-hover border">
                    <thead className="thead-dark">
                        <tr>
                            <th>#</th>
                            <th>name</th>
                            <th>last name</th>
                            <th>phone</th>
                            <th>email</th>
                            <th>address</th>
                            <th>birthday</th>
                            <th>details</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {newTr.map((item) =>(
                            <Tr key={item.id} item={item} contacts={contacts} setContacts={setContacts} handleShow={handleShow}/>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
    
}


export default Table;