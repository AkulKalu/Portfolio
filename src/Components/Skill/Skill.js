import React, {useState} from 'react';
import classes from './Skill.module.css';

function randomizeGiggle() {
    let giggX = Math.floor( Math.random() * (81 - 0) + 0 );
    let giggY = 100 - giggX ;
    const randomNegative = (num) =>num * (Math.round(Math.random()) ? 1 : -1)
    
    return {
        x : `${randomNegative(giggX)}%`,
        y : `${randomNegative(giggY)}%`
    }
}

export default function Skill(props) {
    const [giggle, setGiggle] = useState( randomizeGiggle() )
    const classNames = props.show ? [classes.Skill, classes[props.name]].join(' ') : classes.Skill;
     
    return (
        <div onMouseLeave = {() => setGiggle(randomizeGiggle())} style={{
            '--giggX' : giggle.x,
            '--giggY' : giggle.y
        } } className={classNames}>
            <span>{props.name}</span>
        </div>
    )
}

