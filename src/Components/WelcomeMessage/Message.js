import React from 'react';
import classes from './Message.module.css';


export default function Message() {
  
    return (
        <div className={classes.Message}>
                <span  className={classes.Red}>HI! </span>
                <span>My name is</span>
                <span className={classes.Red}> Luka.</span><br/>
                <span>Let's create together!</span>
        </div>
    )
}
;