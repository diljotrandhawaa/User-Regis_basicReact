
import React, { useState } from 'react';
import './App.css';
import ErrorModal from './Components/ErrorComponents/ErrorModal';
import UserForm from './Components/UserForm';
import UsersList from './Components/UsersList';

let init_users = [];
let userId = 0;

function App() {

  const [users, addUsers] = useState(init_users);

  const [inputValid, setInputValid] = useState(true);
  const [errorMsg, setErrorMsg] = useState(); 

  function userInfoHandler (enteredUserInfo) {
    let userInfo = {
      id: userId,
      ...enteredUserInfo
    };
    
    if (userInfo.name.trim() === '' && userInfo.age.trim() === '') {
      setInputValid(false);
      setErrorMsg({
        title: 'Invalid Input', 
        message: 'Please enter a valid name and age (non-empty values).'
      });
      return;
    }

    if (userInfo.age <= 0) {
      setInputValid(false);
      setErrorMsg({
        title: 'Invalid Input',
        message: 'Please enter a valid age (greater than 0).'
      });
      return;
    }

    var userIsUnique = true;

    for (var user of users) {
      console.log(user);
      if (user.name.trim() === userInfo.name.trim() && user.age.trim() === userInfo.age.trim()) {
        setInputValid(false);
        setErrorMsg({
          title: 'Invalid Input',
          message: 'User already exists, please enter unique values.'
        })
        userIsUnique = false;
      }
    }

    if (!userIsUnique) {
      return;
    }

    addUsers((prev_users) => {
      return [...prev_users, userInfo];
    })
    userId++;
  }

  const errorBtnClickHandler = () => {
    setInputValid(true);
  };


  return (
    <div className='app'>
      {!inputValid &&  <ErrorModal msg={errorMsg}  onBtnClick={errorBtnClickHandler}/> }
      <UserForm sendUserInfo={userInfoHandler}></UserForm>
      <UsersList users={users} />
    </div>
  );
}

export default App;
