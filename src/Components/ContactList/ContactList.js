import React from "react";

export default function ContactList({contacts}){
    return(
        <ul>
            {contacts.map(({name,number,id}) =>(
                <li key={id}>
                    <p>Name: {name}</p>
                    <p>Number: {number}</p>
                </li>
            ))}
        </ul>
    )
}