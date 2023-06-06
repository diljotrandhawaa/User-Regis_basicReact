import React from 'react';
import Card from './UI/Card';
import './User.css';

const User = (props) => {
    return <Card className='user-div'>
        <h4>{props.name}</h4>
        <span>{props.age} years old</span>
    </Card>
};

export default User;