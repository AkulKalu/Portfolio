import React, {useState, useEffect} from 'react';
import classes from './ContactMessage.module.css';
import {animateOnScroll} from '../../Toolkit/functions';


const ContactMessage = props => {
    const [state, setState] = useState({
        scrolledTo: false
    });
    useEffect(() => {
        animateOnScroll('contactMessage', setState)
    }, [])

    const entered = state.scrolledTo ? {
        opacity: '1'
    } : null

    const message = (props.message === 1 ? <h2  id="contactMessage"  className={classes.ShowMesageC}>You have an awsome idea but you need developer skills? Reach me out.</h2> :
                    props.message === 2 ? <h2  onAnimationEnd={props.switch} className={classes.ShowMesage}>Thank you for showing interest, i'll respond as soon as possible.</h2> :
                    <h2 onAnimationEnd={props.switch}  className={classes.ShowMesage}><span>Oops!</span> Something went wrong. Try again</h2>)
    return (
        <div style={entered} className={classes.Message}>
        {message}
        </div>
    )
}

export default ContactMessage;