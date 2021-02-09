import React from 'react';
import classes from './Burger.module.css';


const Burger = props => {
    const burgerClasses = props.open ? [classes.Burger, classes.Open].join(' ') : classes.Burger;
    const lineClasses = props.open ? [classes.Line, classes.LineOpen].join(' ') : classes.Line;
    return (
       <div onClick={props.click} className={burgerClasses}>
           <div className={lineClasses}></div>
       </div>
    )
}

export default Burger;