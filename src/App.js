import React, {useState} from 'react';
import TodoContact from "./components/TodoContact";


const initContacts = [{
  firstName: "Барней",
  lastName: "Стинсовський",
  phone: "+380956319521",
  gender: "male"
}, {
  firstName: "Робін",
  lastName: "Щербатська",
  phone: "+380931460123",
  gender: "female"
}, {
  firstName: "Анонімний",
  lastName: "Анонімус",
  phone: "+380666666666"
}, {
  firstName: "Лілія",
  lastName: "Олдровна",
  phone: "+380504691254",
  gender: "female"
}, {
  firstName: "Маршен",
  lastName: "Еріксонян",
  phone: "+380739432123",
  gender: "male"
}, {
  firstName: "Теодор",
  lastName: "Мотсбес",
  phone: "+380956319521",
  gender: "male"
}];
function App() {
  
  const [contacts, setContacts] = useState(initContacts);
 
  const handleSearchChange = event => {
      const value = event.target.value.toLowerCase();
      const filter = contacts.filter(user => {
        return user.lastName.toLowerCase().includes(value);
      });
      setContacts(filter);
  }
  
  return (
  <div className="App">
    <input type="text" onChange={handleSearchChange} />
    <TodoContact contacts={contacts} />
  </div>
  );
  
}

export default App;
