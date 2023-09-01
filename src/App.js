import { Fragment, useState } from "react";
import { nanoid } from 'nanoid'

import Form from "./Components/Form/Form";
import ContactList from "./Components/ContactList/ContactList";

export default function App(){
   const [contacts, setContacts] = useState([]);
   

   const handleAddContact =(name,number)=> {
        

        const contact = {
            name:name,
            number:number,
            id:nanoid(),
        }

        setContacts(state => [...state,contact])
   }

   return(
    
    <Fragment>
        <Form onAddContact={handleAddContact}/>
        {contacts.length > 0 && 
        <ContactList contacts={contacts}/>}
    </Fragment>
   
   )
}