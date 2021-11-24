import React from 'react';

const TodoItem = ( {item}) => {
    return(
     <div className="blockStyle">
        <h3> {item.firstName} {item.lastName} </h3>
        <div> {item.phone} </div>
      <div>{item.gender === "male" ? "♂" :
            item.gender === "female" ? "♀" : ''}</div>
     </div>
    );
};

export default TodoItem;