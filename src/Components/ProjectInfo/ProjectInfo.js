import React from 'react';
import classes from './ProjectInfo.module.css';
import {projectDescription} from '../../Content/Text/text';


const ProjectInfo = props => {
    const data = projectDescription[props.project];
    
  
    const showText = props.inView ? {
        opacity: '1'
    } : null;

    const showButtons = props.inView ? {
        transform: 'scaleX(1)'
    } : null;

    const title =data.title.toLocaleUpperCase().split('').map( (letter, i) => {
        return <span className={classes.TextLetter} key={`${props.project}letter${i}`} >{letter}</span>
    } )
   
    return(
        <div style={showText}  className={classes.Info}>
            <h2>{title}</h2>
            <div className={classes.Text}>
                <p>{data.info}</p>
                <h3>{data.tech}</h3>
            </div>
            <div id={props.project +'Inf'}>
                <a style={showButtons} className={classes.Link} href={data.siteLink}><span>ONLINE</span></a>
                <a style={showButtons} className={classes.Link} href={data.gitHubLink}><span>CODE</span></a>
            </div>
        </div>
    )
}

export default ProjectInfo;
