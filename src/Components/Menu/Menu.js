import React from 'react';
import classes from './Menu.module.css';
import {scrollTo} from '../../Toolkit/functions'

export default function Menu(props) {
    const navlinkClasses = props.allowHover ? [classes.NavLink, classes.HoverEffect].join(' ') : classes.NavLink
    return (
        <nav >
            <span onClick={scrollTo('P1W').scroll} onAnimationEnd={props.timeMessage} className={navlinkClasses}>PROJECTS</span>
            <span onClick={scrollTo('A').scroll}   className={navlinkClasses}>ABOUT <span>ME</span></span>
            <span onClick={scrollTo('C').scroll} className={navlinkClasses}>CONTACT</span>
        </nav>
    )
}
