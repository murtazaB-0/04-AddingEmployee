import React, { useState } from 'react';
import AddUser from './Components/Users/AddUser';
import UsersLists from './Components/Users/UsersLists';



function App() {
  const [usersList,setUsersList] = useState([])

  const addUserHandler = (uName,uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList,{name: uName, age: uAge, id: Date.now().toString()}]
    })
  }

  return (
    <div> 
      <AddUser onAddUser={addUserHandler} />
      <UsersLists usersInfo={usersList}/>
    </div>
  );
}

export default App;
