import React from 'react';
import AddForm from '../Add/AddForm';

function Search({search, chengeHandler, handleShow}) {

    return (
        <div className="col-12 row justify-content-around">
            <div className="col-10 col-md-8 col-lg-6 mx-auto row align-items-center justify-content-center bg-info rounded-lg py-2 my-2 ml-5">
                <input className="rounded border-0  col-12 col-sm-8 col-lg-6" name={'search'} onChange={chengeHandler} value={search} placeholder="search contact" />
                <i className='fa fa-search m-1' style={{color: "white"}}/>
            </div>
            <button className="btn btn-info my-3" onClick={handleShow}><i className='fa fa-plus' /></button>
        </div>
    )
}

export default Search;
