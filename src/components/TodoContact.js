import React from 'react';
import TodoItem from "./TodoItem";

const TodoContact = ({contacts}) =>{
    return(
       <div>
           {contacts.map((contact,i)=>{
                return  <TodoItem item={contact} key={contact.id} />
            })
           }
       </div>
    )
}
export default TodoContact;