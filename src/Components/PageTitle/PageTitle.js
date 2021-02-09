import React, {useState, useEffect} from 'react';
import classes from './PageTitle.module.css';
import {animateOnScroll} from '../../Toolkit/functions'


const PageTitle = props => {
    const [state, setState] = useState({
        scrolledTo : false
    });
    useEffect(() => {
        animateOnScroll(props.text + 'id', setState)
    }, [])

    const showTitle = {
        opacity: '1',
        letterSpacing: '0',
    }
    const showUnderlinie = {
        transform: 'scaleX(1)',
        transitionDelay: '1s',
    }

    const title =props.text.split('').map( (letter, i) => {
        return <span className={classes.TextLetter} key={`${props.project}letter${i}`} >{letter}</span>
    } )

    return (
        <div id={props.text + 'id'} className={classes.Title}>
              <h1 style={state.scrolledTo ? showTitle : null}>{title}</h1>
              <div style={state.scrolledTo ? showUnderlinie : null}></div>
        </div>
    )
}

export default PageTitle;