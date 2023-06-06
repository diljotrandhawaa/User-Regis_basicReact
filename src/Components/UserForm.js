import React, { useRef } from 'react';
import Card from './UI/Card';
import './UserForm.css';

const UserForm = (props) => {

    const enteredUserName = useRef();
    const enteredUserAge = useRef();

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const userInfo = {
            name: enteredUserName.current.value,
            age: enteredUserAge.current.value
        };
        props.sendUserInfo(userInfo);
        enteredUserName.current.value = '';
        enteredUserAge.current.value = '';
    };

    return (
        <Card className='user-form'>
            <form onSubmit={formSubmitHandler}>
                <label>Username</label>
                <input className='name-input' ref={enteredUserName}></input>
                <label>Age(Years)</label>
                <input className='age-input' ref={enteredUserAge}></input>
                <button>Add User</button>
            </form>
        </Card>
    )
};

export default UserForm;