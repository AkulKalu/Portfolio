import React, {useRef} from 'react';
import classes from './PageTitle.module.css';
import {useScrolledTo} from '../../Hooks/useScrolledTo'

const styles = {
        text : {
            show : {
                opacity: '1',
                letterSpacing: '0',
            },
        },
        underlinie : {
            spread : {
                transform: 'scaleX(1)',
                transitionDelay: '0.5s',
            }
        }
}
export default function PageTitle(props) {
    const scrollAncor = useRef(null);
    const scrolledTo = useScrolledTo(scrollAncor, window.innerHeight / 2)

    const title =props.text.split('').map( (letter, i) => {
        return <span className={classes.TextLetter} key={`${props.project}letter${i}`} >{letter}</span>
    } )

    return (
        <div ref={scrollAncor} className={classes.Title}>
              <h1 style={scrolledTo ? styles.text.show : null}>{title}</h1>
              <div style={scrolledTo ? styles.underlinie.spread : null}></div>
        </div>
    )
}

