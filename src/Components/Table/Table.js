import React, { useState, useEffect } from 'react';
import Tr from '../Contacts/Tr';
import Editform from '../Add/AddForm';
import '../Table/table.css';
import AddForm from '../Add/AddForm';

function Table () {

    const [contacts, setContacts] = useState([
        {id:1, name:"ali", lastName:"komijani", phone:"09014356218", email:"ali@gmail.com", action:""},
        {id:2, name:"mohammad", lastName:"khorrami", phone:"09114356218", email:"mohammad@gmail.com", action:""},
        {id:3, name:"reza", lastName:"hatami", phone:"09124356218", email:"reza@gmail.com", action:""},
        {id:4, name:"mahdi", lastName:"sadeghi", phone:"09134356218", email:"sadeghi@gmail.com", action:""},
        {id:5, name:"hasan", lastName:"mohammadi", phone:"09224356218", email:"hasan@gmail.com", action:""},
        {id:6, name:"amir", lastName:"sharifi", phone:"09354356218", email:"sharifi@gmail.com", action:""},
        {id:7, name:"amirali", lastName:"ansari", phone:"09356356218", email:"ansari@gmail.com", action:""},
        {id:8, name:"mehran", lastName:"mansoori", phone:"09164356218", email:"mehran@gmail.com", action:""},

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
            <div className="tableContainer table-responsive">
                <div className="col-12 row justify-content-around pl-5">
                    <div className="col-10 col-md-8 col-lg-6 mx-auto row align-items-center justify-content-center bg-info rounded-lg py-2 my-2 ml-5">
                        <label className="mb-0 col-6 col-sm-8 col-lg-3">search:</label>
                        <input className="rounded border-0  col-12 col-sm-8 col-lg-6" name={'search'} onChange={chengeHandler} value={search} placeholder="search contact"/>
                        <button className="btn btn-light py-1 m-1 col-3 col-sm-2 col-lg-2"><i className='fa fa-search'/></button>
                    </div>
                    <button className="btn btn-info my-3" onClick={handleShow}><i className='fa fa-plus'/></button>
                    <AddForm contacts={contacts} setContacts={setContacts} show={show} setShow={setShow} handleShow={handleShow} handleClose={handleClose}/>
                </div>
                <table className="table col-12 table-striped table-hover border">
                    <thead className="thead-dark">
                        <tr>
                            <th>#</th>
                            <th>name</th>
                            <th>last name</th>
                            <th>phone</th>
                            <th>email</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {newTr.map((item) =>(
                            <Tr key={item.id} item={item} contacts={contacts} setContacts={setContacts} />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
    
}


export default Table;