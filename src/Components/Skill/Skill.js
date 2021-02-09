import React from 'react';
import classes from './Skill.module.css';

const Skill = props => {
    const classNames = props.show ? [classes.Skill, classes[props.name]].join(' ') : classes.Skill;
    return (
        <div className={classNames}>
            <span>{props.name}</span>
        </div>
    )
}

export default Skill;