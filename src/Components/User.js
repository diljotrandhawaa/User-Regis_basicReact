import React from 'react';
import './User.css';

const User = (props) => {
    return <div className='user-div'>
        <h4>{props.name}</h4>
        <span>{props.age} years old</span>
    </div>
};

export default User;