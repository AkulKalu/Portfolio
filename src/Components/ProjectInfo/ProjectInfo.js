import React, {useEffect, useState} from 'react';
import classes from './ProjectInfo.module.css';
import {animateOnScroll} from '../../Toolkit/functions';



import {projectDescription} from '../../Content/Text/text';


const ProjectInfo = props => {
    const data = projectDescription[props.project];
    const [state, setState] = useState({
        scrolledTo: false
    })
    useEffect(() => {
        animateOnScroll(props.project +'Inf', setState, window.innerHeight *1.1)
    },[]);
  
    const showText = state.scrolledTo ? {
        opacity: '1'
    } : null;

    const showButtons = state.scrolledTo ? {
        transform: 'scaleX(1)'
    } : null;

    const title =data.title.toLocaleUpperCase().split('').map( (letter, i) => {
        return <span className={classes.TextLetter} key={`${props.project}letter${i}`} >{letter}</span>
    } )
   
    return(
        <div style={showText}  className={classes.Info}>
                <h2>{title}</h2>
            <p>{data.info}</p>
            <h3>{data.tech}</h3>
            <div id={props.project +'Inf'}>
                <a style={showButtons} className={classes.Link} href={data.siteLink}><span>ONLINE</span></a>
                <a style={showButtons} className={classes.Link} href={data.gitHubLink}><span>CODE</span></a>
            </div>
        </div>
    )
}

export default ProjectInfo;
