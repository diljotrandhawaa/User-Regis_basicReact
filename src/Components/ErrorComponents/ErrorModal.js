import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../UI/Card';
import Wrapper from '../UI/Wrapper';
import './ErrorModal.css';

const Backdrop = (props) => {
    return <div className='backdrop' onClick={props.onBackdropClick} />
};

const Overlay = (props) => {
    return (
        <Card className='error-card'>
            <div className='heading-div'>
                <h3>{props.title}</h3>
            </div>
            <div>
                <p>{props.message}</p>
            </div>
            <button onClick={props.onOkayBtnClick}>Okay</button>
        </Card>
    )
};

const ErrorModal = (props) => {

    const btnClickHandler = () => {
        props.onBtnClick();
    }

    return (
        <Wrapper>
            {ReactDOM.createPortal(
                <Backdrop onBackdropClick={btnClickHandler} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <Overlay title={props.msg.title} message={props.msg.message} onOkayBtnClick={btnClickHandler} />,
                document.getElementById('overlay-root')
            )}
        </Wrapper>
    )
};

export default ErrorModal;