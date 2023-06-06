import React from 'react';
import Card from '../UI/Card';
import Wrapper from '../UI/Wrapper';
import './ErrorModal.css';

const ErrorModal = (props) => {

    const btnClickHandler = () => {
        props.onBtnClick();
    }

    return (
        <Wrapper>
            <div className='backdrop' />
            <Card className='error-card'>
                <div className='heading-div'>
                    <h3>{props.msg.title}</h3>
                </div>
                <div>
                    <p>{props.msg.message}</p>
                </div>
                <button onClick={btnClickHandler}>Okay</button>
            </Card>
        </Wrapper>
    )
};

export default ErrorModal;