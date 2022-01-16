import React, { useState } from 'react';
import "./SearchComponent.css";

function SearchComponent(props) {
    const [userName, setUsername] = useState("");

    const sendData = () => {
        props.setUsername(userName);
    }
    return (
        <>
            <div className='search_div d-flex justify-content-center'>
                <input className='search_bar' placeholder='Enter Username' type="text" onChange={(e) => { setUsername(e.target.value) }} />  
                <button className='btn btn-light search_button' onClick={sendData}>Search</button>
            </div>
        </>
    )
}
export default SearchComponent
