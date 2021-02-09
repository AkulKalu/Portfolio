import React from 'react';
import classes from './Menu.module.css';


const Menu = props => {
    const  scrollToHandler = elId => {
        document.getElementById(elId).scrollIntoView();
    }
    const navlinkClasses = props.allowHover ? [classes.NavLink, classes.HoverEffect].join(' ') : classes.NavLink

    return (
        <nav >
            <span onClick={() => scrollToHandler('projects')} onAnimationEnd={props.timeMessage} className={navlinkClasses}>PROJECTS</span>
            <span onClick={() => scrollToHandler('A')}   className={navlinkClasses}>ABOUT <span>ME</span></span>
            <span onClick={() => scrollToHandler('C')} className={navlinkClasses}>CONTACT</span>
        </nav>
    )
}

export default Menu;