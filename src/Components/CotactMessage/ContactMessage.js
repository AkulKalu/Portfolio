import React from 'react';
import classes from './ContactMessage.module.css';

const styles = {
    message : {
        display : {
            opacity: '1'
        }
    }
}

export default function ContactMessage(props) {
    const messageContent = {
        1 : <h2  id="contactMessage"  className={classes.ShowMesageC}>You have an awsome idea but you need developer skills? Reach me out.</h2>,
        2: <h2  onAnimationEnd={props.switch} className={classes.ShowMesage}>Thank you for showing interest, i'll respond as soon as possible.</h2>,
        3 : <h2 onAnimationEnd={props.switch}  className={classes.ShowMesage}>Oops! Something went wrong. Try again</h2>,
    }
    return (
        <div style={props.display ? styles.message.display : null} className={classes.Message}>
            {messageContent[props.message]}
        </div>
    )
}

