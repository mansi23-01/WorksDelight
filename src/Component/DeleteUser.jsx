import axios from "axios"
import React from "react"

export default function DeleteUser(){

    function handleDelete(){
        axios.delete('https://dummyapi.io/data/v1/user/64de960d8b375457bff5e83a', {header : {"app-id" : "64de6b0b2e54a7df505611ee"}})
        .then(res => console.log(res))
        .catch(err => {
            console.log(err);
        })
    }




    return(
        <div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}