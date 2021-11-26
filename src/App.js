import React, {useState} from 'react';
import TodoContact from "./components/TodoContact";

function App() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = event => {
        setSearchValue(event.target.value.toLowerCase())
  }
  
  return (
  <div className="App">
    <input type="text" onChange={handleSearchChange} />
    <TodoContact searchValue={searchValue}  />
  </div>
  );
  
}

export default App;
