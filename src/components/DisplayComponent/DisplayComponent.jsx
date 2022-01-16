import { useEffect } from "react";
import React from 'react';
import { useState } from "react";

function DisplayComponent(props) {


    useEffect(() => {
        console.log("huihui i ran")

    }, [props.userName]);
    

    return (
        <>
        <div>
            <h1>
                {props.userName}
            </h1>

        </div>


        </>
    )
}

export default DisplayComponent
