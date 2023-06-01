import React, { useState } from 'react';
import Card from './UI/Card';
import './UserForm.css';

const UserForm = (props) => {

    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');

    const nameChangeHandler = (event) => {
        setUserName(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setUserAge(event.target.value)
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const userInfo = {
            name: userName,
            age: userAge
        };
        props.sendUserInfo(userInfo);
    };

    return (
        <Card className='user-form'>
            <form onSubmit={formSubmitHandler}>
                <label>Username</label>
                <input className='name-input' onChange={nameChangeHandler}></input>
                <label>Age(Years)</label>
                <input className='age-input' onChange={ageChangeHandler}></input>
                <button>Add User</button>
            </form>
        </Card>
    )
};

export default UserForm;