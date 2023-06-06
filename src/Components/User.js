import React from 'react';
import Wrapper from './UI/Wrapper';
import './User.css';

const User = (props) => {
    return <Wrapper className='user-div'>
        <h4>{props.name}</h4>
        <span>{props.age} years old</span>
    </Wrapper>
};

export default User;