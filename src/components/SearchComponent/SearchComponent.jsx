import React, { useState } from 'react'

function SearchComponent(props) {
    const [userName, setUsername] = useState("");

    const sendData = () => {
        props.setUsername(userName);
    }

    return (
        <>
            <input type="text" onChange={(e)=>{setUsername(e.target.value)}} />;
            <button onClick={sendData} >Click me</button>
        </>
    )
}

export default SearchComponent
