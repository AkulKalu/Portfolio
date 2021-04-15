import React from 'react';
import classes from './Additional.module.css';


const Additional = props => {
    const classNames =  [classes.Wrap, props.dock ? classes.Dock : classes.Welcome].join(' ') 
    return (
        <div className={classNames}>
            {/* <a href={require('../../Content/cv.pdf')} download >CV</a> */}
            <a href="mailto:krunaluka@gmail.com">
                <img  alt="Mail" src={require('../../Content/Images/mail.svg')}></img>
            </a>
        </div>
    )
}

export default Additional;