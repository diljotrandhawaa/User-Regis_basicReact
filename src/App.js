
import React, { useState } from 'react';
import './App.css';
import UserForm from './Components/UserForm';
import UsersList from './Components/UsersList';

let init_users = [];

function App() {

  var [users, addUsers] = useState(init_users);

  const userInfoHandler = (enteredUserInfo) => {
    const userInfo = {
      // id: (users.length + 1),
      ...enteredUserInfo
    };
    addUsers((prev_users) => {
      return [...prev_users, userInfo];
    })
    console.log(users);
  }

  return (
    <div className='app'>
      <UserForm sendUserInfo={userInfoHandler}></UserForm>
      <UsersList users={users} />
    </div>
  );
}

export default App;
