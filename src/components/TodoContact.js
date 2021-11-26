import React from 'react';
import TodoItem from "./TodoItem";
import { initContacts } from '../herpers/constants';

const TodoContact = ({searchValue}) => {
    const filteredContacts = initContacts.filter(contact => (
        contact.firstName.toLowerCase().includes(searchValue) || 
        contact.lastName.toLowerCase().includes(searchValue) ||
        contact.phone.includes(searchValue)
    ))
    return(
       <div>
           {filteredContacts.map((contact,i)=>{
                return  <TodoItem item={contact} key={contact.id} />
            })
           }
       </div>
    )
}
export default TodoContact;