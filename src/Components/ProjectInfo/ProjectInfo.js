import React from 'react';
import classes from './ProjectInfo.module.css';
import {projectDescription} from '../../Content/Text/text';


const ProjectInfo = props => {
    const data = projectDescription[props.project];
    const title =data.title.toLocaleUpperCase().split('').map( (letter, i) => {
        return <span className={classes.TextLetter} key={`${props.project}letter${i}`} >{letter}</span>
    } )
   
    return props.inView ? 
            <div className={[classes.Info, classes.Shown].join(' ')}>
                <h2>{title}</h2>
                <div className={classes.Text}>
                    <p>{data.info}</p>
                    <h3>{data.tech}</h3>
                </div>
                <div id={props.project +'Inf'}>
                    <a  className={classes.Link} href={data.siteLink}><span>ONLINE</span></a>
                    <a  className={classes.Link} href={data.gitHubLink}><span>CODE</span></a>
                </div>
             </div> : null
        
       
    
}

export default ProjectInfo;
