import React from 'react';
import './User.css';

const User = (props) => {
    return <div className='user-div'>
        <h4>{props.name}</h4>
        <p>{props.age}</p>
    </div>
};

export default User;